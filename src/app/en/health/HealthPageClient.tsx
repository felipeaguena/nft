"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  ChevronDown,
  FileCheck2,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";

export default function HealthPageClient() {
  // Accordion state for FAQ (Block 5)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Official message for WhatsApp in Block 6
  const whatsappCtaMessage =
    "I want to participate in trade shows in Brazil and my medical equipment is not yet registered with Anvisa. I would like to start an import process.";
  const whatsappHref = `https://wa.me/5511948530048?text=${encodeURIComponent(
    whatsappCtaMessage
  )}`;

  return (
    <div className="w-full bg-[#050b14] text-neutral-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCK 1: HERO                                                             */}
      {/* Title, subtitle, text, buttons + trust badge with small text              */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background image with medical dark blue overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="Healthcare logistics and medical import NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.42]"
          />
          {/* Medical navy and deep cyan gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/70 via-[#071933]/50 to-[#050b14]" />
          {/* Subtle medical light effect */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/15 blur-[120px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Identification tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Official Freight Forwarder for Hospitalar Trade Show</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Import of Medical Equipment and Healthcare Machinery into Brazil
          </h1>

          {/* Descriptive text */}
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Specialists in Temporary Admission for hospital use and medical events. Full Compliance | Tax Suspension | Deadline Management
          </p>

          {/* Hero Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#steps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore the Process</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Talk to a Specialist</span>
            </a>
          </div>

          {/* Trust element */}
          <div className="mt-12 border-t border-sky-900/40 flex items-center justify-center gap-3.5 max-w-xl text-left bg-sky-950/20 backdrop-blur-sm px-5 py-3.5 rounded-2xl border border-sky-800/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                100% Regulatory Compliant Operations
              </p>
              <p className="text-xs text-neutral-300 leading-snug mt-0.5">
                Specialized technical advice on Anvisa requirements, sanitary RDCs, and strict international handling protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 2: 3 DARK CARDS                                                     */}
      {/* On hover turns blue background and white text                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#040912] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              Enter Brazil Without Surprises
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white">
              The Challenge of Temporary Medical Equipment Import
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              Logistics for medical equipment requires surgical precision. Diagnostic machines, surgical robotics, and high-tech devices must circulate without regulatory risks. The safest route to Brazil is Temporary Admission.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Medical Machinery & Equipment
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Clearance and technical transport with vibration control for CT scanners, MRI systems, ultrasounds, laboratory equipment, and high-value surgical lasers.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Trade Fairs, Congresses & Demonstrations
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Temporary admission with tax suspension for global companies exhibiting medical products at events such as Hospitalar, scientific conferences, and clinical demos in Brazil.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Regulatory Management & Anvisa
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Meticulous preparation and review of technical dossiers, Import Licenses (LI via LPCO module), compliance with Collegiate Board Resolutions (RDCs), and in-person clearance at bonded facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 3: 2 COLUMNS                                                        */}
      {/* Left: title and text                                                      */}
      {/* Right: 1 column with 5 step cards                                         */}
      {/* ========================================================================= */}
      <section id="steps" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060e1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Title and Text */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>Structured Step-by-Step</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                5 Strategic Steps to Import Medical Equipment into Brazil
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Importing healthcare products requires a rigorous protocol. Any discrepancy between the invoice, tariff classification, and sanitary requirements can hold up equipment at ports or airports.
              </p>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                Our methodology ensures legal predictability, swift customs clearance, and complete preservation of equipment calibration and sensitivity until the final destination.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-sky-600/25"
                >
                  <span>Have Questions About Your Equipment?</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: 5 strategic step cards */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              {/* Step 1 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Regulatory Diagnosis & Tariff Classification (NCM / HS Code)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Technical analysis of medical device specifications, proper tariff classification (NCM), sanitary risk class assessment (Class I to IV), and LPCO requirement verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Technical Dossier & Anvisa Licensing (LI / LPCO)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Preparation of required documentation, submission of Import License applications via Siscomex/LPCO, and fulfillment of pre-shipment sanitary requirements at origin.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Specialized Packaging & International Freight
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Custom-built ISPM 15 wooden crating with impact protection and shock absorbers, plus international freight with end-to-end route tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Customs Clearance & Sanitary Inspection at Ports/Airports
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      In-person oversight during physical and documentary inspections by health authorities (Anvisa) and Federal Revenue (Receita Federal), expediting LI approval and customs clearance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Specialized Transport & White-Glove On-Site Delivery
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Road freight in air-suspension and climate-controlled vehicles, precision rigging, and technical unloading directly at the hospital, clinic, or exhibition pavilion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 4: PROVEN TRACK RECORD                                              */}
      {/* 1 div with 2 columns, 4 cards total (2 per row).                          */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#040812] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              Practical Applications
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Proven Track Record
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              Complex projects delivered with excellence in healthcare logistics, trade shows, and high-caliber operations across Brazil.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/health-1-nft-logistics.jpg"
                  alt="Import of Surgical Systems and Diagnostic Imaging Equipment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  High Complexity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Surgical Systems & Advanced Diagnostic Imaging Equipment
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/doutores-health.nft-logistics.webp"
                  alt="International Medical Congresses and Demonstrations in Brazil"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Temporary Regime
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Surgical Robots for Live Demonstrations at Medical Congresses
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/transporte-nft-logistics.webp"
                  alt="Specialized Transport and Handling of Sensitive Medical Equipment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Technical Logistics
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Specialized Technical Transport & Handling for Sensitive Medical Cargo
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/anvisa-health-nft-logistics.webp"
                  alt="Regulatory Approval and Customs Clearance with Anvisa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Sanitary Compliance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  100% Success Rate in Temporary ANVISA Clearances Over the Past 12 Months
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 5: FAQ (FREQUENTLY ASKED QUESTIONS)                                 */}
      {/* 2 columns: Title and text on left, accordion with 3 questions on right    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#050b16]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Title and Text */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>Learn More</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Frequently Asked Questions About Healthcare Import
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                Get answers regarding sanitary legislation, customs clearance, and exhibiting machinery in Brazil that does not yet have local registration.
              </p>

              <div className="pt-2 text-sm text-neutral-300">
                Still have a specific question?{" "}<br />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline font-medium"
                >
                  Speak with our regulatory team
                </a>
                .
              </div>
            </div>

            {/* Right Column: Accordion with 3 questions */}
            <div className="lg:col-span-7 space-y-4">
              {/* FAQ Item 1 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(0)}
                  aria-expanded={openFaqIndex === 0}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    Can I import medical equipment to exhibit at trade shows if it does not yet have Anvisa registration?
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 0 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 0 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      <strong>Yes!</strong> Under Brazilian customs law, medical equipment and hospital devices can enter the country under the special <strong>Temporary Admission regime for trade fairs and commercial events</strong>. Under this regime, import duties and taxes are fully suspended, and equipment can be exhibited and demonstrated without requiring permanent commercial registration with Anvisa, provided it is re-exported after the event.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(1)}
                  aria-expanded={openFaqIndex === 1}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    What documents are required to import healthcare machinery and products into Brazil?
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 1 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 1 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      Required documentation includes the Commercial Invoice, Packing List, International Bill of Lading / Air Waybill (AWB or BL), Import License (LI) issued through Siscomex/LPCO, technical specification dossier of the machinery, and for definitive commercial distribution, the corresponding sanitary registration/notification and technical conformity certificates.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(2)}
                  aria-expanded={openFaqIndex === 2}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    How does NFT Logistics ensure the integrity of sensitive medical equipment?
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                      openFaqIndex === 2 ? "rotate-180 bg-sky-600 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {openFaqIndex === 2 && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                    <p>
                      We build custom packaging using treated timber (ISPM 15 compliant) with multi-layered shock and vibration absorption. Our transportation employs air-ride suspension trucks, temperature monitoring, and tilt sensors, alongside skilled technical labor for precision rigging and white-glove placement at the exact site of installation.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCK 6: HERO AS CTA                                                      */}
      {/* Title, subtitle, and button leading to WhatsApp with prefilled message     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712] border-t border-sky-950/60">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="Consultation for healthcare import and trade shows NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#06152b]/85 to-[#030712]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Activity className="w-4 h-4 text-sky-400" />
            <span>Schedule a Meeting</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Do not risk your cargo with generalists. Choose experts who master ANVISA regulations and Special Customs Regimes.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Whether exhibiting at trade shows without prior Anvisa registration or permanently nationalizing your medical technology line, our dedicated team guides you at every step.
          </p>

          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
              </svg>
              <span>Chat on WhatsApp with a Specialist</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            Immediate support for trade shows, congresses, and healthcare equipment imports.
          </p>
        </div>
      </section>
    </div>
  );
}
