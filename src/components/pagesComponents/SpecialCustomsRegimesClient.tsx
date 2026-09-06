"use client";

import React from "react";
import Image from "next/image";
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
  FileCheck2,
  Workflow,
  TrendingDown,
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

export interface SpecialCustomsRegimesClientProps {
  lang?: LanguageCode;
}

interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

interface CapabilityCard {
  badge: string;
  title: string;
  desc: string;
  footer: string;
}

interface FeatureCard {
  title: string;
  desc: string;
}

interface ContentLocale {
  whatsappMsg: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaTalk: string;
    ctaSteps: string;
    trustTitle: string;
    trustDesc: string;
  };
  block2: {
    imageAlt: string;
    floatingBadgeTitle: string;
    floatingBadgeDesc: string;
    tag: string;
    title: string;
    paragraphs: string[];
  };
  regimes: {
    tag: string;
    title: string;
    description: string;
    card1: CapabilityCard;
    card2: CapabilityCard;
    card3: CapabilityCard;
  };
  whyChoose: {
    tag: string;
    title: string;
    paragraphs: string[];
    ctaTalk: string;
    visualCard: {
      imageAlt: string;
      badge: string;
      desc: string;
    };
    feature1: FeatureCard;
    feature2: FeatureCard;
    feature3: FeatureCard;
    feature4: FeatureCard;
  };
  stepsSection: {
    id: string;
    tag: string;
    title: string;
    description: string;
    steps: StepItem[];
  };
  gallery: {
    tag: string;
    title: string;
    description: string;
    items: GalleryItem[];
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    btnWhatsapp: string;
    disclaimer: string;
  };
}

