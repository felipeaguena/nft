import type { Metadata } from "next";
import PrivacyPolicyView from "@/src/components/pagesComponents/PrivacyPolicyView";
import privacyData from "@/db/privacy.json";

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: `${privacyData.en.titulo_pagina} | NFT Logistics`,
  description: privacyData.en.subtitulo,
  path: SITE_ROUTES.privacy.en,
  locale: "en_US",
  image: SECTION_OG_IMAGES.privacy,
  languageAlternates: SITE_ROUTES.privacy,
});

export default function PrivacyEnPage() {
  return <PrivacyPolicyView lang="en" />;
}
