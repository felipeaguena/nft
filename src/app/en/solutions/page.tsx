import type { Metadata } from "next";
import SolucoesClient from "@/src/components/SolucoesClient";

export const metadata: Metadata = {
  title: "International Logistics & Special Customs Solutions | NFT Logistics",
  description:
    "Comprehensive international logistics solutions, special customs regimes, trade fairs, project cargo, and fine arts with zero tolerance for delays.",
  alternates: {
    canonical: "/en/solutions",
  },
  openGraph: {
    title: "International Logistics & Special Customs Solutions | NFT Logistics",
    description:
      "From duty exemption through special customs regimes to heavy-lift project cargo and fine art logistics. End-to-end management in Brazil.",
    url: "https://www.nftlogistics.com.br/en/solutions",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "International Logistics Solutions NFT Logistics",
      },
    ],
  },
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <SolucoesClient lang="en" />
    </main>
  );
}
