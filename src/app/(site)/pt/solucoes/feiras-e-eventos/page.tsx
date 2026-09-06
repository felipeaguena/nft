import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";

export const metadata: Metadata = {
  title: "Logística para Feiras e Eventos Internacionais | NFT Logistics",
  description:
    "Especialistas em logística para feiras e eventos no Brasil. Admissão temporária, transporte porta-ao-estande, desembaraço aduaneiro e pontualidade absoluta.",
  alternates: {
    canonical: "/pt/solucoes/feiras-e-eventos",
  },
  openGraph: {
    title: "Logística para Feiras e Eventos Internacionais | NFT Logistics",
    description:
      "Soluções completas em logística internacional, regimes especiais e desembaraço aduaneiro para empresas expositoras no Brasil.",
    url: "https://www.nftlogistics.com.br/pt/solucoes/feiras-e-eventos",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/feira-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "Logística para Feiras e Eventos NFT Logistics",
      },
    ],
  },
};

export default function FeirasEEventosPage() {
  return (
    <main className="min-h-screen">
      <FairsAndEventsClient lang="pt" />
    </main>
  );
}
