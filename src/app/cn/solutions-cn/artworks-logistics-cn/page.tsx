import type { Metadata } from 'next';
import ArtworksLogisticsClient from '@/src/components/pagesComponents/ArtworksLogisticsClient';

export const metadata: Metadata = {
  title: '艺术品与高价值物流 | NFT Logistics',
  description: '艺术品、雕塑、博物馆展览及高价值资产的专业端到端物流服务。全流程气候温控、定制包装及最高级别安防。',
  keywords: '艺术品物流, 艺术品运输, 博物馆展品清关, 恒温车队, 定制木箱包装, NFT Logistics',
  alternates: {
    canonical: '/cn/solutions-cn/artworks-logistics-cn',
  },
  openGraph: {
    title: '艺术品与高价值物流 | NFT Logistics',
    description: '艺术品、雕塑与博物馆展品的专业端到端物流。全流程温控运输与定制安全防护。',
    url: 'https://www.nftlogistics.com.br/cn/solutions-cn/artworks-logistics-cn',
    type: 'website',
  }
};

export default function ArtworksLogisticsCnPage() {
  return (
    <main className="min-h-screen">
      <ArtworksLogisticsClient lang="cn" />
    </main>
  );
}
