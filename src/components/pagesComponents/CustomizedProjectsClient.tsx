"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
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
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

export interface CustomizedProjectsClientProps {
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

interface FeatureCard {
  title: string;
  desc: string;
}

interface CapabilityCard {
  badge: string;
  title: string;
  desc: string;
  footer: string;
}

interface ContentLocale {
  whatsappMsg: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaTalk: string;
    ctaSteps: string;
    stepsAnchor: string;
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
  capabilities: {
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
    riggingCard: {
      badge: string;
      title: string;
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
    btnText: string;
    subtext: string;
  };
}

const CONTENT: Record<LanguageCode, ContentLocale> = {
  pt: {
    whatsappMsg:
      "Olá! Gostaria de conversar com um especialista sobre Cargas de Projeto e Projetos Customizados com a NFT Logistics.",
    hero: {
      badge: "Engenharia de Transporte & Cargas de Projeto",
      title: "Projetos Customizados para Cargas Especiais e Superdimensionadas",
      description:
        "Soluções completas em logística multimodal, estudo de rotas (route survey) e gerenciamento de ponta a ponta para cargas pesadas, volumosas (OOG), breakbulk e equipamentos industriais indivisíveis.",
      ctaTalk: "Falar com Engenheiro de Logística",
      ctaSteps: "Ver Metodologia de Projetos",
      stepsAnchor: "#etapas",
      trustTitle: "Rigor Técnico, Segurança e Pontualidade Absoluta",
      trustDesc:
        "Operações de alta complexidade para setores de energia, mineração, óleo & gás, infraestrutura e indústrias pesadas.",
    },
    block2: {
      imageAlt: "Operações de Cargas de Projeto e Movimentação Especial NFT Logistics",
      floatingBadgeTitle: "Engenharia Door-to-Foundation",
      floatingBadgeDesc: "Do embarque de fábrica ao assentamento na fundação",
      tag: "Logística Sob Medida",
      title: "Cada projeto é único: planejamos cada milímetro e cada minuto da sua carga",
      paragraphs: [
        "Equipamentos que excedem pesos e dimensões padrões de transporte (Out of Gauge - OOG) não admitem improvisos. Linhas de montagem fabris, transformadores de alta potência, pás eólicas, turbinas e estruturas de mineração exigem um planejamento de engenharia minucioso antes de qualquer movimentação física.",
        "A NFT Logistics integra engenharia de transporte, viabilidade de rotas e assessoria aduaneira dedicada. Analisamos gabaritos de pontes, viadutos, raios de curvatura, redes elétricas e capacidades portuárias, providenciando licenças especiais de trânsito (AET) e escoltas especializadas.",
        "Coordenamos guindastes pesados (heavy lift), afretamentos marítimos parciais ou totais (chartering) e transporte multimodal integrado com seguros All Risks de alta cobertura para assegurar a integridade total do seu investimento.",
      ],
    },
    capabilities: {
      tag: "Capacidades Operacionais",
      title: "Soluções Estruturadas para Cargas Não Convencionais",
      description:
        "Desenvolvemos operações customizadas para superar qualquer desafio geográfico ou dimensional com precisão milimétrica:",
      card1: {
        badge: "Sobredimensionadas",
        title: "Cargas OOG (Out of Gauge) & Flat Racks",
        desc: "Operação especializada para maquinários industriais, veículos pesados e peças com excesso de altura, largura ou comprimento que superam as medidas padrão de containers. Utilizamos equipamentos específicos como Flat Racks, Open Tops e plataformas dedicadas com planos rigorosos de amarração náutica (lashing).",
        footer: "Movimentação com equipamentos especiais",
      },
      card2: {
        badge: "Navios Dedicados & Chartering",
        title: "Operações Breakbulk & Cargas Indivisíveis",
        desc: "Para peças unitárias volumosas e de centenas de toneladas que não comportam conteinerização, estruturamos embarques em navios convencionais no convés ou porão. Coordenamos a estiva marítima, cálculos de peso sobre o convés, afretamentos parciais ou totais e supervisão portuária in loco.",
        footer: "Afretamento marítimo e estiva técnica",
      },
      card3: {
        badge: "Heavy Haulage & Linhas de Eixo",
        title: "Transporte Rodoviário Pesado e Escolta",
        desc: "Mobilização de conjuntos transportadores pesados, carretas prancha rebaixadas, extensivas e linhas de eixos modulares hidráulicos. Gerenciamento de escoltas credenciadas e batedores da Polícia Rodoviária Federal (PRF), apoio de concessionárias e remoção de interferências na malha viária.",
        footer: "Linhas de eixos modulares e escolta PRF",
      },
    },
    whyChoose: {
      tag: "Engenharia e Confiabilidade",
      title: "Por que confiar seu projeto de carga pesada à NFT Logistics?",
      paragraphs: [
        "Cargas de projeto concentram grande parte do investimento produtivo de uma indústria. Atrasos operacionais ou incidentes no percurso geram paralisações de plantas industriais e prejuízos incalculáveis.",
        "Nossos engenheiros e analistas antecipam cada ponto crítico: calculam o centro de gravidade, planejam içamentos com rigging minucioso e articulam liberações governamentais com máxima agilidade.",
      ],
      ctaTalk: "Falar com nosso time de especialistas",
      riggingCard: {
        badge: "Engenharia de Rigging",
        title: "Operação de içamento de carga pesada com guindaste e cabos de aço",
        desc: "Içamento milimétrico e movimentação vertical com tolerância zero a falhas.",
      },
      feature1: {
        title: "Route Survey Rigoroso (Estudo de Rotas)",
        desc: "Mapeamento geométrico completo do trajeto com simulação de curvas, capacidade de suporte de pontes e viadutos, análise de fiação aérea e desvios programados.",
      },
      feature2: {
        title: "Licenciamento Especial (AET / DNIT / DER / PRF)",
        desc: "Emissão ágil de Autorizações Especiais de Trânsito em órgãos federais, estaduais e municipais, articulando cronogramas com comboios e equipes de apoio viário.",
      },
      feature3: {
        title: "Engenharia de Rigging e Içamento",
        desc: "Projetos detalhados de rigging com dimensionamento de cabos, lingas, guindastes telescópicos e esteiras para garantir movimentações verticais com tolerância zero a falhas.",
      },
      feature4: {
        title: "Supervisão Operacional Presencial",
        desc: "Engenheiros e supervisores de campo acompanham presencialmente o embarque na origem, operações portuárias, transbordo e entrega técnica no destino.",
      },
    },
    stepsSection: {
      id: "etapas",
      tag: "Metodologia Operacional",
      title: "Como Conduzimos Projetos Customizados em 5 Etapas",
      description:
        "Metodologia de engenharia de projetos testada para entregar equipamentos críticos com total pontualidade e segurança.",
      steps: [
        {
          num: "01",
          title: "Estudo de Viabilidade Técnica",
          desc: "Avaliação detalhada das dimensões, centro de gravidade, pontos de içamento da carga e escolha dos modais ideais para transporte.",
        },
        {
          num: "02",
          title: "Route Survey & Rigging Plan",
          desc: "Vistoria in loco de rodovias, elaboração do plano de içamento de guindastes e projeto de amarração e peação (lashing plan).",
        },
        {
          num: "03",
          title: "Licenças e Escolta Viária",
          desc: "Obtenção de AETs no DNIT, DER e concessionárias, contratação de batedores civis e agendamento de escolta com a PRF.",
        },
        {
          num: "04",
          title: "Embarque Multimodal & Transporte",
          desc: "Afretamento marítimo dedicado, transbordo portuário com supervisores de estiva e transporte rodoviário pesado rastreado.",
        },
        {
          num: "05",
          title: "Içamento e Assentamento na Base",
          desc: "Descarga técnica no destino final, posicionamento exato na fundação da planta industrial (door-to-foundation) e entrega concluída.",
        },
      ],
    },
    gallery: {
      tag: "Operações em Campo",
      title: "Cargas de Alta Complexidade em Execução",
      description:
        "Equipamentos de grande porte, carretas dedicadas e logística de transbordo registradas em operações reais da NFT Logistics.",
      items: [
        {
          src: "/imagens/operacao-nft-logistics-4.jpg",
          alt: "Carreta extensiva carregada com maquinário pesado e empilhadeira",
          tag: "Transporte Rodoviário",
          title: "Carretas Prancha & Extensivas",
          desc: "Amarração técnica e transporte rodoviário pesado para maquinário industrial superdimensionado.",
        },
        {
          src: "/imagens/operacao-nft-logistics-6.jpg",
          alt: "Empilhadeiras industriais descarregando grandes estruturas em recinto fechado",
          tag: "Manuseio Técnico",
          title: "Desova com Múltiplas Frentes",
          desc: "Operação sincronizada com empilhadeiras pesadas para movimentação de estruturas compridas.",
        },
        {
          src: "/imagens/operacao-nft-logistics-7.jpg",
          alt: "Visão angular de içamento e posicionamento de equipamento pesado",
          tag: "Cargas Críticas",
          title: "Equipamentos Indivisíveis",
          desc: "Deslocamento de cargas de alto valor agregado com supervisão de engenharia presencial.",
        },
        {
          src: "/imagens/intersolar-nft-logistics.webp",
          alt: "Grande parque de energia solar fotovoltaica",
          tag: "Energia & Usinas",
          title: "Parques & Infraestrutura",
          desc: "Desova e entrega técnica de transformadores, inversores e painéis solares em áreas remotas.",
        },
      ],
    },
    cta: {
      badge: "Consultoria em Cargas de Projeto",
      title: "Sua carga é pesada, complexa ou fora de padrão? Nós resolvemos.",
      description:
        "Fale diretamente com nossos engenheiros e especialistas em logística pesada. Desenvolvemos o estudo de viabilidade e a rota ideal para a entrega perfeita do seu projeto.",
      btnText: "Falar no WhatsApp com Especialista",
      subtext: "Atendimento técnico de ponta a ponta para projetos em todo o Brasil e no exterior.",
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Project Cargo and Customized Logistics Solutions with NFT Logistics.",
    hero: {
      badge: "Transport Engineering & Project Cargo",
      title: "Customized Projects for Special and Oversized Cargo",
      description:
        "Turnkey multimodal logistics solutions, technical route surveys, and end-to-end management for heavy lift, Out of Gauge (OOG), breakbulk, and indivisible industrial machinery.",
      ctaTalk: "Talk to a Logistics Engineer",
      ctaSteps: "View Project Methodology",
      stepsAnchor: "#steps",
      trustTitle: "Technical Precision, Safety & Absolute Punctuality",
      trustDesc:
        "High-complexity operations for energy, mining, oil & gas, civil infrastructure, and heavy industry sectors.",
    },
    block2: {
      imageAlt: "Project Cargo Operations and Heavy Movement NFT Logistics",
      floatingBadgeTitle: "Door-to-Foundation Engineering",
      floatingBadgeDesc: "From factory pick-up to plant foundation placement",
      tag: "Tailor-Made Logistics",
      title: "Every project is unique: we plan every millimeter and every minute of your cargo",
      paragraphs: [
        "Equipment exceeding standard transport weights and dimensions (Out of Gauge - OOG) leaves no room for improvisation. Industrial assembly lines, high-voltage transformers, wind turbine blades, generators, and mining equipment demand rigorous engineering before any physical movement begins.",
        "NFT Logistics seamlessly integrates transport engineering, route viability studies, and dedicated customs management. We analyze bridge clearances, overpasses, turning radii, aerial power lines, and port capacities, securing all Special Traffic Authorizations (AET) and coordinated escorts.",
        "We coordinate heavy lift cranes, partial or full vessel chartering, and integrated multimodal transit with comprehensive All-Risks cargo insurance to safeguard your strategic capital investment.",
      ],
    },
    capabilities: {
      tag: "Operational Capabilities",
      title: "Structured Solutions for Non-Conventional Cargo",
      description:
        "Custom-engineered logistics operations designed to overcome any geographic or physical constraint with pinpoint accuracy:",
      card1: {
        badge: "Oversized Cargo",
        title: "OOG (Out of Gauge) & Flat Racks",
        desc: "Specialized logistics for industrial machinery, heavy machinery, and components exceeding standard container dimensions. Handled with Flat Racks, Open Tops, and dedicated platforms using certified nautical lashing and securing plans.",
        footer: "Specialized equipment handling",
      },
      card2: {
        badge: "Dedicated Vessels & Chartering",
        title: "Breakbulk & Indivisible Cargo Operations",
        desc: "For single units weighing hundreds of metric tons that cannot be containerized. We coordinate conventional breakbulk vessels (on-deck or under-deck), deck load engineering, partial/full charters, and on-site port stevedoring supervision.",
        footer: "Maritime chartering & technical stevedoring",
      },
      card3: {
        badge: "Heavy Haulage & Modular Axles",
        title: "Special Road Transport & Escort Services",
        desc: "Mobilization of heavy transporters, lowbed trailers, extendable trailers, and hydraulic multi-axle modular transporters (SPMT). Coordinated accredited escorts, highway police escorts, tollway concessionaire coordination, and utility clearance.",
        footer: "Hydraulic modular lines & highway escorts",
      },
    },
    whyChoose: {
      tag: "Engineering and Reliability",
      title: "Why trust your heavy project cargo to NFT Logistics?",
      paragraphs: [
        "Project cargo represents a critical share of an industrial enterprise’s capital investment. Transport delays or route complications can shut down production schedules and cause enormous financial losses.",
        "Our engineers and logistics analysts anticipate every potential hurdle: calculating centers of gravity, developing precise rigging lift plans, and securing government permits with maximum agility.",
      ],
      ctaTalk: "Speak with Our Specialist Team",
      riggingCard: {
        badge: "Rigging Engineering",
        title: "Heavy lifting crane operation with rigging wire ropes",
        desc: "Millimetric lifting and vertical movements with zero tolerance for error.",
      },
      feature1: {
        title: "Rigorous Route Survey",
        desc: "Comprehensive geometric mapping of the entire journey, simulating tight curves, bridge and overpass load ratings, aerial cable clearance, and designated detour bypasses.",
      },
      feature2: {
        title: "Special Transit Permits & Road Concessions",
        desc: "Expedited processing of special transit authorizations across federal, state, and local road authorities, coordinating convoys, utility shutdowns, and traffic escorts.",
      },
      feature3: {
        title: "Rigging & Heavy Lifting Engineering",
        desc: "Detailed lifting blueprints calculating sling angles, spreader beam capacities, crane radii, and ground load ratings to guarantee zero-defect vertical handling.",
      },
      feature4: {
        title: "On-Site Operational Supervision",
        desc: "Logistics engineers and field superintendents attend loading at origin, port terminal transfers, barge operations, and final on-site foundation placement.",
      },
    },
    stepsSection: {
      id: "steps",
      tag: "Operational Methodology",
      title: "How We Execute Customized Projects in 5 Stages",
      description:
        "A battle-tested engineering methodology to deliver mission-critical machinery with complete precision and absolute punctuality.",
      steps: [
        {
          num: "01",
          title: "Technical Feasibility Study",
          desc: "Detailed assessment of cargo weight, dimensions, center of gravity, lifting points, and modal selection.",
        },
        {
          num: "02",
          title: "Route Survey & Rigging Plan",
          desc: "Physical on-road survey, crane lift simulation, and comprehensive cargo lashing/stowage engineering plan.",
        },
        {
          num: "03",
          title: "Permits & Highway Escort",
          desc: "Securing oversized transit permits from transport authorities, hiring pilot cars, and scheduling highway police escorts.",
        },
        {
          num: "04",
          title: "Multimodal Transit & Tracking",
          desc: "Dedicated sea chartering, stevedoring supervision at port terminals, and monitored heavy road transit.",
        },
        {
          num: "05",
          title: "Lifting & Foundation Placement",
          desc: "Technical discharge at destination, precise placement onto plant foundation plinths (door-to-foundation), and project sign-off.",
        },
      ],
    },
    gallery: {
      tag: "Field Execution Portfolio",
      title: "High-Complexity Cargo in Motion",
      description:
        "Real imagery of heavy industrial machinery movements, energy infrastructure components, and on-site assembly.",
      items: [
        {
          src: "/imagens/operacao-nft-logistics.jpg",
          alt: "Road transport of heavy indivisible machinery",
          tag: "Multimodal Logistics",
          title: "Industrial Plants & Heavy Machinery",
          desc: "Technical handling of presses and indivisible manufacturing units with lowbed trailers and accredited escorts.",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.jpg",
          alt: "Rigging and uncrating of industrial equipment",
          tag: "Technical Handling",
          title: "Mechanized Uncrating & Rigging",
          desc: "Specialized offloading using heavy-duty forklifts, knuckle boom cranes, and hydraulic jacks inside manufacturing plants.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Heavy highway freight convoy with escorts",
          tag: "Dedicated Road Fleet",
          title: "Highway Escort & Route Clearance",
          desc: "Permit authorization through DNIT and state road departments for oversized cargo accompanied by highway police.",
        },
        {
          src: "/imagens/intersolar-nft-logistics.webp",
          alt: "Solar farm power equipment and transformers",
          tag: "Power & Utilities",
          title: "Renewable Energy & Infrastructure",
          desc: "High-capacity inverters, step-up transformers, and structural steel delivered straight to renewable energy sites.",
        },
      ],
    },
    cta: {
      badge: "Project Cargo Consulting",
      title: "Is your cargo heavy, complex, or oversized? We solve it.",
      description:
        "Speak directly with our transport engineers and heavy lift logistics specialists. We formulate route surveys and feasibility plans for turnkey project success.",
      btnText: "Chat on WhatsApp with a Specialist",
      subtext: "Turnkey technical execution across Brazil and cross-border international corridors.",
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想与NFT Logistics的重大件与工程物流专家咨询定制物流方案。",
    hero: {
      badge: "运输工程与重大件项目物流",
      title: "超限与特种重大件定制项目物流",
      description:
        "提供多式联运、路线勘测（Route Survey）及超限（OOG）、散杂货（Breakbulk）与不可分割大型工业设备的端到端工程物流统筹方案。",
      ctaTalk: "联系物流工程专家",
      ctaSteps: "查看工程实施方法",
      stepsAnchor: "#steps",
      trustTitle: "严谨工程技术、极致安全与绝对准时",
      trustDesc:
        "为能源电力、矿业开采、石油化工、基础设施建设及重工业领域提供高难度重型物流保障。",
    },
    block2: {
      imageAlt: "重大件项目运作与特种吊装 NFT Logistics",
      floatingBadgeTitle: "从出厂到基座就位（Door-to-Foundation）",
      floatingBadgeDesc: "从工厂起吊、多式联运至现场设备基座精确定位",
      tag: "量身定制物流工程",
      title: "每个项目独一无二：为您精确规划每一毫米与每一分钟",
      paragraphs: [
        "超限（OOG）或超重设备绝不容许任何侥幸。工业生产线总成、高压变压器、风电叶片、重型轮机及大型采矿设备，在启动任何物理移位前，都必须经过周密的工程技术模拟与路线验算。",
        "NFT Logistics 深度融合运输工程学、路线通过性论证与专业清关报检。我们实地测量桥梁隧道荷载净空、道路转弯半径、跨空电线高度及港口泊位起重能力，统一申请超限通行许可证（AET）并部署合规护航团队。",
        "统筹大型履带吊与汽车吊（Heavy Lift）、散杂货船部分或全船包租（Chartering）及全套一切险（All Risks）保单，全方位护航企业核心资产安全。",
      ],
    },
    capabilities: {
      tag: "专业运营能力",
      title: "非标准与特种重型货物专业解决方案",
      description:
        "通过定制工程方案，克服地理与物理空间限制，实现毫米级精密转运：",
      card1: {
        badge: "超限货物",
        title: "OOG超限特种箱与框架箱（Flat Racks）",
        desc: "针对超越普通集装箱尺寸限制的工业设备、重型机械及超宽、超高构件。精细匹配框架箱（Flat Rack）、开顶箱（Open Top）及特种平台，并执行经过权威认证的系固与绑扎（Lashing）技术方案。",
        footer: "特种特构装备转运",
      },
      card2: {
        badge: "包船与定制航线",
        title: "重大件散杂货租船（Breakbulk）与整体运输",
        desc: "针对无法装入集装箱、重达数百吨的单件大型工业设备。安排散杂货船舱底或甲板积载，核算甲板承载压强，提供部分（Part Charter）或全船包租（Full Charter），并派驻现场理货专家全程监护。",
        footer: "海运租船与专业装卸",
      },
      card3: {
        badge: "重型特种公路与液压轴线板",
        title: "特种重型陆运与警车护航",
        desc: "调动重型大件牵引车、特种低平板半挂车、伸缩梁半挂车及液压组合式多轴线平板车（SPMT）。严密统筹合规护航车队、联邦公路警察（PRF）专车护送，沿线收费站协助及电网通信设施暂拆避让。",
        footer: "多轴线液压模块与警车开道",
      },
    },
    whyChoose: {
      tag: "严谨工程与高可靠性",
      title: "为何选择由 NFT Logistics 托运特种工程货物？",
      paragraphs: [
        "项目工程货物往往汇聚了企业核心的生产性重资产投资。运输中的任何延误或意外，都可能导致整座工厂停工待料，造成无法挽回的巨额经济损失。",
        "我们的工程专家与物流分析师预先排查每一个风险点：精确测算设备重心、制定周密的吊装受力方案，并以最高效的节奏办理政府许可与特准审批。",
      ],
      ctaTalk: "与工程专家团队沟通",
      riggingCard: {
        badge: "工程吊装技术",
        title: "起重机与钢丝绳吊索重载工程吊装实景",
        desc: "毫米级精准吊装与垂直位移，实现零差错安全交付。",
      },
      feature1: {
        title: "全程实地路线勘测（Route Survey）",
        desc: "对行经路线实施严密几何三维测绘，模拟车辆拐弯轨迹、核验桥梁与立交桥承载极限、排查高空线网高度并制定备用绕行预案。",
      },
      feature2: {
        title: "特种通行许可证与政府审批（AET / 交通部门）",
        desc: "高效办理巴西联邦及各州、市政各级特殊通行许可（AET），协调调度专业护航车辆与交警巡逻保障。",
      },
      feature3: {
        title: "工程级吊装与受力演算（Rigging Plan）",
        desc: "编制专业吊装蓝图，精密计算吊索角度、平衡梁承载、汽车吊工作半径及地耐力极限，确保垂直装卸毫厘不差。",
      },
      feature4: {
        title: "全程现场工程督导（On-Site Supervision）",
        desc: "物流工程师与现场总监全程亲临发运地装车、港口装船卸船、驳船过驳以及目的地安装就位现场。",
      },
    },
    stepsSection: {
      id: "steps",
      tag: "运营方法论",
      title: "定制工程物流实施的五大阶段",
      description:
        "历经实践验证的严密工程方法论，保障关键工业装备安全、精准、准时运抵交付。",
      steps: [
        {
          num: "01",
          title: "技术可行性论证",
          desc: "详细评估货物重量尺寸、重心分布、起吊受力点，制定最佳多式联运路径与运输方案。",
        },
        {
          num: "02",
          title: "路线勘测与吊装方案",
          desc: "实地勘探道路净空与桥梁承载力，编制专业吊车吊装图纸及货物绑扎固定（Lashing Plan）方案。",
        },
        {
          num: "03",
          title: "准行审批与交通护航",
          desc: "向交通主管机构申领超限准行证，协调引导车队伍与沿途各管区交警护送编队。",
        },
        {
          num: "04",
          title: "多式联运发运与在途监控",
          desc: "特种船舶租船运输、港口码头专人理货换装监护及重载运输GPS多维度实时追踪。",
        },
        {
          num: "05",
          title: "现场吊装与基座落位",
          desc: "在最终目的地现场实施工程卸车，毫厘不差落位于工厂设备基础（Door-to-Foundation），完成签署验收。",
        },
      ],
    },
    gallery: {
      tag: "实战案例库",
      title: "高难度复杂工业货物实景执行",
      description:
        "真实记录大型工业重型机械搬迁、新能源电站、精密制造产线及现场重吊组装。",
      items: [
        {
          src: "/imagens/operacao-nft-logistics.jpg",
          alt: "不可分割大型工业机械公路运输",
          tag: "多式联运工程",
          title: "重型工业产线与整机运输",
          desc: "大型冲压机与不可拆卸工业构件的技术移位，配备特种超低平板挂车与持证警车护航。",
        },
        {
          src: "/imagens/operacao-nft-logistics-2.jpg",
          alt: "机械设备现场拆箱与重装卸车",
          tag: "专业工程吊装",
          title: "机械化拆箱与起重就位",
          desc: "在客户厂区内使用重型叉车、随车吊及大型伸缩臂汽车起重机进行毫米级精准落位。",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "重载公路运输护航车队",
          tag: "专属公路重运车队",
          title: "特种公路护航与通行许可",
          desc: "高效获批巴西国家陆路交通局（DNIT）与州公路局（DER）超限运输特准通行许可（AET）。",
        },
        {
          src: "/imagens/intersolar-nft-logistics.webp",
          alt: "光伏电站与新能源基建特种设备",
          tag: "能源电力设施",
          title: "太阳能光伏与新能源基建",
          desc: "大功率逆变器升压变压器及高密度光伏支架工程货物的现场准时精准交付。",
        },
      ],
    },
    cta: {
      badge: "重大件工程物流咨询",
      title: "货物超重、超大或结构极度复杂？我们为您解决。",
      description:
        "直接与我们的运输工程师和重运物流专家交谈。我们为您提供全方位可行性评估与专属运输路线规划。",
      btnText: "通过 WhatsApp 咨询专家",
      subtext: "为巴西全境及跨境国际重点工程项目提供端到端技术保障与实施交付。",
    },
  },
};

export default function CustomizedProjectsClient({
  lang = "pt",
}: CustomizedProjectsClientProps) {
  const current = CONTENT[lang] || CONTENT.pt;
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    current.whatsappMsg
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/transporte-nft-logistics.webp"
            alt={current.hero.title}
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
            <Compass className="w-4 h-4 text-orange-400" />
            <span>{current.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            {current.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            {current.hero.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{current.hero.ctaTalk}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={current.hero.stepsAnchor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{current.hero.ctaSteps}</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {current.hero.trustTitle}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                {current.hero.trustDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-5.jpg"
                    alt={current.block2.imageAlt}
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
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {current.block2.floatingBadgeTitle}
                    </p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
                      {current.block2.floatingBadgeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {current.block2.tag}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {current.block2.title}
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                {current.block2.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: 3 CARDS DE CAPACIDADES OPERACIONAIS                              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {current.capabilities.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {current.capabilities.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {current.capabilities.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Boxes className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {current.capabilities.card1.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {current.capabilities.card1.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {current.capabilities.card1.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{current.capabilities.card1.footer}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Ship className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {current.capabilities.card2.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {current.capabilities.card2.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {current.capabilities.card2.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{current.capabilities.card2.footer}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {current.capabilities.card3.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {current.capabilities.card3.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {current.capabilities.card3.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{current.capabilities.card3.footer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: POR QUE CONFIAR (STICKY ESQUERDA + 4 CARDS DIREITA)             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>{current.whyChoose.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {current.whyChoose.title}
              </h2>

              {current.whyChoose.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-neutral-700 leading-relaxed ${
                    idx === 0
                      ? "dark:text-neutral-200 text-base sm:text-lg"
                      : "dark:text-neutral-300 text-sm sm:text-base"
                  }`}
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
                  <span>{current.whyChoose.ctaTalk}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Coluna da Direita (4 cards) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Feature 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Milestone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {current.whyChoose.feature1.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {current.whyChoose.feature1.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {current.whyChoose.feature2.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {current.whyChoose.feature2.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {current.whyChoose.feature3.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {current.whyChoose.feature3.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {current.whyChoose.feature4.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {current.whyChoose.feature4.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: PASSO A PASSO (5 ETAPAS DA METODOLOGIA)                          */}
      {/* ========================================================================= */}
      <section
        id={current.stepsSection.id}
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200"
      >
        {/* Âncoras redundantes para garantir compatibilidade com #steps e #etapas */}
        <div id="etapas" className="sr-only" />
        <div id="steps" className="sr-only" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {current.stepsSection.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {current.stepsSection.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {current.stepsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {current.stepsSection.steps.map((step, idx) => {
              const icons = [
                <FileText key="1" className="w-5 h-5" />,
                <Milestone key="2" className="w-5 h-5" />,
                <ScrollText key="3" className="w-5 h-5" />,
                <Ship key="4" className="w-5 h-5" />,
                <CheckCircle2 key="5" className="w-5 h-5" />,
              ];
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50 hover:bg-orange-600 dark:hover:bg-orange-600 transition-all duration-300 text-orange-500/30 hover:text-white dark:text-orange-600"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold ">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        {icons[idx]}
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
      {/* BLOCO 6: GALERIA DE OPERAÇÕES EM CAMPO (4 CARDS)                          */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {current.gallery.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {current.gallery.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {current.gallery.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.gallery.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 7: CTA WHATSAPP                                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/intersolar-nft-logistics.webp"
            alt={current.cta.title}
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
            <span>{current.cta.badge}</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            {current.cta.title}
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {current.cta.description}
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
              <span>{current.cta.btnText}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">{current.cta.subtext}</p>
        </div>
      </section>
    </div>
  );
}

export const ProjetosCustomizadosClient = CustomizedProjectsClient;
