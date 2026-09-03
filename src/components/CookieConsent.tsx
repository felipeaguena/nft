"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageCode = "pt" | "en" | "cn";

interface ConsentContent {
  title: string;
  description: string;
  accept: string;
  decline: string;
  privacyPrefix: string;
  privacyText: string;
  privacyLink: string;
}

const CONSENT_TEXTS: Record<LanguageCode, ConsentContent> = {
  pt: {
    title: "Preferências de Cookies",
    description:
      "Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdos e anúncios.",
    accept: "Aceitar todos",
    decline: "Recusar",
    privacyPrefix: "Para saber mais, leia nossa",
    privacyText: "Política de Privacidade",
    privacyLink: "/pt/privacidade",
  },
  en: {
    title: "Cookie Preferences",
    description:
      "We use cookies to improve your experience, analyze site traffic, and personalize content and advertising.",
    accept: "Accept all",
    decline: "Decline",
    privacyPrefix: "To learn more, please read our",
    privacyText: "Privacy Policy",
    privacyLink: "/en/privacy",
  },
  cn: {
    title: "Cookie 偏好设置",
    description:
      "我们使用 Cookie 以改善您的体验、分析网站流量并提供个性化内容与广告。",
    accept: "接受全部",
    decline: "拒绝",
    privacyPrefix: "了解更多信息，请参阅我们的",
    privacyText: "隐私政策",
    privacyLink: "/cn/privacy-cn",
  },
};

const STORAGE_KEY = "nft_cookie_consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>("pt");
  const pathname = usePathname();

  // Determina o idioma com base na rota ou na sessão
  const detectLanguage = (): LanguageCode => {
    if (pathname?.startsWith("/pt")) return "pt";
    if (pathname?.startsWith("/cn")) return "cn";
    if (pathname?.startsWith("/en")) return "en";

    try {
      const stored = sessionStorage.getItem("selected_language");
      if (stored === "pt" || stored === "cn" || stored === "en") {
        return stored;
      }
    } catch {
      // Ignora erro de acesso a sessionStorage
    }

    return "pt";
  };

  // Sincroniza o idioma quando a rota mudar
  useEffect(() => {
    setCurrentLang(detectLanguage());
  }, [pathname]);

  // Escuta o evento customizado disparado ao trocar de idioma no menu
  useEffect(() => {
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<LanguageCode>;
      if (
        customEvent.detail &&
        (customEvent.detail === "pt" ||
          customEvent.detail === "en" ||
          customEvent.detail === "cn")
      ) {
        setCurrentLang(customEvent.detail);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
    };
  }, []);

  const text = CONSENT_TEXTS[currentLang];

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedDecision = localStorage.getItem(STORAGE_KEY);
      if (!storedDecision) {
        // Exibe com um pequeno delay para suavizar a entrada
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage desativado ou restrito
      setIsVisible(true);
    }
  }, []);

  const handleDecision = (decision: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, decision);
      localStorage.setItem(`${STORAGE_KEY}_timestamp`, new Date().toISOString());
    } catch {
      // Falha ao gravar no localStorage
    }
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Consentimento de Cookies"
      role="dialog"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-md w-auto"
    >
      <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-orange-100 dark:bg-orange-950/60 rounded-xl text-orange-600 dark:text-orange-400 shrink-0 mt-0.5">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {text.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
              {text.description}
            </p>

            {/* Link discreto para Política de Privacidade */}
            <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              {text.privacyPrefix}{" "}
              <Link
                href={text.privacyLink}
                className="font-medium text-orange-600 dark:text-orange-400 underline underline-offset-2 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                {text.privacyText}
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="mt-4 flex items-center justify-end gap-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
          <button
            type="button"
            onClick={() => handleDecision("declined")}
            className="px-3.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
          >
            {text.decline}
          </button>
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            className="px-4 py-1.5 text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}
