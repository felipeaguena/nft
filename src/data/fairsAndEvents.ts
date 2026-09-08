import { LanguageCode, GalleryItem, FeatureCard } from "@/src/types";

export interface TaxCard {
  badge: string;
  title: string;
  desc: string;
}

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
  taxModels: {
    tag: string;
    title: string;
    description: string;
    card1: TaxCard;
    card2: TaxCard;
    card3: TaxCard;
  };
  whyChoose: {
    tag: string;
    title: string;
    paragraphs: string[];
    ctaTalk: string;
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
      "Olá! Gostaria de saber mais sobre apoio para Feiras e Eventos no Brasil com a NFT Logistics.",
    block2: {
      imageAlt: "Estande montado e operação logística em feira de negócios",
      floatingBadgeTitle: "Operação Porta ao Estande",
      floatingBadgeDesc: "Do embarque de origem até a entrega no pavilhão",
      tag: "Presença e Excelência em Feiras",
      title: "Seu estande pronto e montado no prazo, sem qualquer risco aduaneiro",
      paragraphs: [
        "A participação em feiras e congressos internacionais não tolera erros operacionais nem atrasos de entrega. Seus produtos, estandes, mostruários e materiais de divulgação precisam estar posicionados antes do início da montagem, em perfeito estado de conservação e com total conformidade perante a Receita Federal e órgãos reguladores.",
        "A NFT Logistics atua como sua parceira logística estratégica, assumindo a gestão integral do transporte internacional (aéreo ou marítimo), dos trâmites aduaneiros de entrada e saída, do manuseio cuidadoso de itens de alta tecnologia e da entrega técnica pontual dentro do pavilhão.",
        "Cuidamos da burocracia, dos prazos e da segurança fiscal para que sua equipe foque exclusivamente no fechamento de negócios e no relacionamento com os clientes.",
      ],
    },
    taxModels: {
      tag: "Enquadramentos Aduaneiros",
      title: "Modelos Tributários para Feiras e Eventos",
      description:
        "Cada tipo de material que ingressa no Brasil para uma exposição requer um enquadramento aduaneiro específico. Conheça as modalidades gerenciadas com maestria pela NFT Logistics:",
      card1: {
        badge: "Suspensão Tributária",
        title: "Regime de Admissão Temporária",
        desc: "Permite a entrada de máquinas, equipamentos de demonstração, telas e estruturas no território brasileiro com suspensão total de tributos federais (II, IPI, PIS/Cofins-Importação). O regime vincula os bens à comprovação de permanência temporária durante o evento e subsequente reexportação ao país de origem dentro dos prazos concedidos pela Receita Federal.",
      },
      card2: {
        badge: "Permanência Definitiva",
        title: "Nacionalização / Despacho para Consumo",
        desc: "Trâmite aduaneiro obrigatório para materiais de distribuição gratuita, como brindes, catálogos impressos, folhetos e amostras comerciais, além de equipamentos e produtos comercializados durante ou após o término da feira. Realizamos o cálculo antecipado dos tributos e o desembaraço definitivo sem retenções alfandegárias.",
      },
      card3: {
        badge: "Gestão Regulatória",
        title: "Anuência de Órgãos Reguladores",
        desc: "Produtos expostos frequentemente necessitam de autorização prévia de órgãos fiscalizadores brasileiros, tais como Anvisa (saúde), Inmetro (padrões técnicos), Anatel (telecomunicações), MAPA (agricultura/alimentos) e Exército. Nossa equipe elabora os dossiês técnicos e gerencia os módulos LPCO/Siscomex antes do embarque na origem.",
      },
    },
    whyChoose: {
      tag: "Vantagens Competitivas",
      title: "Por que escolher a NFT Logistics para a sua exposição?",
      paragraphs: [
        "Em feiras comerciais, o atraso de um único dia invalida todo o investimento do expositor. Não existe margem para aprender na prática ou improvisar com despachantes genéricos.",
        "Nossa assessoria atua preventivamente em cada etapa, desde a conferência das faturas e enquadramentos fiscais até a entrega física e montagem dentro do pavilhão.",
      ],
      ctaTalk: "Falar com nosso time de especialistas",
      feature1: {
        title: "Cumprimento Rigoroso de Prazos",
        desc: "Cronogramas sincronizados ao minuto com o regulamento do pavilhão e com a equipe de montagem do estande. Monitoramento ininterrupto para que tudo esteja posicionado antes da abertura oficial.",
      },
      feature2: {
        title: "Segurança Jurídica e Isenção Fiscal",
        desc: "Aplicação técnica impecável da Admissão Temporária, com garantia de suspensão de impostos, sem autuações fiscais, retenções alfandegárias ou surpresas no término do evento.",
      },
      feature3: {
        title: "Logística Door-to-Booth (Porta ao Estande)",
        desc: "Solução ponta a ponta: coleta na sede do expositor em qualquer país, embalagens especiais fumigadas (norma NIMF 15), transporte multimodal internacional e entrega descarregada no próprio estande.",
      },
      feature4: {
        title: "Apoio Presencial nos Pavilhões",
        desc: "Nossos especialistas estão presentes no local da feira antes, durante e após o evento, dando suporte no manuseio de caixas, guarda de embalagens vazias e coordena a reexportação.",
      },
    },
    gallery: {
      tag: "Presença nos Principais Pavilhões",
      title: "Operações em Grandes Exposições no Brasil",
      description:
        "Veja registros reais de estandes montados, equipamentos manuseados e recintos atendidos pela equipe da NFT Logistics.",
      items: [
        {
          src: "/imagens/feira-nft-logistics-7.webp",
          alt: "Grande pavilhão com equipamentos pesados e iluminação moderna",
          tag: "Agrishow & Pesados",
          title: "Estandes de Alto Impacto",
          desc: "Coordenação de maquinário de grande porte, montagem de iluminação e estruturas aéreas.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Desova de robô cirúrgico Da Vinci em estande da feira Hospitalar",
          tag: "Hospitalar 2024",
          title: "Robótica & Alta Precisão",
          desc: "Desova milimétrica de robôs cirúrgicos em embalagens certificadas diretamente no estande.",
        },
        {
          src: "/imagens/feira-nft-logistics-2.webp",
          alt: "Estande de mobilidade elétrica e motos em exposição internacional",
          tag: "Mobilidade & Tech",
          title: "Mostruários Tecnológicos",
          desc: "Admissão temporária e liberação expressa para protótipos e veículos elétricos importados.",
        },
        {
          src: "/imagens/feira-nft-logistics-6.webp",
          alt: "Transamerica Expo Center - Fachada do centro de convenções",
          tag: "Centros de Convenções",
          title: "Transamerica & São Paulo Expo",
          desc: "Acesso prioritário e trânsito ágil nas docas de carga e descarga dos maiores pavilhões do país.",
        },
      ],
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to learn more about support for Fairs and Events in Brazil with NFT Logistics.",
    block2: {
      imageAlt: "Trade show booth setup and logistics operation",
      floatingBadgeTitle: "Door-to-Booth Operation",
      floatingBadgeDesc: "From origin collection to hall delivery",
      tag: "Excellence in Trade Fairs",
      title: "Your exhibition booth ready on time, with zero customs risk",
      paragraphs: [
        "Participating in international fairs and congresses leaves no room for operational errors or delivery delays. Your products, exhibits, displays, and promotional materials must be positioned ahead of assembly, in pristine condition, and fully compliant with Brazilian federal revenue and regulatory bodies.",
        "NFT Logistics acts as your strategic partner, taking full ownership of international air or ocean freight, entry and exit customs formalities, delicate handling of high-tech gear, and punctual booth delivery.",
        "We handle the bureaucracy, timelines, and tax compliance so your commercial team can focus exclusively on closing deals and networking with clients.",
      ],
    },
    taxModels: {
      tag: "Customs Frameworks",
      title: "Tax Models for Fairs & Exhibitions",
      description:
        "Every type of cargo entering Brazil for an event requires a specific customs classification. Explore the modalities managed masterfully by NFT Logistics:",
      card1: {
        badge: "Tax Suspension",
        title: "Temporary Admission Regime",
        desc: "Allows demonstration machinery, tech equipment, screens, and structures to enter Brazil with 100% suspension of federal import duties. Tied to proof of temporary exhibition use and subsequent re-export within official deadlines.",
      },
      card2: {
        badge: "Permanent Entry",
        title: "Definitive Clearance / Consumption",
        desc: "Mandatory customs filing for giveaway gifts, printed brochures, promotional samples, and merchandise sold during or after the exhibition. We calculate all duties in advance for smooth clearance without customs holds.",
      },
      card3: {
        badge: "Regulatory Compliance",
        title: "Government Agency Approvals",
        desc: "Exhibited items frequently require prior authorization from Brazilian agencies such as Anvisa (health), Inmetro (technical standards), Anatel (telecom), and MAPA (agriculture). We handle LPCO licenses before origin departure.",
      },
    },
    whyChoose: {
      tag: "Competitive Advantages",
      title: "Why choose NFT Logistics for your exhibition?",
      paragraphs: [
        "In trade exhibitions, a single day's delay destroys the exhibitor's entire investment. There is zero room to improvise with generic brokers.",
        "We act proactively at every milestone—from verifying commercial invoices and HS classifications to final physical setup inside the hall.",
      ],
      ctaTalk: "Speak with our team of specialists",
      feature1: {
        title: "Rigorous Timeline Adherence",
        desc: "Timelines synchronized to the minute with pavilion regulations and booth setup crews. Continuous monitoring so everything is ready prior to opening day.",
      },
      feature2: {
        title: "Legal Certainty & Duty Exemption",
        desc: "Flawless execution of Temporary Admission regimes, guaranteeing tax suspension without penalties, seizures, or post-event disputes.",
      },
      feature3: {
        title: "Door-to-Booth Logistics",
        desc: "Comprehensive end-to-end service: supplier pickup worldwide, ISPM 15 certified crating, multimodal freight, and delivery directly onto the booth.",
      },
      feature4: {
        title: "On-Site Ground Coordination",
        desc: "Our specialists are physically present on the exhibition floor before, during, and after the event, assisting with crate storage and outbound re-export.",
      },
    },
    gallery: {
      tag: "Field Track Record",
      title: "Operations at Major Brazilian Exhibitions",
      description:
        "Explore authentic field photos of uncrating, customs clearance, and dedicated booth support performed by NFT Logistics.",
      items: [
        {
          src: "/imagens/feira-nft-logistics.webp",
          alt: "Agrishow and international agribusiness exhibition",
          tag: "Ribeirão Preto, SP",
          title: "Agrishow & Heavy Machinery",
          desc: "Temporary admission clearance and specialized flatbed transport for oversized agricultural tech.",
        },
        {
          src: "/imagens/feira-nft-logistics-3.webp",
          alt: "Hospitalar and international healthcare technology",
          tag: "São Paulo Expo, SP",
          title: "Hospitalar & Healthcare Tech",
          desc: "Diagnostic and ultrasound systems with import licenses pre-cleared with Anvisa.",
        },
        {
          src: "/imagens/feira-nft-logistics-2.webp",
          alt: "Electric mobility and industrial clean tech expo",
          tag: "Transamerica Expo, SP",
          title: "Mobility & Clean Energy",
          desc: "Complete rigging, uncrating, stand delivery, and secure storage of empty packaging throughout the show.",
        },
        {
          src: "/imagens/feira-nft-logistics-6.webp",
          alt: "Industrial automation and technology expo",
          tag: "Distrito Anhembi, SP",
          title: "Industry 4.0 & Automation",
          desc: "Door-to-door coordination, expedited post-event dismantling, and tax-exempt re-exportation.",
        },
      ],
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想了解更多关于 NFT Logistics 在巴西的国际展会与大型活动物流支持服务。",
    block2: {
      imageAlt: "展会展台搭建与现场物流操作",
      floatingBadgeTitle: "门到展台全程运作",
      floatingBadgeDesc: "从起运国提货直达展台现场",
      tag: "卓越展会服务实力",
      title: "确保您的展台按时进驻并完成布展，杜绝任何海关滞留风险",
      paragraphs: [
        "参加国际大型展会和行业峰会绝不容忍任何操作失误或派送延误。您的展品、展台搭建结构、宣传手册及样品必须在布展开始前安全送达指定展位，且必须百分之百符合巴西联邦税务局及各监管部门的法规要求。",
        "NFT Logistics 作为您值得信赖的战略物流顾问，全权负责海空运国际运输、出入境清关、精密设备专业装卸以及展馆内准时交付。",
        "我们为您化解繁杂的巴西官僚程序和时效风险，让您的商务团队能够全神贯注于拓展客户与促成合作。",
      ],
    },
    taxModels: {
      tag: "海关税收架构",
      title: "展会物资适用的海关税务制度",
      description:
        "进入巴西用于参展的各类物资需要精准的海关归类与模式申报。了解 NFT Logistics 擅长的三大模式：",
      card1: {
        badge: "税费暂缓与免除",
        title: "暂时进境海关监管制度 (Admissão Temporária)",
        desc: "允许参展机械、演示仪器、大型屏幕与展架进入巴西境内并百分之百免缴或缓缴联邦进口税费。展会结束后在海关核定期限内复运出境。",
      },
      card2: {
        badge: "永久入境与派发",
        title: "正式进口与直接消费申报 (Despacho para Consumo)",
        desc: "针对现场免费派发的宣传品、印刷品、精美礼品、商业样品以及计划在展后直接销售的设备。我们提前核算全套税费，确保平稳通关。",
      },
      card3: {
        badge: "监管审批协调",
        title: "政府监管部门审批 (Anvisa, Inmetro, Anatel, MAPA)",
        desc: "参展设备往往涉及巴西卫生局（医疗健康）、技术标准局（工控标准）、电信局（无线设备）等审批。我们在货物启运前即办妥 LPCO 许可。",
      },
    },
    whyChoose: {
      tag: "核心竞争优势",
      title: "为什么选择 NFT Logistics 保障您的展会运作？",
      paragraphs: [
        "在大型行业展会中，一天的延误即可令企业的全部参展投资付诸东流。这里没有任何试错与侥幸的余地。",
        "我们的资深团队在每个关键节点主动防控，从商业发票核对与税号准确归类，直至展馆内的物理卸货就位。",
      ],
      ctaTalk: "与我们的展会专家团队沟通",
      feature1: {
        title: "严格遵循时间表",
        desc: "与展馆管理方规定及展台搭建工期按分钟级精确同步，确保在正式开展前完成所有物资就位与检查。",
      },
      feature2: {
        title: "法律合规与关税免除",
        desc: "规范运用巴西海关暂时进出口（Admissão Temporária）制度，合法免除高额税金，杜绝后续违规罚款风险。",
      },
      feature3: {
        title: "门到展位全程配送 (Door-to-Booth)",
        desc: "提供覆盖全球起运地的海外提货、NIMF 15 熏蒸木箱包装、国际多式联运及直接送抵展台的全程闭环服务。",
      },
      feature4: {
        title: "现场展馆全流程跟进",
        desc: "我们的专业人员在展前、展期中及展后驻场提供支持，协助空箱寄存与展品后期的复运出境清关。",
      },
    },
    gallery: {
      tag: "现场实战履历",
      title: "巴西重大国际行业展会实操记录",
      description:
        "见证 NFT Logistics 在巴西各大展会现场提供的专业拆箱、清关、就位与实地统筹服务。",
      items: [
        {
          src: "/imagens/feira-nft-logistics.webp",
          alt: "Agrishow 巴西国际农业机械展现场",
          tag: "Ribeirão Preto, SP",
          title: "Agrishow 重型机械展",
          desc: "大型农用装备与重型机械的暂准进境清关及特种低平板车辆运输。",
        },
        {
          src: "/imagens/feira-nft-logistics-3.webp",
          alt: "Hospitalar 巴西国际医疗器械展",
          tag: "São Paulo Expo, SP",
          title: "Hospitalar 医疗健康展",
          desc: "超声波及高端影像医疗设备，提前获得巴西国家卫生监督局（Anvisa）进口许可。",
        },
        {
          src: "/imagens/feira-nft-logistics-2.webp",
          alt: "巴西电动出行与新能源科技展",
          tag: "Transamerica Expo, SP",
          title: "Mobility & 绿色能源展",
          desc: "展台全套设备拆箱、吊装就位以及展期全程空箱安全仓储托管。",
        },
        {
          src: "/imagens/feira-nft-logistics-6.webp",
          alt: "巴西工业自动化与智能制造展",
          tag: "Distrito Anhembi, SP",
          title: "工业4.0 与自动化展",
          desc: "门到展位全程协调，展后极速撤展并办理免税复运出境手续。",
        },
      ],
    },
  },
};
