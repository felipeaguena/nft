import type { Metadata } from "next";
import SobreClient from "@/src/components/pagesComponents/SobreClient";

export const metadata: Metadata = {
  title: "关于我们 | NFT Logistics - 巴西海关监管智慧与全球端到端物流",
  description:
    "深入了解 NFT Logistics：专注巴西对外贸易、海关特殊监管制度、国际展会物流与高难度货物优先清关的专家团队。",
  alternates: {
    canonical: "/cn/about",
  },
  openGraph: {
    title: "关于我们 | NFT Logistics - 巴西外贸清关与国际物流卓越专家",
    description:
      "以资深关务智慧与零延误标准，协助跨国企业稳健拓展并扎根巴西市场。",
    url: "https://www.nftlogistics.com.br/cn/about",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "关于 NFT Logistics",
      },
    ],
  },
};

export default function AboutCnPage() {
  return (
    <main className="min-h-screen">
      <SobreClient lang="cn" />
    </main>
  );
}

