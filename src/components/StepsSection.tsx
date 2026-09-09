"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Boxes,
  Sparkles,
  FileCheck2,
  Workflow,
  FileSpreadsheet,
  Landmark,
  Truck,
  CheckCircle2,
  Milestone,
  ScrollText,
  Ship,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { stepsSection as rawStepsData } from "@/src/data/db";

export type SolutionPageKey =
  | "regimes-especiais"
  | "logistica-obras-arte"
  | "projetos-customizados"
  | "feiras-e-eventos";

export type LanguageCode = "pt" | "en" | "cn";

export interface StepItemData {
  num: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface StepsSectionData {
  id: string;
  tag: string;
  title: string;
  description: string;
  steps: StepItemData[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  FileText,
  Boxes,
  Sparkles,
  FileCheck2,
  Workflow,
  FileSpreadsheet,
  Landmark,
  Truck,
  CheckCircle2,
  Milestone,
  ScrollText,
  Ship,
  ShieldCheck,
};

const stepsData = rawStepsData as Record<
  SolutionPageKey,
  Record<LanguageCode, StepsSectionData>
>;

const GRID_COLS_MAP: Record<3 | 4 | 5, string> = {
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
};

export interface StepsSectionProps {
  pageKey?: SolutionPageKey;
  lang?: LanguageCode;
  data?: StepsSectionData;
  className?: string;
  columns?: 3 | 4 | 5;
}

export default function StepsSection({
  pageKey,
  lang = "pt",
  data,
  className = "",
  columns,
}: StepsSectionProps) {
  const content =
    data ||
    (pageKey && stepsData[pageKey]
      ? stepsData[pageKey][lang] || stepsData[pageKey].pt
      : null);

  if (!content) {
    return null;
  }

  const effectiveCols: 3 | 4 | 5 =
    columns ||
    (content.steps.length === 3 ? 3 : content.steps.length === 4 ? 4 : 5);

  return (
    <section
      id={content.id}
      className={`relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 ${className}`}
    >
      {/* Âncoras redundantes para garantir compatibilidade com links #steps e #etapas */}
      <div id="etapas" className="sr-only" />
      <div id="steps" className="sr-only" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
            {content.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {content.title}
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className={`grid ${GRID_COLS_MAP[effectiveCols]} gap-6`}>
          {content.steps.map((step, idx) => {
            const IconComp =
              (step.icon && ICON_MAP[step.icon]) || FileText;

            return (
              <div
                key={step.num || idx}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-orange-500/30 group-hover:text-white/50 transition-colors duration-300">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-white group-hover:text-orange-600 transition-colors duration-300 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-white transition-colors duration-300 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
