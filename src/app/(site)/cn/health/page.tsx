import type { Metadata } from "next";
import HealthClient from "@/src/components/pagesComponents/HealthClient";

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "医疗设备与医院精密机械进口至巴西 | NFT Logistics",
  description:
    "深耕巴西医疗机械与医院产品进口清关、暂时进境参展与法规合规，规避巴西国家卫生监督局（Anvisa）合规风险。",
  path: SITE_ROUTES.health.cn,
  locale: "zh_CN",
  image: SECTION_OG_IMAGES.health,
  keywords: [
    "医疗设备巴西进口",
    "医院设备清关",
    "Anvisa认证与清关",
    "巴西医疗展会暂时进境",
    "医院物流",
    "NFT Logistics",
  ],
  languageAlternates: SITE_ROUTES.health,
});

export default function HealthCnPage() {
  return (
    <main className="min-h-screen">
      <HealthClient lang="cn" />
    </main>
  );
}
