"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  ChevronDown,
  FileCheck2,
  Stethoscope,
  Microscope,
  CalendarCheck,
  Building2,
  Boxes,
  Truck,
  CheckCircle2,
  Compass,
  FileText,
} from "lucide-react";

export default function SaudePageClient() {
  // Estado para o Accordion de FAQ (Bloco 5)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Mensagem oficial exigida para o WhatsApp no Bloco 6
  const whatsappCtaMessage =
    "Quero participar de feiras no Brasil e meus equipamentos ainda não tem registro na Anvisa, quero começar um processo de importação.";
  const whatsappHref = `https://wa.me/5511948530048?text=${encodeURIComponent(
    whatsappCtaMessage
  )}`;

  return (
    <div className="w-full bg-[#050b14] text-neutral-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título, subtítulo, texto, botão + Ícone de confiança com texto pequeno    */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background com imagem hospitalar e overlay azul hospitalar escuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="Logística e importação hospitalar NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.42]"
          />
          {/* Gradiente azul hospitalar com tons marinho e ciano profundo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/70 via-[#071933]/50 to-[#050b14]" />
          {/* Efeito sutil de luz médica hospitalar */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/15 blur-[120px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Tag de identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Official Freight Forwarder para a feira Hospitalar</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Importação de Máquinas e Produtos Hospitalares para o Brasil
          </h1>

          {/* Subtítulo */}
          {/* <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-sky-100/90 max-w-3xl leading-relaxed"></p> */}

          {/* Texto descritivo complementar */}
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Especialistas em Admissão Temporária para uso hospitalar e eventos médicos. Compliance Total | Suspensão de Impostos | Gestão de Prazos
          </p>

          {/* Botão de ação do Hero */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#passos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Conhecer o Processo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Falar com Especialista</span>
            </a>
          </div>

          {/* Elemento de confiança com ícone e texto pequeno */}
          <div className="mt-12 border-t border-sky-900/40 flex items-center justify-center gap-3.5 max-w-xl text-left bg-sky-950/20 backdrop-blur-sm px-5 py-3.5 rounded-2xl border border-sky-800/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Operações 100% em Conformidade Regulatória
              </p>
              <p className="text-xs text-neutral-300 leading-snug mt-0.5">
                Assessoria técnica especializada em exigências da Anvisa, RDCs sanitárias e rigorosos protocolos internacionais de manuseio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 2: 3 CARDS ESCUROS                                                  */}
      {/* Quando passar o mouse fica com fundo azul e letras brancas                 */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#040912] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              Entrar no Brasil sem surpresas
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white">
              O Desafio da Importação Hospitalar Temporária
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              A logística para equipamentos médicos exige precisão cirúrgica. Máquinas de diagnóstico, robótica cirúrgica e dispositivos de alta tecnologia precisam circular sem riscos regulatórios. O caminho mais seguro para o Brasil é a Admissão Temporária.
            </p>
          </div>

          {/* Grid com 3 cards escuros com transição suave no hover para fundo azul e letras brancas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Máquinas e Equipamentos Médicos
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Desembaraço e transporte técnico com controle de vibração para tomógrafos, ressonâncias magnéticas, ultrassons, equipamentos laboratoriais e lasers cirúrgicos de alto valor agregado.
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
                  Feiras, Congressos & Demonstrações
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Admissão temporária com suspensão de impostos para empresas globais que desejam expor produtos médicos em eventos como a Feira Hospitalar, congressos científicos e demonstrações clínicas no Brasil.
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
                  Gestão Regulatória & Anvisa
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Elaboração e análise minuciosa de dossiês técnicos, Licença de Importação (LI via módulo LPCO), conformidade com as Resoluções da Diretoria Colegiada (RDCs) e acompanhamento presencial em recintos alfandegados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: 2 COLUNAS                                                        */}
      {/* Esquerda: 1 título e 1 texto embaixo                                      */}
      {/* Direita: 1 coluna com 5 quadrados em flex-col com os 5 passos            */}
      {/* ========================================================================= */}
      <section id="passos" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060e1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda (5 colunas no desktop): Título e Texto */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>Passo a Passo Estruturado</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                5 Passos Estratégicos para Importar Equipamentos Médicos para o Brasil
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                A importação de artigos para saúde requer um protocolo rigoroso. Qualquer inconsistência entre a fatura, a classificação fiscal e as exigências sanitárias pode travar o equipamento nos portos ou aeroportos.
              </p>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                Nossa metodologia garante previsibilidade jurídica, velocidade na liberação e preservação total da calibração e sensibilidade dos aparelhos até o destino final.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-sky-600/25"
                >
                  <span>Tirar Dúvidas sobre seu Equipamento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna da Direita (7 colunas no desktop): 1 coluna com 5 quadrados em flex-col */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              {/* Quadrado 1 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Diagnóstico Regulatório & Classificação Fiscal (NCM)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Análise técnica das especificações dos equipamentos médicos, determinação correta da NCM e verificação do enquadramento sanitário (classe de risco I a IV) e necessidade de LPCO.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 2 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600  hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Dossiê Técnico & Licenciamento Anvisa (LI / LPCO)
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Elaboração da documentação exigida, submissão do pedido de Licença de Importação no Siscomex e cumprimento de exigências sanitárias prévias ao embarque na origem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 3 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600  hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Embalagens Especiais & Logística Internacional
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Confecção de caixas de madeira sob medida (norma NIMF 15) com proteção anti-impacto, amortecedores de choque e transporte internacional com rastreamento integral de rota.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 4 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600  hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Desembaraço Aduaneiro e Vistoria Sanitária nos Portos/Aeroportos
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Acompanhamento presencial da inspeção física e documental pela autoridade sanitária e pela Receita Federal, agilizando o deferimento da LI e o desembaraço aduaneiro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 5 */}
              <div className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600  hover:border-sky-600/50 transition-all duration-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Transporte Especializado & Entrega Técnica no Destino
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Transporte rodoviário em veículos com suspensão a ar e climatização controlada, içamento e descarregamento técnico no hospital, clínica ou pavilhão do evento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: NOSSAS EXPERIÊNCIAS                                             */}
      {/* 1 div com 2 colunas, 4 quadrados ao todo (2 por linha).                   */}
      {/* Imagem de fundo + 1 título h3.                                            */}
      {/* :hover -> a imagem escurece suavemente sem encolher e sem alterar a fonte */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#040812] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              Aplicação Prática
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experiência Comprovada
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              Projetos complexos conduzidos com excelência em logística médica, feiras e operações de alto calibre no Brasil.
            </p>
          </div>

          {/* 1 div com 2 colunas, total de 4 quadrados (2 por linha) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Quadrado 1 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e]  shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              {/* Imagem de fundo: escurece suavemente no hover sem redução de tamanho */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/health-1-nft-logistics.jpg"
                  alt="Importação de Sistemas Cirúrgicos e Tecnologias de Imagem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              {/* Overlay com gradiente azul hospitalar escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              {/* Título H3 */}
              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Alta Complexidade
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Sistemas Cirúrgicos e Equipamentos de Diagnóstico por Imagem
                </h3>
              </div>
            </div>

            {/* Quadrado 2 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e]  shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              {/* Imagem de fundo: escurece suavemente no hover sem redução de tamanho */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/doutores-health.nft-logistics.webp"
                  alt="Feiras e Congressos Médicos Internacionais no Brasil"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              {/* Título H3 */}
              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Regime Temporário
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Robôs Cirúrgicos para demonstrações em congressos.
                </h3>
              </div>
            </div>

            {/* Quadrado 3 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e]  shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              {/* Imagem de fundo: escurece suavemente no hover sem redução de tamanho */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/transporte-nft-logistics.webp"
                  alt="Transporte Especializado e Manuseio de Cargas Médicas Sensíveis"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              {/* Título H3 */}
              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Logística Técnica
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  Transporte Técnico e Manuseio Especializado para Equipamentos Sensíveis
                </h3>
              </div>
            </div>

            {/* Quadrado 4 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e]  shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer">
              {/* Imagem de fundo: escurece suavemente no hover sem redução de tamanho */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/imagens/anvisa-health-nft-logistics.webp"
                  alt="Aprovação Regulatória e Desembaraço Aduaneiro na Anvisa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

              {/* Título H3 */}
              <div className="relative z-10 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                  Conformidade Sanitária
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                  100% de sucesso em liberações ANVISA temporárias nos últimos 12 meses.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: FAQ (PERGUNTAS FREQUENTES)                                       */}
      {/* 2 colunas: 1 título e texto na esquerda, accordion com 3 perguntas na     */}
      {/* direita, respostas aparecem embaixo quando aberto                         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#050b16]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título e Texto */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>Saiba Mais</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Perguntas Frequentes sobre Importação na Saúde
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                Tire suas principais dúvidas sobre legislação sanitária, desembaraço alfandegário e participação em feiras no Brasil com maquinários que ainda não possuem registro nacional.
              </p>

              <div className="pt-2 text-sm text-neutral-300">
                Ainda tem alguma dúvida específica?{" "}<br></br>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline font-medium"
                >
                  Converse com nossa equipe regulatória
                </a>
                .
              </div>
            </div>

            {/* Coluna da Direita: Accordion com 3 perguntas */}
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
                    Posso importar equipamentos médicos para expor em feiras se ainda não tiverem registro na Anvisa?
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
                      <strong>Sim!</strong> Pela legislação brasileira, é possível realizar a entrada de equipamentos médicos e dispositivos hospitalares pelo regime especial de <strong>Admissão Temporária para eventos e feiras comerciais</strong>. Nesse regime, há suspensão total dos tributos e o equipamento pode ser exibido e demonstrado sem necessidade de registro comercial definitivo da Anvisa, desde que retorne à sua origem após o evento.
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
                    Quais são os documentos exigidos para a importação de máquinas e produtos hospitalares?
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
                      A documentação inclui Fatura Comercial (Commercial Invoice), Packing List, Conhecimento de Embarque Internacional (AWB ou Bill of Lading), Licença de Importação (LI) emitida via Siscomex/LPCO, dossiê técnico das especificações do maquinário e, para operações definitivas de comercialização, o respectivo registro ou notificação sanitária e certificações de conformidade técnica.
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
                    Como a NFT Logistics assegura a integridade de equipamentos hospitalares sensíveis?
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
                      Desenvolvemos embalagens sob medida com madeira tratada (NIMF 15) e camadas de absorção de vibração e choque. Nossos transportes utilizam veículos com suspensão pneumática, monitoramento de temperatura e sensores de inclinação, além de mão de obra especializada para içamento e entrega técnica no local exato de instalação.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 6: HERO COMO CTA                                                    */}
      {/* Título, subtítulo e botão que leva para o WhatsApp com o texto exato:     */}
      {/* "quero importar para o Brasil produtos para participar de feiras e meus    */}
      {/* equipamentos ainda não tem anvisa"                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712] border-t border-sky-950/60">
        {/* Background do Hero CTA com imagem hospitalar e overlay escuro azulado */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/Home-Health-NFT-Logistics.jpg"
            alt="Atendimento para importação hospitalar e feiras NFT Logistics"
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
            <span>Agende uma reunião</span>
          </span>

          {/* Título */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Não arrisque sua carga com generalistas. Escolha quem entende de ANVISA e Regimes Aduaneiros Especiais.
          </h2>

          {/* Subtítulo */}
          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Seja para expor em feiras sem anvisa prévia ou para nacionalizar sua linha de tecnologia médica, nossa equipe especializada orienta você em cada passo.
          </p>

          {/* Botão direcionando para o WhatsApp com a mensagem solicitada */}
          <div className="mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-base sm:text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {/* Ícone oficial SVG do WhatsApp */}
              <svg
                className="w-6 h-6 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.181c-.176.2-.352.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527s-.678-1.633-.929-2.235c-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.281.497 1.719.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 21.657h-.002a9.63 9.63 0 0 1-4.912-1.341l-.352-.209-3.652.958.975-3.56-.229-.365a9.638 9.638 0 0 1-1.478-5.1c0-5.32 4.329-9.648 9.655-9.648 2.578 0 5.003 1.004 6.827 2.828a9.587 9.587 0 0 1 2.826 6.822c0 5.322-4.329 9.65-9.653 9.65zm8.172-17.825A11.536 11.536 0 0 0 12.04 0C5.642 0 .438 5.204.438 11.602c0 2.043.534 4.04 1.549 5.8l-1.646 6.012 6.155-1.614a11.577 11.577 0 0 0 5.544 1.411h.005c6.398 0 11.602-5.204 11.602-11.603a11.53 11.53 0 0 0-3.39-8.176z" />
              </svg>
              <span>Falar no WhatsApp com Especialista</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            Atendimento imediato para feiras, congressos e importação hospitalar.
          </p>
        </div>
      </section>
    </div>
  );
}
