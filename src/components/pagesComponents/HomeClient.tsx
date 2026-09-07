"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Boxes,
  Palette,
  Truck,
  Globe2,
  Anchor,
  Plane,
  Warehouse,
  CheckCircle2,
  FileCheck2,
  TrendingUp,
  MessageCircle,
  Building2,
  Cpu,
  HeartPulse,
  MessageSquareDot,
} from "lucide-react";
import Button from "../Button";
import HealthCTA from "../HealthCTA";
import SolutionsShowcase from "../SolutionsShowcase";

import { LanguageCode } from "@/src/types";
import { HOME_CONTENT } from "@/src/data/home";

export interface HomeClientProps {
  lang: LanguageCode;
}

export default function HomeClient({ lang }: HomeClientProps) {
  const t = HOME_CONTENT[lang] || (HOME_CONTENT as any).pt;

  return (
    <div className="w-full">
      {/* 1. SEÇÃO DE ESTATÍSTICAS E PROVA SOCIAL FLUTUANTE */}
      <section className="relative w-full sm:mt-5 md:mt-0 lg:mt-0 -lg:-mt-30 z-20 py-12 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors duration-200">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {t.stats.map((stat: any, idx: number) => (
        <div
          key={idx}
          className={`group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 ${
            idx > 0 ? "p-6 sm:p-6 lg:p-8" : ""
          }`}
        >
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors duration-300">
              {stat.value}
            </span>
          </div>
          <div className="mt-1 text-base font-bold text-neutral-900 dark:text-white group-hover:text-white transition-colors duration-300">
            {stat.label}
          </div>
          <div className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 group-hover:text-orange-100 transition-colors duration-300 leading-relaxed">
            {stat.detail}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 2. HUBS LOGÍSTICOS ESTRATÉGICOS NO BRASIL */}
      <section className="py-12 sm:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-2">
                <Warehouse className="w-3.5 h-3.5" />
                <span>Infraestrutura Nacional</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.hubsTitle}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 max-w-md">
              {t.hubsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {t.hubs.map((hub: any, idx: number) => {
              const HubIcon = hub.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-200 hover:shadow-md hover:border-orange-300 dark:hover:border-orange-700/60 flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                      {hub.type}
                    </span>
                    <HubIcon className="w-4 h-4 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug mb-1">
                      {hub.name}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                      {hub.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VITRINE DE SOLUÇÕES ESTRATÉGICAS */}
      <SolutionsShowcase lang={lang} />

      {/* 4. FLUXO OPERACIONAL EM 4 ETAPAS (COMO FUNCIONA) */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.process.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.process.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step: any, idx: number) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-orange-600/30 dark:text-orange-500/30 tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange-100/60 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VITRINE DE SETORES ATENDIDOS (CARDS FOTOGRÁFICOS) */}
      <section className="py-16 sm:py-20 bg-neutral-100/40 dark:bg-neutral-900/30 border-t border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>{t.sectors.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.sectors.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sectors.cards.map((card: any, idx: number) => {
              const CardIcon = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Imagem do Setor */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                        <CardIcon className="w-3.5 h-3.5 text-orange-400" />
                        <span>{card.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-500">
                      <span>Ver detalhes do setor</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAIS COMPETITIVOS EM 4 PILARES VISUAIS */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.differentials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.differentials.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.differentials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.differentials.cards.map((diff: any, idx: number) => {
              const DiffIcon = diff.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-white group-hover:text-orange-600 transition-colors duration-300 mb-5">
                      <DiffIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-white transition-colors duration-300 mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. DESTAQUE HEALTH LOGISTICS */}
      <HealthCTA lang={lang} />

      {/* 8. BANNER DE CONVERSÃO FINAL */}
      <section className="py-16 sm:py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={t.cta.btnPrimaryHref}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg shadow-orange-600/30"
            >
              {t.cta.btnPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={t.cta.btnSecondaryHref}
              target="_blank"
              leftIcon={<MessageSquareDot className="w-5 h-5 text-emerald-400" />}
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              {t.cta.btnSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
