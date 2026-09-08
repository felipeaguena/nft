"use client";

import React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Scale,
  Palette,
  Compass,
  Sparkles,
  Activity,
  ShieldCheck,
  ArrowRight,
  Truck,
  CheckCircle2,
  Clock,
  Boxes,
  FileText,
  MessageCircle,
} from "lucide-react";
import rawHeroData from "@/db/heroSection.json";

export type HeroPageKey =
  | "feiras-e-eventos"
  | "regimes-especiais"
  | "logistica-obras-arte"
  | "projetos-customizados"
  | "solucoes"
  | "sobre"
  | "saude"
  | "health";

export type LanguageCode = "pt" | "en" | "cn";

export interface HeroCtaData {
  text: string;
  href?: string;
  isWhatsApp?: boolean;
  target?: "_blank" | "_self";
  icon?: string;
}

export interface HeroTrustData {
  icon?: string;
  title: string;
  desc: string;
}

export interface HeroItemData {
  badge: string;
  badgeIcon?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  theme?: "orange" | "sky" | "emerald" | "purple" | "blue" | string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  primaryCta: HeroCtaData;
  secondaryCta?: HeroCtaData;
  trust?: HeroTrustData;
}

export interface HeroThemeColors {
  accent: string;
  accentHover: string;
  accentActive: string;
  glow: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  badgeIcon: string;
  btnPrimaryBg: string;
  btnPrimaryHover: string;
  btnPrimaryActive: string;
  btnPrimaryText: string;
  btnPrimaryShadow: string;
  gradientMid: string;
  trustBorderLight: string;
  trustBorderDark: string;
  trustIconBg: string;
  trustIconBorder: string;
  trustIconColorLight: string;
  trustIconColorDark: string;
}

const THEME_PRESETS: Record<string, HeroThemeColors> = {
  orange: {
    accent: "#ea580c",
    accentHover: "#f97316",
    accentActive: "#c2410c",
    glow: "rgba(234, 88, 12, 0.18)",
    badgeBg: "rgba(249, 115, 22, 0.15)",
    badgeBorder: "rgba(251, 146, 60, 0.40)",
    badgeText: "#fdba74",
    badgeIcon: "#fb923c",
    btnPrimaryBg: "#ea580c",
    btnPrimaryHover: "#f97316",
    btnPrimaryActive: "#c2410c",
    btnPrimaryText: "#ffffff",
    btnPrimaryShadow: "rgba(234, 88, 12, 0.28)",
    gradientMid: "rgba(22, 13, 6, 0.75)",
    trustBorderLight: "rgba(254, 215, 170, 0.90)",
    trustBorderDark: "rgba(154, 52, 18, 0.45)",
    trustIconBg: "rgba(249, 115, 22, 0.20)",
    trustIconBorder: "rgba(251, 146, 60, 0.40)",
    trustIconColorLight: "#ea580c",
    trustIconColorDark: "#fb923c",
  },
  sky: {
    accent: "#0284c7",
    accentHover: "#0ea5e9",
    accentActive: "#0369a1",
    glow: "rgba(14, 165, 233, 0.22)",
    badgeBg: "rgba(14, 165, 233, 0.15)",
    badgeBorder: "rgba(56, 189, 248, 0.35)",
    badgeText: "#38bdf8",
    badgeIcon: "#38bdf8",
    btnPrimaryBg: "#0284c7",
    btnPrimaryHover: "#0ea5e9",
    btnPrimaryActive: "#0369a1",
    btnPrimaryText: "#ffffff",
    btnPrimaryShadow: "rgba(2, 132, 199, 0.35)",
    gradientMid: "rgba(7, 25, 51, 0.65)",
    trustBorderLight: "rgba(186, 230, 253, 0.90)",
    trustBorderDark: "rgba(7, 89, 133, 0.40)",
    trustIconBg: "rgba(14, 165, 233, 0.20)",
    trustIconBorder: "rgba(56, 189, 248, 0.40)",
    trustIconColorLight: "#0284c7",
    trustIconColorDark: "#38bdf8",
  },
  emerald: {
    accent: "#059669",
    accentHover: "#10b981",
    accentActive: "#047857",
    glow: "rgba(16, 185, 129, 0.20)",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    badgeBorder: "rgba(52, 211, 153, 0.40)",
    badgeText: "#6ee7b7",
    badgeIcon: "#34d399",
    btnPrimaryBg: "#059669",
    btnPrimaryHover: "#10b981",
    btnPrimaryActive: "#047857",
    btnPrimaryText: "#ffffff",
    btnPrimaryShadow: "rgba(5, 150, 105, 0.30)",
    gradientMid: "rgba(6, 22, 15, 0.70)",
    trustBorderLight: "rgba(167, 243, 208, 0.90)",
    trustBorderDark: "rgba(6, 95, 70, 0.40)",
    trustIconBg: "rgba(16, 185, 129, 0.20)",
    trustIconBorder: "rgba(52, 211, 153, 0.40)",
    trustIconColorLight: "#059669",
    trustIconColorDark: "#34d399",
  },
  purple: {
    accent: "#7c3aed",
    accentHover: "#8b5cf6",
    accentActive: "#6d28d9",
    glow: "rgba(139, 92, 246, 0.22)",
    badgeBg: "rgba(139, 92, 246, 0.15)",
    badgeBorder: "rgba(167, 139, 250, 0.40)",
    badgeText: "#c4b5fd",
    badgeIcon: "#a78bfa",
    btnPrimaryBg: "#7c3aed",
    btnPrimaryHover: "#8b5cf6",
    btnPrimaryActive: "#6d28d9",
    btnPrimaryText: "#ffffff",
    btnPrimaryShadow: "rgba(124, 58, 237, 0.30)",
    gradientMid: "rgba(19, 9, 36, 0.75)",
    trustBorderLight: "rgba(221, 214, 254, 0.90)",
    trustBorderDark: "rgba(91, 33, 182, 0.40)",
    trustIconBg: "rgba(139, 92, 246, 0.20)",
    trustIconBorder: "rgba(167, 139, 250, 0.40)",
    trustIconColorLight: "#7c3aed",
    trustIconColorDark: "#a78bfa",
  },
};

