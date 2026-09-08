import type { Metadata } from "next";
import SolucoesClient from "@/src/components/pagesComponents/SolucoesClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "International Logistics & Special Customs Solutions in Brazil | NFT Logistics",
  description:
    "Explore NFT Logistics complete range of solutions: trade fair logistics, special customs regimes (Temporary Admission, Drawback, RECOF), project cargo, fine art shipping, and health logistics in Brazil.",
  path: "/en/solutions",
  lang: "en",
  image: SECTION_OG_IMAGES.solutions,
  keywords: [
    "International Logistics Solutions Brazil",
    "Special Customs Regimes Brazil",
    "Brazil Customs Clearance",
    "Exhibition Logistics Brazil",
    "Project Cargo Brazil",
    "Fine Art Shipping Brazil",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.solutions,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nftlogistics.com.br/en" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.nftlogistics.com.br/en/solutions" },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen">
        <SolucoesClient lang="en" />
      </main>
    </>
  );
}
