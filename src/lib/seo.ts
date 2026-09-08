import type { Metadata } from "next";

export const SITE_URL = "https://www.nftlogistics.com.br";

export type LanguageCode = "pt" | "en" | "cn";

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  lang?: LanguageCode;
  locale?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  alternates?: {
    pt: string;
    en: string;
    cn: string;
  };
  languageAlternates?: {
    pt: string;
    en: string;
    cn: string;
  };
}

export const SITE_ROUTES = {
  home: {
    pt: "/pt",
    en: "/en",
    cn: "/cn",
  },
  about: {
    pt: "/pt/sobre",
    en: "/en/about",
    cn: "/cn/about",
  },
  solutions: {
    pt: "/pt/solucoes",
    en: "/en/solutions",
    cn: "/cn/solutions",
  },
  fairsAndEvents: {
    pt: "/pt/solucoes/feiras-e-eventos",
    en: "/en/solutions/fairs-and-events",
    cn: "/cn/solutions/fairs-and-events",
  },
  specialRegimes: {
    pt: "/pt/solucoes/regimes-especiais",
    en: "/en/solutions/special-customs-regimes",
    cn: "/cn/solutions/special-customs-regimes",
  },
  customizedProjects: {
    pt: "/pt/solucoes/projetos-customizados",
    en: "/en/solutions/customized-projects",
    cn: "/cn/solutions/customized-projects",
  },
  artworks: {
    pt: "/pt/solucoes/logistica-obras-arte",
    en: "/en/solutions/artworks-logistics",
    cn: "/cn/solutions/artworks-logistics",
  },
  health: {
    pt: "/pt/saude",
    en: "/en/health",
    cn: "/cn/health",
  },
  contact: {
    pt: "/pt/contato",
    en: "/en/contact",
    cn: "/cn/contact",
  },
  privacy: {
    pt: "/pt/privacidade",
    en: "/en/privacy",
    cn: "/cn/privacy",
  },
} as const;

export const SECTION_OG_IMAGES = {
  home: "/imagens/operacao-nft-logistics.webp",
  about: "/imagens/operacao-nft-logistics-3.webp",
  solutions: "/imagens/operacao-nft-logistics-2.webp",
  fairsAndEvents: "/imagens/feira-nft-logistics.webp",
  specialRegimes: "/imagens/armazem.webp",
  customizedProjects: "/imagens/operacao-nft-logistics-5.webp",
  artworks: "/imagens/nft-art.webp",
  health: "/imagens/Home-Health-NFT-Logistics.webp",
  contact: "/imagens/bg-nft-logistics.webp",
  privacy: "/imagens/operacao-nft-logistics-4.webp",
} as const;

export function constructMetadata({
  title,
  description,
  path,
  lang,
  locale,
  image = SECTION_OG_IMAGES.home,
  keywords,
  noIndex = false,
  alternates,
  languageAlternates,
}: SeoConfig): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const fullUrl = `${SITE_URL}${cleanPath}`;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  const resolvedLang: LanguageCode =
    lang || (locale?.startsWith("pt") ? "pt" : locale?.startsWith("zh") ? "cn" : "en");

  const localeMap: Record<LanguageCode, string> = {
    pt: "pt_BR",
    en: "en_US",
    cn: "zh_CN",
  };

  const resolvedLocale = locale || localeMap[resolvedLang] || "en_US";
  const finalAlternates = alternates || languageAlternates;

  const languagesMap = finalAlternates
    ? {
        "pt-BR": `${SITE_URL}${finalAlternates.pt}`,
        en: `${SITE_URL}${finalAlternates.en}`,
        zh: `${SITE_URL}${finalAlternates.cn}`,
        "x-default": `${SITE_URL}${finalAlternates.en}`,
      }
    : undefined;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: fullUrl,
      ...(languagesMap ? { languages: languagesMap } : {}),
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "NFT Logistics",
      locale: resolvedLocale,
      type: "website",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@nftlogistics",
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function constructLinkTreeMetadata({
  personKey,
  lang = "pt",
}: {
  personKey: "felipe" | "marcos" | "vitor" | string;
  lang?: LanguageCode;
}): Metadata {
  const namesMap: Record<string, string> = {
    felipe: "Felipe Aguena",
    marcos: "Marcos Krekovski",
    vitor: "Vítor Schimmelpfeng",
  };
  const name = namesMap[personKey] || personKey;

  const titles: Record<LanguageCode, string> = {
    pt: `${name} | NFT Logistics`,
    en: `${name} | NFT Logistics`,
    cn: `${name} | NFT Logistics`,
  };

  const descriptions: Record<LanguageCode, string> = {
    pt: `Cartão de visitas digital e canais de contato de ${name} - NFT Logistics. Especialistas em feiras, eventos, obras de arte e regimes especiais.`,
    en: `Digital business card and contact channels for ${name} at NFT Logistics. Specialists in fairs, events, art logistics, and special customs regimes.`,
    cn: `${name} 的数字名片与联络方式 - NFT Logistics 巴西会展物流、特种工程运输与进出口关务专家。`,
  };

  const path = lang === "en" ? `/nft-links/${personKey}` : `/nft-links/${lang}/${personKey}`;

  return constructMetadata({
    title: titles[lang],
    description: descriptions[lang],
    path,
    lang,
    image: `/perfil/${personKey}-perfil.webp`,
    noIndex: true,
    alternates: {
      pt: `/nft-links/pt/${personKey}`,
      en: `/nft-links/${personKey}`,
      cn: `/nft-links/cn/${personKey}`,
    },
  });
}
