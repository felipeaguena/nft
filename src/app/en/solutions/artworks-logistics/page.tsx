import type { Metadata } from "next";
import ArtworksLogisticsClient from "@/src/components/pagesComponents/ArtworksLogisticsClient";

export const metadata: Metadata = {
  title: "Fine Art and Cultural Heritage Logistics | NFT Logistics",
  description:
    "Specialists in fine art, museum exhibitions, and cultural assets logistics in Brazil. Bespoke ISPM 15 museum crating, climate-controlled transport, dedicated courier, and temporary admission regimes.",
  alternates: {
    canonical: "/en/solutions/artworks-logistics",
  },
  openGraph: {
    title: "Fine Art and Cultural Heritage Logistics | NFT Logistics",
    description:
      "Nail-to-nail transport, climate-controlled crating, Condition Reports, and IPHAN/IBRAM permits for museums, biennials, and private collectors.",
    url: "https://www.nftlogistics.com.br/en/solutions/artworks-logistics",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/nft-art-2.jpg",
        width: 1200,
        height: 630,
        alt: "Fine Art Logistics NFT Logistics",
      },
    ],
  },
};

export default function ArtworksLogisticsPage() {
  return (
    <main className="min-h-screen">
      <ArtworksLogisticsClient lang="en" />
    </main>
  );
}
