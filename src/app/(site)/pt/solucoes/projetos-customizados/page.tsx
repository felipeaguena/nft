import type { Metadata } from "next";
import CustomizedProjectsClient from "@/src/components/pagesComponents/CustomizedProjectsClient";
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Projetos Customizados e Cargas Especiais no Brasil | NFT Logistics",
  description:
    "A NFT Logistics é especialista em Project Cargo, cargas pesadas, OOG (Out of Gauge) e breakbulk no Brasil. Engenharia de rota, manuseio portuário e desembaraço aduaneiro para maquinário industrial e bens de capital.",
  path: SITE_ROUTES.customizedProjects.pt,
  locale: "pt-BR",
  image: SECTION_OG_IMAGES.customizedProjects,
  keywords: [
    "projetos customizados logística",
    "project cargo Brasil",
    "cargas pesadas Brasil",
    "transporte OOG",
    "breakbulk shipping Brasil",
    "importação maquinário industrial",
    "Ex-Tarifário importação",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.customizedProjects,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/pt/solucoes/projetos-customizados#service",
  name: "Project Cargo e Logística de Cargas Especiais no Brasil",
  description:
    "Serviço especializado em logística de Project Cargo, cargas pesadas, Out of Gauge (OOG) e breakbulk no Brasil. Inclui estudo de rotas, engenharia portuária, coordenação multimodal e desembaraço aduaneiro para maquinário industrial e bens de capital.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Project Cargo Logistics",
  url: "https://www.nftlogistics.com.br/pt/solucoes/projetos-customizados",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é logística de Project Cargo no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Logística de Project Cargo no Brasil refere-se ao transporte especializado de equipamentos grandes, pesados ou complexos que não podem ser despachados por métodos de frete convencionais. Isso inclui maquinário industrial, turbinas, transformadores, plataformas offshore e equipamentos de construção. A NFT Logistics gerencia todo o processo: estudo de rota, licenças especiais, manuseio portuário, equipamentos de içamento e desembaraço aduaneiro.",
      },
    },
    {
      "@type": "Question",
      name: "O que é Ex-Tarifário e como ele pode reduzir os custos de importação de máquinas no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Ex-Tarifário é um mecanismo brasileiro de isenção de imposto de importação para bens de capital e equipamentos de informática/telecomunicações sem produção equivalente no mercado nacional. Quando aprovado pelo governo brasileiro, o Imposto de Importação (II) é reduzido para 0% ou 2%. A NFT Logistics orienta os clientes sobre elegibilidade ao Ex-Tarifário e gerencia o processo de petição, gerando economias significativas na importação de maquinário pesado.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são os principais portos para importação de cargas pesadas no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os principais portos para logística de cargas pesadas e Project Cargo no Brasil são: Porto de Santos (São Paulo) — maior porto da América Latina com infraestrutura completa para cargas pesadas; Porto de Paranaguá (Paraná) — especializado em granéis e maquinário pesado; Porto de Itaguaí (Rio de Janeiro) — estratégico para cargas offshore e grandes projetos; e Porto do Pecém (Ceará) — polo crescente para equipamentos industriais no Nordeste. A NFT Logistics opera em todos os principais portos brasileiros.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.nftlogistics.com.br/pt" },
    { "@type": "ListItem", position: 2, name: "Soluções", item: "https://www.nftlogistics.com.br/pt/solucoes" },
    { "@type": "ListItem", position: 3, name: "Projetos Customizados", item: "https://www.nftlogistics.com.br/pt/solucoes/projetos-customizados" },
  ],
};

export default function ProjetosCustomizadosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <CustomizedProjectsClient lang="pt" />
      </main>
    </>
  );
}
