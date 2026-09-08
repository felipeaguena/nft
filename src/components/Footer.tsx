"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/src/components/icons";

import navData from "@/db/nav.json";
import solutionsData from "@/db/solutions.json";
import contatosData from "@/db/contatos.json";
import privacyData from "@/db/privacy.json";

export type FooterLanguage = "pt" | "en" | "cn";

export interface FooterProps {
  /** Idioma customizado opcional. Se não informado, detecta pela rota (/pt, /en, /cn) */
  lang?: FooterLanguage;
  /** Classes CSS adicionais */
  className?: string;
}

interface NavObjectValue {
  rota_principal?: string;
  main_route?: string;
  servicos?: Array<{ nome: string; rota: string }>;
  services?: Array<{ nome: string; rota: string }>;
}

/** Títulos e labels das colunas por idioma */
const COLUMN_TITLES: Record<
  FooterLanguage,
  {
    navigation: string;
    solutions: string;
    contact: string;
    privacy: string;
    copyright: string;
    developedBy: string;
    tagline: string;
  }
> = {
  pt: {
    navigation: "Navegação",
    solutions: "Soluções",
    contact: "Contatos",
    privacy: "Privacidade",
    copyright: "NFT Logistics. Todos os direitos reservados.",
    developedBy: "Desenvolvido por",
    tagline: "Logística internacional, regimes especiais e comércio exterior com excelência e segurança.",
  },
  en: {
    navigation: "Navigation",
    solutions: "Solutions",
    contact: "Contact",
    privacy: "Privacy",
    copyright: "NFT Logistics. All rights reserved.",
    developedBy: "Developed by",
    tagline: "International logistics, special customs regimes, and global freight solutions.",
  },
  cn: {
    navigation: "导航",
    solutions: "解决方案",
    contact: "联系方式",
    privacy: "隐私政策",
    copyright: "NFT Logistics. 保留所有权利。",
    developedBy: "技术支持",
    tagline: "国际物流、海关特殊制度与全球贸易综合解决方案。",
  },
};

/**
 * Normaliza o link da rota de solução de acordo com o idioma ativo
 */
function normalizeSolutionLink(link: string, lang: FooterLanguage): string {
  if (link.startsWith("/pt") || link.startsWith("/en") || link.startsWith("/cn")) {
    return link;
  }

  if (lang === "pt") {
    if (link === "/solucoes/feiras-eventos") {
      return "/pt/solucoes/feiras-e-eventos";
    }
    return `/pt${link}`;
  }

  if (lang === "en") {
    return `/en${link}`;
  }

  if (lang === "cn") {
    return `/cn${link}`;
  }

  return link;
}

