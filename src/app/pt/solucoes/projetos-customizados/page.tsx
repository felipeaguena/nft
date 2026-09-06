import type { Metadata } from "next";
import ProjetosCustomizadosClient from "./ProjetosCustomizadosClient";

export const metadata: Metadata = {
  title: "Projetos Customizados para Cargas Especiais | NFT Logistics",
  description:
    "Engenharia de transporte, cargas de projeto (Project Cargo), OOG, breakbulk e movimentação de cargas pesadas com estudo de rotas e segurança máxima no Brasil.",
  alternates: {
    canonical: "/pt/solucoes/projetos-customizados",
  },
  openGraph: {
    title: "Projetos Customizados para Cargas Especiais | NFT Logistics",
    description:
      "Soluções completas em engenharia logística, afretamento multimodal e transporte de equipamentos indivisíveis para indústrias e infraestrutura.",
    url: "https://www.nftlogistics.com.br/pt/solucoes/projetos-customizados",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/transporte-nft-logistics.webp",
        width: 1200,
        height: 630,
        alt: "Projetos Customizados e Cargas de Projeto NFT Logistics",
      },
    ],
  },
};

export default function ProjetosCustomizadosPage() {
  return (
    <main className="min-h-screen">
      <ProjetosCustomizadosClient />
    </main>
  );
}
