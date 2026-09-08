import type { Metadata } from "next";
import SolucoesClient from "@/src/components/pagesComponents/SolucoesClient";

import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "国际物流与巴西清关专业解决方案 | NFT Logistics",
  description:
    "提供巴西国际物流、特殊海关监管制度（免税/保税）、展会物流、重大件工程物流及艺术品安全运输，时效零延误。",
  path: "/cn/solutions",
  lang: "cn",
  image: SECTION_OG_IMAGES.solutions,
  keywords: [
    "巴西国际物流方案",
    "巴西特殊监管制度",
    "巴西海关清关",
    "巴西展会物流",
    "重大件工程物流",
    "艺术品国际物流",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.solutions,
});

export default function SolutionsCnPage() {
  return (
    <main className="min-h-screen">
      <SolucoesClient lang="cn" />
    </main>
  );
}