const ICON_MAP: Record<string, LucideIcon> = {
  CalendarCheck,
  Scale,
  Palette,
  Compass,
  Sparkles,
  Activity,
  ShieldCheck,
  ArrowRight,
  Truck,
  CheckCircle2,
  Clock,
  Boxes,
  FileText,
  MessageCircle,
};

const heroData = rawHeroData as Record<
  string,
  Record<LanguageCode, HeroItemData>
>;

export interface HeroSectionProps {
  pageKey?: HeroPageKey;
  lang?: LanguageCode;
  data?: Partial<HeroItemData>;
  whatsappHref?: string;
  className?: string;
  heightClassName?: string;
  theme?: "orange" | "sky" | "emerald" | "purple" | string;
  themeColors?: Partial<HeroThemeColors>;
  image?: string;
  imageAlt?: string;
  badgeIcon?: LucideIcon;
  trustIcon?: LucideIcon;
  bottomGradientClassName?: string;
}

export default function HeroSection({
  pageKey,
  lang = "pt",
  data,
  whatsappHref,
  className = "",
  heightClassName = "min-h-[80vh]",
  theme: customTheme,
  themeColors: customThemeColors,
  image: customImage,
  imageAlt: customImageAlt,
  badgeIcon: customBadgeIcon,
  trustIcon: customTrustIcon,
  bottomGradientClassName,
}: HeroSectionProps) {
  const fileContent =
    pageKey && heroData[pageKey]
      ? heroData[pageKey][lang] || heroData[pageKey].pt
      : null;

  const content: HeroItemData | null = fileContent
    ? { ...fileContent, ...(data || {}) }
    : (data as HeroItemData) || null;

  if (!content) {
    return null;
  }

  const effectiveTheme = customTheme || content.theme || "orange";
  const baseThemeColors = THEME_PRESETS[effectiveTheme] || THEME_PRESETS.orange;
  const colors: HeroThemeColors = {
    ...baseThemeColors,
    ...(customThemeColors || {}),
  };

  const effectiveImage =
    customImage || content.image || "/imagens/operacao-nft-logistics-3.webp";
  const effectiveImageAlt =
    customImageAlt || content.imageAlt || content.title;

  const BadgeIconComp =
    customBadgeIcon ||
    (content.badgeIcon && ICON_MAP[content.badgeIcon]) ||
    Sparkles;

  const TrustIconComp =
    customTrustIcon ||
    (content.trust?.icon && ICON_MAP[content.trust.icon]) ||
    ShieldCheck;

  const PrimaryIconComp =
    content.primaryCta?.icon && ICON_MAP[content.primaryCta.icon]
      ? ICON_MAP[content.primaryCta.icon]
      : null;

  // Resolve WhatsApp link
  const defaultNumber = content.whatsappNumber || "5511948530057";
  const defaultMessage = content.whatsappMessage || "";
  const resolvedWhatsappHref =
    whatsappHref ||
    (defaultMessage
      ? `https://wa.me/${defaultNumber}?text=${encodeURIComponent(defaultMessage)}`
      : `https://wa.me/${defaultNumber}`);

  // Resolve Primary CTA Link
  const primaryHref = content.primaryCta.isWhatsApp
    ? resolvedWhatsappHref
    : content.primaryCta.href || resolvedWhatsappHref;
  const primaryTarget =
    content.primaryCta.target ||
    (content.primaryCta.isWhatsApp ? "_blank" : undefined);
  const primaryRel =
    primaryTarget === "_blank" ? "noopener noreferrer" : undefined;

  // Resolve Secondary CTA Link (if present)
  const hasSecondaryCta = Boolean(content.secondaryCta?.text);
  const secondaryHref = content.secondaryCta?.isWhatsApp
    ? resolvedWhatsappHref
    : content.secondaryCta?.href || "#";
  const secondaryTarget =
    content.secondaryCta?.target ||
    (content.secondaryCta?.isWhatsApp ? "_blank" : undefined);
  const secondaryRel =
    secondaryTarget === "_blank" ? "noopener noreferrer" : undefined;

  // CSS variables container style object
  const cssVariables = {
    "--hero-accent": colors.accent,
    "--hero-accent-hover": colors.accentHover,
    "--hero-accent-active": colors.accentActive,
    "--hero-glow": colors.glow,
    "--hero-badge-bg": colors.badgeBg,
    "--hero-badge-border": colors.badgeBorder,
    "--hero-badge-text": colors.badgeText,
    "--hero-badge-icon": colors.badgeIcon,
    "--hero-btn-primary-bg": colors.btnPrimaryBg,
    "--hero-btn-primary-hover": colors.btnPrimaryHover,
    "--hero-btn-primary-active": colors.btnPrimaryActive,
    "--hero-btn-primary-text": colors.btnPrimaryText,
    "--hero-btn-primary-shadow": colors.btnPrimaryShadow,
    "--hero-gradient-mid": colors.gradientMid,
    "--hero-trust-border-light": colors.trustBorderLight,
    "--hero-trust-border-dark": colors.trustBorderDark,
    "--hero-trust-icon-bg": colors.trustIconBg,
    "--hero-trust-icon-border": colors.trustIconBorder,
    "--hero-trust-icon-color-light": colors.trustIconColorLight,
    "--hero-trust-icon-color-dark": colors.trustIconColorDark,
  } as React.CSSProperties;

  return (
    <section
      style={cssVariables}
      className={`relative w-full ${heightClassName} flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200 ${className}`}
    >
      {/* Background com imagem, gradiente e glow com variáveis CSS */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={effectiveImage}
          alt={effectiveImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] dark:brightness-[0.32]"
        />

        {/* Gradiente vertical que mescla o tom escuro do topo para a base adaptável ao tema claro e escuro */}
        <div
          className="absolute inset-0 transition-colors duration-200"
          style={{
            background: `linear-gradient(to bottom, rgba(10, 10, 10, 0.90) 0%, var(--hero-gradient-mid) 50%, transparent 100%)`,
          }}
        />
        {/* Gradiente de fundo inferior para transição suave com a próxima seção */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
            bottomGradientClassName ||
            (effectiveTheme === "sky"
              ? "to-[#050b14]"
              : "to-neutral-50 dark:to-[#0a0a0a]")
          } transition-colors duration-200`}
        />

        {/* Ambient Glow Light centralizado no topo */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] blur-[135px] pointer-events-none rounded-full transition-all duration-300"
          style={{ backgroundColor: "var(--hero-glow)" }}
        />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge de Identificação */}
        {content.badge && (
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md transition-all duration-200"
            style={{
              backgroundColor: "var(--hero-badge-bg)",
              border: `1px solid var(--hero-badge-border)`,
              color: "var(--hero-badge-text)",
            }}
          >
            <BadgeIconComp
              className="w-4 h-4 shrink-0 transition-colors duration-200"
              style={{ color: "var(--hero-badge-icon)" }}
            />
            <span>{content.badge}</span>
          </div>
        )}

        {/* Título Principal */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
          {content.title}
        </h1>

        {/* Texto descritivo embaixo do título */}
        {content.description && (
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm font-normal">
            {content.description}
          </p>
        )}

        {/* Botões de Ação */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Botão Primário */}
          <a
            href={primaryHref}
            target={primaryTarget}
            rel={primaryRel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              backgroundColor: "var(--hero-btn-primary-bg)",
              boxShadow: "0 10px 25px -5px var(--hero-btn-primary-shadow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--hero-accent-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--hero-btn-primary-bg)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--hero-accent-active)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--hero-accent-hover)";
            }}
          >
            <span>{content.primaryCta.text}</span>
            {PrimaryIconComp && <PrimaryIconComp className="w-5 h-5 shrink-0" />}
          </a>

          {/* Botão Secundário (opcional) */}
          {hasSecondaryCta && content.secondaryCta && (
            <a
              href={secondaryHref}
              target={secondaryTarget}
              rel={secondaryRel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/30 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{content.secondaryCta.text}</span>
            </a>
          )}
        </div>

        {/* Elemento de Confiança / Trust Badge */}
        {content.trust && (
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl transition-all duration-200 border border-[var(--hero-trust-border-light)] dark:border-[var(--hero-trust-border-dark)]">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-200"
              style={{
                backgroundColor: "var(--hero-trust-icon-bg)",
                borderColor: "var(--hero-trust-icon-border)",
              }}
            >
              <TrustIconComp
                className="w-6 h-6 text-[var(--hero-trust-icon-color-light)] dark:text-[var(--hero-trust-icon-color-dark)] transition-colors duration-200"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white transition-colors duration-200">
                {content.trust.title}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5 transition-colors duration-200">
                {content.trust.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export const Hero = HeroSection;
