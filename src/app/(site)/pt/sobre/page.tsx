import type { Metadata } from "next";
import SobreClient from "@/src/components/pagesComponents/SobreClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Sobre a NFT Logistics | Especialistas em Logística Internacional e Regimes Especiais no Brasil",
  description:
    "A NFT Logistics é uma empresa brasileira fundada há mais de 15 anos, especializada em desembaraço aduaneiro, regimes aduaneiros especiais, feiras internacionais, logística de obras de arte e saúde. Atuamos nos portos de Santos e Paranaguá e aeroportos GRU, VCP e GIG.",
  path: "/pt/sobre",
  lang: "pt",
  image: SECTION_OG_IMAGES.about,
  keywords: [
    "Sobre a NFT Logistics",
    "Empresa de Logística Internacional",
    "Despachante Aduaneiro Brasil",
    "Comércio Exterior Brasil",
    "Assessoria em Regimes Especiais",
    "Operador Logístico Internacional",
    "NFT Logistics história",
  ],
  alternates: SITE_ROUTES.about,
});

// ─── Schema.org: AboutPage + BreadcrumbList ───────────────────────────────
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.nftlogistics.com.br/pt/sobre#aboutpage",
  name: "Sobre a NFT Logistics",
  description:
    "A NFT Logistics é uma empresa brasileira especializada em logística internacional, desembaraço aduaneiro e regimes aduaneiros especiais. Fundada há mais de 15 anos, ajudamos empresas globais a operar no Brasil sem surpresas regulatórias.",
  url: "https://www.nftlogistics.com.br/pt/sobre",
  mainEntity: {
    "@id": "https://www.nftlogistics.com.br/#organization",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://www.nftlogistics.com.br/pt" },
      { "@type": "ListItem", position: 2, name: "Sobre", item: "https://www.nftlogistics.com.br/pt/sobre" },
    ],
  },
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <main className="min-h-screen">
        <SobreClient lang="pt" />
      </main>
    </>
  );
}
