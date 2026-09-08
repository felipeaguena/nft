import type { Metadata } from 'next';
import SpecialCustomsRegimesClient from '@/src/components/pagesComponents/SpecialCustomsRegimesClient';
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Special Customs Regimes in Brazil | NFT Logistics",
  description:
    "NFT Logistics specializes in Brazilian special customs regimes: Temporary Admission, Drawback Suspension, Bonded Warehousing (Entreposto), and RECOF. Protect corporate cash flow with total Brazilian customs compliance.",
  path: "/en/solutions/special-customs-regimes",
  lang: "en",
  image: SECTION_OG_IMAGES.specialRegimes,
  keywords: [
    "Special Customs Regimes Brazil",
    "Temporary Admission Brazil",
    "Drawback Suspension Brazil",
    "Bonded Warehouse Brazil",
    "RECOF Brazil",
    "Customs Tax Optimization Brazil",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.specialRegimes,
});

// ─── Schema.org: Service + FAQPage ──────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/en/solutions/special-customs-regimes#service",
  name: "Special Customs Regimes in Brazil",
  description:
    "Expert advisory and operations for Brazilian special customs regimes including Temporary Admission, Drawback Suspension, RECOF, and Bonded Warehousing (Entreposto Aduaneiro). NFT Logistics legally minimizes import duties and protects corporate cash flow.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Customs Advisory",
  url: "https://www.nftlogistics.com.br/en/solutions/special-customs-regimes",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Special Customs Regimes",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Temporary Admission (Admissão Temporária)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drawback Suspension" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RECOF" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bonded Warehousing (Entreposto Aduaneiro)" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are special customs regimes in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Special customs regimes in Brazil are legal mechanisms that allow companies to import or export goods with full or partial suspension of taxes such as Import Duty (II), IPI, PIS, and COFINS. The main regimes include: Temporary Admission (Admissão Temporária) for goods that will be re-exported, Drawback Suspension for goods used in the production of exports, RECOF for companies with a high volume of exports, and Bonded Warehousing (Entreposto Aduaneiro) for goods in transit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Temporary Admission and Drawback in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temporary Admission (Admissão Temporária) is used for goods that will be re-exported in the same condition — such as equipment for trade fairs, artworks for exhibitions, and machinery for testing. Drawback is a regime for manufacturers who import raw materials or components specifically to produce goods for export — the import taxes are suspended and later cancelled upon export proof.",
      },
    },
    {
      "@type": "Question",
      name: "How can a foreign company benefit from Brazilian special customs regimes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foreign companies can save significantly on Brazilian import duties by using special customs regimes. For example, a company bringing equipment to a trade fair can avoid paying import taxes using Temporary Admission. A manufacturer importing components to produce goods for re-export can use Drawback to suspend taxes. NFT Logistics analyzes each client's operation and applies the most advantageous regime legally available.",
      },
    },
    {
      "@type": "Question",
      name: "What is RECOF in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RECOF (Regime Aduaneiro Especial de Entreposto Industrial sob Controle Aduaneiro Informatizado) is a special customs regime for large Brazilian exporters that allows the import of inputs, parts, and machinery with suspension of import duties (II, IPI, PIS/COFINS). It is suitable for companies with annual exports of at least USD 10 million. NFT Logistics advises on RECOF eligibility and manages the entire application process.",
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
    { "@type": "ListItem", position: 3, name: "Special Customs Regimes", item: "https://www.nftlogistics.com.br/en/solutions/special-customs-regimes" },
  ],
};

export default function SpecialCustomsRegimesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <SpecialCustomsRegimesClient lang="en" />
      </main>
    </>
  );
}
