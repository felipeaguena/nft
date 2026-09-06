import type { Metadata } from "next";
import PrivacyPolicyView from "@/src/components/PrivacyPolicyView";
import privacyData from "@/db/privacy.json";

export const metadata: Metadata = {
  title: `${privacyData.cn.titulo_pagina} | NFT Logistics`,
  description: privacyData.cn.subtitulo,
  alternates: {
    canonical: privacyData.cn.link,
    languages: {
      "pt-BR": privacyData.pt.link,
      "en": privacyData.en.link,
      "zh": privacyData.cn.link,
    },
  },
  openGraph: {
    title: `${privacyData.cn.cabecalho_pagina} | NFT Logistics`,
    description: privacyData.cn.subtitulo,
    url: `https://www.nftlogistics.com.br${privacyData.cn.link}`,
    siteName: "NFT Logistics",
  },
};

export default function PrivacyCnPage() {
  return <PrivacyPolicyView lang="cn" />;
}
