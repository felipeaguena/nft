import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Logística para Feiras e Eventos Internacionais | NFT Logistics",
  description:
    "A NFT Logistics é especialista em logística para feiras e eventos internacionais no Brasil: admissão temporária, transporte porta-ao-estande, desembaraço aduaneiro prioritário em Santos, GRU, VCP e Paranaguá.",
  path: "/pt/solucoes/feiras-e-eventos",
  lang: "pt",
  image: SECTION_OG_IMAGES.fairsAndEvents,
  keywords: [
    "Logística para Feiras e Eventos",
    "Feiras Internacionais Brasil",
    "Admissão Temporária Feiras",
    "Transporte Porta ao Estande",
    "Desembaraço Aduaneiro Feiras",
    "Logística para Exposições",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.fairsAndEvents,
});

// ─── Schema.org: Service + FAQPage ──────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/pt/solucoes/feiras-e-eventos#service",
  name: "Logística para Feiras e Exposições Internacionais no Brasil",
  alternateName: "Logística para Feiras Internacionais",
  description:
    "Serviço completo de logística para feiras e exposições internacionais no Brasil. Inclui admissão temporária, transporte porta-ao-estande, desembaraço aduaneiro prioritário, suporte presencial durante o evento e gestão completa da reexportação ao final da feira.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Logística para Feiras Internacionais",
  url: "https://www.nftlogistics.com.br/pt/solucoes/feiras-e-eventos",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.nftlogistics.com.br/pt/contato",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é Admissão Temporária para feiras internacionais no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Admissão Temporária é um regime aduaneiro especial brasileiro que permite que mercadorias utilizadas em feiras e exposições internacionais entrem no Brasil com suspensão total ou parcial do pagamento de impostos de importação (II, IPI, PIS, COFINS), desde que as mercadorias sejam reexportadas após o evento. A NFT Logistics gerencia todo o processo, desde a documentação pré-evento até a reexportação.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva o desembaraço aduaneiro de materiais de feira no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com a NFT Logistics gerenciando o processo, materiais de feira geralmente são desembaraçados em 24 a 72 horas. Contamos com despachantes aduaneiros presentes nos principais aeroportos e portos brasileiros (GRU, VCP, Santos, Paranaguá), atuando para priorizar o canal verde e minimizar o risco de atrasos antes das datas de montagem.",
      },
    },
    {
      "@type": "Question",
      name: "Quais pavilhões e centros de exposição no Brasil a NFT Logistics atende?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A NFT Logistics presta serviços de logística para todos os principais centros de exposição do Brasil, incluindo o Expo Center Norte (São Paulo), Anhembi (São Paulo), Riocentro (Rio de Janeiro), Centro de Convenções Rebouças, e todos os pavilhões que sediaram feiras como APAS, Agrishow, FISPAL, BIG Festival, entre outros.",
      },
    },
    {
      "@type": "Question",
      name: "A NFT Logistics consegue lidar com equipamentos de stand oversized ou pesados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A NFT Logistics é especialista em cargas de feira de grande porte, pesadas ou tecnicamente complexas, incluindo maquinário industrial, equipamentos médicos e displays de grande formato. Coordenamos transporte especial rodoviário, guindastes e suporte de montagem quando necessário.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a reexportação de materiais após o encerramento de uma feira no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ao final da feira, a NFT Logistics coordena toda a desmontagem logística, consolidação de volumes, documentação de reexportação e envio dos materiais de volta à origem internacional. O processo é gerenciado para cumprimento rigoroso do prazo de reexportação exigido pela Receita Federal para o regime de Admissão Temporária.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.nftlogistics.com.br/pt",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Soluções",
      item: "https://www.nftlogistics.com.br/pt/solucoes",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Feiras e Eventos",
      item: "https://www.nftlogistics.com.br/pt/solucoes/feiras-e-eventos",
    },
  ],
};

export default function FeirasEEventosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <FairsAndEventsClient lang="pt" />
      </main>
    </>
  );
}
