import type { Metadata } from 'next';
import SpecialCustomsRegimesClient from '@/src/components/pagesComponents/SpecialCustomsRegimesClient';

export const metadata: Metadata = {
  title: '巴西特殊海关监管制度（Regimes Especiais）与财税优化 | NFT Logistics',
  description: '通过暂时进境（Admissão Temporária）、退税/免税加工（Drawback）、保税仓储及RECOF大幅优化巴西进出口税负。确保完全符合巴西联邦税务局法规。',
  keywords: '巴西特殊海关制度, 巴西暂时进境, 巴西Drawback, 巴西保税仓储, RECOF, 巴西关税筹划, NFT Logistics',
  alternates: {
    canonical: '/cn/solutions/special-customs-regimes',
  },
  openGraph: {
    title: '巴西特殊海关监管制度（Regimes Especiais）与财税优化 | NFT Logistics',
    description: '通过暂时进境（Admissão Temporária）、Drawback与保税仓储大幅优化企业在巴西的进出口关税与现金流。',
    url: 'https://www.nftlogistics.com.br/cn/solutions/special-customs-regimes',
    type: 'website',
  }
};

export default function SpecialCustomsRegimesCnPage() {
  return (
    <main className="min-h-screen">
      <SpecialCustomsRegimesClient lang="cn" />
    </main>
  );
}
