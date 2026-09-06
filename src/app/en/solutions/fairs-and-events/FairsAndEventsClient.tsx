"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
  Users,
  Layers,
  BadgePercent,
  Landmark,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
} from "lucide-react";

export default function FairsAndEventsClient() {
  const whatsappFairMessage =
    "Hello! I would like to learn more about support for Fairs and Events in Brazil with NFT Logistics.";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappFairMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCK 1: HERO                                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/feira-nft-logistics-3.jpg"
            alt="International Trade Fairs and Events Logistics in Brazil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.38] dark:brightness-[0.34]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <CalendarCheck className="w-4 h-4 text-orange-400" />
            <span>International Logistics & Customs Regimes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Logistics for International Fairs and Events in Brazil
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            We guarantee door-to-booth delivery, flawless customs clearance, and strict schedule adherence so your enterprise shines across Brazil&apos;s leading convention centers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Speak with a Specialist</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#steps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>See How It Works</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Zero Delay Tolerance Commitment
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                Proven track record in Brazil&apos;s major venues: São Paulo Expo, Anhembi, Riocentro, and Transamerica Expo Center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 2: TWO COLUMNS (IMAGE + TEXT)                                       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/feira-nft-logistics.jpg"
                    alt="Trade show booth setup and logistics operation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Door-to-Booth Operation</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">From origin collection to hall delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                Excellence in Trade Fairs
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Your exhibition booth ready on time, with zero customs risk
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Participating in international fairs and congresses leaves no room for operational errors or delivery delays. Your products, exhibits, displays, and promotional materials must be positioned ahead of assembly, in pristine condition, and fully compliant with Brazilian federal revenue and regulatory bodies.
                </p>
                <p>
                  NFT Logistics acts as your strategic partner, taking full ownership of international air or ocean freight, entry and exit customs formalities, delicate handling of high-tech gear, and punctual booth delivery.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  We handle the bureaucracy, timelines, and tax compliance so your commercial team can focus exclusively on closing deals and networking with clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 3: 3 TAX CARDS                                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Customs Frameworks
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Tax Models for Fairs & Exhibitions
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Every type of cargo entering Brazil for an event requires a specific customs classification. Explore the modalities managed masterfully by NFT Logistics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Tax Suspension
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Temporary Admission Regime
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Allows demonstration machinery, tech equipment, screens, and structures to enter Brazil with 100% suspension of federal import duties. Tied to proof of temporary exhibition use and subsequent re-export within official deadlines.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Permanent Entry
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Definitive Clearance / Consumption
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Mandatory customs filing for giveaway gifts, printed brochures, promotional samples, and merchandise sold during or after the exhibition. We calculate all duties in advance for smooth clearance without customs holds.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Regulatory Compliance
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Government Agency Approvals
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Exhibited items frequently require prior authorization from Brazilian agencies such as Anvisa (health), Inmetro (technical standards), Anatel (telecom), and MAPA (agriculture). We handle LPCO licenses before origin departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 4: WHY CHOOSE NFT LOGISTICS                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>Competitive Advantages</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Why choose NFT Logistics for your exhibition?
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                In trade exhibitions, a single day&apos;s delay destroys the exhibitor&apos;s entire investment. There is zero room to improvise with generic brokers.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                We act proactively at every milestone—from verifying commercial invoices and HS classifications to final physical setup inside the hall.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>Speak with our team of specialists</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Rigorous Timeline Adherence
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Timelines synchronized to the minute with pavilion regulations and booth setup crews. Continuous monitoring so everything is ready prior to opening day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Legal Certainty & Duty Exemption
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Flawless execution of Temporary Admission regimes, guaranteeing tax suspension without penalties, seizures, or post-event disputes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Door-to-Booth Logistics
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Comprehensive end-to-end service: supplier pickup worldwide, ISPM 15 certified crating, multimodal freight, and delivery directly onto the booth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      On-Site Ground Coordination
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Our specialists are physically present on the exhibition floor before, during, and after the event, assisting with crate storage and outbound re-export.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 5: 5-STEP METHODOLOGY                                               */}
      {/* ========================================================================= */}
      <section id="steps" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Operational Methodology
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              How Our Operations Work
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              A rigorous, transparent workflow tested across hundreds of exhibitions to ensure your booth is 100% prepared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Customs Diagnosis & Planning
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Advance audit of invoices, packing lists, HS classifications, and definition of optimal temporary vs. definitive regimes.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Prior Licensing & Permits
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Filing of LPCO import licenses with regulatory bodies like Anvisa, MAPA, Inmetro, or Anatel before cargo leaves the country of origin.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Origin Pickup & Freight
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  International pickup, verification of ISPM 15 treated crates, and priority express air or ocean freight booking with full tracking.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Priority Customs Clearance
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  On-site presence during customs inspections at Brazilian terminals, signing liability terms, and obtaining fast green channel release.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Booth Delivery & Re-Export
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Dedicated local trucking to the venue, booth offloading, empty crate storage, and coordination of post-event re-exportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 5.5: FIELD OPERATIONS & EXHIBITION GALLERY                           */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/70 dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Field Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Operations at Major Brazilian Exhibitions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              Explore authentic field photos of uncrating, customs clearance, and dedicated booth support performed by NFT Logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/imagens/feira-nft-logistics.jpg",
                alt: "Agrishow and international agribusiness exhibition",
                title: "Agrishow & Heavy Machinery",
                location: "Ribeirão Preto, SP",
                desc: "Temporary admission clearance and specialized flatbed transport for oversized agricultural tech."
              },
              {
                src: "/imagens/feira-nft-logistics-3.jpg",
                alt: "Hospitalar and international healthcare technology",
                title: "Hospitalar & Healthcare Tech",
                location: "São Paulo Expo, SP",
                desc: "Diagnostic and ultrasound systems with import licenses pre-cleared with Anvisa."
              },
              {
                src: "/imagens/feira-nft-logistics-2.jpg",
                alt: "Electric mobility and industrial clean tech expo",
                title: "Mobility & Clean Energy",
                location: "Transamerica Expo, SP",
                desc: "Complete rigging, uncrating, stand delivery, and secure storage of empty packaging throughout the show."
              },
              {
                src: "/imagens/feira-nft-logistics-6.jpg",
                alt: "Industrial automation and technology expo",
                title: "Industry 4.0 & Automation",
                location: "Distrito Anhembi, SP",
                desc: "Door-to-door coordination, expedited post-event dismantling, and tax-exempt re-exportation."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-md hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-md text-orange-400 border border-white/10">
                    {item.location}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 6: CTA                                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/feira-nft-logistics-7.jpg"
            alt="Consultancy and logistics support for international fairs"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <CalendarCheck className="w-4 h-4 text-orange-400" />
            <span>Specialized Advisory</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Ready to exhibit in Brazil with complete peace of mind and punctuality?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Do not let regulatory hurdles and rigid deadlines jeopardize your participation. Contact our trade show logistics specialists today for customized planning.
          </p>

          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
              </svg>
              <span>Chat on WhatsApp with a Specialist</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            Prompt support for fairs, congresses, and exhibitions throughout Brazil.
          </p>
        </div>
      </section>
    </div>
  );
}
