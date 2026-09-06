import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Intercepta estritamente a rota raiz "/"
  if (pathname === "/") {
    // Verifica se há preferência salva em cookie
    const cookieLang = request.cookies.get("preferred_language")?.value;
    if (cookieLang === "pt" || cookieLang === "en" || cookieLang === "cn") {
      return NextResponse.redirect(new URL(`/${cookieLang}`, request.url), 307);
    }

    // Detecta idioma com base no cabeçalho Accept-Language do navegador
    const acceptLanguage = (request.headers.get("accept-language") || "").toLowerCase();

    let targetLang = "en"; // Padrão internacional (x-default)
    if (acceptLanguage.includes("pt")) {
      targetLang = "pt";
    } else if (acceptLanguage.includes("zh") || acceptLanguage.includes("cn")) {
      targetLang = "cn";
    }

    return NextResponse.redirect(new URL(`/${targetLang}`, request.url), 307);
  }

  // 2. Redirecionamento de compatibilidade para URLs legadas em chinês com sufixo "-cn"
  if (pathname.startsWith("/cn/")) {
    const legacyRedirectMap: Record<string, string> = {
      "/cn/about-cn": "/cn/about",
      "/cn/contact-cn": "/cn/contact",
      "/cn/health-cn": "/cn/health",
      "/cn/privacy-cn": "/cn/privacy",
      "/cn/solutions-cn": "/cn/solutions",
      "/cn/solutions-cn/fairs-and-events-cn": "/cn/solutions/fairs-and-events",
      "/cn/solutions-cn/special-customs-regimes-cn": "/cn/solutions/special-customs-regimes",
      "/cn/solutions-cn/customized-projects-cn": "/cn/solutions/customized-projects",
      "/cn/solutions-cn/artworks-logistics-cn": "/cn/solutions/artworks-logistics",
    };

    const cleanPath = pathname.replace(/\/+$/, "");
    if (legacyRedirectMap[cleanPath]) {
      return NextResponse.redirect(new URL(legacyRedirectMap[cleanPath], request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Executa o proxy na raiz "/" e nas subrotas "/cn/:path*"
  matcher: ["/", "/cn/:path*"],
};

