import type { Metadata } from "next";
import PrivacyPolicyView from "@/src/components/pagesComponents/PrivacyPolicyView";
import privacyData from "@/db/privacy.json";

export const metadata: Metadata = {
  title: `${privacyData.en.titulo_pagina} | NFT Logistics`,
  description: privacyData.en.subtitulo,
  alternates: {
    canonical: privacyData.en.link,
    languages: {
      "pt-BR": privacyData.pt.link,
      "en": privacyData.en.link,
      "zh": privacyData.cn.link,
    },
  },
  openGraph: {
    title: `${privacyData.en.cabecalho_pagina} | NFT Logistics`,
    description: privacyData.en.subtitulo,
    url: `https://www.nftlogistics.com.br${privacyData.en.link}`,
    siteName: "NFT Logistics",
  },
};

export default function PrivacyEnPage() {
  return <PrivacyPolicyView lang="en" />;
}
