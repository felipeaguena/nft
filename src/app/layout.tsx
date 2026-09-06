import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import WhatsAppButton from "../components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nftlogistics.com.br"),
  title: {
    default: "NFT Logistics | International Logistics Solutions",
    template: "%s | NFT Logistics",
  },
  description:
    "We help global companies exhibit, import and operate in Brazil without regulatory surprises.",
  icons: {
    icon: [
      { url: "/logo/nft-logistics-icone-branco.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo/nft-logistics-icone-branco.png",
    shortcut: "/logo/nft-logistics-icone-branco.png",
  },
  openGraph: {
    title: "NFT Logistics | International Logistics Solutions",
    description:
      "We help global companies exhibit, import and operate in Brazil without regulatory surprises.",
    url: "https://www.nftlogistics.com.br",
    siteName: "NFT Logistics",
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
    title: "NFT Logistics | International Logistics Solutions",
    description:
      "We help global companies exhibit, import and operate in Brazil without regulatory surprises.",
    images: [
      "https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NFT Logistics',
    url: 'https://www.nftlogistics.com.br',
    logo: 'https://www.nftlogistics.com.br/logo/nft-logistics-icone-branco.png',
    description: 'We help global companies exhibit, import and operate in Brazil without regulatory surprises.',
    sameAs: [
      'https://www.linkedin.com/company/nft-logistics',
      'https://www.instagram.com/nftlogistics',
    ],
  };
  
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }

                var path = window.location.pathname;
                if (path.startsWith('/pt')) {
                  document.documentElement.lang = 'pt-BR';
                } else if (path.startsWith('/cn')) {
                  document.documentElement.lang = 'zh-Hans';
                } else {
                  document.documentElement.lang = 'en';
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
