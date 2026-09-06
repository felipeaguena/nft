import type { Metadata } from "next";
import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";
import HomeClient from "@/src/components/pagesComponents/HomeClient";

export const metadata: Metadata = {
  title: "NFT Logistics | 国际物流解决方案与巴西海关清关专家",
  description:
    "我们协助全球企业在巴西参展、进口和运营，免除监管困扰。提供端到端国际物流解决方案、巴西海关清关及特殊监管制度定制服务。",
  alternates: {
    canonical: "/cn",
    languages: {
      "pt-BR": "https://www.nftlogistics.com.br/pt",
      "en": "https://www.nftlogistics.com.br/en",
      "zh": "https://www.nftlogistics.com.br/cn",
      "x-default": "https://www.nftlogistics.com.br/en",
    },
  },
  openGraph: {
    title: "NFT Logistics | 国际物流解决方案与巴西海关清关专家",
    description:
      "我们协助全球企业在巴西参展、进口和运营，免除监管困扰。",
    url: "https://www.nftlogistics.com.br/cn",
    siteName: "NFT Logistics",
    locale: "zh_CN",
    images: [
      {
        url: "https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png",
        width: 1200,
        height: 630,
        alt: "NFT Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFT Logistics | 国际物流解决方案与巴西海关清关专家",
    description:
      "我们协助全球企业在巴西参展、进口和运营，免除监管困扰。",
    images: ["https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png"],
  },
};

export default function CnPage() {
  return (
    <main>
      <Hero
        videoSrc="/videos/home-nft-logistics.mp4"
        title="我们协助全球企业在巴西参展、进口和运营，免除监管困扰。"
        subtitle="提供端到端的国际物流解决方案、海关清关与特殊监管制度咨询，助力您的全球业务与国际展会顺畅拓展巴西市场。"
        actions={
          <>
            <Button variant="primary" size="lg" href="/cn/contact-cn">
              联系我们
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/cn/solutions-cn"
              className="!border-white/40 !text-white hover:!bg-white/10 hover:!border-white/60 backdrop-blur-sm"
            >
              解决方案
            </Button>
          </>
        }
      />
      <HomeClient lang="cn" />
    </main>
  );
}


