import type { Metadata } from "next";
import SobreClient from "@/src/components/pagesComponents/SobreClient";

import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "关于我们 | NFT Logistics - 巴西海关监管智慧与全球端到端物流",
  description:
    "深入了解 NFT Logistics：专注巴西对外贸易、海关特殊监管制度、国际展会物流与高难度货物优先清关的专家团队。",
  path: "/cn/about",
  lang: "cn",
  image: SECTION_OG_IMAGES.about,
  keywords: [
    "关于NFT Logistics",
    "巴西对外贸易",
    "巴西海关监管制度",
    "巴西清关代理",
    "巴西货运代理",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.about,
});

export default function AboutCnPage() {
  return (
    <main className="min-h-screen">
      <SobreClient lang="cn" />
    </main>
  );
}

