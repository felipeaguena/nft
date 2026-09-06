"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type LanguageCode = "pt" | "en" | "cn";

interface WhatsAppContent {
  headerTitle: string;
  headerSubtitle: string;
  statusOnline: string;
  balloonCta: string;
  timeLabel: string;
  repBtn: string;
  fairBtn: string;
  mainCtaBtn: string;
  repMessage: string;
  fairMessage: string;
  generalMessage: string;
  quickOptionsLabel: string;
  ariaOpen: string;
  ariaClose: string;
}

const CONTENT: Record<LanguageCode, WhatsAppContent> = {
  pt: {
    headerTitle: "NFT Logistics",
    headerSubtitle: "Atendimento Especializado",
    statusOnline: "Online agora",
    balloonCta:
      "Como podemos te ajudar a entrar no mercado brasileiro? Seja por Representação comercial ou por feira, estamos prontos para te ajudar nesse processo.",
    timeLabel: "Agora",
    repBtn: "🤝 Representação Comercial",
    fairBtn: "🎪 Feiras & Eventos",
    mainCtaBtn: "Iniciar conversa no WhatsApp",
    repMessage:
      "Olá! Gostaria de saber mais sobre Representação Comercial no Brasil com a NFT Logistics.",
    fairMessage:
      "Olá! Gostaria de saber mais sobre apoio para Feiras e Eventos no Brasil com a NFT Logistics.",
    generalMessage:
      "Olá! Gostaria de saber como a NFT Logistics pode me ajudar a entrar no mercado brasileiro.",
    quickOptionsLabel: "Opções rápidas:",
    ariaOpen: "Abrir atendimento via WhatsApp",
    ariaClose: "Fechar balão do WhatsApp",
  },
  en: {
    headerTitle: "NFT Logistics",
    headerSubtitle: "Specialized Support",
    statusOnline: "Online now",
    balloonCta:
      "How can we help you enter the Brazilian market? Whether through commercial representation or trade fairs, we are ready to assist you in this process.",
    timeLabel: "Now",
    repBtn: "🤝 Commercial Representation",
    fairBtn: "🎪 Fairs & Events",
    mainCtaBtn: "Start chat on WhatsApp",
    repMessage:
      "Hello! I would like to learn more about Commercial Representation in Brazil with NFT Logistics.",
    fairMessage:
      "Hello! I would like to learn more about support for Fairs and Events in Brazil with NFT Logistics.",
    generalMessage:
      "Hello! I would like to know how NFT Logistics can assist our entry into the Brazilian market.",
    quickOptionsLabel: "Quick options:",
    ariaOpen: "Open WhatsApp support",
    ariaClose: "Close WhatsApp chat bubble",
  },
  cn: {
    headerTitle: "NFT Logistics",
    headerSubtitle: "专业客户咨询",
    statusOnline: "在线",
    balloonCta:
      "我们如何帮助您进入巴西市场？无论是成为巴西的商业代表，或是参加展会，我们随时准备协助您完成这个过程。",
    timeLabel: "刚刚",
    repBtn: "🤝 商业代表服务",
    fairBtn: "🎪 展会与活动物流",
    mainCtaBtn: "通过 WhatsApp 立即咨询",
    repMessage: "您好！我想了解更多关于 NFT Logistics 在巴西的商业代表服务。",
    fairMessage:
      "您好！我想了解更多关于 NFT Logistics 在巴西的展会与活动支持服务。",
    generalMessage: "您好！我想了解 NFT Logistics 如何协助我们拓展巴西市场。",
    quickOptionsLabel: "快捷选项：",
    ariaOpen: "打开 WhatsApp 在线咨询",
    ariaClose: "关闭 WhatsApp 对话框",
  },
};

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultOpen?: boolean;
}

