import { NextResponse } from "next/server";
import { generateChallenge } from "@/src/lib/bot-protection";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
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
