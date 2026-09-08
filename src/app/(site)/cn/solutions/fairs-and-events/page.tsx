import type { Metadata } from "next";
import FairsAndEventsClient from "@/src/components/pagesComponents/FairsAndEventsClient";

import { constructMetadata, SITE_ROUTES, SECTION_OG_IMAGES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "国际展会与商业活动物流 | NFT Logistics",
  description:
    "深耕巴西展会与大型活动物流。提供暂时进境免税申报、门到展位配送、口岸快速清关与严谨的时效保障。",
  path: "/cn/solutions/fairs-and-events",
  lang: "cn",
  image: SECTION_OG_IMAGES.fairsAndEvents,
  keywords: [
    "巴西展会物流",
    "巴西商业活动物流",
    "巴西暂时进境申报",
    "展位门到门运输",
    "巴西展品清关",
    "NFT Logistics",
  ],
  alternates: SITE_ROUTES.fairsAndEvents,
});

export default function FairsAndEventsCnPage() {
  return (
    <main className="min-h-screen">
      <FairsAndEventsClient lang="cn" />
    </main>
  );
}
