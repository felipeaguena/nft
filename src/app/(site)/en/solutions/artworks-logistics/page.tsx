import type { Metadata } from 'next';
import ArtworksLogisticsClient from '@/src/components/pagesComponents/ArtworksLogisticsClient';
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Fine Art, Museum & Cultural Heritage Logistics in Brazil | NFT Logistics",
  description:
    "NFT Logistics: specialists in fine art, museum shipping, and cultural heritage logistics in Brazil. Climate-controlled crating (ISPM 15), IPHAN authorizations, temporary admission for exhibitions, and dedicated art courier.",
  path: SITE_ROUTES.artworks.en,
  locale: "en_US",
  image: SECTION_OG_IMAGES.artworks,
  keywords: [
    "fine art logistics Brazil",
    "museum shipping Brazil",
    "art exhibition logistics",
    "ISPM 15 museum crating",
    "climate controlled art transport",
    "IPHAN authorization Brazil",
    "art temporary admission Brazil",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.artworks,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/en/solutions/artworks-logistics#service",
  name: "Fine Art and Cultural Heritage Logistics in Brazil",
  description:
    "Specialized logistics for fine art, antiques, museum pieces, and cultural heritage items in Brazil. Services include ISPM 15-compliant climate-controlled crating, IPHAN authorizations, temporary admission for exhibitions, dedicated security escort, and full re-export management.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Fine Art Logistics",
  url: "https://www.nftlogistics.com.br/en/solutions/artworks-logistics",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What customs procedures are required to bring artworks into Brazil temporarily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artworks imported temporarily into Brazil for exhibitions use the Temporary Admission (Admissão Temporária) customs regime, which suspends import duties as long as the works are re-exported after the event. Additionally, items that qualify as cultural heritage may require an IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) authorization. NFT Logistics manages all documentation, customs filings, and regulatory approvals.",
      },
    },
    {
      "@type": "Question",
      name: "What is IPHAN and when is its authorization required for art imports in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) is Brazil's cultural heritage authority. Its authorization is required when importing items classified as cultural heritage, archaeological pieces, or historical artifacts. Fine art pieces being brought in for temporary exhibitions generally do not require IPHAN approval unless they fall under protected heritage categories. NFT Logistics assesses each piece and advises on the exact requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What packaging standards apply to fine art shipping in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fine art shipped internationally to Brazil should be packaged according to museum-grade standards: climate-controlled wooden crates compliant with ISPM 15 phytosanitary regulations, acid-free materials, custom-fitted foam interiors, and shock-absorbing systems. NFT Logistics designs and manufactures bespoke crates for each artwork, ensuring full compliance with Brazilian customs and international museum standards.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nftlogistics.com.br/en" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.nftlogistics.com.br/en/solutions" },
    { "@type": "ListItem", position: 3, name: "Artworks Logistics", item: "https://www.nftlogistics.com.br/en/solutions/artworks-logistics" },
  ],
};

export default function ArtworksLogisticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <ArtworksLogisticsClient lang="en" />
      </main>
    </>
  );
}
