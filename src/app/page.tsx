import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";
import HomeClient from "@/src/components/HomeClient";

export default function Home() {
  return (
    <main>
      <Hero
        videoSrc="/videos/home-nft-logistics.mp4"
        title="We help global companies exhibit, import and operate in Brazil without regulatory surprises."
        subtitle="Specialized end-to-end logistics solutions, customs clearance, and regulatory advisory tailored to ensure your operations and international events flow seamlessly in the Brazilian market."
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



