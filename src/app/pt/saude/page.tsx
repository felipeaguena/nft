import type { Metadata } from "next";
import SaudePageClient from "./SaudePageClient";

export const metadata: Metadata = {
  title: "Importação de Máquinas e Equipamentos Hospitalares | NFT Logistics",
  description:
    "Especialistas em importação, desembaraço aduaneiro e admissão temporária para feiras de máquinas e produtos hospitalares para o Brasil sem surpresas na Anvisa.",
  alternates: {
    canonical: "/pt/saude",
  },
  openGraph: {
    title: "Importação de Máquinas e Equipamentos Hospitalares | NFT Logistics",
    description:
      "Soluções aduaneiras e logísticas completas para tecnologia médica, diagnósticos por imagem e participação em feiras no Brasil com conformidade Anvisa.",
    url: "https://www.nftlogistics.com.br/pt/saude",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/Home-Health-NFT-Logistics.jpg",
        width: 1200,
        height: 630,
        alt: "Logística Hospitalar NFT Logistics",
      },
    ],
  },
};

export default function SaudePage() {
  return (
    <main className="min-h-screen">
      <SaudePageClient />
    </main>
  );
}
