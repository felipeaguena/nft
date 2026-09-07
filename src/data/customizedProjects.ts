import { LanguageCode, GalleryItem, CapabilityCard, FeatureCard } from "@/src/types";

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
      "Olá! Gostaria de conversar com um especialista sobre Cargas de Projeto e Projetos Customizados com a NFT Logistics.",
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
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Project Cargo and Customized Logistics Solutions with NFT Logistics.",
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
  },
  cn: {
    whatsappMsg:
      "您好！我想与NFT Logistics的重大件与工程物流专家咨询定制物流方案。",
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
  },
};
