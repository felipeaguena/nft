import type { Metadata } from "next";
import PrivacyPolicyView from "@/src/components/pagesComponents/PrivacyPolicyView";
import privacyData from "@/db/privacy.json";

export const metadata: Metadata = {
  title: `${privacyData.pt.titulo_pagina} | NFT Logistics`,
  description: privacyData.pt.subtitulo,
  alternates: {
    canonical: privacyData.pt.link,
    languages: {
      "pt-BR": privacyData.pt.link,
      "en": privacyData.en.link,
      "zh": privacyData.cn.link,
    },
  },
  openGraph: {
    title: `${privacyData.pt.cabecalho_pagina} | NFT Logistics`,
    description: privacyData.pt.subtitulo,
    url: `https://www.nftlogistics.com.br${privacyData.pt.link}`,
    siteName: "NFT Logistics",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyView lang="pt" />;
}
