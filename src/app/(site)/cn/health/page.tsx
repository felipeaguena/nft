import type { Metadata } from "next";
import HealthClient from "@/src/components/pagesComponents/HealthClient";

export const metadata: Metadata = {
  title: "医疗设备与医院精密机械进口至巴西 | NFT Logistics",
  description:
    "深耕巴西医疗机械与医院产品进口清关、暂时进境参展与法规合规，规避巴西国家卫生监督局（Anvisa）合规风险。",
  alternates: {
    canonical: "/cn/health",
  },
  openGraph: {
    title: "医疗设备与医院精密机械进口至巴西 | NFT Logistics",
    description:
      "针对医疗科技、影像诊断设备及巴西展会参展，提供全面符合 Anvisa 监管要求的全流程关务与物流解决方案。",
    url: "https://www.nftlogistics.com.br/cn/health",
    siteName: "NFT Logistics",
    images: [
      {
        url: "/imagens/Home-Health-NFT-Logistics.jpg",
        width: 1200,
        height: 630,
        alt: "NFT Logistics 医疗设备与医院物流",
      },
    ],
  },
};

export default function HealthCnPage() {
  return (
    <main className="min-h-screen">
      <HealthClient lang="cn" />
    </main>
  );
}
