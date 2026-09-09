import { NextResponse } from "next/server";
import { generateChallenge } from "@/src/lib/bot-protection";
import { checkRateLimit, CHALLENGE_RATE_LIMIT, getClientIp } from "@/src/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // Rate Limiting por IP
    const clientIp = getClientIp(request);
    const rateCheck = checkRateLimit(`challenge:${clientIp}`, CHALLENGE_RATE_LIMIT);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: `Muitas tentativas. Tente novamente em ${rateCheck.retryAfterSeconds} segundos.` },
        {
          status: 429,
          headers: { "Retry-After": String(rateCheck.retryAfterSeconds) },
        }
      );
    }

    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "pt";
    const challenge = generateChallenge(lang);
    return NextResponse.json(challenge, { status: 200 });
  } catch (error) {
    console.error("Erro ao gerar desafio anti-bot:", error);
    return NextResponse.json(
      { error: "Não foi possível gerar a pergunta de segurança." },
      { status: 500 }
    );
  }
}
