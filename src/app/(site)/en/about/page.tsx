import type { Metadata } from "next";
import SobreClient from "@/src/components/pagesComponents/SobreClient";

export const metadata: Metadata = {
  title: "About Us | NFT Logistics - Regulatory Intelligence & Global Logistics in Brazil",
  description:
    "Discover NFT Logistics: senior specialists in international trade, special customs regimes, exhibitions, and high-complexity customs clearance in Brazil.",
  alternates: {
    canonical: "/en/about",
  },
  openGraph: {
    title: "About Us | NFT Logistics - Customs Intelligence & Global Logistics",
    description:
      "Connecting global corporations to the Brazilian market with regulatory certainty, legal security, and zero tolerance for delays.",
    url: "https://www.nftlogistics.com.br/en/about",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "About NFT Logistics",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SobreClient lang="en" />
    </main>
  );
}
