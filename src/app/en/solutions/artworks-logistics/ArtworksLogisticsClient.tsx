"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
  Layers,
  Landmark,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
  Eye,
  Lock,
  ThermometerSnowflake,
  FileSpreadsheet,
} from "lucide-react";

export default function ArtworksLogisticsClient() {
  const whatsappArtMessage =
    "Hello! I would like to speak with a specialist about Logistics for Fine Arts and Cultural Assets with NFT Logistics.";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappArtMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCK 1: HERO                                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/nft-art-2.jpg"
            alt="Fine Art and Museum Logistics NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Palette className="w-4 h-4 text-orange-400" />
            <span>Museum-Grade Logistics Curatorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Specialized Logistics for Fine Arts and Cultural Heritage
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            Secure domestic and international transport, tailor-made climate-controlled crating, and complete customs administration for biennials, museums, galleries, auctions, and private collectors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Speak with an Art Specialist</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#steps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Our Protocols</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                International Nail-to-Nail Standard
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                On-site supervision with specialized fine-art couriers, bespoke archival packaging, and absolute discretion.
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
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/nft-art.jpg"
                    alt="Packaging and transport of fine arts and historical collections"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Museum Preventive Conservation</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">Strict temperature, relative humidity, and vibration monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                Sensitivity and High Precision
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Works of art are not cargo: they are heritage that commands utmost devotion and precision
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Handling master paintings, sculptures, multimedia installations, and historical relics demands protocols far beyond commercial freight. Abrupt swings in relative humidity, thermal shocks, or mechanical vibrations can cause irreversible damage to priceless pieces.
                </p>
                <p>
                  NFT Logistics provides end-to-end stewardship under the strict &quot;nail-to-nail&quot; standard. We craft custom marine-grade plywood museum crates lined with archival inert foams and vapor barriers, documented by rigorous technical Condition Reports.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  We oversee permits from Brazilian heritage authorities (IPHAN & IBRAM), structure tax-free Temporary Admission regimes, and secure All Risks Fine Arts insurance for complete serenity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 3: 3 CARDS                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Specialized Services
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Excellence in Every Phase of Art Logistics
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Every artistic medium requires tailored preservation engineering—from delicate canvas paintings to heavy marble sculptures:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Boxes className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Structural Protection
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Climate-Controlled Museum Crates
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Custom-built ISPM 15 phytosanitary certified marine plywood crates. Lined with breathable Tyvek, neutral Plastazote/Ethafoam padding, hygrothermal barriers, and shock absorbers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>ISPM 15 certified and inert archival materials</span>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Continuous Supervision
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Nail-to-Nail Transport & Dedicated Courier
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Dedicated air-ride pneumatic suspension vehicles, real-time temperature/humidity telemetry, and specialized fine art courier accompaniment on all ground and air legs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Air-ride suspension and courier accompaniment</span>
              </div>
            </div>

            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Government Heritage Compliance
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Temporary Admission & IPHAN / IBRAM
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Specialized customs clearance under Temporary Admission for exhibitions with 100% tax suspension. Procuring transit authorizations from IPHAN and IBRAM museum authorities.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Duty suspension and IPHAN approval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 4: WHY CHOOSE US                                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>Confidentiality & Reliability</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Why NFT Logistics is the trusted choice for the art market?
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                Irreplaceable masterpieces cannot be entrusted to standard freight handlers. Any shock can crack centuries-old oil layers or compromise fragile sculptures.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Our art handlers use lint-free cotton and surgical gloves, respect ICOM preventive conservation ethics, and operate under strict Non-Disclosure Agreements (NDA).
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>Speak with our specialist team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Detailed Condition Reports
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Exhaustive technical assessment accompanied by ultra-high-resolution macro photography upon collection and delivery, documenting the piece&apos;s physical condition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ThermometerSnowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Climate Control & Pneumatic Suspension
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Custom vehicles maintaining constant temperature (18°C–22°C) and relative humidity (50%–55%), absorbing 100% of road vibration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      All Risks Fine Arts Insurance (Nail-to-Nail)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Tailor-made coverage with top global art insurance underwriters, guaranteeing door-to-door wall-to-wall protection against loss or damage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Discretion & Security Escorts
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Complete confidentiality on routes and schedules. Armed tactical escorts and satellite tracking provided whenever required for high-valuation masterworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 5: 5-STEP PROTOCOL                                                  */}
      {/* ========================================================================= */}
      <section id="steps" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Museum Protocol
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Our 5-Step Art Logistics Methodology
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              A meticulous workflow compliant with international museum preservation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Initial Condition Report
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  On-site physical inspection of dimensions, support, frame, and issuance of initial baseline report.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Custom Archival Packaging
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Crafting of ISPM 15 fumigated timber crates with inert Tyvek lining and hygrothermal barrier.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Heritage Approvals & Clearance
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Securing transit approvals with IPHAN / IBRAM and customs filing under Temporary Admission.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Air-Ride Transport & Courier
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Transit in air-ride pneumatic trucks with climate telemetry and professional courier monitoring.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Acclimatization & Wall-Mounting
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Controlled resting period, meticulous uncrating, final Condition Report signoff, and mounting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 5.5: GALLERY OF FINE ART & MUSEUM HANDLING                          */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/70 dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Curatorship & Preservation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Curatorship and Preservation of Rare Pieces
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              Witness our technical precision in crating, temperature control, and physical handling of invaluable cultural collections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/imagens/nft-art.jpg",
                alt: "Contemporary sculpture and exhibition logistics",
                title: "Sculptures & Large Installations",
                tag: "Anti-Vibration Handling",
                desc: "Specialized vibration-dampening rigging equipment and secure placement at galleries and biennales."
              },
              {
                src: "/imagens/nft-art-2.jpg",
                alt: "Technical inspection and art condition reporting",
                title: "Condition Reports & Forensics",
                tag: "Photographic Audit",
                desc: "Microscopic analysis of varnishes, craquelure, and canvas margins before and after cross-border transit."
              },
              {
                src: "/imagens/nft-art-3.jpg",
                alt: "Museum-grade climate-controlled wooden crates",
                title: "Tailored Crates (ISPM 15)",
                tag: "Microclimate Control",
                desc: "Double-walled museum crating with progressive-density Ethafoam linings and vapor barrier protection."
              },
              {
                src: "/imagens/feira-nft-logistics-2.jpg",
                alt: "International exhibitions and museum collections",
                title: "International Museum Exhibitions",
                tag: "End-to-End Care",
                desc: "Temporary customs clearance under IPHAN/IBRAM cultural stewardship with full Nail-to-Nail insurance."
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
                    {item.tag}
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
            src="/imagens/nft-art-2.jpg"
            alt="Consultancy in Fine Arts Logistics NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Palette className="w-4 h-4 text-orange-400" />
            <span>Art Logistics Curatorship</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Need to transport fine art with utmost confidentiality and protection?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Consult directly with our fine art logistics curators. We develop customized solutions for exhibitions, galleries, auctions, and private collectors with unconditional preservation guarantees.
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
              <span>Speak with a Specialist on WhatsApp</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            Exclusive care for museums, biennials, galleries, and private collections.
          </p>
        </div>
      </section>
    </div>
  );
}
