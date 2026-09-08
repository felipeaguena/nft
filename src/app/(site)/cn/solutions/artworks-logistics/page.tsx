import type { Metadata } from 'next';
import ArtworksLogisticsClient from '@/src/components/pagesComponents/ArtworksLogisticsClient';

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "艺术品与高价值物流 | NFT Logistics",
  description:
    "艺术品、雕塑、博物馆展览及高价值资产的专业端到端物流服务。全流程气候温控、定制包装及最高级别安防。",
  path: SITE_ROUTES.artworks.cn,
  locale: "zh_CN",
  image: SECTION_OG_IMAGES.artworks,
  keywords: [
    "艺术品物流",
    "艺术品运输",
    "博物馆展品清关",
    "恒温车队",
    "定制木箱包装",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.artworks,
});

export default function ArtworksLogisticsCnPage() {
  return (
    <main className="min-h-screen">
      <ArtworksLogisticsClient lang="cn" />
    </main>
  );
}
