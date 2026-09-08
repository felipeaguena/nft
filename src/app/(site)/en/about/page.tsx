import type { Metadata } from "next";
import SobreClient from "@/src/components/pagesComponents/SobreClient";
import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About NFT Logistics | Customs Intelligence & International Logistics Specialists in Brazil",
  description:
    "NFT Logistics is a Brazilian company founded over 15 years ago, specialized in international customs clearance, special customs regimes, trade fair logistics, fine art shipping, and health logistics. Operations at Santos, Paranaguá, GRU, VCP, and GIG.",
  path: "/en/about",
  lang: "en",
  image: SECTION_OG_IMAGES.about,
  keywords: [
    "About NFT Logistics",
    "International Logistics Specialist Brazil",
    "Customs Intelligence Brazil",
    "Brazilian Trade Specialist",
    "Freight Forwarder Brazil",
    "Customs Clearance Broker Brazil",
    "NFT Logistics history",
  ],
  alternates: SITE_ROUTES.about,
});

// ─── Schema.org: AboutPage + BreadcrumbList ───────────────────────────────
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.nftlogistics.com.br/en/about#aboutpage",
  name: "About NFT Logistics",
  description:
    "NFT Logistics is a Brazilian company specializing in international logistics, customs clearance, and special customs regimes. Founded over 15 years ago, we help global companies operate in Brazil without regulatory surprises.",
  url: "https://www.nftlogistics.com.br/en/about",
  mainEntity: {
    "@id": "https://www.nftlogistics.com.br/#organization",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nftlogistics.com.br/en" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.nftlogistics.com.br/en/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <main className="min-h-screen">
        <SobreClient lang="en" />
      </main>
    </>
  );
}
