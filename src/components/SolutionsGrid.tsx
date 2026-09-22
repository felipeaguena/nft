"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTENT } from "@/src/data/solucoes";
import { LanguageCode } from "@/src/types";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/src/components/animations";

export interface SolutionsGridProps {
  /**
   * Idioma das soluções a exibir ('pt' | 'en' | 'cn').
   * Se omitido, tenta resolver pela URL ou fallback para 'pt'.
   */
  lang?: LanguageCode;
  /**
   * Variante de apresentação do cabeçalho:
   * - 'solutions': usa os textos da página de soluções ("Nossas Principais Soluções")
   * - 'home': usa os textos da página inicial ("Inteligência Logística de Ponta a Ponta")
   * Padrão: 'solutions'
   */
  variant?: "solutions" | "home";
  /** Sobrescreve a tag/badge do cabeçalho */
  tag?: string;
  /** Sobrescreve o título principal do cabeçalho */
  title?: string;
  /** Sobrescreve a descrição do cabeçalho */
  description?: string;
  /** Sobrescreve o rótulo do botão dos cards */
  buttonLabel?: string;
  /** ID para âncoras na página (padrão: 'solucoes-grid') */
  id?: string;
  /** Classes CSS adicionais para a tag <section> */
  className?: string;
}

const HOME_HEADER_TEXTS: Record<
  LanguageCode,
  { tag: string; title: string; description: string }
> = {
  pt: {
    tag: "Soluções Estratégicas",
    title: "Inteligência Logística de Ponta a Ponta",
    description:
      "Soluções completas com gestão aduaneira e logística multimodal integrada para desarmar a burocracia brasileira.",
  },
  en: {
    tag: "Strategic Solutions",
    title: "End-to-End Logistics Intelligence",
    description:
      "End-to-end solutions combining customs management and multimodal logistics to eliminate Brazilian trade bureaucracy.",
  },
  cn: {
    tag: "专业解决方案",
    title: "端到端国际物流与关务智慧",
    description:
      "提供全流程物流运输、关务申报与特殊制度支持，化繁为简，消除巴西复杂官僚风险。",
  },
};

export default function SolutionsGrid({
  lang,
  variant = "solutions",
  tag,
  title,
  description,
  buttonLabel,
  id = "solucoes-grid",
  className = "",
}: SolutionsGridProps) {
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

  const content = CONTENT[resolvedLang] || CONTENT.pt;
  const solutionsGridData = content.solutionsGrid;

  const homeHeader = HOME_HEADER_TEXTS[resolvedLang] || HOME_HEADER_TEXTS.pt;

  const currentTag =
    tag ?? (variant === "home" ? homeHeader.tag : solutionsGridData.tag);
  const currentTitle =
    title ?? (variant === "home" ? homeHeader.title : solutionsGridData.title);
  const currentDescription =
    description ??
    (variant === "home" ? homeHeader.description : solutionsGridData.description);
  const currentButtonLabel = buttonLabel ?? solutionsGridData.buttonLabel;

  return (
    <section
      id={id}
      className={`relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <FadeIn direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {currentTag}
            </span>
            <h2 className="mt-4 text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {currentTitle}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-base sm:text-base leading-relaxed">
              {currentDescription}
            </p>
          </div>
        </FadeIn>

        {/* Grid de 4 cards (2x2 em telas médias/grandes) com Stagger */}
        <FadeInStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsGridData.items.map((item) => {
            return (
              <FadeInStaggerItem
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/90 shadow-md dark:shadow-xl transition-all duration-300 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-600/10 dark:hover:shadow-orange-600/20 flex flex-col justify-between"
              >
                <div>
                  {/* Imagem de Destaque da Solução com Zoom Suave */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                  </div>

                  {/* Conteúdo textual do Card */}
                  <div className="p-7 sm:p-10">
                    {/* Título */}
                    <h3 className="text-[1.75rem] sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Bullets de diferenciais */}
                    <ul className="space-y-2.5 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-6">
                      {item.bullets.map((b, bIdx: number) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão de ação */}
                <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-neutral-200/70 hover:bg-orange-600 hover:text-white dark:bg-white/5 dark:hover:bg-orange-600 border border-neutral-300/80 hover:border-orange-600 dark:border-white/10 text-neutral-800 dark:text-white text-sm font-semibold transition-all duration-200 group-hover:shadow-md cursor-pointer"
                  >
                    <span>{currentButtonLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

export { SolutionsGrid };
