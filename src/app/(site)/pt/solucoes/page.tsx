import type { Metadata } from "next";
import SolucoesClient from "@/src/components/pagesComponents/SolucoesClient";

import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Soluções em Logística Internacional & Regimes Especiais | NFT Logistics",
  description:
    "Soluções completas em logística internacional, regimes aduaneiros especiais, feiras e eventos, cargas pesadas e obras de arte com tolerância zero a atrasos.",
  path: "/pt/solucoes",
  lang: "pt",
  image: SECTION_OG_IMAGES.solutions,
  keywords: [
    "Soluções Logística Internacional",
    "Regimes Aduaneiros Especiais",
    "Desembaraço Aduaneiro",
    "Logística Feiras e Eventos",
    "Cargas de Projeto",
    "Logística Obras de Arte",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.solutions,
});

export default function SolucoesPage() {
  return (
    <main className="min-h-screen">
      <SolucoesClient lang="pt" />
    </main>
  );
}
