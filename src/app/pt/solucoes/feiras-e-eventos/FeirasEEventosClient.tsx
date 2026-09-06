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

export default function FeirasEEventosClient() {
  const whatsappFairMessage =
    "Olá! Gostaria de saber mais sobre apoio para Feiras e Eventos no Brasil com a NFT Logistics.";
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappFairMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título e texto embaixo com estética quente e moderna (orange-600)         */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background com imagem de feira internacional e gradientes escuros quentes */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/feira-nft-logistics-3.jpg"
            alt="Logística para feiras e eventos internacionais no Brasil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.38] dark:brightness-[0.34]"
          />
          {/* Gradiente harmonioso com o fundo da página */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          {/* Efeito sutil de luz ambiente quente (laranja) */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge de Identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <CalendarCheck className="w-4 h-4 text-orange-400" />
            <span>Logística Internacional & Regimes Aduaneiros</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            Logística para Feiras e Eventos Internacionais no Brasil
          </h1>

          {/* Texto descritivo embaixo do título */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            Garantimos o transporte porta-ao-estande, desembaraço aduaneiro sem surpresas e o cumprimento rigoroso de prazos para que sua empresa brilhe nos maiores centros de convenções e exposições do país.
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
                Compromisso com Tolerância Zero a Atrasos
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                Know-how comprovado nos principais pavilhões do Brasil: São Paulo Expo, Anhembi, Riocentro e Transamerica Expo Center.
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
                    src="/imagens/feira-nft-logistics.jpg"
                    alt="Estande montado e operação logística em feira de negócios"
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
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Operação Porta ao Estande</p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">Do embarque de origem até a entrega no pavilhão</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (6 colunas): Texto Simples */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                Presença e Excelência em Feiras
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Seu estande pronto e montado no prazo, sem qualquer risco aduaneiro
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>
                  A participação em feiras e congressos internacionais não tolera erros operacionais nem atrasos de entrega. Seus produtos, estandes, mostruários e materiais de divulgação precisam estar posicionados antes do início da montagem, em perfeito estado de conservação e com total conformidade perante a Receita Federal e órgãos reguladores.
                </p>
                <p>
                  A NFT Logistics atua como sua parceira logística estratégica, assumindo a gestão integral do transporte internacional (aéreo ou marítimo), dos trâmites aduaneiros de entrada e saída, do manuseio cuidadoso de itens de alta tecnologia e da entrega técnica pontual dentro do pavilhão.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Cuidamos da burocracia, dos prazos e da segurança fiscal para que sua equipe foque exclusivamente no fechamento de negócios e no relacionamento com os clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: DIV TÍTULO + TEXTO E GRID COM 3 CARDS                           */}
      {/* Regime de Admissão Temporária, Nacionalização/Consumo e Anuência Órgãos    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Div do Título com Texto */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Enquadramentos Aduaneiros
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Modelos Tributários para Feiras e Eventos
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Cada tipo de material que ingressa no Brasil para uma exposição requer um enquadramento aduaneiro específico. Conheça as modalidades gerenciadas com maestria pela NFT Logistics:
            </p>
          </div>

          {/* Grid com 3 Cards com hover em orange-600 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Regime de Admissão Temporária */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Suspensão Tributária
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Regime de Admissão Temporária
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Permite a entrada de máquinas, equipamentos de demonstração, telas e estruturas no território brasileiro com suspensão total de tributos federais (II, IPI, PIS/Cofins-Importação). O regime vincula os bens à comprovação de permanência temporária durante o evento e subsequente reexportação ao país de origem dentro dos prazos concedidos pela Receita Federal.
                </p>
              </div>
            </div>

            {/* Card 2: Nacionalização / Consumo */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Permanência Definitiva
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Nacionalização / Despacho para Consumo
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Trâmite aduaneiro obrigatório para materiais de distribuição gratuita, como brindes, catálogos impressos, folhetos e amostras comerciais, além de equipamentos e produtos comercializados durante ou após o término da feira. Realizamos o cálculo antecipado dos tributos e o desembaraço definitivo sem retenções alfandegárias.
                </p>
              </div>
            </div>

            {/* Card 3: Anuência de Órgãos Reguladores */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    Gestão Regulatória
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  Anuência de Órgãos Reguladores
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  Produtos expostos frequentemente necessitam de autorização prévia de órgãos fiscalizadores brasileiros, tais como Anvisa (saúde), Inmetro (padrões técnicos), Anatel (telecomunicações), MAPA (agricultura/alimentos) e Exército. Nossa equipe elabora os dossiês técnicos e gerencia os módulos LPCO/Siscomex antes do embarque na origem.
                </p>
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
                Por que escolher a NFT Logistics para a sua exposição?
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                Em feiras comerciais, o atraso de um único dia invalida todo o investimento do expositor. Não existe margem para aprender na prática ou improvisar com despachantes genéricos.
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Nossa assessoria atua preventivamente em cada etapa, desde a conferência das faturas e enquadramentos fiscais até a entrega física e montagem dentro do pavilhão.
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
            </div>

            {/* Coluna da Direita (7 colunas): 4 quadrados em flex-col */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Quadrado 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Cumprimento Rigoroso de Prazos
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Cronogramas sincronizados ao minuto com o regulamento do pavilhão e com a equipe de montagem do estande. Monitoramento ininterrupto para que tudo esteja posicionado antes da abertura oficial.
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
                      Segurança Jurídica e Isenção Fiscal
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Aplicação técnica impecável da Admissão Temporária, com garantia de suspensão de impostos, sem autuações fiscais, retenções alfandegárias ou surpresas no término do evento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Logística Door-to-Booth (Porta ao Estande)
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Solução ponta a ponta: coleta na sede do expositor em qualquer país, embalagens especiais fumigadas (norma NIMF 15), transporte multimodal internacional e entrega descarregada no próprio estande.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quadrado 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50  transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      Apoio Presencial nos Pavilhões
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      Nossos especialistas estão presentes no local da feira antes, durante e após o evento, dando suporte no manuseio de caixas, guarda de embalagens vazias e coordena a reexportação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO VISUAL: GALERIA DE FEIRAS E PAVILHÕES NO BRASIL                     */}
      {/* 4 fotos reais com títulos e pavilhões                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              Presença nos Principais Pavilhões
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Operações em Grandes Exposições no Brasil
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Veja registros reais de estandes montados, equipamentos manuseados e recintos atendidos pela equipe da NFT Logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/feira-nft-logistics-7.jpg"
                  alt="Grande pavilhão com equipamentos pesados e iluminação moderna"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Agrishow & Pesados
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Estandes de Alto Impacto
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Coordenação de maquinário de grande porte, montagem de iluminação e estruturas aéreas.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/transporte-nft-logistics.webp"
                  alt="Desova de robô cirúrgico Da Vinci em estande da feira Hospitalar"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Hospitalar 2024
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Robótica & Alta Precisão
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Desova milimétrica de robôs cirúrgicos em embalagens certificadas diretamente no estande.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/feira-nft-logistics-2.jpg"
                  alt="Estande de mobilidade elétrica e motos em exposição internacional"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Mobilidade & Tech
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Mostruários Tecnológicos
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Admissão temporária e liberação expressa para protótipos e veículos elétricos importados.
                </p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/imagens/feira-nft-logistics-6.jpg"
                  alt="Transamerica Expo Center - Fachada do centro de convenções"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                    Centros de Convenções
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                  Transamerica & São Paulo Expo
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Acesso prioritário e trânsito ágil nas docas de carga e descarga dos maiores pavilhões do país.
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
              Como Funciona a Nossa Operação
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              Um fluxo rigoroso, transparente e testado centenas de vezes para garantir que seu estande esteja 100% pronto no dia do evento.
            </p>
          </div>

          {/* Grid do Passo a Passo (5 etapas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Etapa 1 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">01</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Diagnóstico & Planejamento Aduaneiro
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Análise antecipada da lista de materiais (Invoice & Packing List), classificação fiscal (NCM) e definição da estratégia ideal entre Admissão Temporária e Nacionalização.
                </p>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">02</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Licenciamento e Anuências Prévias
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Emissão de Licenças de Importação (LI via módulo LPCO/Siscomex) e deferimentos prévios junto a órgãos como Anvisa, MAPA, Inmetro ou Anatel antes da saída do país de origem.
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">03</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Coleta na Origem & Frete Internacional
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Coleta internacional, conferência de embalagens certificadas (madeira tratada NIMF 15) e coordenação de frete aéreo expresso ou marítimo com rastreamento integral.
                </p>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">04</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Desembaraço Aduaneiro Prioritário
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Acompanhamento presencial da conferência física e documental pela Receita Federal, assinatura do Termo de Responsabilidade e liberação rápida nos portos e aeroportos.
                </p>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-orange-500/30">05</span>
                  <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Boxes className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  Entrega no Estande & Reexportação
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                  Transporte local dedicado até o pavilhão, descarregamento técnico no estande, guarda de embalagens vazias e coordenação do retorno (reexportação) pós-evento.
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
        {/* Background do CTA com imagem de feira e gradiente escuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/feira-nft-logistics-7.jpg"
            alt="Suporte e consultoria em logística para feiras internacionais"
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
            <span>Consultoria Especializada</span>
          </span>

          {/* Título do CTA */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Pronto para expor no Brasil com total tranquilidade e pontualidade?
          </h2>

          {/* Texto descritivo do CTA */}
          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            Não deixe a complexidade aduaneira e o rigor dos prazos colocarem em risco a sua participação. Fale agora mesmo com nossos especialistas em logística de eventos e receba um planejamento sob medida.
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
            Atendimento ágil para feiras, congressos e exposições em todo o Brasil.
          </p>
        </div>
      </section>
    </div>
  );
}
