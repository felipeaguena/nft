import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import CookieConsent from "../components/CookieConsent";
import WhatsAppButton from "../components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFT",
  description: "NFT Logistics",
  icons: {
    icon: [
      { url: "/logo/nft-logistics-icone-branco.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo/nft-logistics-icone-branco.png",
    shortcut: "/logo/nft-logistics-icone-branco.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