export default function Footer({ lang: propLang, className = "" }: FooterProps) {
  const pathname = usePathname();
  const getInitialLang = (): FooterLanguage => {
    if (propLang) return propLang;
    if (pathname?.startsWith("/cn")) return "cn";
    if (pathname?.startsWith("/en")) return "en";
    return "pt";
  };
  const [currentLang, setCurrentLang] = useState<FooterLanguage>(getInitialLang);

  // Sincroniza idioma via prop, pathname ou evento global de troca de idioma
  useEffect(() => {
    if (propLang) {
      setCurrentLang(propLang);
      return;
    }

    if (pathname?.startsWith("/cn")) {
      setCurrentLang("cn");
    } else if (pathname?.startsWith("/en")) {
      setCurrentLang("en");
    } else {
      setCurrentLang("pt");
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<FooterLanguage>;
      if (customEvent.detail && ["pt", "en", "cn"].includes(customEvent.detail)) {
        setCurrentLang(customEvent.detail);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
    };
  }, [propLang, pathname]);

  const titles = COLUMN_TITLES[currentLang] || COLUMN_TITLES.pt;

  // 1. Link da Home e Logo (igual ao Nav)
  const homeLink = `/${currentLang}`;

  // 2. Links da Coluna de Navegação (extraídos de nav.json)
  const navLinks = useMemo(() => {
    const rawNav = (navData as Record<string, Record<string, unknown>>)[currentLang] || navData.pt;
    const items: Array<{ label: string; href: string }> = [];

    for (const [key, val] of Object.entries(rawNav)) {
      if (typeof val === "string") {
        items.push({ label: key, href: val });
      } else if (typeof val === "object" && val !== null) {
        const obj = val as NavObjectValue;
        const mainRoute = obj.rota_principal || obj.main_route || `/${currentLang}/solucoes`;
        items.push({ label: key, href: mainRoute });
      }
    }
    return items;
  }, [currentLang]);

  // 3. Links da Coluna de Soluções (extraídos de solutions.json / solucoes.json)
  const solutionsList = useMemo(() => {
    const rawSolutions = (solutionsData as Record<string, unknown>)[currentLang] as
      | { solucoes?: { sections?: Record<string, { title: string; link: string }> }; solutions?: { sections?: Record<string, { title: string; link: string }> } }
      | undefined;

    const group = rawSolutions?.solucoes || rawSolutions?.solutions;
    const sections = group?.sections || {};

    return Object.entries(sections).map(([key, item]) => ({
      key,
      title: item.title,
      href: normalizeSolutionLink(item.link, currentLang),
    }));
  }, [currentLang]);

  // 4. Dados da Coluna de Contatos (extraídos de contatos.json / contato.json)
  const contactInfo = useMemo(() => {
    return {
      email: contatosData.email || "comercial@nftlogistics.com.br",
      whatsapp: Array.isArray(contatosData.whatsapp) ? contatosData.whatsapp : [],
      redesSociais: contatosData.redesSociais || {},
    };
  }, []);

  // 5. Dados da Coluna de Privacidade (extraídos de privacy.json)
  const privacyInfo = useMemo(() => {
    const rawPrivacy = (privacyData as Record<string, { titulo_pagina?: string; link?: string; badge?: string; dpo_info?: { email?: string } }>)[currentLang] || privacyData.pt;
    return {
      title: rawPrivacy?.titulo_pagina || "Política de Privacidade",
      href: rawPrivacy?.link || `/${currentLang}/privacidade`,
      badge: rawPrivacy?.badge || "LGPD & Conformidade Global",
      dpoEmail: rawPrivacy?.dpo_info?.email,
    };
  }, [currentLang]);

  return (
    <footer className={`bg-neutral-950 text-white border-t border-neutral-900 ${className}`}>
      {/* Container Principal: Grid de 5 Colunas no Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ================= COLUNA 1: LOGO & EMPRESA ================= */}
          <div className="flex flex-col items-start space-y-4">
            <Link
              href={homeLink}
              className="inline-flex items-center transition-opacity hover:opacity-90"
              aria-label="NFT Logistics Home"
            >
              <Image
                src="/logo/nft-logistics-logo-branco.webp"
                alt="NFT Logistics"
                width={150}
                height={84}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xs">
              {titles.tagline}
            </p>
            
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={privacyInfo.href}
                  className="group inline-flex items-center gap-1.5 font-medium text-white hover:text-white/70 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{privacyInfo.title}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUNA 2: NAVEGAÇÃO ================= */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1.5 border-b border-neutral-800 inline-block">
              {titles.navigation}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-white/70 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUNA 3: SOLUÇÕES ================= */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1.5 border-b border-neutral-800 inline-block">
              {titles.solutions}
            </h3>
            <ul className="space-y-2.5">
              {solutionsList.map((solution) => (
                <li key={solution.key}>
                  <Link
                    href={solution.href}
                    className="text-sm font-medium text-white hover:text-white/70 transition-colors inline-block"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUNA 4: CONTATOS ================= */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 pb-1.5 border-b border-neutral-800 inline-block">
              {titles.contact}
            </h3>
            <ul className="space-y-3 text-sm">
              {/* E-mail */}
              {contactInfo.email && (
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{contactInfo.email}</span>
                  </a>
                </li>
              )}

              {/* WhatsApp */}
              {contactInfo.whatsapp.map((phone) => {
                const cleanNumber = phone.replace(/\D/g, "");
                return (
                  <li key={phone}>
                    <a
                      href={`https://wa.me/${cleanNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{phone}</span>
                    </a>
                  </li>
                );
              })}

              {/* Redes Sociais */}
              {(contactInfo.redesSociais.instagram || contactInfo.redesSociais.linkedin) && (
                <li className="pt-2">
                  <div className="flex items-center gap-3">
                    {contactInfo.redesSociais.instagram && (
                      <a
                        href={contactInfo.redesSociais.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram NFT Logistics"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:text-white transition-all hover:scale-105"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {contactInfo.redesSociais.linkedin && (
                      <a
                        href={contactInfo.redesSociais.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn NFT Logistics"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:text-white transition-all hover:scale-105"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= DIV INFERIOR COM LOGO STUDIO AGUENA ================= */}
      <div className="border-t border-neutral-900 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-neutral-300 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {titles.copyright}
          </p>

          {/* Créditos com o logo studioaguena.webp */}
          <div className="flex items-center gap-2.5 text-xs text-neutral-300">
            <span>{titles.developedBy}</span>
            <a
              href="https://studioaguena.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity"
              aria-label="Studio Aguena"
              title="Studio Aguena"
            >
              <Image
                src="/logo/studioaguena.webp"
                alt="Studio Aguena"
                width={100}
                height={30}
                className="h-5 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
