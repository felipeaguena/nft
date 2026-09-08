import type { Metadata } from 'next';
import SpecialCustomsRegimesClient from '@/src/components/pagesComponents/SpecialCustomsRegimesClient';

import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "巴西特殊海关监管制度（Regimes Especiais）与财税优化 | NFT Logistics",
  description:
    "通过暂时进境（Admissão Temporária）、退税/免税加工（Drawback）、保税仓储及RECOF大幅优化巴西进出口税负。确保完全符合巴西联邦税务局法规。",
  path: "/cn/solutions/special-customs-regimes",
  lang: "cn",
  image: SECTION_OG_IMAGES.specialRegimes,
  keywords: [
    "巴西特殊海关制度",
    "巴西暂时进境",
    "巴西Drawback",
    "巴西保税仓储",
    "RECOF",
    "巴西关税筹划",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.specialRegimes,
});

export default function SpecialCustomsRegimesCnPage() {
  return (
    <main className="min-h-screen">
      <SpecialCustomsRegimesClient lang="cn" />
    </main>
  );
}
