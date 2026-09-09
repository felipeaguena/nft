"use client";

import React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Scale,
  CalendarCheck,
  Compass,
  Sparkles,
  Activity,
  ArrowRight,
  ShieldCheck,
  Mail,
  Clock,
  CheckCircle2,
  Truck,
  FileText,
  MessageCircle,
} from "lucide-react";
import { ctaSection as rawCtaData } from "@/src/data/db";

export type CtaPageKey =
  | "logistica-obras-arte"
  | "regimes-especiais"
  | "feiras-e-eventos"
  | "projetos-customizados"
  | "solucoes"
  | "saude"
  | "health";

export type LanguageCode = "pt" | "en" | "cn";

export interface CtaItemData {
  badge: string;
  icon?: string;
  title: string;
  description: string;
  btnWhatsapp: string;
  disclaimer: string;
  image?: string;
  imageAlt?: string;
  theme?: "orange" | "sky";
  whatsappNumber?: string;
  whatsappMessage?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Palette,
  Scale,
  CalendarCheck,
  Compass,
  Sparkles,
  Activity,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Truck,
  FileText,
  MessageCircle,
};

const ctaData = rawCtaData as Record<
  string,
  Record<LanguageCode, CtaItemData>
>;

export interface CtaSectionProps {
  pageKey?: CtaPageKey;
  lang?: LanguageCode;
  data?: Partial<CtaItemData>;
  whatsappHref?: string;
  className?: string;
  theme?: "orange" | "sky";
  image?: string;
  imageAlt?: string;
  icon?: LucideIcon;
}

export default function CtaSection({
  pageKey,
  lang = "pt",
  data,
  whatsappHref,
  className = "",
  theme: customTheme,
  image: customImage,
  imageAlt: customImageAlt,
  icon: customIcon,
}: CtaSectionProps) {
  const fileContent =
    pageKey && ctaData[pageKey]
      ? ctaData[pageKey][lang] || ctaData[pageKey].pt
      : null;

  const content: CtaItemData | null = fileContent
    ? { ...fileContent, ...(data || {}) }
    : (data as CtaItemData) || null;

  if (!content) {
    return null;
  }

  const effectiveTheme = customTheme || content.theme || "orange";
  const effectiveImage = customImage || content.image || "/imagens/operacao-nft-logistics.webp";
  const effectiveImageAlt = customImageAlt || content.imageAlt || content.title;

  const IconComp =
    customIcon ||
    (content.icon && ICON_MAP[content.icon]) ||
    MessageCircle;

  const resolvedWhatsappHref =
    whatsappHref ||
    (content.whatsappMessage
      ? `https://wa.me/${content.whatsappNumber || "5511948530057"}?text=${encodeURIComponent(
          content.whatsappMessage
        )}`
      : `https://wa.me/${content.whatsappNumber || "5511948530057"}`);

  const isSky = effectiveTheme === "sky";

  return (
    <section
      className={`relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80 ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={effectiveImage}
          alt={effectiveImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.25]"
        />
        {isSky ? (
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#06152b]/85 to-[#030712]/95" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
        )}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] ${
            isSky ? "bg-sky-500/10" : "bg-orange-600/10"
          } blur-[140px] pointer-events-none rounded-full`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${
            isSky
              ? "bg-sky-500/10 border border-sky-400/30 text-sky-400"
              : "bg-orange-500/10 border border-orange-400/30 text-orange-400"
          } text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6`}
        >
          <IconComp
            className={`w-4 h-4 ${isSky ? "text-sky-400" : "text-orange-400"}`}
          />
          <span>{content.badge}</span>
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          {content.title}
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          {content.description}
        </p>

        <div className="mt-10">
          <a
            href={resolvedWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <svg
              className="w-6 h-6 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
            </svg>
            <span>{content.btnWhatsapp}</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-300">
          {content.disclaimer}
        </p>
      </div>
    </section>
  );
}

export const CTASection = CtaSection;
