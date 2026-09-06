import type { Metadata } from "next";
import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";
import HomeClient from "@/src/components/pagesComponents/HomeClient";

export const metadata: Metadata = {
  title: "NFT Logistics | International Logistics Solutions & Customs Intelligence",
  description:
    "We help global companies exhibit, import and operate in Brazil without regulatory surprises. Specialized end-to-end logistics solutions and customs brokerage.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "https://www.nftlogistics.com.br/pt",
      "en": "https://www.nftlogistics.com.br/en",
      "zh": "https://www.nftlogistics.com.br/cn",
      "x-default": "https://www.nftlogistics.com.br/en",
    },
  },
  openGraph: {
    title: "NFT Logistics | International Logistics Solutions & Customs Intelligence",
    description:
      "We help global companies exhibit, import and operate in Brazil without regulatory surprises.",
    url: "https://www.nftlogistics.com.br/en",
    siteName: "NFT Logistics",
    locale: "en_US",
    images: [
      {
        url: "https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png",
        width: 1200,
        height: 630,
        alt: "NFT Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NFT Logistics | International Logistics Solutions & Customs Intelligence",
    description:
      "We help global companies exhibit, import and operate in Brazil without regulatory surprises.",
    images: ["https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png"],
  },
};

export default function EnPage() {
  return (
    <main>
      <Hero
        videoSrc="/videos/home-nft-logistics.mp4"
        subtitle="Specialized end-to-end logistics solutions, customs clearance, and regulatory advisory tailored to ensure your operations and international events flow seamlessly in the Brazilian market."
        title="We help global companies exhibit, import and operate in Brazil without regulatory surprises."
        actions={
          <>
            <Button variant="primary" size="lg" href="/en/contact">
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/en/solutions"
              className="!border-white/40 !text-white hover:!bg-white/10 hover:!border-white/60 backdrop-blur-sm"
            >
              Our Solutions
            </Button>
          </>
        }
      />  
      <HomeClient lang="en" />
    </main>
  );
}


