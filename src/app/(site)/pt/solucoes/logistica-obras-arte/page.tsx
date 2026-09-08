import type { Metadata } from "next";
import ArtworksLogisticsClient from "@/src/components/pagesComponents/ArtworksLogisticsClient";
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Logística para Obras de Arte, Museus e Acervos Culturais | NFT Logistics",
  description:
    "A NFT Logistics é especialista em logística de obras de arte, exposições museológicas e acervos culturais no Brasil: embalagens NIMF 15 climatizadas, autorização IPHAN, admissão temporária e courier dedicado.",
  path: SITE_ROUTES.artworks.pt,
  locale: "pt-BR",
  image: SECTION_OG_IMAGES.artworks,
  keywords: [
    "logística de obras de arte",
    "transporte de arte Brasil",
    "embalagens museológicas NIMF 15",
    "admissão temporária obras de arte",
    "autorização IPHAN",
    "logística para bienais e galerias",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.artworks,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/pt/solucoes/logistica-obras-arte#service",
  name: "Logística para Obras de Arte e Acervos Culturais no Brasil",
  description:
    "Serviço especializado em logística de obras de arte, peças museológicas e bens culturais no Brasil. Inclui embalagens climatizadas certificadas (NIMF 15), autorização IPHAN, admissão temporária para exposições, courier dedicado com escolta e reexportação completa.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Logística de Obras de Arte",
  url: "https://www.nftlogistics.com.br/pt/solucoes/logistica-obras-arte",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quais procedimentos aduaneiros são necessários para trazer obras de arte temporariamente ao Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obras de arte importadas temporariamente ao Brasil para exposições utilizam o regime aduaneiro especial de Admissão Temporária, que suspende os impostos de importação desde que as obras sejam reexportadas após o evento. Itens classificados como patrimônio cultural também podem exigir autorização do IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional). A NFT Logistics gerencia toda a documentação, petições aduaneiras e aprovações regulatórias.",
      },
    },
    {
      "@type": "Question",
      name: "O que é IPHAN e quando sua autorização é necessária para importar obras de arte no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) é a autoridade de patrimônio cultural do Brasil. Sua autorização é obrigatória quando se importam itens classificados como patrimônio cultural, peças arqueológicas ou artefatos históricos protegidos. Obras de arte trazidas para exposições temporárias geralmente não necessitam de aprovação do IPHAN, a menos que se enquadrem nas categorias de patrimônio protegido. A NFT Logistics avalia cada peça e orienta sobre os requisitos exatos.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são as normas de embalagem para transporte de obras de arte no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obras de arte transportadas internacionalmente para o Brasil devem ser embaladas conforme padrões museológicos: caixas de madeira climatizadas conformes à NIMF 15 (regulação fitossanitária), materiais livres de acidez, interiores com espuma moldada sob medida e sistemas de absorção de choque. A NFT Logistics projeta e fabrica embalagens personalizadas para cada obra de arte, garantindo conformidade com os padrões aduaneiros brasileiros e normas internacionais de museus.",
      },
    },
    {
      "@type": "Question",
      name: "A NFT Logistics consegue transportar obras de arte frágeis ou de grande porte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A NFT Logistics possui expertise em obras de arte de todos os tamanhos e fragilidades, incluindo esculturas de grande porte, instalações artísticas e peças históricas delicadas. Oferecemos transporte com controle climático, escolta de segurança dedicada, monitoramento em tempo real e suporte in loco durante instalação e desmontagem em museus, galerias e pavilhões de bienais.",
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
    { "@type": "ListItem", position: 3, name: "Logística de Obras de Arte", item: "https://www.nftlogistics.com.br/pt/solucoes/logistica-obras-arte" },
  ],
};

export default function LogisticaObrasArtePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <ArtworksLogisticsClient lang="pt" />
      </main>
    </>
  );
}