const CONTENT: Record<LanguageCode, ContentLocale> = {
  pt: {
    whatsappMsg:
      "Olá! Gostaria de falar com um especialista sobre Regimes Aduaneiros Especiais com a NFT Logistics.",
    hero: {
      badge: "Consultoria Tributária & Aduaneira de Alta Performance",
      title: "Regimes Aduaneiros Especiais para Otimização Tributária",
      description:
        "Desonere suas operações de importação e exportação com total segurança jurídica. Estruturamos Admissão Temporária, Drawback, Entreposto Aduaneiro e RECOF para potencializar a competitividade e preservar o fluxo de caixa da sua empresa.",
      ctaTalk: "Falar com Especialista",
      ctaSteps: "Ver Como Funciona",
      trustTitle: "100% de Conformidade Aduaneira com a Receita Federal",
      trustDesc:
        "Assessoria técnica completa do diagnóstico prévio ao encerramento e baixa do Termo de Responsabilidade fiscal.",
    },
    block2: {
      imageAlt: "Gestão de Regimes Especiais e Entreposto Aduaneiro",
      floatingBadgeTitle: "Inteligência Tributária & Fiscal",
      floatingBadgeDesc: "Suspensão legal de impostos federais e estaduais",
      tag: "Planejamento Tributário Internacional",
      title:
        "Transforme a complexidade aduaneira brasileira em alavanca financeira",
      paragraphs: [
        "O Brasil possui uma das estruturas tributárias de comércio exterior mais intrincadas do mundo. O desembolso integral de impostos como II, IPI, PIS/COFINS-Importação e ICMS na nacionalização imediata costuma imobilizar volumes substanciais de capital de giro e comprometer a viabilidade de projetos industriais e comerciais.",
        "Os Regimes Aduaneiros Especiais foram concebidos pela legislação para desonerar temporária ou definitivamente as operações corporativas. A NFT Logistics atua mapeando o enquadramento ideal para cada modelo de negócio, elaborando pleitos fundamentados e garantindo a estrita observância das normas da Receita Federal.",
        "Seja para expor mercadorias, importar insumos de manufatura para reexportação ou estocar produtos sem tributação prévia, asseguramos total blindagem contra autuações e máxima economia tributária.",
      ],
    },
    regimes: {
      tag: "Principais Modalidades",
      title: "Modelos Tributários para Otimização de Capital",
      description:
        "Cada operação corporativa exige uma engenharia aduaneira personalizada. Conheça os principais regimes geridos com rigor e excelência técnica pela NFT Logistics:",
      card1: {
        badge: "Permanência Temporária",
        title: "Admissão Temporária",
        desc: "Permite a importação de bens com suspensão total de tributos para eventos, feiras, demonstrações comerciais, testes ou reparos, ou com suspensão proporcional para utilização econômica de maquinários industriais de grande porte. Gerenciamos a concessão, prorrogações tempestivas e posterior reexportação regular.",
        footer: "Suspensão tributária e liquidez",
      },
      card2: {
        badge: "Estímulo à Exportação",
        title: "Drawback (Suspensão e Isenção)",
        desc: "Incentivo fiscal estratégico que suspende ou isenta tributos incidentes sobre insumos, matérias-primas e componentes importados utilizados na industrialização de produtos destinados à exportação. Realizamos a abertura de atos concessórios, vinculação documental e baixa comprobatória sem resíduos fiscais.",
        footer: "Competitividade fabril global",
      },
      card3: {
        badge: "Armazenagem Suspensiva",
        title: "Entreposto Aduaneiro & RECOF",
        desc: "Possibilita o armazenamento de mercadorias estrangeiras em recinto alfandegado credenciado com suspensão do pagamento de tributos por até 3 anos. Permite a nacionalização fracionada conforme a demanda real de vendas ou produção industrial, adequando despesas ao fluxo de caixa efetivo.",
        footer: "Nacionalização conforme a demanda",
      },
    },
    whyChoose: {
      tag: "Vantagens Competitivas",
      title: "Por que estruturar seus regimes especiais com a NFT Logistics?",
      paragraphs: [
        "Operar regimes especiais sem o devido embasamento técnico gera passivos tributários graves, multas por perda de prazo e perda dos benefícios fiscais concedidos.",
        "Nossa equipe alia domínio da legislação aduaneira à agilidade operacional, acompanhando cada lote de carga desde a montagem do pleito até a extinção definitiva da obrigação fiscal.",
      ],
      ctaTalk: "Falar com nosso time de especialistas",
      visualCard: {
        imageAlt:
          "Armazém logístico alfandegado com contêineres e empilhadeiras em operação",
        badge: "Recinto Alfandegado",
        desc: "Armazenamento em entreposto com suspensão legal de tributos e liberação fracionada.",
      },
      feature1: {
        title: "Preservação Máxima do Fluxo de Caixa",
        desc: "Evite a imobilização antecipada de recursos em impostos que podem ser legalmente suspensos ou isentos, garantindo liquidez financeira e maior rentabilidade aos seus projetos.",
      },
      feature2: {
        title: "Blindagem Jurídica e Fiscal Absoluta",
        desc: "Dossiês técnicos minuciosos, elaboração criteriosa do Termo de Responsabilidade e alinhamento com a Instrução Normativa da Receita Federal aplicável a cada operação.",
      },
      feature3: {
        title: "Gestão Ativa de Prazos e Prorrogações",
        desc: "Sistemas integrados de controle temporal evitam o vencimento acidental de prazos concedidos, providenciando pedidos de prorrogação tempestivos com total tranquilidade.",
      },
      feature4: {
        title: "Extinção Segura e Baixa de Obrigações",
        desc: "Suporte completo na fase final do regime: coordenação da reexportação, despacho para consumo definitivo, transferência entre regimes ou baixa do ato concessório de drawback.",
      },
    },
    stepsSection: {
      id: "etapas",
      tag: "Metodologia Operacional",
      title: "Como Estruturamos Regimes Especiais em 5 Etapas",
      description:
        "Um processo estruturado em rigor fiscal e governança aduaneira para assegurar o deferimento rápido e a segurança jurídica contínua.",
      steps: [
        {
          num: "01",
          title: "Diagnóstico de Viabilidade Tributária",
          desc: "Classificação fiscal precisa (NCM), análise do enquadramento legal e cálculo comparativo do impacto financeiro entre o regime comum e o especial.",
        },
        {
          num: "02",
          title: "Estruturação do Dossiê e Contratos",
          desc: "Montagem documental completa, minutas contratuais fundamentadas, laudos técnicos e dimensionamento de garantias aduaneiras (se exigidas).",
        },
        {
          num: "03",
          title: "Protocolo e Deferimento Aduaneiro",
          desc: "Submissão perante a Receita Federal via Siscomex/Módulos Especiais e acompanhamento diligente da conferência física e documental até a concessão.",
        },
        {
          num: "04",
          title: "Gestão Contínua de Vigência e Prazos",
          desc: "Monitoramento sistemático do período de permanência, controle de saldos alfandegados e elaboração preventiva de prorrogações legais.",
        },
        {
          num: "05",
          title: "Extinção do Regime & Baixa Definitiva",
          desc: "Execução do trâmite de encerramento (reexportação, nacionalização definitiva ou baixa de ato concessório) com cancelamento formal do Termo de Responsabilidade.",
        },
      ],
    },
    gallery: {
      tag: "Infraestrutura & Recintos",
      title: "Logística Integrada em Portos e Entrepostos",
      description:
        "Infraestrutura física homologada e acompanhamento presencial nos maiores hubs de importação do Brasil.",
      items: [
        {
          src: "/imagens/armazem.jpg",
          alt: "Entreposto aduaneiro com empilhadeiras e contêineres",
          tag: "Entreposto Aduaneiro",
          title: "Armazenagem com Suspensão",
          desc: "Estocagem sob controle aduaneiro com desembaraço fracionado de acordo com seu fluxo produtivo.",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.jpg",
          alt: "Terminal de contêineres e logística portuária",
          tag: "Portos & Aeroportos",
          title: "Presença em Santos e Viracopos",
          desc: "Desembaraço prioritário diretamente nos recintos alfandegados de maior movimentação do país.",
        },
        {
          src: "/imagens/operacao-nft-logistics.jpg",
          alt: "Especialista da NFT Logistics conferindo lote de carga amarrada",
          tag: "Auditoria Física",
          title: "Inspeção Técnica de Lote",
          desc: "Conferência física rigorosa de números de série, marcas e integridade para evitar exigências fiscais.",
        },
        {
          src: "/imagens/armazem-2.jpg",
          alt: "Galpão logístico e estoque industrial organizado",
          tag: "Drawback & RECOF",
          title: "Insumos para Exportação",
          desc: "Controle contábil e documental de matérias-primas e componentes empregados na industrialização.",
        },
      ],
    },
    cta: {
      badge: "Consultoria Tributária & Aduaneira",
      title: "Quer descobrir quanto sua empresa pode economizar em tributos?",
      description:
        "Nossos consultores realizam uma análise preliminar da sua operação para identificar os regimes especiais aplicáveis com segurança fiscal e ganho imediato de competitividade.",
      btnWhatsapp: "Falar no WhatsApp com Especialista",
      disclaimer:
        "Atendimento estratégico para importadores e exportadores em todo o território nacional.",
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Special Customs Regimes with NFT Logistics.",
    hero: {
      badge: "High-Performance Tax & Customs Consulting",
      title: "Special Customs Regimes for Tax & Duty Optimization",
      description:
        "Relieve import and export operations from heavy tax burdens with absolute legal certainty. We structure Temporary Admission, Drawback, Bonded Warehousing, and RECOF to boost competitiveness and preserve corporate working capital.",
      ctaTalk: "Speak with a Specialist",
      ctaSteps: "See How It Works",
      trustTitle: "100% Brazilian Federal Revenue Customs Compliance",
      trustDesc:
        "Complete technical advisory from initial diagnostic to formal settlement and discharge of fiscal liability terms.",
    },
    block2: {
      imageAlt:
        "Management of Special Customs Regimes and Bonded Warehousing NFT Logistics",
      floatingBadgeTitle: "Tax & Fiscal Intelligence",
      floatingBadgeDesc: "Lawful suspension of federal and state taxes",
      tag: "International Tax Planning",
      title:
        "Turn Brazilian customs complexity into a strategic financial lever",
      paragraphs: [
        "Brazil has one of the world's most intricate foreign trade tax systems. Paying full upfront duties (Import Duty, IPI, PIS/COFINS-Import, and ICMS) upon standard entry immobilizes substantial amounts of working capital and often jeopardizes industrial projects.",
        "Special Customs Regimes are statutory mechanisms designed to temporarily or permanently exempt or suspend import taxes. NFT Logistics identifies the optimal regime for your operational model, drafts technically substantiated petitions, and ensures strict adherence to Federal Revenue requirements.",
        "Whether exhibiting exhibition equipment, importing manufacturing inputs for re-exportation, or storing goods in bonded facilities prior to fractional sales, we guarantee total compliance and maximum tax savings.",
      ],
    },
    regimes: {
      tag: "Core Regimes",
      title: "Customs Tax Frameworks for Working Capital Optimization",
      description:
        "Every enterprise operation demands customized customs engineering. Explore the primary regimes managed with rigorous technical precision by NFT Logistics:",
      card1: {
        badge: "Temporary Stay",
        title: "Temporary Admission",
        desc: "Allows goods to enter Brazil with full tax suspension for trade fairs, events, commercial demonstrations, testing, or maintenance, or proportional tax payment for economic utilization of heavy machinery. We manage the grant, timely extensions, and clean re-exportation.",
        footer: "Tax suspension & cash preservation",
      },
      card2: {
        badge: "Export Incentive",
        title: "Drawback (Suspension & Exemption)",
        desc: "Strategic fiscal incentives that suspend or eliminate duties and taxes levied on imported raw materials and components used to manufacture goods destined for export. We manage concession act openings, document linkage, and audit-proof write-offs.",
        footer: "Global industrial competitiveness",
      },
      card3: {
        badge: "Suspended Storage",
        title: "Bonded Warehouse & RECOF",
        desc: "Enables storage of foreign goods in accredited bonded facilities with suspension of duties for up to 3 years. Facilitates fractional customs clearance matched to actual demand or manufacturing schedules, aligning tax outflow with actual commercial revenue.",
        footer: "Demand-driven fractional clearance",
      },
    },
    whyChoose: {
      tag: "Competitive Advantages",
      title: "Why structure your special regimes with NFT Logistics?",
      paragraphs: [
        "Operating special regimes without thorough technical grounding generates severe tax liabilities, heavy penalties for missed deadlines, and retroactive forfeiture of fiscal benefits.",
        "Our team blends deep mastery of Brazilian customs legislation with operational speed, overseeing every shipment from initial petition filing to final tax clearance discharge.",
      ],
      ctaTalk: "Speak with Our Expert Team",
      visualCard: {
        imageAlt: "Bonded logistics warehouse with containers and forklifts",
        badge: "Bonded Facility",
        desc: "Bonded storage with legal tax suspension and fractional clearance.",
      },
      feature1: {
        title: "Maximum Cash Flow Preservation",
        desc: "Prevent upfront capital immobilization in duties and taxes that can be legally suspended or exempted, ensuring financial liquidity and superior project returns.",
      },
      feature2: {
        title: "Absolute Legal & Fiscal Compliance",
        desc: "Meticulous technical dossiers, rigorously formulated Terms of Responsibility, and precise alignment with Federal Revenue Normative Instructions.",
      },
      feature3: {
        title: "Active Deadline & Extension Control",
        desc: "Automated milestone tracking prevents accidental expiration of granted stay periods, filing extension requests proactively well in advance.",
      },
      feature4: {
        title: "Safe Discharge & Obligation Settlement",
        desc: "Full support during regime conclusion: coordinating re-exportation, definitive local nationalization, transfer between regimes, or drawback concession clearance.",
      },
    },
    stepsSection: {
      id: "steps",
      tag: "Operational Methodology",
      title: "How We Structure Special Regimes in 5 Stages",
      description:
        "A structured process grounded in fiscal rigor and customs governance to ensure swift authorization and continuous legal safety.",
      steps: [
        {
          num: "01",
          title: "Tax Feasibility Diagnostic",
          desc: "Precise HS/NCM tariff classification, statutory qualification check, and comparative financial simulation between standard and special regimes.",
        },
        {
          num: "02",
          title: "Dossier & Contract Structuring",
          desc: "Complete documentation compilation, substantiated contracts, technical reports, and customs bond calculation (if applicable).",
        },
        {
          num: "03",
          title: "Protocol & Customs Grant",
          desc: "Filing through Siscomex and diligent follow-up through physical and documentary inspection until official approval.",
        },
        {
          num: "04",
          title: "Active Term & Validity Management",
          desc: "Systematic monitoring of permitted stay deadlines, bonded inventory ledger tracking, and proactive extension processing.",
        },
        {
          num: "05",
          title: "Regime Extinction & Final Discharge",
          desc: "Execution of final closing formalities (re-exportation, definitive clearance for consumption, or drawback write-off) with official release of liabilities.",
        },
      ],
    },
    gallery: {
      tag: "Customs Infrastructure",
      title: "Integrated Logistics Across Ports & Bonded Facilities",
      description:
        "Explore the daily operations of fiscal monitoring across bonded warehouses, dry ports, and sea terminals.",
      items: [
        {
          src: "/imagens/armazem.jpg",
          alt: "High standard bonded warehousing facilities",
          tag: "Tax Suspension",
          title: "Bonded Depots & Dry Ports (CLIAs)",
          desc: "Lot fractionalization and gradual consumption release strictly synchronized with sales pipeline volume.",
        },
        {
          src: "/imagens/operacao-nft-logistics.jpg",
          alt: "Port container handling and customs clearance",
          tag: "Foreign Trade Hubs",
          title: "Maritime Ports & Terminals",
          desc: "Expedited customs clearance at Brazil's primary ports: Santos, Paranaguá, Itajaí, and Rio de Janeiro.",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.jpg",
          alt: "Physical customs inspection and fiscal checks",
          tag: "Regulatory Compliance",
          title: "Customs Inspections & Physical Audit",
          desc: "In-person representation during physical uncrating and inspection for Receita Federal yellow/red channels.",
        },
        {
          src: "/imagens/operacao-nft-logistics-3.jpg",
          alt: "Supply chain management and Drawback operations",
          tag: "Export Tax Exemption",
          title: "Drawback & Manufacturing Chains",
          desc: "Strict ledger management for imported raw materials dedicated to local processing and subsequent re-export.",
        },
      ],
    },
    cta: {
      badge: "Tax & Customs Consulting",
      title: "Want to discover how much your company can save in taxes?",
      description:
        "Our consultants conduct an initial assessment of your operations to identify applicable special regimes with full compliance and immediate competitive gain.",
      btnWhatsapp: "Chat on WhatsApp with an Expert",
      disclaimer:
        "Strategic advisory for importers and exporters across Brazil and internationally.",
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想与NFT Logistics的关务与财税专家咨询巴西特殊海关监管制度（Regimes Especiais）。",
    hero: {
      badge: "高阶财税咨询与海关特殊监管方案",
      title: "特殊海关监管制度（Regimes Especiais）与财税优化",
      description:
        "在全方位合规框架下显著减轻进出口税负。我们专业架构暂时进境（Admissão Temporária）、退税/免税加工（Drawback）、保税仓储（Entreposto Aduaneiro）与RECOF等模式，提升企业资金使用效率。",
      ctaTalk: "咨询关税筹划专家",
      ctaSteps: "查看运作流程",
      trustTitle: "100% 符合巴西联邦税务局（Receita Federal）合规监管",
      trustDesc:
        "从前期可行性诊断、全套卷宗呈报到期满销案核销（Baixa de Termo de Responsabilidade）的全程顾问保障。",
    },
    block2: {
      imageAlt: "保税仓储与特殊海关监管业务运营 NFT Logistics",
      floatingBadgeTitle: "智能税收筹划与海关法规",
      floatingBadgeDesc: "依法暂缓或免征巴西联邦及各州关税与流转税",
      tag: "国际财税战略筹划",
      title: "将巴西错综复杂的关税体系转化为企业的资金杠杆",
      paragraphs: [
        "巴西拥有全球公认最繁复的外贸税制之一。直接一般性清关需在进境当下全额预缴进口税（II）、工业品税（IPI）、PIS/COFINS-Importação 以及各州流转税（ICMS），占用极其高昂的流动资金，甚至阻碍重点工业项目落地。",
        "巴西立法设立的特殊海关监管制度（Regimes Aduaneiros Especiais），旨在合法暂缓或减免企业的进出口税收负担。NFT Logistics 精准匹配适合您业务的特殊关税政策，撰写严密的技术论证卷宗，并确保完全符合联邦税务局的严苛规范。",
        "无论是参展进境、保税加工料件进口转外销，还是保税仓储按需分批清关，我们确保全流程免受行政稽查风险，创造显著的税收节约效益。",
      ],
    },
    regimes: {
      tag: "核心制度体系",
      title: "释放企业营运资金的特种关税方案",
      description:
        "每一项跨境业务都需要定制化关务工程。NFT Logistics 以严谨技术管理以下主流海关监管制度：",
      card1: {
        badge: "临时入境停留",
        title: "暂时进境（Admissão Temporária）",
        desc: "允许货物以完全免除税款的方式进入巴西境内，用于国际展会、技术展示、商业测试或专业维修；或针对大型施工机械设备按经济利用比例暂缓征税。我们负责全套审批立项、按期展期申办及后续正规复运出境。",
        footer: "关税全额暂缓与流动资金保障",
      },
      card2: {
        badge: "出口产业促进",
        title: "Drawback（暂缓与免税加工）",
        desc: "针对用于生产制造出口成品的进口原材料、辅料及零部件，依法免征或暂缓征收各项进口税费。我们负责开立特许文件（Ato Concessório）、报关单据智能对碰核销，做到无税务残留风险。",
        footer: "增强制造企业全球竞标力",
      },
      card3: {
        badge: "保税仓储与分批",
        title: "保税仓储（Entreposto）与 RECOF",
        desc: "外国货物在巴西经认证的保税监管场所内存储长达3年，在此期间全部税款处于法定暂缓状态。允许企业按照真实订单销售或工厂生产节拍分批小额清关，精准匹配企业收付款现金流。",
        footer: "按实际销售订单分步纳税",
      },
    },
    whyChoose: {
      tag: "核心竞争优势",
      title: "为何选择由 NFT Logistics 架构您的特殊监管体系？",
      paragraphs: [
        "如果在缺乏充分法律技术论证的情况下操作特殊监管，一旦逾期或操作不当，将引发高额追缴滞纳金、行政处罚甚至被撤销税收减免资质。",
        "我们的资深关务顾问团队深谙巴西海关法规，兼具敏捷现场清关能力，从立项论证直至税赋责任结案核销，全程无死角跟踪。",
      ],
      ctaTalk: "与关务专家团队直接洽谈",
      visualCard: {
        imageAlt: "配备集装箱和叉车操作的保税物流仓储",
        badge: "保税监管区",
        desc: "保税区仓储，法定暂缓关税，支持按需分批清关出库。",
      },
      feature1: {
        title: "最大限度保护企业现金流",
        desc: "避免提前将宝贵的营运资本沉淀于可依法免除或缓缴的税赋中，极大增强企业流动性与投资回报率。",
      },
      feature2: {
        title: "无懈可击的财税与法规合规屏障",
        desc: "编制高标准技术卷宗、审慎订立责任承诺条款（Termo de Responsabilidade），严格对标联邦税务局最新规范性指令。",
      },
      feature3: {
        title: "主动式时效与延期全盘监管",
        desc: "关务管理系统实时倒计时预警，杜绝因疏忽导致的停留期逾期，提前合规向税务主管机关递交延期申请。",
      },
      feature4: {
        title: "终期安全结案与责任核销",
        desc: "监管期满阶段提供闭环支持：统筹复运出境、转入一般消费清关、监管制度互转或核销加工贸易特许令。",
      },
    },
    stepsSection: {
      id: "steps",
      tag: "操作方法论",
      title: "特殊监管制度构建的五大阶段",
      description:
        "以严谨财税法理与海关治理为基石的成熟服务流程，保障高效批复与持续合规。",
      steps: [
        {
          num: "01",
          title: "税法可行性综合诊断",
          desc: "精确判定海关编码（NCM/HS Code）、核定适用监管法规并测算普通清关与特殊制度下的财务对比收益。",
        },
        {
          num: "02",
          title: "法务卷宗与商务合同架构",
          desc: "起草全套合规报关文件、技术报告与合同草案，核定并办理海关要求的保函/担保手续。",
        },
        {
          num: "03",
          title: "海关递单与准予批复",
          desc: "通过巴西 Siscomex 外贸系统呈报，全程跟进海关官员实物查验与单据审核，直至取得正式批复。",
        },
        {
          num: "04",
          title: "有效期与时限动态管理",
          desc: "严密监管保税货物停留期与保税台账余额，在法定窗口期内稳妥提交合法展期申请。",
        },
        {
          num: "05",
          title: "监管制度终止与责任核销",
          desc: "执行闭环结算手续（复运出境、转为常规消费清关或核销加工贸易令），正式注销担保与责任承诺。",
        },
      ],
    },
    gallery: {
      tag: "海关监管基础设施",
      title: "巴西港口、保税仓与无水港一体化物流",
      description:
        "深入见证我们在保税仓库、内陆无水港（CLIA）及各大海运海关监管区的实地运作。",
      items: [
        {
          src: "/imagens/armazem.jpg",
          alt: "高标准保税仓储设施",
          tag: "税费暂缓",
          title: "保税仓储与无水港（CLIAs）",
          desc: "按批次分拆申报与逐步消费清关，严格匹配客户在巴西当地的销售节奏。",
        },
        {
          src: "/imagens/operacao-nft-logistics.jpg",
          alt: "海运港口集装箱清关与装卸",
          tag: "外贸口岸枢纽",
          title: "核心海港与海关码头",
          desc: "在巴西各大战略口岸极速清关：桑托斯港（Santos）、帕拉纳瓜（Paranaguá）、伊塔雅伊（Itajaí）及里约热内卢。",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.jpg",
          alt: "海关物理查验与开箱审核",
          tag: "严密法规遵循",
          title: "海关查验与现场核验",
          desc: "在联邦税务局（Receita Federal）黄通道与红通道查验中派驻现场代表，全程见证拆箱。",
        },
        {
          src: "/imagens/operacao-nft-logistics-3.jpg",
          alt: "加工贸易与退税管理供应链",
          tag: "出口免税优惠",
          title: "加工贸易退税（Drawback）",
          desc: "严密核算用于巴西本地加工并随后复运出境的进口原料及零配件台账余额。",
        },
      ],
    },
    cta: {
      badge: "关务与财税合规咨询",
      title: "想了解您的企业能节省多少关税与流动资金？",
      description:
        "我们的关务顾问可对您的进出口模式进行初步评估，精准识别适用的特殊海关制度，确保税务安全并立即可行。",
      btnWhatsapp: "通过 WhatsApp 咨询关务专家",
      disclaimer:
        "为进出口企业在巴西全境及离岸贸易提供战略性海关财税顾问支持。",
    },
  },
};

const STEP_ICONS = [FileText, CheckCircle2, FileCheck2, Clock, Boxes];

export default function SpecialCustomsRegimesClient({
  lang = "pt",
}: SpecialCustomsRegimesClientProps) {
  const content = CONTENT[lang] || CONTENT.pt;
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    content.whatsappMsg
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics-3.jpg"
            alt={content.hero.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.38] dark:brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-600/15 blur-[130px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge de Identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Scale className="w-4 h-4 text-orange-400" />
            <span>{content.hero.badge}</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            {content.hero.title}
          </h1>

          {/* Texto descritivo */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            {content.hero.description}
          </p>

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{content.hero.ctaTalk}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={`#${content.stepsSection.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{content.hero.ctaSteps}</span>
            </a>
          </div>

          {/* Elemento de Confiança */}
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {content.hero.trustTitle}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                {content.hero.trustDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda: Imagem */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/armazem-2.jpg"
                    alt={content.block2.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {content.block2.floatingBadgeTitle}
                    </p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
                      {content.block2.floatingBadgeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Texto */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {content.block2.tag}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {content.block2.title}
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                {content.block2.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === content.block2.paragraphs.length - 1
                        ? "text-neutral-700 dark:text-neutral-300 text-sm"
                        : undefined
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: 3 CARDS (ADMISSÃO TEMPORÁRIA, DRAWBACK, ENTREPOSTO ADUANEIRO)   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {content.regimes.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {content.regimes.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {content.regimes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Admissão Temporária */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.regimes.card1.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.regimes.card1.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.regimes.card1.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.regimes.card1.footer}</span>
              </div>
            </div>

            {/* Card 2: Drawback */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.regimes.card2.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.regimes.card2.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.regimes.card2.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.regimes.card2.footer}</span>
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
                    {content.regimes.card3.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.regimes.card3.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.regimes.card3.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.regimes.card3.footer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: POR QUE ESTRUTURAR (2 COLUNAS)                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título, Textos, Botão e Card Visual */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>{content.whyChoose.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {content.whyChoose.title}
              </h2>

              {content.whyChoose.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed"
                      : "text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed"
                  }
                >
                  {p}
                </p>
              ))}

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>{content.whyChoose.ctaTalk}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Card visual de autoridade em armazenagem e entreposto */}
              {/* <div className="relative mt-8 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/imagens/armazem.jpg"
                    alt={content.whyChoose.visualCard.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      {content.whyChoose.visualCard.badge}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                      {content.whyChoose.visualCard.desc}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Coluna da Direita: 4 Cards */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Card 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {content.whyChoose.feature1.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {content.whyChoose.feature1.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {content.whyChoose.feature2.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {content.whyChoose.feature2.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {content.whyChoose.feature3.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {content.whyChoose.feature3.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {content.whyChoose.feature4.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {content.whyChoose.feature4.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: 5 ETAPAS                                                         */}
      {/* ========================================================================= */}
      <section
        id={content.stepsSection.id}
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {content.stepsSection.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {content.stepsSection.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {content.stepsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.stepsSection.steps.map((step, idx) => {
              const IconComp = STEP_ICONS[idx] || FileText;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-orange-500/30">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5.5: GALERIA DE ARMAZÉNS E RECINTOS ALFANDEGADOS                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100/70 dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>{content.gallery.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {content.gallery.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              {content.gallery.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.gallery.items.map((item, idx) => (
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
      {/* BLOCO 6: CTA                                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics.jpg"
            alt={content.cta.title}
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
            <span>{content.cta.badge}</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            {content.cta.title}
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {content.cta.description}
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
              <span>{content.cta.btnWhatsapp}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">
            {content.cta.disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
