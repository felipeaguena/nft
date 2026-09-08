import type { Metadata } from "next";
import ContactForm from "@/src/components/ContactForm";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";

import { constructMetadata, SECTION_OG_IMAGES, SITE_ROUTES } from "@/src/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | NFT Logistics",
  description:
    "Get in touch with NFT Logistics for personalized solutions in international freight forwarding, event logistics, customs clearance, and foreign trade in Brazil.",
  path: SITE_ROUTES.contact.en,
  locale: "en_US",
  image: SECTION_OG_IMAGES.contact,
  keywords: [
    "contact NFT Logistics",
    "freight forwarding brazil contact",
    "customs clearance quotes brazil",
    "event logistics contact",
    "Sao Paulo logistics office",
  ],
  languageAlternates: SITE_ROUTES.contact,
});

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center relative bg-neutral-50 dark:bg-[#0a0a0a] transition-colors justify-center">
      <Hero
        className="mb-16"
        imageSrc="/imagens/complemento-nft-logistics-2.webp"
        title="Contact Us"
        subtitle="At NFT Logistics, our dedicated team specializing in special operations is the heart of our logistics solutions."
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information column on the left (5 columns) */}
          <div className="lg:col-span-5 space-y-8 pt-2 max-w-lg mx-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 rounded-full border border-orange-200 dark:border-orange-900/60">
                Specialized Support
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Let&apos;s talk about your next project?
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                Our team is ready to understand your operational challenges and offer tailor-made solutions in international logistics and customs clearance.
              </p>
            </div>

            {/* Contact information cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">E-mail</h3>
                  <a
                    href="mailto:comercial@nftlogistics.com.br"
                    className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    comercial@nftlogistics.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Location</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    São Paulo - SP, Brazil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Business Hours</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    Monday to Friday, 9:00 AM to 6:00 PM (BRT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column on the right (7 columns) */}
          <div className="lg:col-span-7 pt-2 max-w-lg mx-6">
            <ContactForm
              lang="en"
              title="Send a Message"
              description="Fill out the fields below with your details and explain your request."
            />
          </div>
        </div>
      </div>

      <Hero
        imageSrc="/imagens/feira-nft-logistics-7.webp"
        title="Join the best international logistics team for fairs and events in Brazil!"
        actions={
          <>
            <Button variant="primary" size="lg" href="mailto:comercial@nftlogistics.com.br" rightIcon={<ArrowRight />}>
              Contact Us
            </Button>
          </>
        }
      />
    </main>
  );
}
