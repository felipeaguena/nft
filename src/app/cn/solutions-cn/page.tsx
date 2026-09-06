import type { Metadata } from "next";
import SolucoesClient from "@/src/components/SolucoesClient";

export const metadata: Metadata = {
  title: "国际物流与巴西清关专业解决方案 | NFT Logistics",
  description:
    "提供巴西国际物流、特殊海关监管制度（免税/保税）、展会物流、重大件工程物流及艺术品安全运输，时效零延误。",
  alternates: {
    canonical: "/cn/solutions-cn",
  },
  openGraph: {
    title: "国际物流与巴西清关专业解决方案 | NFT Logistics",
    description:
      "从特殊海关制度税收减免，到超限大型项目货物、艺术品及国际展会物流。全程严密风控、合规保障。",
    url: "https://www.nftlogistics.com.br/cn/solutions-cn",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/operacao-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "NFT Logistics 国际物流解决方案",
      },
    ],
  },
};

export default function SolutionsCnPage() {
  return (
    <main className="min-h-screen">
      <SolucoesClient lang="cn" />
    </main>
  );
}
