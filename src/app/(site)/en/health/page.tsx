import type { Metadata } from "next";
import HealthClient from "@/src/components/pagesComponents/HealthClient";

export const metadata: Metadata = {
  title: "Import of Medical Equipment and Healthcare Machinery | NFT Logistics",
  description:
    "Specialists in importation, customs clearance, and temporary admission for trade shows of medical equipment and hospital products to Brazil without Anvisa surprises.",
  alternates: {
    canonical: "/en/health",
  },
  openGraph: {
    title: "Import of Medical Equipment and Healthcare Machinery | NFT Logistics",
    description:
      "Comprehensive customs and logistics solutions for medical technology, diagnostic imaging, and trade fair participation in Brazil with full Anvisa compliance.",
    url: "https://www.nftlogistics.com.br/en/health",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/Home-Health-NFT-Logistics.jpg",
        width: 1200,
        height: 630,
        alt: "NFT Logistics Healthcare Logistics",
      },
    ],
  },
};

export default function HealthPage() {
  return (
    <main className="min-h-screen">
      <HealthClient lang="en" />
    </main>
  );
}
