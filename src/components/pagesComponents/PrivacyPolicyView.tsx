"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  Scale,
  Share2,
  Globe,
  Lock,
  UserCheck,
  Cookie,
  Mail,
  FileText,
  Calendar,
  Clock,
  Link as LinkIcon,
  Check,
  ChevronRight,
  SlidersHorizontal,
  ArrowUp,
  Building2,
  FileCheck,
} from "lucide-react";
import { privacy as privacyDataRaw, contatos as contatosData } from "@/src/data/db";

export type LanguageCode = "pt" | "en" | "cn";

interface SecaoItem {
  titulo: string;
  detalhe: string;
}

interface Secao {
  id: string;
  numero: string;
  titulo: string;
  icone: string;
  paragrafos: string[];
  itens?: SecaoItem[];
}

interface DPOInfo {
  titulo: string;
  descricao: string;
  email: string;
  tempo_resposta: string;
  endereco: string;
}

interface PrivacyLocaleData {
  privacidade: string;
  titulo_pagina: string;
  link: string;
  cabecalho_pagina: string;
  subtitulo: string;
  badge: string;
  data_atualizacao: string;
  versao: string;
  tempo_leitura: string;
  sumario_titulo: string;
  dpo_info: DPOInfo;
  secoes: Secao[];
}

type PrivacyData = Record<LanguageCode, PrivacyLocaleData>;

const privacyData = privacyDataRaw as unknown as PrivacyData;

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Database,
  Scale,
  Share2,
  Globe,
  Lock,
  UserCheck,
  Cookie,
  Mail,
  FileText,
};

const UI_STRINGS: Record<
  LanguageCode,
  {
    homeText: string;
    homeHref: string;
    linkCopied: string;
    printDoc: string;
    backToTop: string;
    frameworkTitle: string;
    frameworkDesc: string;
    complianceTag: string;
    dpoCardTitle: string;
    contactDpoBtn: string;
    contactChannel: string;
    rightsCalloutTitle: string;
    rightsCalloutDesc: string;
  }
> = {
  pt: {
    homeText: "Início",
    homeHref: "/pt",
    linkCopied: "Link Copiado!",
    printDoc: "Imprimir / PDF",
    backToTop: "Voltar ao topo",
    frameworkTitle: "Quadro Regulatório Aplicável",
    frameworkDesc:
      "Em total observância à Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18), normas aduaneiras da Receita Federal do Brasil e padrões internacionais de privacidade.",
    complianceTag: "Certificação e Governança",
    dpoCardTitle: "Canal do Titular de Dados",
    contactDpoBtn: "Enviar e-mail ao DPO",
    contactChannel: "Canal Direto de Privacidade",
    rightsCalloutTitle: "Exercício Gratuito de Direitos",
    rightsCalloutDesc:
      "Todas as requisições de titulares de dados são processadas sem cobrança de taxas e respondidas no prazo legal de até 15 dias úteis.",
  },
  en: {
    homeText: "Home",
    homeHref: "/en",
    linkCopied: "Link Copied!",
    printDoc: "Print / PDF",
    backToTop: "Back to top",
    frameworkTitle: "Applicable Regulatory Framework",
    frameworkDesc:
      "In full compliance with the Brazilian General Data Protection Law (LGPD - Law 13,709/18), Brazilian Federal Revenue customs regulations, and global privacy standards.",
    complianceTag: "Certification & Governance",
    dpoCardTitle: "Data Subject Channel",
    contactDpoBtn: "Send email to DPO",
    contactChannel: "Direct Privacy Channel",
    rightsCalloutTitle: "Free Exercise of Rights",
    rightsCalloutDesc:
      "All requests submitted by data subjects are handled free of charge and fulfilled within the statutory timeframe of up to 15 business days.",
  },
  cn: {
    homeText: "首页",
    homeHref: "/cn",
    linkCopied: "链接已复制！",
    printDoc: "打印 / 另存为 PDF",
    backToTop: "返回顶部",
    frameworkTitle: "适用合规与法律框架",
    frameworkDesc:
      "完全遵循巴西《通用数据保护法》(LGPD 第13.709/18号法律)、巴西联邦税务海关总署监管规范及国际数据保护标准。",
    complianceTag: "数据合规与监管治理",
    dpoCardTitle: "数据主体服务通道",
    contactDpoBtn: "致信数据保护专员 (DPO)",
    contactChannel: "隐私保护直达信箱",
    rightsCalloutTitle: "数据权利免费行使承诺",
    rightsCalloutDesc:
      "所有数据主体权利申请均免费受理，并在收到之日起15个法定工作日内答复。",
  },
};

