import crypto from "crypto";

const SECRET_KEY = process.env.BOT_PROTECTION_SECRET || "contact_form_security_salt_key_default";

export interface BotChallenge {
  question: string;
  token: string;
}

/**
 * Gera um desafio matemático simples (ex: "7 + 5") com token criptografado/assinado.
 */
export function generateChallenge(lang: string = "pt"): BotChallenge {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const answer = num1 + num2;
  const timestamp = Date.now();

  const payload = `${answer}:${timestamp}`;
  const hmac = crypto.createHmac("sha256", SECRET_KEY).update(payload).digest("hex");
  const token = Buffer.from(`${payload}:${hmac}`).toString("base64url");

  let question = `Quanto é ${num1} + ${num2}?`;
  if (lang === "en") {
    question = `What is ${num1} + ${num2}?`;
  } else if (lang === "cn" || lang === "zh") {
    question = `${num1} + ${num2} 等于多少？`;
  }

  return {
    question,
    token,
  };
}

/**
 * Valida a resposta do desafio anti-bot.
 * Rejeita se:
 * - O token for inválido ou adulterado
 * - A resposta matemática estiver incorreta
 * - O envio tiver ocorrido em menos de 2 segundos (típico de scripts automatizados)
 * - O token tiver expirado (mais de 30 minutos)
 */
export function verifyChallenge(token: string, userAnswer: string | number): { isValid: boolean; error?: string } {
  try {
    if (!token || userAnswer === undefined || userAnswer === null || userAnswer === "") {
      return { isValid: false, error: "Resposta do desafio de segurança ausente." };
    }

    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const [answerStr, timestampStr, hmac] = decoded.split(":");

    if (!answerStr || !timestampStr || !hmac) {
      return { isValid: false, error: "Token de segurança malformatado." };
    }

    const payload = `${answerStr}:${timestampStr}`;
    const expectedHmac = crypto.createHmac("sha256", SECRET_KEY).update(payload).digest("hex");

    if (hmac !== expectedHmac) {
      return { isValid: false, error: "Token de segurança inválido." };
    }

    const numericUserAnswer = parseInt(String(userAnswer).trim(), 10);
    const expectedAnswer = parseInt(answerStr, 10);

    if (isNaN(numericUserAnswer) || numericUserAnswer !== expectedAnswer) {
      return { isValid: false, error: "Resposta de validação anti-bot incorreta." };
    }

    const elapsedMs = Date.now() - parseInt(timestampStr, 10);
    
    // Submissão muito rápida (< 2 segundos) é forte indicativo de bot
    if (elapsedMs < 2000) {
      return { isValid: false, error: "Envio muito rápido. Por favor, aguarde alguns segundos." };
    }

    // Token expira em 30 minutos
    if (elapsedMs > 30 * 60 * 1000) {
      return { isValid: false, error: "O desafio de segurança expirou. Por favor, tente novamente." };
    }

    return { isValid: true };
  } catch (error) {
    console.error("Erro ao validar desafio anti-bot:", error);
    return { isValid: false, error: "Erro ao validar o teste anti-bot." };
  }
}