export default function WhatsAppButton({
  phoneNumber = "5511948530057",
  defaultOpen = false,
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [hasInteracted, setHasInteracted] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect language based on route
  const currentLang: LanguageCode = pathname?.startsWith("/cn")
    ? "cn"
    : pathname?.startsWith("/en")
      ? "en"
      : "pt";

  const content = CONTENT[currentLang];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const getWhatsAppUrl = (message: string) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Mini Popup Balão de Conversa */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Atendimento WhatsApp NFT Logistics"
        className={`absolute right-0 bottom-[80px] w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900  shadow-2xl shadow-emerald-950/20 dark:shadow-black/60">
          {/* Header estilizado estilo WhatsApp empresarial */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 px-3.5 sm:px-4 py-3 sm:py-3.5 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/30 backdrop-blur-sm overflow-hidden">
                  <Image
                    src="/logo/nft-logistics-icone-branco.png"
                    alt="NFT Logistics"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                {/* Status Dot verde online */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white leading-tight">
                  {content.headerTitle}
                </h3>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  {content.statusOnline}
                </p>
              </div>
            </div>

            {/* Botão fechar */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={content.ariaClose}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </div>

          {/* Área interna do Chat com fundo suave */}
          <div className="p-3.5 sm:p-4 bg-neutral-50/70 dark:bg-neutral-950/40">
            {/* Balão de Mensagem recebida */}
            <div className="relative bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/70 rounded-2xl rounded-tl-sm p-3.5 sm:p-4 shadow-sm text-neutral-800 dark:text-neutral-100">
              {/* Mensagem CTA Principal */}
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
                {content.balloonCta}
              </p>

              {/* Timestamp e status de leitura */}
              <div className="mt-2 flex items-center justify-end gap-1 text-[11px] text-neutral-500 dark:text-neutral-300">
                <span>{content.timeLabel}</span>
                <svg
                  className="w-3.5 h-3.5 text-emerald-500 inline-block ml-0.5"
                  viewBox="0 0 16 15"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M14.5 4.5l-8.5 8.5-4-4"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Ações Rápidas em Chips */}
            <div className="mt-3 flex flex-col gap-2">
              <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                {content.quickOptionsLabel}
              </span>

              <a
                href={getWhatsAppUrl(content.repMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3.5 py-2 sm:py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-neutral-200 dark:border-neutral-700/80 hover:border-emerald-500/50 rounded-xl transition-all shadow-2xs hover:shadow-xs"
              >
                <span>{content.repBtn}</span>
                <span className="text-emerald-600 dark:text-emerald-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-xs font-semibold">
                  →
                </span>
              </a>

              <a
                href={getWhatsAppUrl(content.fairMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3.5 py-2 sm:py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-neutral-200 dark:border-neutral-700/80 hover:border-emerald-500/50 rounded-xl transition-all shadow-2xs hover:shadow-xs"
              >
                <span>{content.fairBtn}</span>
                <span className="text-emerald-600 dark:text-emerald-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-xs font-semibold">
                  →
                </span>
              </a>
            </div>

            {/* Botão de Ação Primária */}
            <div className="mt-3.5 pt-3 border-t border-neutral-200/60 dark:border-neutral-800">
              <a
                href={getWhatsAppUrl(content.generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 transition-all cursor-pointer"
              >
                {/* WhatsApp icon */}
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
                </svg>
                <span>{content.mainCtaBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cauda do balão apontando para o botão */}
        <div
          aria-hidden="true"
          className="absolute -bottom-2 right-6 sm:right-6 w-4 h-4 bg-white dark:bg-neutral-900 border-r border-b border-neutral-200 dark:border-neutral-800 rotate-45 shadow-sm"
        />
      </div>

      {/* Botão Flutuante Circular do WhatsApp */}
      <button
        type="button"
        onClick={togglePopup}
        aria-label={isOpen ? content.ariaClose : content.ariaOpen}
        aria-expanded={isOpen}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white shadow-xl shadow-emerald-600/40 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Efeito de Ping / Onda suave */}
        {!isOpen && !hasInteracted && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none" />
        )}

        {/* Badge de notificação "1" não lido antes de interagir */}
        {!isOpen && !hasInteracted && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white shadow-md border-2 border-white dark:border-neutral-900 animate-bounce">
            1
          </span>
        )}

        {/* Ícone interno animado entre WhatsApp e Fechar */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          {/* Ícone de Fechar quando aberto */}
          <svg
            className={`absolute inset-0 w-7 h-7 transition-all duration-300 ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50 pointer-events-none"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {/* Ícone oficial do WhatsApp quando fechado */}
          <svg
            className={`absolute inset-0 w-7 h-7 fill-current transition-all duration-300 ${
              isOpen
                ? "opacity-0 rotate-90 scale-50 pointer-events-none"
                : "opacity-100 rotate-0 scale-100"
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
          </svg>
        </div>
      </button>
    </div>
  );
}
