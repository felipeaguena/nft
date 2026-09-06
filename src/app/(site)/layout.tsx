import Nav from "@/src/components/Nav";
import Footer from "@/src/components/Footer";
import CookieConsent from "@/src/components/CookieConsent";
import WhatsAppButton from "@/src/components/WhatsAppButton";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </>
  );
}
