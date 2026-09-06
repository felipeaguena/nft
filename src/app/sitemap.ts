import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nftlogistics.com.br";

interface RouteConfig {
  pt: string;
  en: string;
  cn: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

// Mapeamento das rotas principais do site com suporte a múltiplos idiomas
const MAIN_ROUTES: RouteConfig[] = [
  // Páginas Iniciais por Idioma
  {
    pt: "/pt",
    en: "/en",
    cn: "/cn",
    changeFrequency: "daily",
    priority: 1.0,
  },
  // Sobre a NFT Logistics
  {
    pt: "/pt/sobre",
    en: "/en/about",
    cn: "/cn/about-cn",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Hub de Soluções
  {
    pt: "/pt/solucoes",
    en: "/en/solutions",
    cn: "/cn/solutions-cn",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // Soluções: Feiras e Eventos
  {
    pt: "/pt/solucoes/feiras-e-eventos",
    en: "/en/solutions/fairs-and-events",
    cn: "/cn/solutions-cn/fairs-and-events-cn",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Regimes Aduaneiros Especiais
  {
    pt: "/pt/solucoes/regimes-especiais",
    en: "/en/solutions/special-customs-regimes",
    cn: "/cn/solutions-cn/special-customs-regimes-cn",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Projetos Customizados
  {
    pt: "/pt/solucoes/projetos-customizados",
    en: "/en/solutions/customized-projects",
    cn: "/cn/solutions-cn/customized-projetcs-cn",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Logística de Obras de Arte
  {
    pt: "/pt/solucoes/logistica-obras-arte",
    en: "/en/solutions/artworks-logistics",
    cn: "/cn/solutions-cn/artworks-logistics-cn",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Divisão de Saúde / Hospitalar (Health)
  {
    pt: "/pt/saude",
    en: "/en/health",
    cn: "/cn/health-cn",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Contato / Fale Conosco
  {
    pt: "/pt/contato",
    en: "/en/contact",
    cn: "/cn/contact-cn",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Política de Privacidade
  {
    pt: "/pt/privacidade",
    en: "/en/privacy",
    cn: "/cn/privacy-cn",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// Páginas de equipe e links rápidos (vCard / NFT Links)
const TEAM_MEMBERS = ["felipe", "marcos", "vitor"];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Rota Raiz ("/")
  sitemapEntries.push({
    url: BASE_URL,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
    alternates: {
      languages: {
        "pt-BR": `${BASE_URL}/pt`,
        "pt": `${BASE_URL}/pt`,
        "en": `${BASE_URL}/en`,
        "zh": `${BASE_URL}/cn`,
        "zh-Hans": `${BASE_URL}/cn`,
        "x-default": `${BASE_URL}/en`,
      },
    },
  });

  // 2. Rotas Principais em cada idioma com referências cruzadas (hreflang / alternates)
  MAIN_ROUTES.forEach((route) => {
    const alternateLanguages = {
      "pt-BR": `${BASE_URL}${route.pt}`,
      "pt": `${BASE_URL}${route.pt}`,
      "en": `${BASE_URL}${route.en}`,
      "zh": `${BASE_URL}${route.cn}`,
      "zh-Hans": `${BASE_URL}${route.cn}`,
      "x-default": `${BASE_URL}${route.en}`,
    };

    // Entrada em Português
    sitemapEntries.push({
      url: `${BASE_URL}${route.pt}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Entrada em Inglês
    sitemapEntries.push({
      url: `${BASE_URL}${route.en}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Entrada em Chinês
    sitemapEntries.push({
      url: `${BASE_URL}${route.cn}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });
  });

  // 3. Rotas de Apresentação de Membros / Links Digitais (/nft-links)
  TEAM_MEMBERS.forEach((member) => {
    const alternateLanguages = {
      "pt-BR": `${BASE_URL}/nft-links/pt/${member}`,
      "pt": `${BASE_URL}/nft-links/pt/${member}`,
      "en": `${BASE_URL}/nft-links/${member}`,
      "zh": `${BASE_URL}/nft-links/cn/${member}`,
      "zh-Hans": `${BASE_URL}/nft-links/cn/${member}`,
      "x-default": `${BASE_URL}/nft-links/${member}`,
    };

    // Versão padrão / inglês
    sitemapEntries.push({
      url: `${BASE_URL}/nft-links/${member}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Versão português
    sitemapEntries.push({
      url: `${BASE_URL}/nft-links/pt/${member}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Versão chinês
    sitemapEntries.push({
      url: `${BASE_URL}/nft-links/cn/${member}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: alternateLanguages,
      },
    });
  });

  return sitemapEntries;
}
