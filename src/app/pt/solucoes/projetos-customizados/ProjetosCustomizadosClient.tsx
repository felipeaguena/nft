"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
  CheckCircle2,
  FileText,
  Boxes,
  Sparkles,
  Ship,
  HardHat,
  Milestone,
  ScrollText,
  Navigation,
  Layers,
} from "lucide-react";

export default function ProjetosCustomizadosClient() {
  const whatsappProjectMessage =
    "Olá! Gostaria de conversar com um especialista sobre Cargas de Projeto e Projetos Customizados com a NFT Logistics.";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappProjectMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título e texto embaixo com estética quente e moderna (orange-600)         */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background com imagem de transporte de carga pesada e gradientes */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/transporte-nft-logistics.webp"
            alt="Projetos Customizados para Cargas Especiais NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          {/* Gradiente escuro harmonioso com transição para o tema */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          {/* Efeito sutil de luz ambiente quente (laranja) */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge de Identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>Engenharia de Transporte & Cargas de Projeto</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Projetos Customizados para Cargas Especiais e Superdimensionadas
          </h1>

          {/* Texto descritivo embaixo do título */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            Soluções completas em logística multimodal, estudo de rotas (route survey) e gerenciamento de ponta a ponta para cargas pesadas, volumosas (OOG), breakbulk e equipamentos industriais indivisíveis.
          </p>

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Falar com Engenheiro de Logística</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#etapas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Ver Metodologia de Projetos</span>
            </a>
          </div>

          {/* Elemento de Confiança */}
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Rigor Técnico, Segurança e Pontualidade Absoluta
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                Operações de alta complexidade para setores de energia, mineração, óleo & gás, infraestrutura e indústrias pesadas.
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
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-5.jpg"
                    alt="Operações de Cargas de Projeto e Movimentação Especial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem com toque laranja */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Engenharia Door-to-Foundation</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">Do embarque de fábrica ao assentamento na fundação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (6 colunas): Texto Simples */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                Logística Sob Medida
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Cada projeto é único: planejamos cada milímetro e cada minuto da sua carga
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Equipamentos que excedem pesos e dimensões padrões de transporte (Out of Gauge - OOG) não admitem improvisos. Linhas de montagem fabris, transformadores de alta potência, pás eólicas, turbinas e estruturas de mineração exigem um planejamento de engenharia minucioso antes de qualquer movimentação física.
                </p>
                <p>
                  A NFT Logistics integra engenharia de transporte, viabilidade de rotas e assessoria aduaneira dedicada. Analisamos gabaritos de pontes, viadutos, raios de curvatura, redes elétricas e capacidades portuárias, providenciando licenças especiais de trânsito (AET) e escoltas especializadas.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Coordenamos guindastes pesados (heavy lift), afretamentos marítimos parciais ou totais (chartering) e transporte multimodal integrado com seguros All Risks de alta cobertura para assegurar a integridade total do seu investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: DIV TÍTULO + TEXTO E GRID COM 3 CARDS                           */}
      {/* Modalidades: Cargas OOG, Breakbulk e Transporte Rodoviário Especial       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Div do Título com Texto */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Capacidades Operacionais
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Soluções Estruturadas para Cargas Não Convencionais
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Desenvolvemos operações customizadas para superar qualquer desafio geográfico ou dimensional com precisão milimétrica:
            </p>
          </div>

          {/* Grid com 3 Cards com hover em orange-600 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Cargas OOG (Out of Gauge) & Flat Racks */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Boxes className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Sobredimensionadas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Cargas OOG (Out of Gauge) & Flat Racks
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Operação especializada para maquinários industriais, veículos pesados e peças com excesso de altura, largura ou comprimento que superam as medidas padrão de containers. Utilizamos equipamentos específicos como Flat Racks, Open Tops e plataformas dedicadas com planos rigorosos de amarração náutica (lashing).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Movimentação com equipamentos especiais</span>
              </div>
            </div>

            {/* Card 2: Operações Breakbulk & Cargas Indivisíveis */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Ship className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Navios Dedicados & Chartering
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Operações Breakbulk & Cargas Indivisíveis
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Para peças unitárias volumosas e de centenas de toneladas que não comportam conteinerização, estruturamos embarques em navios convencionais no convés ou porão. Coordenamos a estiva marítima, cálculos de peso sobre o convés, afretamentos parciais ou totais e supervisão portuária in loco.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Afretamento marítimo e estiva técnica</span>
              </div>
            </div>

            {/* Card 3: Transporte Rodoviário Especial & Heavy Haulage */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Heavy Haulage & Linhas de Eixo
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Transporte Rodoviário Pesado e Escolta
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Mobilização de conjuntos transportadores pesados, carretas prancha rebaixadas, extensivas e linhas de eixos modulares hidráulicos. Gerenciamento de escoltas credenciadas e batedores da Polícia Rodoviária Federal (PRF), apoio de concessionárias e remoção de interferências na malha viária.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>Linhas de eixos modulares e escolta PRF</span>
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
                <span>Engenharia e Confiabilidade</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Por que confiar seu projeto de carga pesada à NFT Logistics?
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                Cargas de projeto concentram grande parte do investimento produtivo de uma indústria. Atrasos operacionais ou incidentes no percurso geram paralisações de plantas industriais e prejuízos incalculáveis.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Nossos engenheiros e analistas antecipam cada ponto crítico: calculam o centro de gravidade, planejam içamentos com rigging minucioso e articulam liberações governamentais com máxima agilidade.
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

              {/* Card visual de autoridade em içamento e rigging */}
              <div className="relative mt-8 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-3.jpg"
                    alt="Operação de içamento de carga pesada com guindaste e cabos de aço"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      Engenharia de Rigging
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                      Içamento milimétrico e movimentação vertical com tolerância zero a falhas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (7 colunas): 4 quadrados em flex-col */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Quadrado 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Milestone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Route Survey Rigoroso (Estudo de Rotas)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Mapeamento geométrico completo do trajeto com simulação de curvas, capacidade de suporte de pontes e viadutos, análise de fiação aérea e desvios programados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Licenciamento Especial (AET / DNIT / DER / PRF)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Emissão ágil de Autorizações Especiais de Trânsito em órgãos federais, estaduais e municipais, articulando cronogramas com comboios e equipes de apoio viário.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Engenharia de Rigging e Içamento
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Projetos detalhados de rigging com dimensionamento de cabos, lingas, guindastes telescópicos e esteiras para garantir movimentações verticais com tolerância zero a falhas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Supervisão Operacional Presencial
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Engenheiros e supervisores de campo acompanham presencialmente o embarque na origem, operações portuárias, transbordo e entrega técnica no destino.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO VISUAL: GALERIA DE CARGAS DE PROJETO E ENGENHARIA                   */}
      {/* 4 fotos reais com títulos e descrições                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Operações em Campo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Cargas de Alta Complexidade em Execução
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Equipamentos de grande porte, carretas dedicadas e logística de transbordo registradas em operações reais da NFT Logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/operacao-nft-logistics-4.jpg"
                  alt="Carreta extensiva carregada com maquinário pesado e empilhadeira"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Transporte Rodoviário
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Carretas Prancha & Extensivas
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Amarração técnica e transporte rodoviário pesado para maquinário industrial superdimensionado.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/operacao-nft-logistics-6.jpg"
                  alt="Empilhadeiras industriais descarregando grandes estruturas em recinto fechado"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Manuseio Técnico
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Desova com Múltiplas Frentes
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Operação sincronizada com empilhadeiras pesadas para movimentação de estruturas compridas.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/operacao-nft-logistics-7.jpg"
                  alt="Visão angular de içamento e posicionamento de equipamento pesado"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Cargas Críticas
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Equipamentos Indivisíveis
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Deslocamento de cargas de alto valor agregado com supervisão de engenharia presencial.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/intersolar-nft-logistics.webp"
                  alt="Grande parque de energia solar fotovoltaica"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Energia & Usinas
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Parques & Infraestrutura
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Desova e entrega técnica de transformadores, inversores e painéis solares em áreas remotas.
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
              Como Conduzimos Projetos Customizados em 5 Etapas
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Metodologia de engenharia de projetos testada para entregar equipamentos críticos com total pontualidade e segurança.
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
                  Estudo de Viabilidade Técnica
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Avaliação detalhada das dimensões, centro de gravidade, pontos de içamento da carga e escolha dos modais ideais para transporte.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Milestone className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Route Survey & Rigging Plan
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Vistoria in loco de rodovias, elaboração do plano de içamento de guindastes e projeto de amarração e peação (lashing plan).
                </p>
              </div>
              
            </div>

            {/* Etapa 3 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <ScrollText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Licenças e Escolta Viária
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Obtenção de AETs no DNIT, DER e concessionárias, contratação de batedores civis e agendamento de escolta com a PRF.
                </p>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Ship className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Embarque Multimodal & Transporte
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Afretamento marítimo dedicado, transbordo portuário com supervisores de estiva e transporte rodoviário pesado rastreado.
                </p>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Içamento e Assentamento na Base
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Descarga técnica no destino final, posicionamento exato na fundação da planta industrial (door-to-foundation) e entrega concluída.
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
        {/* Background do CTA com imagem industrial e gradiente escuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/intersolar-nft-logistics.webp"
            alt="Consultoria em Cargas de Projeto e Engenharia Logística NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>Consultoria em Cargas de Projeto</span>
          </span>

          {/* Título do CTA */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Sua carga é pesada, complexa ou fora de padrão? Nós resolvemos.
          </h2>

          {/* Texto descritivo do CTA */}
          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Fale diretamente com nossos engenheiros e especialistas em logística pesada. Desenvolvemos o estudo de viabilidade e a rota ideal para a entrega perfeita do seu projeto.
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
            Atendimento técnico de ponta a ponta para projetos em todo o Brasil e no exterior.
          </p>
        </div>
      </section>
    </div>
  );
}
