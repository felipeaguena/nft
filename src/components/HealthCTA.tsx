"use client";

import React from "react";
import { usePathname } from "next/navigation";
import CTA from "./CTA";

export type LanguageCode = "pt" | "en" | "cn";

export interface HealthCTAProps {
  /** Idioma explícito ("pt" | "en" | "cn"). Se omitido, detecta via rota. */
  lang?: LanguageCode;
  /** Título customizado (opcional, padrão: "Health Logistics") */
  title?: React.ReactNode;
  /** Texto/descrição customizado (opcional) */
  description?: React.ReactNode;
  /** Texto do botão customizado (opcional) */
  buttonText?: React.ReactNode;
  /** Link de redirecionamento customizado (opcional) */
  buttonHref?: string;
  /** Classes CSS adicionais para o container do CTA */
  className?: string;
}

interface LocaleContent {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const HEALTH_LOCALES: Record<LanguageCode, LocaleContent> = {
  pt: {
    title: "Health Logistics",
    description:
      "Importação, exportação, admissões temporárias, transportes nacionais e internacionais, manuseio especializado, confecção de caixas e acompanhamento personalizado de todo o processo.",
    buttonText: "Veja mais",
    buttonHref: "/pt/saude",
  },
  en: {
    title: "Health Logistics",
    description:
      "Import, export, temporary admissions, domestic and international transport, specialized handling, crate manufacturing, and personalized end-to-end monitoring.",
    buttonText: "See more",
    buttonHref: "/en/health",
  },
  cn: {
    title: "Health Logistics",
    description:
      "进出口、暂时进出境、国内外运输、专业装卸、定制包装箱制作以及全程专属跟踪服务。",
    buttonText: "查看更多",
    buttonHref: "/cn/health",
  },
};

export default function HealthCTA({
  lang,
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}: HealthCTAProps) {
  const pathname = usePathname();

  // Detecta o idioma da rota atual se não for passado diretamente
  const resolvedLang: LanguageCode = React.useMemo(() => {
    if (lang) return lang;
    if (pathname?.startsWith("/pt")) return "pt";
    if (pathname?.startsWith("/cn")) return "cn";
    if (pathname?.startsWith("/en")) return "en";
    return "pt";
  }, [lang, pathname]);

  const content = HEALTH_LOCALES[resolvedLang];

  return (
    <CTA
      imageSrc="/imagens/health-1-nft-logistics.jpg"
      imageAlt={title ? String(title) : "Health Logistics NFT"}
      title={title || content.title}
      description={description || content.description}
      buttonText={buttonText || content.buttonText}
      buttonHref={buttonHref || content.buttonHref}
      contentPosition="left"
      className={className}
    />
  );
}
