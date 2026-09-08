import type { Metadata } from 'next';
import CustomizedProjectsClient from '@/src/components/pagesComponents/CustomizedProjectsClient';

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "定制项目物流与重大件工程运输 | NFT Logistics",
  description:
    "专业多式联运工程方案、实地路线勘测（Route Survey）及超限（OOG）、散杂货与工业设备的端到端工程物流。",
  path: SITE_ROUTES.customizedProjects.cn,
  locale: "zh_CN",
  image: SECTION_OG_IMAGES.customizedProjects,
  keywords: [
    "项目物流",
    "重大件运输",
    "OOG超限箱",
    "散杂货租船",
    "路线勘测",
    "特种公路运输",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.customizedProjects,
});

export default function CustomizedProjectsCnPage() {
  return (
    <main className="min-h-screen">
      <CustomizedProjectsClient lang="cn" />
    </main>
  );
}
