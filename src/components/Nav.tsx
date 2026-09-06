"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import nav from "../../db/nav.json";

interface Servico {
  nome: string;
  rota: string;
}

interface NavSection {
  rota_principal?: string;
  main_route?: string;
  servicos?: Servico[];
  services?: Servico[];
}

type LanguageCode = "en" | "pt" | "cn";

interface LanguageOption {
  code: LanguageCode;
  label: string;
  icon: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", icon: "/idiomas/usa.png" },
  { code: "pt", label: "Português", icon: "/idiomas/brazil.png" },
  { code: "cn", label: "中文", icon: "/idiomas/china.png" },
];

const ROUTE_MAP: { pt: string; en: string; cn: string }[] = [
  { pt: "/pt", en: "/en", cn: "/cn" },
  { pt: "/pt/sobre", en: "/en/about", cn: "/cn/about" },
  { pt: "/pt/contato", en: "/en/contact", cn: "/cn/contact" },
  { pt: "/pt/saude", en: "/en/health", cn: "/cn/health" },
  { pt: "/pt/privacidade", en: "/en/privacy", cn: "/cn/privacy" },
  { pt: "/pt/solucoes", en: "/en/solutions", cn: "/cn/solutions" },
  {
    pt: "/pt/solucoes/feiras-e-eventos",
    en: "/en/solutions/fairs-and-events",
    cn: "/cn/solutions/fairs-and-events",
  },
  {
    pt: "/pt/solucoes/regimes-especiais",
    en: "/en/solutions/special-customs-regimes",
    cn: "/cn/solutions/special-customs-regimes",
  },
  {
    pt: "/pt/solucoes/projetos-customizados",
    en: "/en/solutions/customized-projects",
    cn: "/cn/solutions/customized-projects",
  },
  {
    pt: "/pt/solucoes/logistica-obras-arte",
    en: "/en/solutions/artworks-logistics",
    cn: "/cn/solutions/artworks-logistics",
  },
];

function updateHtmlLang(language: LanguageCode) {
  if (typeof document === "undefined") return;
  if (language === "pt") {
    document.documentElement.lang = "pt-BR";
  } else if (language === "cn") {
    document.documentElement.lang = "zh-Hans";
  } else {
    document.documentElement.lang = "en";
  }
}

function getTargetUrlForLanguage(
  pathname: string | null,
  newLang: LanguageCode,
): string {
  if (!pathname || pathname === "/") {
    return `/${newLang}`;
  }

  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  const matched = ROUTE_MAP.find(
    (entry) =>
      entry.pt === cleanPath ||
      entry.en === cleanPath ||
      entry.cn === cleanPath,
  );

  if (matched) {
    return matched[newLang];
  }

  // Tratamento específico para rotas /nft-links
  if (cleanPath.startsWith("/nft-links")) {
    const parts = cleanPath.split("/").filter(Boolean);
    if (parts.length >= 3 && (parts[1] === "pt" || parts[1] === "cn")) {
      const person = parts[2];
      if (newLang === "cn") return `/nft-links/cn/${person}`;
      if (newLang === "pt") return `/nft-links/pt/${person}`;
      return `/nft-links/${person}`;
    } else if (parts.length === 2 && parts[0] === "nft-links") {
      const person = parts[1];
      if (newLang === "cn") return `/nft-links/cn/${person}`;
      if (newLang === "pt") return `/nft-links/pt/${person}`;
      return `/nft-links/${person}`;
    }
  }

  // Fallback seguro: se não encontrar rota idêntica mapeada, vai para a raiz do novo idioma
  return `/${newLang}`;
}

