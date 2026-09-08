import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Logistics for International Trade Fairs and Exhibitions | NFT Logistics",
  description:
    "NFT Logistics is Brazil's specialist in trade fair and exhibition logistics: temporary admission, door-to-booth freight, customs clearance, and absolute punctuality. São Paulo, Rio de Janeiro, and all major Brazilian exhibition centers.",
  path: "/en/solutions/fairs-and-events",
  lang: "en",
  image: SECTION_OG_IMAGES.fairsAndEvents,
  keywords: [
    "Exhibition Logistics Brazil",
    "Trade Fair Logistics Brazil",
    "Temporary Admission Brazil",
    "Door to Booth Freight",
    "Customs Clearance Events Brazil",
    "International Trade Show Brazil",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.fairsAndEvents,
});

// ─── Schema.org: Service + FAQPage ──────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/en/solutions/fairs-and-events#service",
  name: "Logistics for International Trade Fairs and Exhibitions in Brazil",
  alternateName: "Exhibition Logistics Brazil",
  description:
    "Comprehensive logistics service for international trade fairs and exhibitions in Brazil. Includes temporary admission (Admissão Temporária), door-to-booth freight forwarding, priority customs clearance, on-site support during the event, and full re-export process management after the exhibition ends.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Exhibition Freight Forwarding",
  url: "https://www.nftlogistics.com.br/en/solutions/fairs-and-events",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.nftlogistics.com.br/en/contact",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trade Fair Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Temporary Admission for Exhibitions (Admissão Temporária)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Door-to-Booth Freight Forwarding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Priority Customs Clearance for Trade Shows",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Re-export Logistics after Exhibition",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Temporary Admission (Admissão Temporária) for trade fairs in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temporary Admission (Admissão Temporária) is a Brazilian special customs regime that allows goods used in international trade fairs and exhibitions to enter Brazil without paying import taxes, as long as the goods are re-exported after the event. NFT Logistics manages the entire process, from the pre-event documentation to the post-event re-export.",
      },
    },
    {
      "@type": "Question",
      name: "How long does customs clearance take for trade fair goods in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With NFT Logistics managing the process, trade fair goods can typically be cleared within 24 to 72 hours. We have on-site customs brokers at the main Brazilian airports and ports (GRU, VCP, Santos, Paranaguá) ensuring priority clearance and minimizing the risk of delays before assembly deadlines.",
      },
    },
    {
      "@type": "Question",
      name: "Which exhibition centers in Brazil does NFT Logistics cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFT Logistics provides logistics services for all major exhibition centers in Brazil, including Expo Center Norte (São Paulo), Anhembi (São Paulo), Riocentro (Rio de Janeiro), Centro de Convenções Rebouças, and all venues hosting international fairs such as FISPOA, Agrishow, and industry-specific expos.",
      },
    },
    {
      "@type": "Question",
      name: "Can NFT Logistics handle oversized or heavy exhibition equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NFT Logistics specializes in handling oversized, heavy, and technically complex exhibition cargo including industrial machinery, medical equipment, and large-format displays. We coordinate specialized road transport, cranes, and on-site assembly support when needed.",
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
      name: "Home",
      item: "https://www.nftlogistics.com.br/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://www.nftlogistics.com.br/en/solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fairs & Events",
      item: "https://www.nftlogistics.com.br/en/solutions/fairs-and-events",
    },
  ],
};

export default function FairsAndEventsPage() {
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
        <FairsAndEventsClient lang="en" />
      </main>
    </>
  );
}
