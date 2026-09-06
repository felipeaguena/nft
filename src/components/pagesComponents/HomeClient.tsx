"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Boxes,
  Palette,
  Truck,
  Globe2,
  Anchor,
  Plane,
  Warehouse,
  CheckCircle2,
  FileCheck2,
  TrendingUp,
  MessageCircle,
  Building2,
  Cpu,
  HeartPulse,
  MessageSquareDot,
} from "lucide-react";
import Button from "../Button";
import HealthCTA from "../HealthCTA";
import SolutionsShowcase from "../SolutionsShowcase";

export type LanguageCode = "pt" | "en" | "cn";

interface HomeClientProps {
  lang: LanguageCode;
}

const HOME_CONTENT = {
  pt: {
    stats: [
      {
        value: "+15",
        label: "Anos de Mercado",
        detail: "Expertise consolidada no comércio exterior brasileiro",
      },
      {
        value: "+5.000",
        label: "Operações Concluídas",
        detail: "Desembaraço ágil em portos e aeroportos",
      },
      {
        value: "100%",
        label: "Conformidade Fiscal",
        detail: "Segurança jurídica e tolerância zero a atrasos",
      },
      {
        value: "4",
        label: "Continentes Conectados",
        detail: "Américas, Europa, Ásia e África integrados ao Brasil",
      },
    ],
    hubsTitle: "Presença Estratégica nos Principais Hubs do Brasil",
    hubsSubtitle: "Atuação presencial direta onde sua carga precisa chegar",
    hubs: [
      {
        name: "Porto de Santos",
        type: "Porto Marítimo",
        desc: "Maior porto da América Latina para FCL & LCL",
        icon: Anchor,
      },
      {
        name: "Aeroporto GRU (Guarulhos)",
        type: "Terminal Aéreo",
        desc: "Hub aéreo de alta frequência e cargas urgentes",
        icon: Plane,
      },
      {
        name: "Aeroporto VCP (Viracopos)",
        type: "Terminal Aéreo Express",
        desc: "Referência em cargas técnicas e feiras internacionais",
        icon: Plane,
      },
      {
        name: "Porto de Paranaguá",
        type: "Porto Marítimo",
        desc: "Agilidade para bens de capital e maquinário pesado",
        icon: Anchor,
      },
      {
        name: "Aeroporto GIG (Galeão)",
        type: "Terminal Aéreo",
        desc: "Ponto de entrada estratégico para o Sudeste",
        icon: Plane,
      },
    ],
    process: {
      badge: "Como Trabalhamos",
      title: "O Fluxo Operacional NFT: Simples, Seguro e Previsível",
      subtitle: "Quatro etapas orquestradas para garantir que nada fique ao acaso da origem até o destino final no Brasil.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico & Viabilidade",
          desc: "Análise técnica antecipada de NCM, faturas e requisitos de órgãos anuentes (Anvisa, Inmetro, MAPA) antes do embarque na origem.",
          icon: FileCheck2,
        },
        {
          number: "02",
          title: "Reserva & Embarque Ágil",
          desc: "Coordenação multimodal (aéreo ou marítimo) com as principais companhias globais e rastreamento proativo 24/7.",
          icon: Truck,
        },
        {
          number: "03",
          title: "Desembaraço Prioritário",
          desc: "Atuação presencial de despachantes seniores nos recintos alfandegados visando canal verde sem retenções.",
          icon: ShieldCheck,
        },
        {
          number: "04",
          title: "Entrega Técnica & Pós-Operação",
          desc: "Transporte dedicado até o estande, fábrica ou armazém, com controle rigoroso para posterior nacionalização ou reexportação.",
          icon: CheckCircle2,
        },
      ],
    },
    sectors: {
      badge: "Setores Atendidos",
      title: "Expertise Setorial em Operações de Alta Complexidade",
      subtitle: "Cada segmento possui particularidades regulatórias e logísticas que dominamos com precisão cirúrgica.",
      cards: [
        {
          title: "Feiras & Exposições Internacionais",
          category: "Exposições & Pavilhões",
          desc: "Operação door-to-booth com cumprimento inegociável de datas de montagem.",
          image: "/imagens/feira-nft-logistics-3.jpg",
          href: "/pt/solucoes/feiras-e-eventos",
          icon: CalendarCheck,
        },
        {
          title: "Saúde, Farmacêutica & Dispositivos Médicos",
          category: "Regulatório Anvisa",
          desc: "Cadeia de custódia sanitária, controle de temperatura e desembaraço expresso.",
          image: "/imagens/anvisa-health-nft-logistics.webp",
          href: "/pt/saude",
          icon: HeartPulse,
        },
        {
          title: "Bens de Capital & Maquinário Industrial",
          category: "Indústria & Projetos",
          desc: "Aproveitamento de Ex-Tarifário e transporte de equipamentos de grande porte.",
          image: "/imagens/operacao-nft-logistics-2.jpg",
          href: "/pt/solucoes/projetos-customizados",
          icon: Building2,
        },
        {
          title: "Tecnologia, Telecom & Hardware",
          category: "Anatel & Inmetro",
          desc: "Licenciamentos prévios e logística expressa para produtos de alto valor agregado.",
          image: "/imagens/operacao-nft-logistics-6.jpg",
          href: "/pt/solucoes",
          icon: Cpu,
        },
        {
          title: "Obras de Arte, Design & Peças Históricas",
          category: "Acervos & Bienais",
          desc: "Caixas climáticas personalizadas, escolta e manuseio técnico com IPHAN.",
          image: "/imagens/nft-art-2.jpg",
          href: "/pt/solucoes/logistica-obras-arte",
          icon: Palette,
        },
      ],
    },
    differentials: {
      badge: "Por que a NFT Logistics?",
      title: "Diferenciais que Protegem o seu Negócio",
      subtitle: "Eliminamos a incerteza para que sua empresa opere com total tranquilidade no Brasil.",
      cards: [
        {
          title: "Consultoria Ativa na Origem",
          desc: "Auditoria documental completa antes da carga sair da fábrica internacional, evitando multas e retenções fiscais no porto brasileiro.",
          icon: ShieldCheck,
        },
        {
          title: "Comunicação Trilíngue Sem Filtros",
          desc: "Equipe sênior fluente em Português, Inglês e Mandarim, conversando diretamente com a matriz e com as autoridades locais.",
          icon: Globe2,
        },
        {
          title: "Economia com Regimes Suspensivos",
          desc: "Aplicação da legislação tributária para suspensão legal de impostos de importação em feiras e operações temporárias.",
          icon: TrendingUp,
        },
        {
          title: "Acompanhamento Presencial Direto",
          desc: "Presença física nos recintos alfandegados e pavilhões de eventos, com canal direto aos diretores responsáveis.",
          icon: Warehouse,
        },
      ],
    },
    cta: {
      badge: "Pronto para Começar?",
      title: "Conecte sua operação ao Brasil com previsibilidade absoluta e sem surpresas regulatórias.",
      subtitle:
        "Fale agora mesmo com nossos diretores e especialistas para um plano operacional sob medida para a sua carga.",
      btnPrimary: "Falar com um Especialista",
      btnPrimaryHref: "/pt/contato",
      btnSecondary: "Conversar via WhatsApp",
      btnSecondaryHref: "https://wa.me/5511948530057?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20Representa%C3%A7%C3%A3o%20Comercial%20no%20Brasil%20com%20a%20NFT%20Logistics.",
    },
  },
  en: {
    stats: [
      {
        value: "+15",
        label: "Years of Experience",
        detail: "Proven leadership in Brazilian foreign trade and customs operations",
      },
      {
        value: "+5,000",
        label: "Completed Operations",
        detail: "Swift customs clearance at key ports and international airports",
      },
      {
        value: "100%",
        label: "Regulatory Compliance",
        detail: "Fiscal security, legal certainty, and zero tolerance for delays",
      },
      {
        value: "4",
        label: "Continents Connected",
        detail: "Seamless operations connecting the Americas, Europe, Asia, and Africa",
      },
    ],
    hubsTitle: "Strategic Operational Presence Across Brazil",
    hubsSubtitle: "Direct on-site support at the most important cargo gateways",
    hubs: [
      {
        name: "Port of Santos",
        type: "Seaport Hub",
        desc: "Latin America's largest port for FCL & LCL maritime trade",
        icon: Anchor,
      },
      {
        name: "GRU Airport (São Paulo)",
        type: "Air Cargo Terminal",
        desc: "High-frequency international airport for urgent air cargo",
        icon: Plane,
      },
      {
        name: "VCP Airport (Viracopos)",
        type: "Express Cargo Hub",
        desc: "Prime gateway for trade exhibitions and technical equipment",
        icon: Plane,
      },
      {
        name: "Port of Paranaguá",
        type: "Seaport Hub",
        desc: "Fast-track terminal for industrial capital goods and breakbulk",
        icon: Anchor,
      },
      {
        name: "GIG Airport (Rio de Janeiro)",
        type: "Air Cargo Terminal",
        desc: "Strategic southeastern gateway for industrial and project cargo",
        icon: Plane,
      },
    ],
    process: {
      badge: "How We Work",
      title: "The NFT Operational Workflow: Predictable, Agile & Secure",
      subtitle: "Four coordinated steps ensuring that no variable is left to chance from origin to Brazilian destination.",
      steps: [
        {
          number: "01",
          title: "Diagnostic & Viability",
          desc: "Prior review of HS/NCM classification, invoices, and regulatory clearances (Anvisa, Inmetro, MAPA) before departure.",
          icon: FileCheck2,
        },
        {
          number: "02",
          title: "Booking & Coordinated Freight",
          desc: "Priority air or ocean bookings with tier-one carriers and proactive 24/7 shipment tracking.",
          icon: Truck,
        },
        {
          number: "03",
          title: "Priority Customs Clearance",
          desc: "On-site presence by senior customs brokers at bonded terminals targeting swift green channel release.",
          icon: ShieldCheck,
        },
        {
          number: "04",
          title: "Technical Delivery & Post-Event",
          desc: "Dedicated transport to booth, warehouse, or plant with rigorous tracking for future re-export or nationalization.",
          icon: CheckCircle2,
        },
      ],
    },
    sectors: {
      badge: "Industries Served",
      title: "Sector-Specific Expertise in Highly Regulated Markets",
      subtitle: "Deep understanding of the unique customs and logistical requirements for each industry segment.",
      cards: [
        {
          title: "Trade Fairs & International Exhibitions",
          category: "Pavilions & Booths",
          desc: "Strict adherence to assembly timelines with door-to-booth logistics.",
          image: "/imagens/feira-nft-logistics-3.jpg",
          href: "/en/solutions/fairs-and-events",
          icon: CalendarCheck,
        },
        {
          title: "Healthcare, Pharma & Medical Devices",
          category: "Anvisa Sanitary Compliance",
          desc: "Cold chain maintenance, certified handling, and expedited health clearance.",
          image: "/imagens/anvisa-health-nft-logistics.webp",
          href: "/en/health",
          icon: HeartPulse,
        },
        {
          title: "Industrial Machinery & Capital Goods",
          category: "Heavy Projects & Breakbulk",
          desc: "Tariff reduction mechanisms (Ex-Tarifário) and heavy-lift road engineering.",
          image: "/imagens/operacao-nft-logistics-2.jpg",
          href: "/en/solutions/customized-projects",
          icon: Building2,
        },
        {
          title: "High-Tech, Telecom & Electronics",
          category: "Anatel & Inmetro",
          desc: "Pre-licensing advisory and fast-track express air logistics for high-value tech.",
          image: "/imagens/operacao-nft-logistics-6.jpg",
          href: "/en/solutions",
          icon: Cpu,
        },
        {
          title: "Fine Art, Antiques & Museum Pieces",
          category: "Galleries & Biennials",
          desc: "Climate-controlled packaging, security escorts, and IPHAN authorizations.",
          image: "/imagens/nft-art-2.jpg",
          href: "/en/solutions/artworks-logistics",
          icon: Palette,
        },
      ],
    },
    differentials: {
      badge: "Why NFT Logistics?",
      title: "Strategic Advantages That Protect Your Operation",
      subtitle: "We dismantle uncertainty so your global business can thrive with total peace of mind in Brazil.",
      cards: [
        {
          title: "Active Pre-Shipment Advisory",
          desc: "Thorough documentation audit before cargo leaves the factory, eliminating penalties and customs hold-ups in Brazil.",
          icon: ShieldCheck,
        },
        {
          title: "Trilingual Direct Communication",
          desc: "Native technical communication in Portuguese, English, and Mandarin, removing time zone friction and cultural gaps.",
          icon: Globe2,
        },
        {
          title: "Tax Savings via Special Regimes",
          desc: "Lawful application of Brazilian customs regimes to legally suspend taxes on temporary imports and exhibition goods.",
          icon: TrendingUp,
        },
        {
          title: "Direct Access to Senior Partners",
          desc: "Direct coordination with our logistics directors without automated phone systems or waiting queues.",
          icon: Warehouse,
        },
      ],
    },
    cta: {
      badge: "Ready to Operate?",
      title: "Connect your global operations to Brazil with certainty and zero regulatory surprises.",
      subtitle:
        "Speak directly with our senior directors and specialists to design an optimal, compliant logistics blueprint for your cargo.",
      btnPrimary: "Speak with a Specialist",
      btnPrimaryHref: "/en/contact",
      btnSecondary: "Chat via WhatsApp",
      btnSecondaryHref: "https://wa.me/5511948530057?text=Hello!%20I%20would%20like%20to%20know%20how%20NFT%20Logistics%20can%20assist%20our%20entry%20into%20the%20Brazilian%20market.",
    },
  },
  cn: {
    stats: [
      {
        value: "+15",
        label: "年行业经验",
        detail: "深耕巴西外贸与特殊海关监管业务",
      },
      {
        value: "+5,000",
        label: "成功操作案例",
        detail: "在各大海空港高效完成清关与分拨",
      },
      {
        value: "100%",
        label: "监管合规保障",
        detail: "严格税务与法律合规，严守交付节点",
      },
      {
        value: "4",
        label: "大洲直连巴西",
        detail: "无缝衔接美洲、欧洲、亚洲及非洲货物",
      },
    ],
    hubsTitle: "覆盖巴西核心枢纽的战略布局",
    hubsSubtitle: "在货物通关与运输的关键节点提供驻场支持",
    hubs: [
      {
        name: "桑托斯港 (Porto de Santos)",
        type: "主要海港枢纽",
        desc: "拉美最大海港，提供整箱与拼箱专业服务",
        icon: Anchor,
      },
      {
        name: "瓜鲁柳斯国际机场 (GRU)",
        type: "航空货运核心",
        desc: "高频国际直达航线，紧急航空货运首选",
        icon: Plane,
      },
      {
        name: "维拉科波斯机场 (VCP)",
        type: "特快货运口岸",
        desc: "国际展会与精密仪器设备的清关基地",
        icon: Plane,
      },
      {
        name: "帕拉纳瓜港 (Paranaguá)",
        type: "海运重件口岸",
        desc: "工业重型机械与工程项目货物优势口岸",
        icon: Anchor,
      },
      {
        name: "加利昂国际机场 (GIG)",
        type: "东南货运门户",
        desc: "巴西东南部重要空运战略通道",
        icon: Plane,
      },
    ],
    process: {
      badge: "服务流程",
      title: "NFT 运营流程：清晰、敏捷且风险可控",
      subtitle: "四步精准闭环管控，确保货物从始发地起运至巴西交付全程顺畅无虞。",
      steps: [
        {
          number: "01",
          title: "前期诊断与合规可行性",
          desc: "在始发国起运前预审海关编码（NCM）、发票及监管部门许可（Anvisa、Inmetro、MAPA）。",
          icon: FileCheck2,
        },
        {
          number: "02",
          title: "订舱与多式联运",
          desc: "优选一级海空运航线订舱，提供全天候 24/7 货物追踪与主动状态推送。",
          icon: Truck,
        },
        {
          number: "03",
          title: "优先通关与查验把控",
          desc: "资深报关专员现场驻守各大保税仓库及港区，全力争取绿色通道秒放行。",
          icon: ShieldCheck,
        },
        {
          number: "04",
          title: "目的地交付与后续闭环",
          desc: "专用陆运车队直达展馆展位或客户工厂，后续跟进复出口核销或正式转口申报。",
          icon: CheckCircle2,
        },
      ],
    },
    sectors: {
      badge: "服务行业",
      title: "深耕高准入门槛的重点行业",
      subtitle: "深入理解各行业的特殊监管法规与现场物流技术要求。",
      cards: [
        {
          title: "国际展会与商业博览会",
          category: "展馆与展位专线",
          desc: "严守布展窗口期，点对点运送并协助现场组装就位。",
          image: "/imagens/feira-nft-logistics-3.jpg",
          href: "/cn/solutions-cn/fairs-and-events-cn",
          icon: CalendarCheck,
        },
        {
          title: "医疗卫生、制药与医疗器械",
          category: "Anvisa 卫生监管",
          desc: "严格温控链管理，符合巴西国家卫生监督局合规标准。",
          image: "/imagens/anvisa-health-nft-logistics.webp",
          href: "/cn/health-cn",
          icon: HeartPulse,
        },
        {
          title: "工业装备与重型机械",
          category: "重大件与项目工程",
          desc: "协助申请关税减免（Ex-Tarifário）与大型工程车辆运输。",
          image: "/imagens/operacao-nft-logistics-2.jpg",
          href: "/cn/solutions-cn/customized-projects-cn",
          icon: Building2,
        },
        {
          title: "高新技术、通讯与电子硬件",
          category: "Anatel 与 Inmetro",
          desc: "前置进口许可审批与高货值电子元器件快速清关。",
          image: "/imagens/operacao-nft-logistics-6.jpg",
          href: "/cn/solutions-cn",
          icon: Cpu,
        },
        {
          title: "艺术珍品、文物与双年展展品",
          category: "文博与艺术专运",
          desc: "恒温定制包装，IPHAN 审批协调与武装押运安保。",
          image: "/imagens/nft-art-2.jpg",
          href: "/cn/solutions-cn/artworks-logistics-cn",
          icon: Palette,
        },
      ],
    },
    differentials: {
      badge: "为什么选择 NFT Logistics？",
      title: "为您的全球运营筑牢护城河",
      subtitle: "彻底消除不确定性，助力跨国企业在巴西安心拓展业务。",
      cards: [
        {
          title: "发货前主动关务预审",
          desc: "在货物离开海外工厂前完成全套单证预审，彻底避免在巴西港口产生罚金与滞箱滞港费。",
          icon: ShieldCheck,
        },
        {
          title: "葡英中三语直通服务",
          desc: "资深团队精通葡萄牙语、英语及中文（普通话），与海外总部及巴西当地海关沟通零障碍。",
          icon: Globe2,
        },
        {
          title: "合理利用暂缓税收红利",
          desc: "精准运用暂时进出境监管制度，合法合规免除巨额税赋，大幅保障企业资金流。",
          icon: TrendingUp,
        },
        {
          title: "高管直接把控现场",
          desc: "业务骨干现场常驻重点保税区与展馆，随时与公司决策层直接沟通，无机器人或客服转接。",
          icon: Warehouse,
        },
      ],
    },
    cta: {
      badge: "即刻启程",
      title: "开启高效顺畅的巴西物流与清关之旅，无惧监管难题。",
      subtitle: "即刻联系我们的资深主管与关务专家，获取为您量身定制的无忧操作方案。",
      btnPrimary: "咨询专家团队",
      btnPrimaryHref: "/cn/contact-cn",
      btnSecondary: "通过 WhatsApp 沟通",
      btnSecondaryHref: "https://wa.me/5511948530057?text=Hello!%20I%20would%20like%20to%20know%20how%20NFT%20Logistics%20can%20assist%20our%20entry%20into%20the%20Brazilian%20market.",
    },
  },
};

