import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";

export const metadata: Metadata = {
  title: "国际展会与商业活动物流 | NFT Logistics",
  description:
    "深耕巴西展会与大型活动物流。提供暂时进境免税申报、门到展位配送、口岸快速清关与严谨的时效保障。",
  alternates: {
    canonical: "/cn/solutions-cn/fairs-and-events-cn",
  },
  openGraph: {
    title: "国际展会与商业活动物流 | NFT Logistics",
    description:
      "为全球赴巴西参展企业提供端到端国际多式联运、海关特殊监管制度与展馆现场专业支持。",
    url: "https://www.nftlogistics.com.br/cn/solutions-cn/fairs-and-events-cn",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/feira-nft-logistics-3.jpg",
        width: 1200,
        height: 630,
        alt: "NFT Logistics 国际展会物流",
      },
    ],
  },
};

export default function FairsAndEventsCnPage() {
  return (
    <main className="min-h-screen">
      <FairsAndEventsClient lang="cn" />
    </main>
  );
}
