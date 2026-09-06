import type { Metadata } from "next";
import SpecialCustomsRegimesClient from "@/src/components/pagesComponents/SpecialCustomsRegimesClient";

export const metadata: Metadata = {
  title: "Regimes Aduaneiros Especiais | NFT Logistics",
  description:
    "Consultoria e operacionalização em Regimes Aduaneiros Especiais no Brasil: Admissão Temporária, Drawback, Entreposto Aduaneiro e RECOF com segurança jurídica e economia tributária.",
  alternates: {
    canonical: "/pt/solucoes/regimes-especiais",
  },
  openGraph: {
    title: "Regimes Aduaneiros Especiais | NFT Logistics",
    description:
      "Desonere suas operações de importação e exportação com total segurança jurídica e conformidade perante a Receita Federal.",
    url: "https://www.nftlogistics.com.br/pt/solucoes/regimes-especiais",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "Regimes Aduaneiros Especiais NFT Logistics",
      },
    ],
  },
};

export default function RegimesEspeciaisPage() {
  return (
    <main className="min-h-screen">
      <SpecialCustomsRegimesClient lang="pt" />
    </main>
  );
}
