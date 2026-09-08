import { LanguageCode, GalleryItem, CapabilityCard, FeatureCard } from "@/src/types";
import React from "react";




export interface ContentLocale {
  whatsappMsg: string;
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
  gallery: {
    tag: string;
    title: string;
    description: string;
    items: GalleryItem[];
  };
}

export const CONTENT: Record<LanguageCode, ContentLocale> = {
  pt: {
    whatsappMsg:
      "Olá! Gostaria de falar com um especialista sobre Regimes Aduaneiros Especiais com a NFT Logistics.",
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
    gallery: {
      tag: "Infraestrutura & Recintos",
      title: "Logística Integrada em Portos e Entrepostos",
      description:
        "Infraestrutura física homologada e acompanhamento presencial nos maiores hubs de importação do Brasil.",
      items: [
        {
          src: "/imagens/armazem.webp",
          alt: "Entreposto aduaneiro com empilhadeiras e contêineres",
          tag: "Entreposto Aduaneiro",
          title: "Armazenagem com Suspensão",
          desc: "Estocagem sob controle aduaneiro com desembaraço fracionado de acordo com seu fluxo produtivo.",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.webp",
          alt: "Terminal de contêineres e logística portuária",
          tag: "Portos & Aeroportos",
          title: "Presença em Santos e Viracopos",
          desc: "Desembaraço prioritário diretamente nos recintos alfandegados de maior movimentação do país.",
        },
        {
          src: "/imagens/operacao-nft-logistics.webp",
          alt: "Especialista da NFT Logistics conferindo lote de carga amarrada",
          tag: "Auditoria Física",
          title: "Inspeção Técnica de Lote",
          desc: "Conferência física rigorosa de números de série, marcas e integridade para evitar exigências fiscais.",
        },
        {
          src: "/imagens/armazem-2.webp",
          alt: "Galpão logístico e estoque industrial organizado",
          tag: "Drawback & RECOF",
          title: "Insumos para Exportação",
          desc: "Controle contábil e documental de matérias-primas e componentes empregados na industrialização.",
        },
      ],
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Special Customs Regimes with NFT Logistics.",
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
    gallery: {
      tag: "Customs Infrastructure",
      title: "Integrated Logistics Across Ports & Bonded Facilities",
      description:
        "Explore the daily operations of fiscal monitoring across bonded warehouses, dry ports, and sea terminals.",
      items: [
        {
          src: "/imagens/armazem.webp",
          alt: "High standard bonded warehousing facilities",
          tag: "Tax Suspension",
          title: "Bonded Depots & Dry Ports (CLIAs)",
          desc: "Lot fractionalization and gradual consumption release strictly synchronized with sales pipeline volume.",
        },
        {
          src: "/imagens/operacao-nft-logistics.webp",
          alt: "Port container handling and customs clearance",
          tag: "Foreign Trade Hubs",
          title: "Maritime Ports & Terminals",
          desc: "Expedited customs clearance at Brazil's primary ports: Santos, Paranaguá, Itajaí, and Rio de Janeiro.",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.webp",
          alt: "Physical customs inspection and fiscal checks",
          tag: "Regulatory Compliance",
          title: "Customs Inspections & Physical Audit",
          desc: "In-person representation during physical uncrating and inspection for Receita Federal yellow/red channels.",
        },
        {
          src: "/imagens/operacao-nft-logistics-3.webp",
          alt: "Supply chain management and Drawback operations",
          tag: "Export Tax Exemption",
          title: "Drawback & Manufacturing Chains",
          desc: "Strict ledger management for imported raw materials dedicated to local processing and subsequent re-export.",
        },
      ],
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想与NFT Logistics的关务与财税专家咨询巴西特殊海关监管制度（Regimes Especiais）。",
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
    gallery: {
      tag: "海关监管基础设施",
      title: "巴西港口、保税仓与无水港一体化物流",
      description:
        "深入见证我们在保税仓库、内陆无水港（CLIA）及各大海运海关监管区的实地运作。",
      items: [
        {
          src: "/imagens/armazem.webp",
          alt: "高标准保税仓储设施",
          tag: "税费暂缓",
          title: "保税仓储与无水港（CLIAs）",
          desc: "按批次分拆申报与逐步消费清关，严格匹配客户在巴西当地的销售节奏。",
        },
        {
          src: "/imagens/operacao-nft-logistics.webp",
          alt: "海运港口集装箱清关与装卸",
          tag: "外贸口岸枢纽",
          title: "核心海港与海关码头",
          desc: "在巴西各大战略口岸极速清关：桑托斯港（Santos）、帕拉纳瓜（Paranaguá）、伊塔雅伊（Itajaí）及里约热内卢。",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.webp",
          alt: "海关物理查验与开箱审核",
          tag: "严密法规遵循",
          title: "海关查验与现场核验",
          desc: "在联邦税务局（Receita Federal）黄通道与红通道查验中派驻现场代表，全程见证拆箱。",
        },
        {
          src: "/imagens/operacao-nft-logistics-3.webp",
          alt: "加工贸易与退税管理供应链",
          tag: "出口免税优惠",
          title: "加工贸易退税（Drawback）",
          desc: "严密核算用于巴西本地加工并随后复运出境的进口原料及零配件台账余额。",
        },
      ],
    },
  },
};