export default function HomeClient({ lang }: HomeClientProps) {
  const t = HOME_CONTENT[lang] || HOME_CONTENT.pt;

  return (
    <div className="w-full">
      {/* 1. SEÇÃO DE ESTATÍSTICAS E PROVA SOCIAL FLUTUANTE */}
      <section className="relative w-full sm:mt-5 md:mt-0 lg:mt-0 -lg:-mt-30 z-20 py-12 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group ${
                  idx > 0 ? "p-6 sm:p-6 lg:p-8" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-500 tracking-tight">
                  <span className="text-orange-600 dark:text-orange-500">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-1 text-base font-bold text-neutral-900 dark:text-white">
                  {stat.label}
                </div>
                <div className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. HUBS LOGÍSTICOS ESTRATÉGICOS NO BRASIL */}
      <section className="py-12 sm:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-2">
                <Warehouse className="w-3.5 h-3.5" />
                <span>Infraestrutura Nacional</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.hubsTitle}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 max-w-md">
              {t.hubsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {t.hubs.map((hub, idx) => {
              const HubIcon = hub.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-200 hover:shadow-md hover:border-orange-300 dark:hover:border-orange-700/60 flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                      {hub.type}
                    </span>
                    <HubIcon className="w-4 h-4 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug mb-1">
                      {hub.name}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                      {hub.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VITRINE DE SOLUÇÕES ESTRATÉGICAS */}
      <SolutionsShowcase lang={lang} />

      {/* 4. FLUXO OPERACIONAL EM 4 ETAPAS (COMO FUNCIONA) */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.process.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.process.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-orange-600/30 dark:text-orange-500/30 tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange-100/60 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VITRINE DE SETORES ATENDIDOS (CARDS FOTOGRÁFICOS) */}
      <section className="py-16 sm:py-20 bg-neutral-100/40 dark:bg-neutral-900/30 border-t border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <Boxes className="w-3.5 h-3.5" />
              <span>{t.sectors.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.sectors.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sectors.cards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Imagem do Setor */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                        <CardIcon className="w-3.5 h-3.5 text-orange-400" />
                        <span>{card.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-500">
                      <span>Ver detalhes do setor</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAIS COMPETITIVOS EM 4 PILARES VISUAIS */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.differentials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {t.differentials.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {t.differentials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.differentials.cards.map((diff, idx) => {
              const DiffIcon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-5">
                      <DiffIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. DESTAQUE HEALTH LOGISTICS */}
      <HealthCTA lang={lang} />

      {/* 8. BANNER DE CONVERSÃO FINAL */}
      <section className="py-16 sm:py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={t.cta.btnPrimaryHref}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg shadow-orange-600/30"
            >
              {t.cta.btnPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={t.cta.btnSecondaryHref}
              target="_blank"
              leftIcon={<MessageSquareDot className="w-5 h-5 text-emerald-400" />}
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              {t.cta.btnSecondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