export default function PrivacyPolicyView({ lang }: { lang: LanguageCode }) {
  const content = privacyData[lang] || privacyData.pt;
  const ui = UI_STRINGS[lang] || UI_STRINGS.pt;

  const [activeSection, setActiveSection] = useState<string>(
    content.secoes[0]?.id || "introducao"
  );
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for Table of Contents and Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = content.secoes
        .map((s) => ({
          id: s.id,
          el: document.getElementById(s.id),
        }))
        .filter((item) => item.el !== null) as { id: string; el: HTMLElement }[];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.secoes]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
      {/* Decorative background gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-40 dark:opacity-25 blur-3xl overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[350px] bg-gradient-to-tr from-orange-500/30 to-amber-300/20 rounded-full mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300 mb-6"
        >
          <Link
            href={ui.homeHref}
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            {ui.homeText}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 dark:text-neutral-100">
            {content.titulo_pagina}
          </span>
        </nav>

        {/* Hero Header Section */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100/80 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800/80 mb-5">
            <ShieldCheck className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>{content.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {content.cabecalho_pagina}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 max-w-3xl leading-relaxed">
            {content.subtitulo}
          </p>

          {/* Document metadata info & Quick actions */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200/70 dark:border-neutral-800/70">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-600 dark:text-neutral-300">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                {content.data_atualizacao}
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                {content.tempo_leitura}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono text-[11px]">
                v{content.versao}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
            </div>
          </div>
        </header>

        {/* Regulatory Framework Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-200 dark:border-orange-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-orange-600 text-white rounded-xl shrink-0 shadow-md">
            <FileCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
              {ui.frameworkTitle}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {ui.frameworkDesc}
            </p>
          </div>
        </div>

        {/* Main Grid: Sticky Sidebar + Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar / Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    {content.sumario_titulo}
                  </h3>
                  <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400">
                    {content.secoes.length} seções
                  </span>
                </div>

                <nav className="space-y-1" aria-label="Sumário de Seções">
                  {content.secoes.map((secao) => {
                    const isActive = activeSection === secao.id;
                    return (
                      <a
                        key={secao.id}
                        href={`#${secao.id}`}
                        className={`group flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition-all ${
                          isActive
                            ? "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 font-semibold shadow-xs"
                            : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                      >
                        <span className="truncate pr-2">{secao.titulo}</span>
                        <span
                          className={`text-[10px] font-mono transition-opacity ${
                            isActive
                              ? "opacity-100 text-orange-600 dark:text-orange-400"
                              : "opacity-40 group-hover:opacity-100"
                          }`}
                        >
                          {secao.numero}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* DPO Quick Card */}
              <div className="p-5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span>{content.dpo_info.titulo}</span>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                  {content.dpo_info.descricao}
                </p>
                <a
                  href={`mailto:${content.dpo_info.email}?subject=LGPD%20-%20NFT%20Logistics`}
                  className="inline-flex items-center justify-center w-full gap-2 px-3.5 py-2 text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl shadow-sm transition-all"
                >
                  <span>{content.dpo_info.email}</span>
                </a>
                <p className="mt-2.5 text-[11px] text-neutral-600 dark:text-neutral-300 text-center">
                  {content.dpo_info.tempo_resposta}
                </p>
              </div>
            </div>
          </aside>

          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-8">
            {content.secoes.map((secao) => {
              const IconComp = ICON_MAP[secao.icone] || FileText;

              return (
                <section
                  key={secao.id}
                  id={secao.id}
                  className="scroll-mt-32 p-6 sm:p-8 bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs transition-shadow hover:shadow-md"
                >
                  {/* Section Title & Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                        Seção {secao.numero}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-0.5">
                        {secao.titulo}
                      </h2>
                    </div>
                  </div>

                  {/* Section Paragraphs */}
                  <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {secao.paragrafos.map((paragrafo, idx) => (
                      <p key={idx}>{paragrafo}</p>
                    ))}
                  </div>

                  {/* Structured Items / Subsections if present */}
                  {secao.itens && secao.itens.length > 0 && (
                    <div className="mt-6 space-y-3 pt-6 border-t border-neutral-100 dark:border-neutral-800/80">
                      {secao.itens.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-100 dark:border-neutral-800/60"
                        >
                          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            {item.titulo}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-3.5">
                            {item.detalhe}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}

            {/* Rights Callout Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/30 mb-4">
                  <UserCheck className="w-4 h-4 text-orange-400" />
                  <span>{ui.rightsCalloutTitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  {content.dpo_info.titulo}
                </h3>
                <p className="text-sm text-neutral-200 max-w-2xl leading-relaxed mb-6">
                  {ui.rightsCalloutDesc} {content.dpo_info.descricao}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${content.dpo_info.email}?subject=Solicitacao%20de%20Privacidade%20-%20NFT%20Logistics`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-orange-600 hover:bg-orange-500 text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{ui.contactDpoBtn}</span>
                  </a>

                  {contatosData?.whatsapp?.[0] && (
                    <a
                      href={`https://wa.me/${contatosData.whatsapp[0].replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
                    >
                      <span>WhatsApp: {contatosData.whatsapp[0]}</span>
                    </a>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-700 flex flex-wrap items-center justify-between text-xs text-neutral-300 gap-2">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-orange-400" />
                    NFT Logistics - {content.dpo_info.endereco}
                  </span>
                  <span>{content.dpo_info.tempo_resposta}</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer z-40 border border-neutral-700/50"
          aria-label={ui.backToTop}
          title={ui.backToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
