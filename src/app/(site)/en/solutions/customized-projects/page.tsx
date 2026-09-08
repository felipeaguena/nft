import type { Metadata } from 'next';
import CustomizedProjectsClient from '@/src/components/pagesComponents/CustomizedProjectsClient';
import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Project Cargo & Heavy Lift Logistics in Brazil | NFT Logistics",
  description:
    "NFT Logistics: specialists in project cargo, heavy lift, Out of Gauge (OOG), and breakbulk logistics in Brazil. Route engineering, port handling, and complete multimodal solutions for industrial machinery.",
  path: SITE_ROUTES.customizedProjects.en,
  locale: "en_US",
  image: SECTION_OG_IMAGES.customizedProjects,
  keywords: [
    "project cargo Brazil",
    "heavy lift logistics Brazil",
    "OOG cargo Brazil",
    "breakbulk shipping Brazil",
    "route survey Brazil",
    "oversized transport Brazil",
    "industrial machinery import Brazil",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.customizedProjects,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nftlogistics.com.br/en/solutions/customized-projects#service",
  name: "Project Cargo and Heavy Lift Logistics in Brazil",
  description:
    "Specialized logistics for project cargo, heavy lift, Out of Gauge (OOG), and breakbulk shipments in Brazil. Includes route surveys, port engineering, multimodal coordination, and customs clearance for industrial machinery and capital goods.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.nftlogistics.com.br/#organization",
    name: "NFT Logistics",
  },
  areaServed: { "@type": "Country", name: "Brazil" },
  serviceType: "Project Cargo Logistics",
  url: "https://www.nftlogistics.com.br/en/solutions/customized-projects",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is project cargo logistics in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project cargo logistics in Brazil refers to the specialized transport of large, heavy, or complex pieces of equipment that cannot be shipped using standard freight methods. This includes industrial machinery, turbines, transformers, offshore platforms, and construction equipment. NFT Logistics manages the entire process: route survey, special permits, port handling, heavy lift equipment, and customs clearance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main ports for heavy cargo imports in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main ports for heavy cargo and project logistics in Brazil are: Port of Santos (São Paulo) — Latin America's largest port with full heavy lift infrastructure; Port of Paranaguá (Paraná) — specialized for bulk and heavy machinery; Port of Itaguaí (Rio de Janeiro) — strategic for offshore and large project cargo; and Port of Pecém (Ceará) — growing hub for industrial equipment in Northeast Brazil. NFT Logistics operates at all major Brazilian ports.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ex-Tarifário and how can it reduce import costs for machinery in Brazil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ex-Tarifário is a Brazilian import duty exemption mechanism for capital goods and computing/telecommunications equipment with no equivalent domestic production. When approved by the Brazilian government, the import duty (II) is reduced to 0% or 2%. NFT Logistics advises clients on Ex-Tarifário eligibility and manages the application process, often generating significant savings on heavy machinery imports.",
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
    { "@type": "ListItem", position: 3, name: "Customized Projects", item: "https://www.nftlogistics.com.br/en/solutions/customized-projects" },
  ],
};

export default function CustomizedProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <CustomizedProjectsClient lang="en" />
      </main>
    </>
  );
}
