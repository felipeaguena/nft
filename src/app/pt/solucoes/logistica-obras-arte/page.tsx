import type { Metadata } from "next";
import LogisticaObrasArteClient from "./LogisticaObrasArteClient";

export const metadata: Metadata = {
  title: "Logística para Obras de Arte e Acervos Culturais | NFT Logistics",
  description:
    "Especialistas em logística de obras de arte, exposições e acervos valiosos. Embalagens museológicas sob medida (NIMF 15), transporte climatizado, courier dedicado e regimes especiais.",
  alternates: {
    canonical: "/pt/solucoes/logistica-obras-arte",
  },
  openGraph: {
    title: "Logística para Obras de Arte e Acervos Culturais | NFT Logistics",
    description:
      "Transporte nail-to-nail, caixas climatizadas, laudos de conservação (Condition Reports) e anuência IPHAN/IBRAM para museus, bem-sucedidas bienais e colecionadores.",
    url: "https://www.nftlogistics.com.br/pt/solucoes/logistica-obras-arte",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/nft-art-2.jpg",
        width: 1200,
        height: 630,
        alt: "Logística para Obras de Arte NFT Logistics",
      },
    ],
  },
};

export default function LogisticaObrasArtePage() {
  return (
    <main className="min-h-screen">
      <LogisticaObrasArteClient />
    </main>
  );
}
