import type { Metadata } from "next";
import ContactForm from "@/src/components/ContactForm";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Hero from "@/src/components/Hero";
import Button from "@/src/components/Button";

export const metadata: Metadata = {
  title: "Fale Conosco | NFT Logistics",
  description:
    "Entre em contato com a NFT Logistics para soluções personalizadas em logística internacional, desembaraço aduaneiro e comércio exterior.",
  alternates: {
    canonical: "/pt/contato",
  },
};

export default function ContatoPage() {
  return (
    <main className="flex flex-col items-center relative bg-neutral-50 dark:bg-[#0a0a0a] transition-colors justify-center">
      <Hero className="mb-16"
        imageSrc="/imagens/complemento-nft-logistics-2.webp"
        title="Contato"
        subtitle="Na NFT Logistics, nossa equipe dedicada e especializada em operações especiais é o coração das nossas soluções logísticas. "
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna de informações à esquerda (5 colunas) */}
          <div className="lg:col-span-5 space-y-8 pt-2 max-w-lg mx-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 rounded-full border border-orange-200 dark:border-orange-900/60">
                Atendimento Especializado
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Vamos conversar sobre o seu próximo projeto?
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                Nossa equipe está pronta para entender seus desafios operacionais e oferecer soluções sob medida em logística internacional e desembaraço aduaneiro.
              </p>
            </div>

            {/* Cartões de informações de contato */}
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
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Localização</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    São Paulo - SP, Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Horário de Atendimento</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200">
                    Segunda a Sexta, das 09h às 18h (BRT)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Formulário à direita (7 colunas) */}
          <div className="lg:col-span-7  pt-2 max-w-lg mx-6">
            <ContactForm
              lang="pt"
              title="Envie uma mensagem"
              description="Preencha os campos abaixo com seus dados e detalhe sua solicitação."
            />
          </div>
        </div>
      </div>
      <Hero
        imageSrc="/imagens/feira-nft-logistics-7.jpg"
        title="Faça parte da melhor equipe de logística internacional para feiras e eventos do Brasil!"
        actions={
          <>
            <Button variant="primary" size="lg" href="mailto:comercial@nftlogistics.com.br" rightIcon={<ArrowRight />}>
              Fale Conosco
            </Button>
          </>
        }
      />
    </main>
  );
}
