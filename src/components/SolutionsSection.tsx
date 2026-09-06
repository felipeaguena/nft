"use client";

import React from "react";
import SolutionsShowcase, {
  SolutionsShowcaseProps,
  LanguageCode,
  SolutionCardItem,
  SolutionsGroupData,
} from "./SolutionsShowcase";

export interface SolutionsSectionProps extends SolutionsShowcaseProps {
  /** Texto customizado para o botão geral (compatibilidade legada) */
  buttonText?: string;
  /** Link customizado para o botão geral (compatibilidade legada) */
  buttonHref?: string;
  /** Descrição customizada (compatibilidade legada) */
  description?: string;
  /** Texto do botão interno de cada card (compatibilidade legada) */
  cardButtonText?: string;
}

export default function SolutionsSection({
  buttonText,
  buttonHref,
  description,
  subtitle,
  btnAllText,
  btnAllHref,
  ...props
}: SolutionsSectionProps) {
  return (
    <SolutionsShowcase
      btnAllText={btnAllText ?? buttonText}
      btnAllHref={btnAllHref ?? buttonHref}
      subtitle={subtitle ?? description}
      {...props}
    />
  );
}

export { SolutionsSection, SolutionsShowcase };
export type { LanguageCode, SolutionCardItem, SolutionsGroupData };
