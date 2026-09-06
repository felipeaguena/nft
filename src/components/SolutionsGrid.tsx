"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import solutionsRaw from "@/db/solutions.json";
import HealthCTA from "./HealthCTA";
import CTA from "./CTA";

export type LanguageCode = "pt" | "en" | "cn";

interface SolutionSectionItem {
  title: string;
  description: string;
  texto: string;
  link: string;
}

interface SolutionGroup {
  title: string;
  description: string;
  sections: Record<string, SolutionSectionItem>;
}

type SolutionsData = {
  pt: {
    solucoes: SolutionGroup;
  };
  en: {
    solutions: SolutionGroup;
  };
  cn: {
    solutions: SolutionGroup;
  };
};

const solutionsData = solutionsRaw as unknown as SolutionsData;

export interface SolutionsGridProps {
  /**
   * Idioma das soluções a exibir.
   * Se não for informado, detecta automaticamente pela rota atual (/pt, /en, /cn)
   * com fallback padrão para "pt".
   */
  lang?: LanguageCode;
  /** Texto do botão interno de cada card (opcional) */
  cardButtonText?: string;
  /** Quantidade de colunas no desktop (opcional, padrão: 2) */
  columns?: 2 | 3 | 4;
  /** Classes adicionais para o container externo */
  className?: string;
  /** Classes adicionais para a tag grid interna */
  gridClassName?: string;
  /** Classes adicionais para o container centralizado max-w-7xl (opcional) */
  containerClassName?: string;
  /** Se deve envolver em uma tag <section> com espaçamento padrão (padrão: true) */
  asSection?: boolean;
  /** Se deve envolver no container centralizado max-w-7xl (padrão: true) */
  withContainer?: boolean;
}

const DEFAULT_CONFIG: Record<
  LanguageCode,
  {
    cardButtonText: string;
  }
> = {
  pt: {
    cardButtonText: "Saiba mais",
  },
  en: {
    cardButtonText: "Learn more",
  },
  cn: {
    cardButtonText: "了解更多",
  },
};

/**
 * Normaliza as rotas para garantir compatibilidade com as rotas reais do Next.js
 */
function normalizeRoute(link: string, lang: LanguageCode): string {
  if (link.startsWith("/pt") || link.startsWith("/en") || link.startsWith("/cn")) {
    return link;
  }

  if (lang === "pt" && link.startsWith("/solucoes")) {
    if (link === "/solucoes/feiras-eventos") {
      return "/pt/solucoes/feiras-e-eventos";
    }
    return `/pt${link}`;
  }

  return link;
}

export default function SolutionsGrid({
  lang,
  cardButtonText,
  columns = 2,
  className = "",
  gridClassName = "",
  containerClassName = "",
  asSection = true,
  withContainer = true,
}: SolutionsGridProps) {
  const pathname = usePathname();

  // Detecção automática de idioma caso não seja passado explicitamente via prop
  const resolvedLang: LanguageCode = React.useMemo(() => {
    if (lang) return lang;
    if (pathname?.startsWith("/pt")) return "pt";
    if (pathname?.startsWith("/cn")) return "cn";
    if (pathname?.startsWith("/en")) return "en";
    return "pt";
  }, [lang, pathname]);

  const config = DEFAULT_CONFIG[resolvedLang];

  // Obtenção dos dados do arquivo solutions.json para o idioma resolvido
  const currentLangData = solutionsData[resolvedLang];
  const groupData: SolutionGroup =
    resolvedLang === "pt"
      ? (currentLangData as { solucoes: SolutionGroup }).solucoes
      : (currentLangData as { solutions: SolutionGroup }).solutions;

  const sectionItems: SolutionSectionItem[] = Object.values(groupData?.sections || {});
  const itemButtonLabel = cardButtonText || config.cardButtonText;

  const columnClasses: Record<2 | 3 | 4, string> = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const gridContent = (
    <div
      className={`grid ${columnClasses[columns]} gap-5 sm:gap-6 ${gridClassName}`}
    >
      {sectionItems.map((item, index) => {
        const targetHref = normalizeRoute(item.link, resolvedLang);

        return (
          <Link
            key={`${resolvedLang}-${index}-${item.title}`}
            href={targetHref}
            className="group relative flex flex-col justify-between p-6 sm:p-7 min-h-[300px] sm:min-h-[340px] rounded-2xl transition-all duration-300 ease-out border shadow-xs hover:shadow-xl hover:shadow-orange-600/15 hover:-translate-y-1.5 bg-neutral-100 dark:bg-neutral-900/90 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 hover:bg-orange-600 dark:hover:bg-orange-600 hover:border-orange-600 dark:hover:border-orange-600"
          >
            {/* Topo do card: Título e Descrição/Texto */}
            <div>
              {/* Título do Serviço */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-white transition-colors duration-200 leading-snug">
                {item.title}
              </h3>

              {/* Texto / Descrição detalhada */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 group-hover:text-orange-50/95 transition-colors duration-200 leading-relaxed line-clamp-5">
                {item.texto || item.description}
              </p>
            </div>

            {/* Rodapé do card: Texto parecido com um botão */}
            <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 group-hover:border-orange-500/50 transition-colors duration-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-neutral-200/80 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border border-neutral-300/80 dark:border-neutral-700/80 group-hover:bg-white group-hover:text-orange-600 group-hover:border-white shadow-xs">
                <span>{itemButtonLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );

  const containerContent = withContainer ? (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
      {gridContent}
    </div>
  ) : (
    gridContent
  );

  if (!asSection) {
    return containerContent;
  }

  return (
    <section className={`w-full py-12 sm:py-16 lg:py-20 bg-transparent ${className}`}>
      {containerContent}
      <div>
        <div className="max-w-7xl mx-auto">
          <HealthCTA className="lg:-my-6 md:-my-4 sm:-my-3 -my-2"/>
        </div>
      </div>
    </section>
  );
}

export { SolutionsGrid, SolutionsGrid as SolutionsCards };
