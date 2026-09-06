import type { Metadata } from "next";
import EnPage, { metadata as enMetadata } from "./en/page";

export const metadata: Metadata = {
  ...enMetadata,
  alternates: {
    canonical: "https://www.nftlogistics.com.br",
    languages: {
      "pt-BR": "https://www.nftlogistics.com.br/pt",
      "en": "https://www.nftlogistics.com.br/en",
      "zh": "https://www.nftlogistics.com.br/cn",
      "x-default": "https://www.nftlogistics.com.br/en",
    },
  },
};

export default function Home() {
  return <EnPage />;
}



