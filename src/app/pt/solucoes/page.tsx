import type { Metadata } from "next";
import SolucoesClient from "@/src/components/SolucoesClient";

export const metadata: Metadata = {
  title: "Soluções em Logística Internacional & Regimes Especiais | NFT Logistics",
  description:
    "Soluções completas em logística internacional, regimes aduaneiros especiais, feiras e eventos, cargas pesadas e obras de arte com tolerância zero a atrasos.",
  alternates: {
    canonical: "/pt/solucoes",
  },
  openGraph: {
    title: "Soluções em Logística Internacional & Regimes Especiais | NFT Logistics",
    description:
      "Da desoneração tributária por regimes especiais ao transporte de cargas ultra complexas. Operações ponta a ponta com rigor regulatório e segurança fiscal.",
    url: "https://www.nftlogistics.com.br/pt/solucoes",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "Soluções em Logística Internacional NFT Logistics",
      },
    ],
  },
};

export default function SolucoesPage() {
  return (
    <main className="min-h-screen">
      <SolucoesClient lang="pt" />
    </main>
  );
}
