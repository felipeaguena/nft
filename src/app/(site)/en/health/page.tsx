import type { Metadata } from "next";
import HealthClient from "@/src/components/pagesComponents/HealthClient";
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Medical Equipment Import & Health Logistics in Brazil | NFT Logistics",
  description:
    "NFT Logistics: specialists in importing medical equipment, hospital devices, and pharmaceutical products into Brazil. Full ANVISA compliance, customs clearance, temporary admission for medical trade shows, and cold chain logistics.",
  path: SITE_ROUTES.health.en,
  locale: "en_US",
  image: SECTION_OG_IMAGES.health,
  keywords: [
    "medical equipment import Brazil",
    "healthcare machinery logistics Brazil",
    "ANVISA customs clearance",
    "medical trade show temporary admission Brazil",
    "hospital logistics Brazil",
    "pharmaceutical import Brazil",
    "cold chain logistics Brazil",
    "NFT Logistics health",
  ],
  languageAlternates: SITE_ROUTES.health,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/en/health#service",
  name: "Medical Equipment Import and Health Logistics in Brazil",
  description:
    "Complete health logistics for importing medical equipment, hospital devices, and pharmaceutical products into Brazil. Services include ANVISA regulatory compliance, customs clearance, temporary admission for medical trade shows, cold chain management, and specialized handling.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Health Logistics",
  url: "https://www.nftlogistics.com.br/en/health",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What regulatory approvals are needed to import medical equipment into Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Importing medical equipment into Brazil requires compliance with ANVISA (Brazilian Health Regulatory Agency) regulations. Depending on the product class, a product registration (Registro ANVISA), import authorization, or GMP (Good Manufacturing Practices) certification may be required. NFT Logistics works with specialized health regulatory advisors to ensure all ANVISA, INMETRO, and health ministry requirements are met before shipment.",
      },
    },
    {
      "@type": "Question",
      name: "Can medical equipment be brought temporarily to Brazil for trade shows without paying import taxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Medical equipment brought to Brazilian trade shows and exhibitions can use the Temporary Admission (Admissão Temporária) customs regime, which suspends import duties as long as the equipment is re-exported after the event. This includes devices for demonstrations, live surgeries, training, and product launches at medical trade fairs such as HOSPITALAR, FISPAL Saúde, and EXPOSEG.",
      },
    },
    {
      "@type": "Question",
      name: "Does NFT Logistics handle cold chain logistics for pharmaceutical imports in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NFT Logistics manages cold chain logistics for temperature-sensitive pharmaceutical products and biological samples. We coordinate refrigerated air freight, temperature-monitored ground transport, certified cold storage facilities, and continuous temperature logging documentation required by ANVISA for pharmaceutical imports.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nftlogistics.com.br/en" },
    { "@type": "ListItem", position: 2, name: "Health Logistics", item: "https://www.nftlogistics.com.br/en/health" },
  ],
};

export default function HealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <HealthClient lang="en" />
      </main>
    </>
  );
}
