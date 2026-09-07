"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/HeroSection";
import { CONTENT } from "@/src/data/solucoes";
import CtaSection from "@/src/components/CtaSection";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Scale,
  Boxes,
  Palette,
  Clock,
  Truck,
  Users,
  CheckCircle2,
  FileText,
  ChevronDown,
  Activity,
  Layers,
  Zap,
  Globe2,
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

interface SolucoesClientProps {
  lang?: LanguageCode;
}



export default function SolucoesClient({ lang = "pt" }: SolucoesClientProps) {
  const t = (CONTENT as any)[lang] || (CONTENT as any).pt;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    t.cta.whatsappMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título de impacto, subtítulo, botões e trust badge                        */}
      {/* ========================================================================= */}
      <HeroSection
        pageKey="solucoes"
        lang={lang}
        whatsappHref={whatsappHref}
      />

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                    */}
      {/* Imagem com badge flutuante + Texto de autoridade aduaneira                 */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda (6 colunas): Imagem com Badge */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-2.jpg"
                    alt="Operação de comércio exterior e desembaraço aduaneiro da NFT Logistics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {t.col2.floatingBadgeTitle}
                    </p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
                      {t.col2.floatingBadgeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (6 colunas): Texto */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {t.col2.tag}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.col2.title}
              </h2>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.col2.paragraphs.map((p: any, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: AS 4 GRANDES SOLUÇÕES EM DESTAQUE                                */}
      {/* Grid com 4 cards interativos completos                                    */}
      {/* ========================================================================= */}
      <section
        id="solucoes-grid"
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.solutionsGrid.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.solutionsGrid.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.solutionsGrid.description}
            </p>
          </div>

          {/* Grid de 4 cards (2x2 em telas médias/grandes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.solutionsGrid.items.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <div
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
                    <div className="p-8 sm:p-10">
                      {/* Título */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Bullets de diferenciais */}
                      <ul className="space-y-2.5 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-6">
                        {item.bullets.map((b: any, bIdx: number) => (
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
                  <div className="px-8 sm:p-10 ">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-neutral-200/70 hover:bg-orange-600 hover:text-white dark:bg-white/5 dark:hover:bg-orange-600 border border-neutral-300/80 hover:border-orange-600 dark:border-white/10 text-neutral-800 dark:text-white text-sm font-semibold transition-all duration-200 group-hover:shadow-md cursor-pointer"
                    >
                      <span>{t.solutionsGrid.buttonLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: VANTAGENS COMPETITIVAS (2 COLUNAS COM STICKY + FOTO OPERACIONAL) */}
      {/* Esquerda fixa com card visual + Direita com 4 cards de diferenciais       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda (5 colunas): Sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>{t.whyUs.tag}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.whyUs.title}
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                {t.whyUs.description}
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.whyUs.secondaryText}
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>{t.whyUs.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna da Direita (7 colunas): 4 Cards */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {t.whyUs.cards.map((card: any, cIdx: number) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={cIdx}
                    className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 dark:border-orange-400/30 flex items-center justify-center shrink-0 transition-all duration-200 dark:group-hover:text-white group-hover:border-orange-600 dark:group-hover:border-orange-400">
                        <CardIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO VISUAL: OPERAÇÕES EM FOCO (GALERIA OPERACIONAL DE CAMPO)             */}
      {/* 4 fotos reais com categorias e descrições técnicas                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.gallery.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.gallery.description}
            </p>
          </div>

          {/* Grid de 4 fotos em 2 colunas / 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.gallery.items.map((item: any, gIdx: number) => (
              <div
                key={gIdx}
                className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: PASSO A PASSO COM 5 ETAPAS                                       */}
      {/* Metodologia Operacional de 01 a 05                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.methodology.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.methodology.title}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.methodology.description}
            </p>
          </div>

          {/* Grid das 5 Etapas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.methodology.steps.map((step: any, index: number) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-orange-500/30">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 6: SETORES E VERTICAIS ATENDIDAS                                    */}
      {/* Grid com indústrias e link especial para saúde                            */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.sectors.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sectors.items.map((sec: any, sIdx: number) => {
              const SecIcon = sec.icon;
              return (
                <div
                  key={sIdx}
                  className="group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between shadow-md dark:shadow-lg hover:shadow-xl hover:shadow-orange-600/10"
                >
                  <div>
                    {/* Header com Imagem do Setor */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={sec.image}
                        alt={sec.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                      {/* Ícone flutuante sobre a imagem */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-11 h-11 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/30 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <SecIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Texto do Setor */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                        {sec.name}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 7: FAQ INTERATIVO (ACCORDION)                                       */}
      {/* Dúvidas Frequentes                                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.faq.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.faq.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.faq.description}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item: any, fIdx: number) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-sm dark:shadow-md overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-orange-600 dark:hover:text-black transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed border-t border-neutral-200/80 dark:border-neutral-800/60 pt-4 bg-white/70 dark:bg-neutral-900/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 8: CTA PADRÃO COM WHATSAPP OFICIAL                                  */}
      {/* Fundo escuro, botão verde #25D366 com ícone do WhatsApp                   */}
      <CtaSection
        pageKey="solucoes"
        lang={lang}
        whatsappHref={whatsappHref}
      />
    </div>
  );
}
