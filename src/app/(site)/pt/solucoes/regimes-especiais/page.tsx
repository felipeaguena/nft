import type { Metadata } from "next";
import SpecialCustomsRegimesClient from "@/src/components/pagesComponents/SpecialCustomsRegimesClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Regimes Aduaneiros Especiais no Brasil | NFT Logistics",
  description:
    "A NFT Logistics é especialista em regimes aduaneiros especiais no Brasil: Admissão Temporária, Drawback Suspensão, Entreposto Aduaneiro e RECOF. Reduza impostos legalmente e proteja o caixa da sua empresa.",
  path: "/pt/solucoes/regimes-especiais",
  lang: "pt",
  image: SECTION_OG_IMAGES.specialRegimes,
  keywords: [
    "Regimes Aduaneiros Especiais",
    "Admissão Temporária Brasil",
    "Drawback Suspensão",
    "Entreposto Aduaneiro",
    "RECOF",
    "Economia Tributária Comércio Exterior",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.specialRegimes,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/pt/solucoes/regimes-especiais#service",
  name: "Regimes Aduaneiros Especiais no Brasil",
  description:
    "Consultoria e operacionalização em Regimes Aduaneiros Especiais no Brasil: Admissão Temporária, Drawback Suspensão, Entreposto Aduaneiro e RECOF. Redução legal de impostos com segurança jurídica e conformidade total com a Receita Federal.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Consultoria em Comércio Exterior",
  url: "https://www.nftlogistics.com.br/pt/solucoes/regimes-especiais",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Regimes Aduaneiros Especiais",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admissão Temporária" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drawback Suspensão" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RECOF" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entreposto Aduaneiro" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que são Regimes Aduaneiros Especiais no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regimes Aduaneiros Especiais são mecanismos legais que permitem a importação ou exportação de mercadorias com suspensão total ou parcial de tributos como II (Imposto de Importação), IPI, PIS e COFINS. Os principais regimes são: Admissão Temporária (para bens que serão reexportados), Drawback (para insumos utilizados na produção de exportações), RECOF (para grandes exportadores), e Entreposto Aduaneiro (para mercadorias em trânsito ou aguardando destino).",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre Admissão Temporária e Drawback no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Admissão Temporária é utilizada para bens que entram no Brasil e serão reexportados no mesmo estado — como equipamentos para feiras, obras de arte para exposições e maquinários para testes. Já o Drawback é um regime para fabricantes que importam matérias-primas ou componentes especificamente para produzir bens para exportação — os impostos ficam suspensos e são cancelados após a comprovação da exportação.",
      },
    },
    {
      "@type": "Question",
      name: "Como uma empresa estrangeira pode se beneficiar dos Regimes Aduaneiros Especiais no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Empresas estrangeiras podem economizar significativamente em tributos aduaneiros brasileiros usando regimes especiais. Por exemplo, uma empresa trazendo equipamentos para uma feira pode evitar o pagamento de impostos de importação usando a Admissão Temporária. Um fabricante importando componentes para produzir bens para reexportação pode usar o Drawback para suspender tributos. A NFT Logistics analisa a operação de cada cliente e aplica o regime mais vantajoso disponível legalmente.",
      },
    },
    {
      "@type": "Question",
      name: "O que é o RECOF no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O RECOF (Regime Aduaneiro Especial de Entreposto Industrial sob Controle Aduaneiro Informatizado) é um regime especial para grandes exportadores brasileiros que permite a importação de insumos, partes e máquinas com suspensão de impostos (II, IPI, PIS/COFINS). É adequado para empresas com exportações anuais de pelo menos USD 10 milhões. A NFT Logistics assessora na elegibilidade ao RECOF e gerencia todo o processo de habilitação.",
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
    { "@type": "ListItem", position: 3, name: "Regimes Especiais", item: "https://www.nftlogistics.com.br/pt/solucoes/regimes-especiais" },
  ],
};

export default function RegimesEspeciaisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <SpecialCustomsRegimesClient lang="pt" />
      </main>
    </>
  );
}
