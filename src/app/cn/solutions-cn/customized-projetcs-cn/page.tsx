import type { Metadata } from 'next';
import CustomizedProjectsCnClient from './CustomizedProjectsCnClient';

export const metadata: Metadata = {
  title: '定制项目物流与重大件工程运输 | NFT Logistics',
  description: '专业多式联运工程方案、实地路线勘测（Route Survey）及超限（OOG）、散杂货与工业设备的端到端工程物流。',
  keywords: '项目物流, 重大件运输, OOG超限箱, 散杂货租船, 路线勘测, 特种公路运输, NFT Logistics',
  alternates: {
    canonical: '/cn/solutions-cn/customized-projetcs-cn',
  },
  openGraph: {
    title: '定制项目物流与重大件工程运输 | NFT Logistics',
    description: '专业多式联运工程方案、实地路线勘测（Route Survey）及特种超限货物端到端交钥匙物流。',
    url: 'https://www.nftlogistics.com.br/cn/solutions-cn/customized-projetcs-cn',
    type: 'website',
  }
};

export default function CustomizedProjectsCnPage() {
  return <CustomizedProjectsCnClient />;
}