function checkIsHealth(key: string, href: string): boolean {
  const k = key.toLowerCase();
  const h = href.toLowerCase();
  return (
    k === "health" ||
    k === "saúde" ||
    k === "saude" ||
    k === "健康" ||
    h.endsWith("/health") ||
    h.endsWith("/saude")
  );
}

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const getInitialLang = (): LanguageCode => {
    if (pathname?.startsWith("/pt")) return "pt";
    if (pathname?.startsWith("/cn")) return "cn";
    return "en";
  };
  const [lang, setLang] = useState<LanguageCode>(getInitialLang);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Sincroniza tema com documento / localStorage
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  // Sincroniza com o idioma da rota ou da sessão
  useEffect(() => {
    let active: LanguageCode = "en";
    if (pathname?.startsWith("/pt")) {
      active = "pt";
    } else if (pathname?.startsWith("/cn")) {
      active = "cn";
    } else if (pathname?.startsWith("/en")) {
      active = "en";
    } else {
      try {
        const storedLang = sessionStorage.getItem(
          "selected_language",
        ) as LanguageCode | null;
        if (
          storedLang &&
          (storedLang === "en" || storedLang === "pt" || storedLang === "cn")
        ) {
          active = storedLang;
        }
      } catch {}
    }
    setLang(active);
    updateHtmlLang(active);
    try {
      sessionStorage.setItem("selected_language", active);
      document.cookie = `preferred_language=${active}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
  }, [pathname]);

  const changeLanguage = (newLang: LanguageCode) => {
    setLang(newLang);
    updateHtmlLang(newLang);
    setIsOpen(false);
    try {
      sessionStorage.setItem("selected_language", newLang);
      document.cookie = `preferred_language=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      window.dispatchEvent(
        new CustomEvent("languageChange", { detail: newLang }),
      );
    } catch {
      // Ignora erro de storage
    }

    const targetUrl = getTargetUrlForLanguage(pathname, newLang);
    if (targetUrl) {
      const currentClean = (pathname || "").replace(/\/+$/, "");
      const targetClean = targetUrl.replace(/\/+$/, "");
      if (currentClean !== targetClean) {
        router.push(targetUrl);
      }
    }
  };

  const currentNavData = nav[lang] || nav.en;
  const menuItems = Object.entries(currentNavData);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-neutral-100/90 dark:bg-neutral-950/50 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-xs px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="flex items-center justify-between w-full py-2">
        {/* Lado Esquerdo: Hamburger (Mobile) + Logo + Menu Desktop */}
        <div className="flex items-center gap-2 sm:gap-6 lg:gap-8">
          {/* Botão Hamburger - Apenas Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 rounded-lg transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo - Sempre visível (mobile e desktop) */}
          <Link
            href={`/${lang}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/logo/nft-logistics-logo-preto.png"
              alt="NFT Logistics"
              width={120}
              height={67}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/logo/nft-logistics-logo-branco.png"
              alt="NFT Logistics"
              width={120}
              height={67}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain hidden dark:block"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map(([key, value]) => {
              const isObject = typeof value === "object" && value !== null;
              const item = isObject ? (value as NavSection) : null;
              const href =
                typeof value === "string"
                  ? value
                  : item?.rota_principal || item?.main_route || "#";
              const servicos = item?.servicos || item?.services;

              if (servicos && servicos.length > 0) {
                return (
                  <div key={key} className="relative group py-2">
                    <Link
                      href={href}
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors"
                    >
                      <span>{key}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Menu Suspenso Desktop (Hover) */}
                    <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
                      <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 rounded-lg shadow-xl py-2 min-w-[240px] flex flex-col">
                        {servicos.map((servico) => {
                          const isServicoHealth = checkIsHealth(
                            servico.nome,
                            servico.rota,
                          );
                          return (
                            <Link
                              key={servico.rota}
                              href={servico.rota}
                              className={`px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                                isServicoHealth
                                  ? "text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/40"
                                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-orange-600 dark:hover:text-orange-400"
                              }`}
                            >
                              <span>{servico.nome}</span>
                              {isServicoHealth && (
                                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                                  Hospitalar
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isHealth = checkIsHealth(key, href);

              if (isHealth) {
                return (
                  <Link
                    key={key}
                    href={href}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>{key}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={key}
                  href={href}
                  className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors py-2"
                >
                  {key}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Lado Direito: Seletor de Idiomas e Botão de Tema (Lucide) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Seletor de Idiomas */}
          <div className="flex items-center gap-2">
            {LANGUAGES.map((language) => {
              const isSelected = lang === language.code;
              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => changeLanguage(language.code)}
                  title={language.label}
                  aria-label={`Mudar idioma para ${language.label}`}
                  className={`p-1 rounded-full transition-all duration-200 ${
                    isSelected
                      ? "ring-2 ring-orange-600 scale-110 shadow-md"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <Image
                    src={language.icon}
                    alt={language.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full object-cover block"
                  />
                </button>
              );
            })}
          </div>

          <div className="h-4 w-px bg-neutral-500 dark:bg-neutral-600" />

          {/* Botão de Troca de Tema (Lucide Icons) */}
          <button
            type="button"
            onClick={toggleTheme}
            title={
              mounted && theme === "dark"
                ? "Ativar modo claro"
                : "Ativar modo escuro"
            }
            aria-label={
              mounted && theme === "dark"
                ? "Ativar modo claro"
                : "Ativar modo escuro"
            }
            className="p-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 active:scale-90 cursor-pointer flex items-center justify-center"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-6 h-6 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-6 h-6 text-neutral-900 dark:text-neutral-200 transition-transform duration-300 hover:-rotate-12" />
              )
            ) : (
              <span className="w-6 h-6 block" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Largura Total com Todos os Links Abertos */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-full left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xl py-4 px-6 z-50 transition-all duration-300">
          <nav className="flex flex-col space-y-3 w-full">
            {menuItems.map(([key, value]) => {
              const isObject = typeof value === "object" && value !== null;
              const item = isObject ? (value as NavSection) : null;
              const href =
                typeof value === "string"
                  ? value
                  : item?.rota_principal || item?.main_route || "#";
              const servicos = item?.servicos || item?.services;

              if (servicos && servicos.length > 0) {
                return (
                  <div key={key} className="w-full flex flex-col py-1">
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="w-full text-base font-semibold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 py-1 transition-colors"
                    >
                      {key}
                    </Link>

                    {/* Links de serviços já abertos com largura total */}
                    <div className="flex flex-col w-full pl-4 mt-1 border-l-2 border-neutral-200 dark:border-neutral-700 space-y-1">
                      {servicos.map((servico) => {
                        const isServicoHealth = checkIsHealth(
                          servico.nome,
                          servico.rota,
                        );
                        return (
                          <Link
                            key={servico.rota}
                            href={servico.rota}
                            onClick={() => setIsOpen(false)}
                            className={`w-full py-1.5 text-sm rounded px-2 transition-colors flex items-center justify-between ${
                              isServicoHealth
                                ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/60 dark:bg-blue-950/40"
                                : "text-neutral-600 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                            }`}
                          >
                            <span>{servico.nome}</span>
                            {isServicoHealth && (
                              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                                Hospitalar
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isHealth = checkIsHealth(key, href);

              if (isHealth) {
                return (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 px-4 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>{key}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-1.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {key}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
