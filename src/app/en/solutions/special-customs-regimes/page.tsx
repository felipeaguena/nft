import type { Metadata } from 'next';
import SpecialCustomsRegimesClient from './SpecialCustomsRegimesClient';

export const metadata: Metadata = {
  title: 'Special Customs Regimes | NFT Logistics',
  description: 'Tax and duty optimization through Temporary Admission, Drawback, Bonded Warehousing, and RECOF. Protect corporate cash flow with total Brazilian customs compliance.',
  keywords: 'special customs regimes, temporary admission Brazil, drawback suspension, bonded warehouse Brazil, RECOF, customs tax optimization, NFT Logistics',
  alternates: {
    canonical: '/en/solutions/special-customs-regimes',
  },
  openGraph: {
    title: 'Special Customs Regimes | NFT Logistics',
    description: 'Tax and duty optimization through Temporary Admission, Drawback, and Bonded Warehousing with total Brazilian customs compliance.',
    url: 'https://www.nftlogistics.com.br/en/solutions/special-customs-regimes',
    type: 'website',
  }
};

export default function SpecialCustomsRegimesPage() {
  return <SpecialCustomsRegimesClient />;
}
