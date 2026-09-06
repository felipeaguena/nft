import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercepta estritamente a rota raiz "/"
  if (pathname === "/") {
    // 1. Verifica se há preferência salva em cookie
    const cookieLang = request.cookies.get("preferred_language")?.value;
    if (cookieLang === "pt" || cookieLang === "en" || cookieLang === "cn") {
      return NextResponse.redirect(new URL(`/${cookieLang}`, request.url), 307);
    }

    // 2. Detecta idioma com base no cabeçalho Accept-Language do navegador
    const acceptLanguage = (request.headers.get("accept-language") || "").toLowerCase();

    let targetLang = "en"; // Padrão internacional (x-default)
    if (acceptLanguage.includes("pt")) {
      targetLang = "pt";
    } else if (acceptLanguage.includes("zh") || acceptLanguage.includes("cn")) {
      targetLang = "cn";
    }

    return NextResponse.redirect(new URL(`/${targetLang}`, request.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  // Executa o proxy apenas na raiz "/"
  matcher: ["/"],
};
