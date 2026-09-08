import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/src/lib/seo";

interface RouteConfig {
  pt: string;
  en: string;
  cn: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

// Mapeamento das rotas públicas principais indexáveis
// NOTA: As rotas de cartão digital ("/nft-links") estão estritamente excluídas do sitemap
const MAIN_ROUTES: RouteConfig[] = [
  // Páginas Iniciais por Idioma
  {
    ...SITE_ROUTES.home,
    changeFrequency: "daily",
    priority: 1.0,
  },
  // Sobre a NFT Logistics
  {
    ...SITE_ROUTES.about,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Hub de Soluções
  {
    ...SITE_ROUTES.solutions,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // Soluções: Feiras e Eventos
  {
    ...SITE_ROUTES.fairsAndEvents,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Regimes Aduaneiros Especiais
  {
    ...SITE_ROUTES.specialRegimes,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Projetos Customizados
  {
    ...SITE_ROUTES.customizedProjects,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Soluções: Logística de Obras de Arte
  {
    ...SITE_ROUTES.artworks,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Divisão de Saúde / Hospitalar (Health)
  {
    ...SITE_ROUTES.health,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  // Contato / Fale Conosco
  {
    ...SITE_ROUTES.contact,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Política de Privacidade
  {
    ...SITE_ROUTES.privacy,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Rota Raiz ("/")
  sitemapEntries.push({
    url: SITE_URL,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
    alternates: {
      languages: {
        "pt-BR": `${SITE_URL}/pt`,
        pt: `${SITE_URL}/pt`,
        en: `${SITE_URL}/en`,
        zh: `${SITE_URL}/cn`,
        "zh-Hans": `${SITE_URL}/cn`,
        "x-default": `${SITE_URL}/en`,
      },
    },
  });

  // 2. Rotas Principais em cada idioma com referências cruzadas (hreflang / alternates)
  MAIN_ROUTES.forEach((route) => {
    const alternateLanguages = {
      "pt-BR": `${SITE_URL}${route.pt}`,
      pt: `${SITE_URL}${route.pt}`,
      en: `${SITE_URL}${route.en}`,
      zh: `${SITE_URL}${route.cn}`,
      "zh-Hans": `${SITE_URL}${route.cn}`,
      "x-default": `${SITE_URL}${route.en}`,
    };

    // Entrada em Português
    sitemapEntries.push({
      url: `${SITE_URL}${route.pt}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Entrada em Inglês
    sitemapEntries.push({
      url: `${SITE_URL}${route.en}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });

    // Entrada em Chinês
    sitemapEntries.push({
      url: `${SITE_URL}${route.cn}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages,
      },
    });
  });

  return sitemapEntries;
}
