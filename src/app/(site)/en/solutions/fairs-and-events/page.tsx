import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";

export const metadata: Metadata = {
  title: "Logistics for International Fairs and Events | NFT Logistics",
  description:
    "Specialists in exhibition and trade fair logistics in Brazil. Temporary admission, door-to-booth freight, customs clearance, and absolute punctuality.",
  alternates: {
    canonical: "/en/solutions/fairs-and-events",
  },
  openGraph: {
    title: "Logistics for International Fairs and Events | NFT Logistics",
    description:
      "End-to-end international logistics, special customs regimes, and on-site exhibition support for exhibitors in Brazil.",
    url: "https://www.nftlogistics.com.br/en/solutions/fairs-and-events",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/feira-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "Fairs and Events Logistics NFT Logistics",
      },
    ],
  },
};

export default function FairsAndEventsPage() {
  return (
    <main className="min-h-screen">
      <FairsAndEventsClient lang="en" />
    </main>
  );
}
