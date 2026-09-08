import type { Metadata } from "next";
import HealthClient from "@/src/components/pagesComponents/HealthClient";
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Importação de Equipamentos Médicos e Logística de Saúde no Brasil | NFT Logistics",
  description:
    "A NFT Logistics é especialista em importação de equipamentos médicos, dispositivos hospitalares e produtos farmacêuticos no Brasil com conformidade ANVISA, desembaraço aduaneiro, admissão temporária para feiras de saúde e logística de cadeia fria.",
  path: SITE_ROUTES.health.pt,
  locale: "pt-BR",
  image: SECTION_OG_IMAGES.health,
  keywords: [
    "importação de equipamentos médicos Brasil",
    "logística hospitalar Brasil",
    "desembaraço ANVISA",
    "admissão temporária feiras de saúde",
    "importação de máquinas hospitalares",
    "cadeia fria farmacêutica Brasil",
    "NFT Logistics saúde",
  ],
  languageAlternates: SITE_ROUTES.health,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/pt/saude#service",
  name: "Importação de Equipamentos Médicos e Logística de Saúde no Brasil",
  description:
    "Serviço completo de logística de saúde para importação de equipamentos médicos, dispositivos hospitalares e produtos farmacêuticos no Brasil. Inclui conformidade ANVISA, desembaraço aduaneiro, admissão temporária para feiras médicas, gestão de cadeia fria e manuseio especializado.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Logística de Saúde",
  url: "https://www.nftlogistics.com.br/pt/saude",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quais aprovações regulatórias são necessárias para importar equipamentos médicos no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A importação de equipamentos médicos no Brasil exige conformidade com as regulações da ANVISA (Agência Nacional de Vigilância Sanitária). Dependendo da classe do produto, pode ser necessário um Registro ANVISA, uma Licença de Importação, ou certificação de Boas Práticas de Fabricação (BPF/GMP). A NFT Logistics trabalha com consultores regulatórios especializados em saúde para garantir que todos os requisitos ANVISA, INMETRO e do Ministério da Saúde sejam cumpridos antes do embarque.",
      },
    },
    {
      "@type": "Question",
      name: "Equipamentos médicos podem ser trazidos temporariamente ao Brasil para feiras sem pagar impostos de importação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Equipamentos médicos trazidos para feiras e exposições no Brasil podem usar o regime aduaneiro especial de Admissão Temporária, que suspende os impostos de importação desde que o equipamento seja reexportado após o evento. Isso inclui dispositivos para demonstrações, cirurgias ao vivo, treinamentos e lançamentos de produtos em feiras médicas como HOSPITALAR, FISPAL Saúde e EXPOSEG.",
      },
    },
    {
      "@type": "Question",
      name: "A NFT Logistics realiza logística de cadeia fria para importação de produtos farmacêuticos no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A NFT Logistics gerencia a logística de cadeia fria para produtos farmacêuticos e amostras biológicas sensíveis à temperatura. Coordenamos frete aéreo refrigerado, transporte terrestre com monitoramento de temperatura, armazéns com câmaras frias certificadas e toda a documentação de registro de temperatura exigida pela ANVISA para importações farmacêuticas.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o desembaraço aduaneiro de equipamentos médicos na ANVISA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O desembaraço aduaneiro de equipamentos médicos no Brasil envolve uma camada adicional de análise pelos órgãos anuentes, especialmente a ANVISA. A NFT Logistics possui despachantes aduaneiros especializados que atuam presencialmente nos principais aeroportos e portos brasileiros para gerenciar a documentação sanitária, comunicar-se diretamente com a ANVISA e minimizar o tempo de retenção em canal de conferência.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.nftlogistics.com.br/pt" },
    { "@type": "ListItem", position: 2, name: "Health Logistics", item: "https://www.nftlogistics.com.br/pt/saude" },
  ],
};

export default function SaudePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <HealthClient lang="pt" />
      </main>
    </>
  );
}
