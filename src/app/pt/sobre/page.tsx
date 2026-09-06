import type { Metadata } from "next";
import SobreClient from "@/src/components/SobreClient";

export const metadata: Metadata = {
  title: "Sobre Nós | NFT Logistics - Inteligência Regulatória & Logística Internacional",
  description:
    "Conheça a NFT Logistics: especialistas em comércio exterior, regimes aduaneiros especiais, feiras internacionais e desembaraço alfandegário de alta complexidade no Brasil.",
  alternates: {
    canonical: "/pt/sobre",
  },
  openGraph: {
    title: "Sobre Nós | NFT Logistics - Inteligência Aduaneira & Logística Internacional",
    description:
      "Conectando empresas globais ao mercado brasileiro com rigor regulatório, segurança jurídica e tolerância zero a atrasos.",
    url: "https://www.nftlogistics.com.br/pt/sobre",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre a NFT Logistics",
      },
    ],
  },
};

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <SobreClient lang="pt" />
    </main>
  );
}

