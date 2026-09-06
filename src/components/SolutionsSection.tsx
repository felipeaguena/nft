"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";
import solutionsRaw from "@/db/solutions.json";

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

export interface SolutionsSectionProps {
  /**
   * Idioma das soluções a exibir.
   * Se não for informado, detecta automaticamente pela rota atual (/pt, /en, /cn)
   * com fallback padrão para "pt".
   */
  lang?: LanguageCode;
  /** Título customizado para a coluna sticky (opcional) */
  title?: string;
  /** Texto/descrição customizada para a coluna sticky (opcional) */
  description?: string;
  /** Texto do botão da coluna sticky (opcional) */
  buttonText?: string;
  /** Link do botão da coluna sticky (opcional) */
  buttonHref?: string;
  /** Texto do botão interno de cada card (opcional) */
  cardButtonText?: string;
  /** Classes adicionais para a section externa */
  className?: string;
}

const DEFAULT_CONFIG: Record<
  LanguageCode,
  {
    badge: string;
    ctaText: string;
    ctaHref: string;
    cardButtonText: string;
  }
> = {
  pt: {
    badge: "Soluções Especializadas",
    ctaText: "Fale com um Especialista",
    ctaHref: "/pt/contato",
    cardButtonText: "Saiba mais",
  },
  en: {
    badge: "Specialized Solutions",
    ctaText: "Talk to a Specialist",
    ctaHref: "/en/contact",
    cardButtonText: "Learn more",
  },
  cn: {
    badge: "专业解决方案",
    ctaText: "咨询专家团队",
    ctaHref: "/cn/contact-cn",
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

export default function SolutionsSection({
  lang,
  title,
  description,
  buttonText,
  buttonHref,
  cardButtonText,
  className = "",
}: SolutionsSectionProps) {
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

  const leftTitle = title || groupData?.title || "Soluções";
  const leftDescription =
    description || groupData?.description || "Soluções em logística internacional";
  const leftButtonText = buttonText || config.ctaText;
  const leftButtonHref = buttonHref || config.ctaHref;
  const itemButtonLabel = cardButtonText || config.cardButtonText;

  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Coluna Esquerda: Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="flex flex-col items-start">
              {/* Badge sutil de categoria */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>{config.badge}</span>
              </div>

              {/* Título */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                {leftTitle}
              </h2>

              {/* Texto / Descrição */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg">
                {leftDescription}
              </p>

              {/* Botão */}
              <div className="mt-8 sm:mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  href={leftButtonHref}
                  rightIcon={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                  className="shadow-md shadow-orange-600/20 hover:shadow-lg hover:shadow-orange-600/30"
                >
                  {leftButtonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Quadrados de Serviços puxados do solutions.json */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export { SolutionsSection };
