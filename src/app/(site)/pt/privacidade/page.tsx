import type { Metadata } from "next";
import PrivacyPolicyView from "@/src/components/pagesComponents/PrivacyPolicyView";
import privacyData from "@/db/privacy.json";

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: `${privacyData.pt.titulo_pagina} | NFT Logistics`,
  description: privacyData.pt.subtitulo,
  path: SITE_ROUTES.privacy.pt,
  locale: "pt-BR",
  image: SECTION_OG_IMAGES.privacy,
  languageAlternates: SITE_ROUTES.privacy,
});

export default function PrivacyPage() {
  return <PrivacyPolicyView lang="pt" />;
}
