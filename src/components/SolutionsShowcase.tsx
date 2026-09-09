"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Scale,
  Boxes,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Globe2, Layers } from "lucide-react";
import { solutionsShowcase as rawData } from "@/src/data/db";
import Button from "./Button";

export type LanguageCode = "pt" | "en" | "cn";

export interface SolutionCardItem {
  id: string;
  title: string;
  tag: string;
  desc: string;
  bullets: string[];
  href: string;
  icon: string;
  accent: string;
  badgeBg: string;
}

export interface SolutionsGroupData {
  badge: string;
  title: string;
  subtitle: string;
  btnAll: string;
  allHref: string;
  learnMore: string;
  items: SolutionCardItem[];
}

export type SolutionsShowcaseData = Record<LanguageCode, SolutionsGroupData>;

const solutionsData = rawData as SolutionsShowcaseData;

const ICON_MAP: Record<string, LucideIcon> = {
  CalendarCheck,
  Scale,
  Boxes,
  Palette,
};

export interface SolutionsShowcaseProps {
  /**
   * Idioma das soluções a exibir.
   * Se omitido, é resolvido via rota (usePathname) com fallback para 'pt'.
   */
  lang?: LanguageCode;
  /** Permite sobrescrever o badge superior (opcional) */
  badge?: string;
  /** Permite sobrescrever o título principal da seção (opcional) */
  title?: string;
  /** Permite sobrescrever o subtítulo/descrição (opcional) */
  subtitle?: string;
  /** Se deve exibir o botão de 'Ver Todas as Soluções' (padrão: true) */
  showAllButton?: boolean;
  /** Permite sobrescrever o texto do botão geral (opcional) */
  btnAllText?: string;
  /** Permite sobrescrever o link do botão geral (opcional) */
  btnAllHref?: string;
  /** Classes CSS extras para a tag <section> externa */
  className?: string;
  /** Classes CSS extras para o container interno max-w-7xl */
  containerClassName?: string;
  /** Se deve renderizar como <section> ou como <div> (padrão: true -> <section>) */
  asSection?: boolean;
}

export default function SolutionsShowcase({
  lang,
  badge,
  title,
  subtitle,
  showAllButton = true,
  btnAllText,
  btnAllHref,
  className = "",
  containerClassName = "",
  asSection = true,
}: SolutionsShowcaseProps) {
  const pathname = usePathname();

  const resolvedLang: LanguageCode = React.useMemo(() => {
    if (lang && (lang === "pt" || lang === "en" || lang === "cn")) {
      return lang;
    }
    if (pathname?.startsWith("/pt")) return "pt";
    if (pathname?.startsWith("/cn")) return "cn";
    if (pathname?.startsWith("/en")) return "en";
    return "pt";
  }, [lang, pathname]);

  const group = solutionsData[resolvedLang] || solutionsData.pt;

  const currentBadge = badge ?? group.badge;
  const currentTitle = title ?? group.title;
  const currentSubtitle = subtitle ?? group.subtitle;
  const currentBtnAll = btnAllText ?? group.btnAll;
  const currentAllHref = btnAllHref ?? group.allHref;
  const currentLearnMore = group.learnMore || "Saiba mais sobre esta solução";

  const ContentWrapper = asSection ? "section" : "div";

  return (
    <ContentWrapper
      className={`py-16 sm:py-20 bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {currentTitle}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {currentSubtitle}
            </p>
          </div>

          {showAllButton && currentAllHref && (
            <div>
              <Button
                variant="outline"
                size="md"
                href={currentAllHref}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="whitespace-nowrap"
              >
                {currentBtnAll}
              </Button>
            </div>
          )}
        </div>

        {/* Grid com os 4 Cards Padronizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {group.items.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;

            return (
              <Link
                key={item.id || idx}
                href={item.href}>
                <div
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:shadow-orange-600/10 hover:border-orange-300 dark:hover:border-orange-700/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 transition-colors">
                        <Icon className={`w-6 h-6 ${item.accent}`} />
                      </div>
                      {/* <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeBg}`}
                      >
                        {item.tag}
                      </span> */}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                      {item.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-700 dark:text-purple-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 dark:text-purple-400 group-hover:text-orange-500 transition-colors pt-2">
                    <span>{currentLearnMore}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
}

export { SolutionsShowcase };
