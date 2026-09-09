/**
 * Rate Limiter em memória para APIs do Next.js.
 *
 * Armazena timestamps de requisições por IP em um Map.
 * Limpa entradas expiradas automaticamente a cada ciclo de verificação.
 *
 * Nota: Em ambientes serverless com múltiplas instâncias (ex: Vercel com muitas
 * funções), o rate limiting em memória NÃO é compartilhado entre instâncias.
 * Para cenários de alta escala, considere Redis ou Upstash Rate Limit.
 * Para um site institucional como este, a abordagem em memória é suficiente.
 */

interface RateLimitConfig {
  /** Número máximo de requisições permitidas dentro da janela */
  maxRequests: number;
  /** Janela de tempo em milissegundos */
  windowMs: number;
}

interface RateLimitResult {
  allowed: boolean;
  /** Segundos restantes até poder tentar novamente (só presente se bloqueado) */
  retryAfterSeconds?: number;
  /** Quantas requisições restam na janela atual */
  remaining: number;
}

// Armazena timestamps de requisições por chave (IP)
const requestLog = new Map<string, number[]>();

// Limpeza periódica para evitar vazamento de memória
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos
let lastCleanup = Date.now();

function cleanupExpiredEntries(windowMs: number): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  lastCleanup = now;
  const cutoff = now - windowMs;

  for (const [key, timestamps] of requestLog.entries()) {
    const valid = timestamps.filter((t) => t > cutoff);
    if (valid.length === 0) {
      requestLog.delete(key);
    } else {
      requestLog.set(key, valid);
    }
  }
}

/**
 * Verifica se a requisição de um determinado IP deve ser permitida.
 *
 * @param identifier - Identificador único (geralmente o IP do cliente)
 * @param config - Configuração de limite e janela de tempo
 * @returns Resultado com `allowed`, `remaining` e opcionalmente `retryAfterSeconds`
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const { maxRequests, windowMs } = config;
  const now = Date.now();
  const cutoff = now - windowMs;

  // Limpa entradas expiradas periodicamente
  cleanupExpiredEntries(windowMs);

  // Obtém e filtra os timestamps dentro da janela atual
  const timestamps = (requestLog.get(identifier) || []).filter(
    (t) => t > cutoff
  );

  if (timestamps.length >= maxRequests) {
    // Bloqueado: calcula quanto tempo falta para o timestamp mais antigo expirar
    const oldestInWindow = timestamps[0];
    const retryAfterMs = oldestInWindow + windowMs - now;
    const retryAfterSeconds = Math.ceil(retryAfterMs / 1000);

    return {
      allowed: false,
      retryAfterSeconds: Math.max(retryAfterSeconds, 1),
      remaining: 0,
    };
  }

  // Permitido: registra o timestamp atual
  timestamps.push(now);
  requestLog.set(identifier, timestamps);

  return {
    allowed: true,
    remaining: maxRequests - timestamps.length,
  };
}

// ─── Configurações pré-definidas para reutilização ───────────────────────────

/** Rate limit para o endpoint de envio de contato: 5 por hora */
export const CONTACT_RATE_LIMIT: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 hora
};

/** Rate limit para o endpoint de geração de challenge: 15 por hora */
export const CHALLENGE_RATE_LIMIT: RateLimitConfig = {
  maxRequests: 15,
  windowMs: 60 * 60 * 1000, // 1 hora
};

/**
 * Extrai o IP do cliente a partir de um Request do Next.js.
 * Prioriza `x-forwarded-for` (quando atrás de proxy/load balancer como Vercel).
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for pode conter múltiplos IPs separados por vírgula
    return forwarded.split(",")[0].trim();
  }

  // Fallback para conexões diretas
  return "unknown";
}
