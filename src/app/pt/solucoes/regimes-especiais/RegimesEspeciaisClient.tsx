"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  ArrowRight,
  Clock,
  ShieldCheck,
  Layers,
  BadgePercent,
  Landmark,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
  Coins,
  FileCheck2,
  Workflow,
  TrendingDown,
} from "lucide-react";

export default function RegimesEspeciaisClient() {
  const whatsappSpecialMessage =
    "Olá! Gostaria de falar com um especialista sobre Regimes Aduaneiros Especiais com a NFT Logistics.";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappSpecialMessage
  )}`;
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título e texto embaixo com estética quente e moderna (orange-600)         */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background com imagem operacional e gradientes escuros quentes */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics-3.jpg"
            alt="Soluções em Regimes Aduaneiros Especiais NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.38] dark:brightness-[0.35]"
          />
          {/* Gradiente harmonioso com o fundo da página */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          {/* Efeito sutil de luz ambiente quente (laranja) */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge de Identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Scale className="w-4 h-4 text-orange-400" />
            <span>Consultoria Tributária & Aduaneira de Alta Performance</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Regimes Aduaneiros Especiais para Otimização Tributária
          </h1>

          {/* Texto descritivo embaixo do título */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            Desonere suas operações de importação e exportação com total segurança jurídica. Estruturamos Admissão Temporária, Drawback, Entreposto Aduaneiro e RECOF para potencializar a competitividade e preservar o fluxo de caixa da sua empresa.
          </p>

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#etapas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Ver Como Funciona</span>
            </a>
          </div>

          {/* Elemento de Confiança */}
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                100% de Conformidade Aduaneira com a Receita Federal
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                Assessoria técnica completa do diagnóstico prévio ao encerramento e baixa do Termo de Responsabilidade fiscal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS                                                     */}
      {/* De um lado uma imagem e do outro lado um texto simples                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda (6 colunas): Imagem */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/armazem-2.jpg"
                    alt="Gestão de Regimes Especiais e Entreposto Aduaneiro"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem com toque laranja */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Inteligência Tributária & Fiscal</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">Suspensão legal de impostos federais e estaduais</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (6 colunas): Texto Simples */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                Planejamento Tributário Internacional
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Transforme a complexidade aduaneira brasileira em alavanca financeira
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  O Brasil possui uma das estruturas tributárias de comércio exterior mais intrincadas do mundo. O desembolso integral de impostos como II, IPI, PIS/COFINS-Importação e ICMS na nacionalização imediata costuma imobilizar volumes substanciais de capital de giro e comprometer a viabilidade de projetos industriais e comerciais.
                </p>
                <p>
                  Os Regimes Aduaneiros Especiais foram concebidos pela legislação para desonerar temporária ou definitivamente as operações corporativas. A NFT Logistics atua mapeando o enquadramento ideal para cada modelo de negócio, elaborando pleitos fundamentados e garantindo a estrita observância das normas da Receita Federal.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Seja para expor mercadorias, importar insumos de manufatura para reexportação ou estocar produtos sem tributação prévia, asseguramos total blindagem contra autuações e máxima economia tributária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: DIV TÍTULO + TEXTO E GRID COM 3 CARDS                           */}
      {/* Modelos de Regimes: Admissão Temporária, Drawback e Entreposto Aduaneiro  */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Div do Título com Texto */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Principais Modalidades
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Modelos Tributários para Otimização de Capital
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Cada operação corporativa exige uma engenharia aduaneira personalizada. Conheça os principais regimes geridos com rigor e excelência técnica pela NFT Logistics:
            </p>
          </div>

          {/* Grid com 3 Cards com hover em orange-600 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Admissão Temporária */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Permanência Temporária
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Admissão Temporária
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Permite a importação de bens com suspensão total de tributos para eventos, feiras, demonstrações comerciais, testes ou reparos, ou com suspensão proporcional para utilização econômica de maquinários industriais de grande porte. Gerenciamos a concessão, prorrogações tempestivas e posterior reexportação regular.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Suspensão tributária e liquidez</span>
              </div>
            </div>

            {/* Card 2: Drawback Integrado */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Estímulo à Exportação
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Drawback (Suspensão e Isenção)
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Incentivo fiscal estratégico que suspende ou isenta tributos incidentes sobre insumos, matérias-primas e componentes importados utilizados na industrialização de produtos destinados à exportação. Realizamos a abertura de atos concessórios, vinculação documental e baixa comprobatória sem resíduos fiscais.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Competitividade fabril global</span>
              </div>
            </div>

            {/* Card 3: Entreposto Aduaneiro & RECOF */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Armazenagem Suspensiva
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Entreposto Aduaneiro & RECOF
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Possibilita o armazenamento de mercadorias estrangeiras em recinto alfandegado credenciado com suspensão do pagamento de tributos por até 3 anos. Permite a nacionalização fracionada conforme a demanda real de vendas ou produção industrial, adequando despesas ao fluxo de caixa efetivo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Nacionalização conforme a demanda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: DUAS COLUNAS                                                     */}
      {/* Esquerda: título, texto e botão                                           */}
      {/* Direita: 4 quadrados em flex-col (ícone, título e texto de descrição)     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda (5 colunas): Título, Texto e Botão */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>Vantagens Competitivas</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Por que estruturar seus regimes especiais com a NFT Logistics?
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                Operar regimes especiais sem o devido embasamento técnico gera passivos tributários graves, multas por perda de prazo e perda dos benefícios fiscais concedidos.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Nossa equipe alia domínio da legislação aduaneira à agilidade operacional, acompanhando cada lote de carga desde a montagem do pleito até a extinção definitiva da obrigação fiscal.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>Falar com nosso time de especialistas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Card visual de autoridade em armazenagem e entreposto */}
              <div className="relative mt-8 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/imagens/armazem.jpg"
                    alt="Armazém logístico alfandegado com contêineres e empilhadeiras em operação"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      Recinto Alfandegado
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                      Armazenamento em entreposto com suspensão legal de tributos e liberação fracionada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (7 colunas): 4 quadrados em flex-col */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Quadrado 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Preservação Máxima do Fluxo de Caixa
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Evite a imobilização antecipada de recursos em impostos que podem ser legalmente suspensos ou isentos, garantindo liquidez financeira e maior rentabilidade aos seus projetos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Blindagem Jurídica e Fiscal Absoluta
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Dossiês técnicos minuciosos, elaboração criteriosa do Termo de Responsabilidade e alinhamento com a Instrução Normativa da Receita Federal aplicável a cada operação.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Gestão Ativa de Prazos e Prorrogações
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Sistemas integrados de controle temporal evitam o vencimento acidental de prazos concedidos, providenciando pedidos de prorrogação tempestivos com total tranquilidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Extinção Segura e Baixa de Obrigações
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Suporte completo na fase final do regime: coordenação da reexportação, despacho para consumo definitivo, transferência entre regimes ou baixa do ato concessório de drawback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO VISUAL: GALERIA DE ARMAZÉNS E RECINTOS ALFANDEGADOS                 */}
      {/* 4 fotos reais com títulos e descrições                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Infraestrutura & Recintos
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Logística Integrada em Portos e Entrepostos
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Infraestrutura física homologada e acompanhamento presencial nos maiores hubs de importação do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/armazem.jpg"
                  alt="Entreposto aduaneiro com empilhadeiras e contêineres"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Entreposto Aduaneiro
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Armazenagem com Suspensão
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Estocagem sob controle aduaneiro com desembaraço fracionado de acordo com seu fluxo produtivo.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/operacao-nft-logistics-2.jpg"
                  alt="Terminal de contêineres e logística portuária"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Portos & Aeroportos
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Presença em Santos e Viracopos
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Desembaraço prioritário diretamente nos recintos alfandegados de maior movimentação do país.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/operacao-nft-logistics.jpg"
                  alt="Especialista da NFT Logistics conferindo lote de carga amarrada"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Auditoria Física
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Inspeção Técnica de Lote
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Conferência física rigorosa de números de série, marcas e integridade para evitar exigências fiscais.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/armazem-2.jpg"
                  alt="Galpão logístico e estoque industrial organizado"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Drawback & RECOF
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Insumos para Exportação
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Controle contábil e documental de matérias-primas e componentes empregados na industrialização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: PASSO A PASSO COM 5 ETAPAS                                       */}
      {/* Como funciona a nossa operação                                            */}
      {/* ========================================================================= */}
      <section id="etapas" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Metodologia Operacional
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Como Estruturamos Regimes Especiais em 5 Etapas
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Um processo estruturado em rigor fiscal e governança aduaneira para assegurar o deferimento rápido e a segurança jurídica contínua.
            </p>
          </div>

          {/* Grid do Passo a Passo (5 etapas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Etapa 1 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Diagnóstico de Viabilidade Tributária
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Classificação fiscal precisa (NCM), análise do enquadramento legal e cálculo comparativo do impacto financeiro entre o regime comum e o especial.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Estruturação do Dossiê e Contratos
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Montagem documental completa, minutas contratuais fundamentadas, laudos técnicos e dimensionamento de garantias aduaneiras (se exigidas).
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Protocolo e Deferimento Aduaneiro
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Submissão perante a Receita Federal via Siscomex/Módulos Especiais e acompanhamento diligente da conferência física e documental até a concessão.
                </p>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Gestão Contínua de Vigência e Prazos
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Monitoramento sistemático do período de permanência, controle de saldos alfandegados e elaboração preventiva de prorrogações legais.
                </p>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Extinção do Regime & Baixa Definitiva
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Execução do trâmite de encerramento (reexportação, nacionalização definitiva ou baixa de ato concessório) com cancelamento formal do Termo de Responsabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 6: CTA PADRÃO DO SITE                                               */}
      {/* Título, texto e botão para entrar em contato por WhatsApp                 */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        {/* Background do CTA com imagem operacional e gradiente escuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics.jpg"
            alt="Consultoria em Regimes Especiais Aduaneiros NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Scale className="w-4 h-4 text-orange-400" />
            <span>Consultoria Tributária & Aduaneira</span>
          </span>

          {/* Título do CTA */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Quer descobrir quanto sua empresa pode economizar em tributos?
          </h2>

          {/* Texto descritivo do CTA */}
          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Nossos consultores realizam uma análise preliminar da sua operação para identificar os regimes especiais aplicáveis com segurança fiscal e ganho imediato de competitividade.
          </p>

          {/* Botão de contato por WhatsApp padrão do site */}
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
            Atendimento estratégico para importadores e exportadores em todo o território nacional.
          </p>
        </div>
      </section>
    </div>
  );
}
