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
  services: {
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
      "Olá! Gostaria de falar com um especialista sobre Logística para Obras de Arte e Acervos Culturais com a NFT Logistics.",
    block2: {
      imageAlt: "Embalagem e transporte de obras de arte e acervos históricos",
      floatingBadgeTitle: "Conservação Preventiva Museológica",
      floatingBadgeDesc: "Controle rigoroso de temperatura, umidade e vibração",
      tag: "Sensibilidade e Alta Precisão",
      title:
        "Obras de arte não são apenas cargas: são patrimônios que exigem devoção e precisão",
      paragraphs: [
        "A movimentação de pinturas, esculturas, instalações contemporâneas e relíquias históricas demanda protocolos que transcendem a logística comum. Variações bruscas de umidade relativa, oscilações térmicas, vibrações mecânicas inadequadas ou o menor manuseio desavisado podem causar danos irreversíveis a peças de valor inestimável.",
        "A NFT Logistics oferece uma gestão especializada completa sob o conceito \"nail-to-nail\" (da parede de origem à parede de destino). Fabricamos caixas de madeira climatizadas sob medida, forradas com espumas inertes de alta densidade e barreiras antivapor, acompanhadas de laudos técnicos de conservação (Condition Reports).",
        "Cuidamos da obtenção de autorizações e anuências junto ao IPHAN e IBRAM, estruturação de regimes de Admissão Temporária com suspensão tributária e contratação de apólices All Risks Fine Arts, garantindo tranquilidade total a curadores, colecionadores e instituições culturais.",
      ],
    },
    services: {
      tag: "Serviços Especializados",
      title: "Excelência em Cada Detalhe da Movimentação Artística",
      description:
        "Cada suporte exige uma abordagem técnica dedicada para pinturas a óleo, esculturas em bronze, mármore, papel ou instalações multimídia:",
      card1: {
        badge: "Proteção Estrutural",
        title: "Embalagens Museológicas Climatizadas",
        desc: "Confecção artesanal de caixas de madeira compensada naval tratada com certificação fitossanitária internacional (norma NIMF 15). Revestimento interno com Tyvek respirável, espumas químicas neutras Plastazote / Ethafoam, barreiras higrotérmicas e amortecedores de impacto de alta densidade.",
        footer: "Norma NIMF 15 e materiais inertes",
      },
      card2: {
        badge: "Supervisão Ininterrupta",
        title: "Transporte Nail-to-Nail com Courier",
        desc: "Veículos dedicados com suspensão pneumática integral, controle ativo de temperatura e umidade, além de rastreamento por telemetria em tempo real. Possibilidade de acompanhamento de profissional courier especializado em todo o trajeto terrestre e aéreo até a fixação no espaço expositivo.",
        footer: "Suspensão pneumática e courier dedicado",
      },
      card3: {
        badge: "Conformidade Governamental",
        title: "Admissão Temporária & IPHAN / IBRAM",
        desc: "Gestão aduaneira especializada com enquadramento em Admissão Temporária para eventos e exposições com suspensão total de impostos. Obtenção de autorizações de exportação temporária ou definitiva perante o IPHAN e documentação junto ao Instituto Brasileiro de Museus (IBRAM).",
        footer: "Isenção fiscal e autorização do IPHAN",
      },
    },
    whyChoose: {
      tag: "Sigilo e Confiabilidade",
      title:
        "Por que a NFT Logistics é a escolha de confiança para o mercado de arte?",
      paragraphs: [
        "Peças raras não podem ser confiadas a operadores logísticos convencionais. Qualquer impacto durante o transporte pode danificar tintas seculares, craquelar telas ou desestabilizar esculturas.",
        "Nossos profissionais utilizam luvas cirúrgicas e de algodão neutro, seguem os preceitos de conservação preventiva do ICOM e atuam sob rigorosos acordos de confidencialidade (NDA).",
      ],
      ctaTalk: "Falar com nosso time de especialistas",
      visualCard: {
        badge: "Padrão Museum-Grade",
        desc: "Climatização contínua, embalagens sob medida e seguro prego a prego (nail-to-nail).",
      },
      feature1: {
        title: "Condition Report (Laudo de Conservação)",
        desc: "Elaboração de laudo técnico minucioso com registro fotográfico em alta resolução na coleta e na entrega, atestando o estado exato de conservação de cada detalhe da obra.",
      },
      feature2: {
        title: "Climatização e Suspensão Pneumática",
        desc: "Veículos climatizados com controle constante de temperatura (18°C a 22°C) e umidade relativa (50% a 55%), amortecendo 100% dos solavancos da malha rodoviária.",
      },
      feature3: {
        title: "Seguro All Risks Fine Arts (Prego a Prego)",
        desc: "Apólices internacionais sob medida nas principais seguradoras mundiais do mercado de arte, com cobertura irrestrita de porta a porta contra perdas ou danos.",
      },
      feature4: {
        title: "Confidencialidade e Escolta de Segurança",
        desc: "Discrição operacional absoluta, rotas e horários confidenciais e, quando necessário para obras de valor expressivo, escolta velada armada e monitoramento tático.",
      },
    },
    gallery: {
      tag: "Acervos & Exposições",
      title: "Curadoria e Preservação de Peças Raras",
      description:
        "Transporte de obras tridimensionais, telas de valor inestimável e acervos históricos com discrição e conformidade IPHAN.",
      items: [
        {
          src: "/imagens/nft-art-2.jpg",
          alt: "Escultura curvilínea em madeira sob iluminação de galeria",
          tag: "Escultura & Tridimensional",
          title: "Peças Tridimensionais",
          desc: "Caixas sob medida com berço de amortecimento interno adaptado a cada curva da obra.",
        },
        {
          src: "/imagens/nft-art.jpg",
          alt: "Detalhes anatômicos e veios de escultura em preto e branco",
          tag: "Laudo & Vistoria",
          title: "Macroinspeção de Superfície",
          desc: "Condition report minucioso assinado na retirada da galeria e conferido na entrega técnica.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Desova cuidadosa de caixa de madeira certificada",
          tag: "Embalagens Museológicas",
          title: "Caixas Térmicas ISPM 15",
          desc: "Madeira tratada e fumigada internacionalmente com vedação contra poeira e variações de umidade.",
        },
        {
          src: "/imagens/feira-nft-logistics-7.jpg",
          alt: "Pavilhão amplo de exposições com público e iluminação cenográfica",
          tag: "Grandes Mostras",
          title: "Bienais & Exposições",
          desc: "Logística internacional e admissão temporária com isenção total de impostos via autorização IPHAN.",
        },
      ],
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Logistics for Fine Arts and Cultural Assets with NFT Logistics.",
    block2: {
      imageAlt: "Packaging and transport of fine arts and historical collections",
      floatingBadgeTitle: "Museum Preventive Conservation",
      floatingBadgeDesc: "Strict temperature, relative humidity, and vibration monitoring",
      tag: "Sensitivity and High Precision",
      title:
        "Works of art are not cargo: they are heritage that commands utmost devotion and precision",
      paragraphs: [
        "Handling master paintings, sculptures, multimedia installations, and historical relics demands protocols far beyond commercial freight. Abrupt swings in relative humidity, thermal shocks, or mechanical vibrations can cause irreversible damage to priceless pieces.",
        "NFT Logistics provides end-to-end stewardship under the strict \"nail-to-nail\" standard. We craft custom marine-grade plywood museum crates lined with archival inert foams and vapor barriers, documented by rigorous technical Condition Reports.",
        "We oversee permits from Brazilian heritage authorities (IPHAN & IBRAM), structure tax-free Temporary Admission regimes, and secure All Risks Fine Arts insurance for complete serenity.",
      ],
    },
    services: {
      tag: "Specialized Services",
      title: "Excellence in Every Phase of Art Logistics",
      description:
        "Every artistic medium requires tailored preservation engineering—from delicate canvas paintings to heavy marble sculptures:",
      card1: {
        badge: "Structural Protection",
        title: "Climate-Controlled Museum Crates",
        desc: "Custom-built ISPM 15 phytosanitary certified marine plywood crates. Lined with breathable Tyvek, neutral Plastazote/Ethafoam padding, hygrothermal barriers, and shock absorbers.",
        footer: "ISPM 15 certified and inert archival materials",
      },
      card2: {
        badge: "Continuous Supervision",
        title: "Nail-to-Nail Transport & Dedicated Courier",
        desc: "Dedicated air-ride pneumatic suspension vehicles, real-time temperature/humidity telemetry, and specialized fine art courier accompaniment on all ground and air legs.",
        footer: "Air-ride suspension and courier accompaniment",
      },
      card3: {
        badge: "Government Heritage Compliance",
        title: "Temporary Admission & IPHAN / IBRAM",
        desc: "Specialized customs clearance under Temporary Admission for exhibitions with 100% tax suspension. Procuring transit authorizations from IPHAN and IBRAM museum authorities.",
        footer: "Duty suspension and IPHAN approval",
      },
    },
    whyChoose: {
      tag: "Confidentiality & Reliability",
      title: "Why NFT Logistics is the trusted choice for the art market?",
      paragraphs: [
        "Irreplaceable masterpieces cannot be entrusted to standard freight handlers. Any shock can crack centuries-old oil layers or compromise fragile sculptures.",
        "Our art handlers use lint-free cotton and surgical gloves, respect ICOM preventive conservation ethics, and operate under strict Non-Disclosure Agreements (NDA).",
      ],
      ctaTalk: "Speak with our specialist team",
      visualCard: {
        badge: "Museum-Grade Standard",
        desc: "Continuous climate control, bespoke crates, and nail-to-nail insurance.",
      },
      feature1: {
        title: "Detailed Condition Reports",
        desc: "Exhaustive technical assessment accompanied by ultra-high-resolution macro photography upon collection and delivery, documenting the piece's physical condition.",
      },
      feature2: {
        title: "Climate Control & Pneumatic Suspension",
        desc: "Custom vehicles maintaining constant temperature (18°C–22°C) and relative humidity (50%–55%), absorbing 100% of road vibration.",
      },
      feature3: {
        title: "All Risks Fine Arts Insurance (Nail-to-Nail)",
        desc: "Tailor-made coverage with top global art insurance underwriters, guaranteeing door-to-door wall-to-wall protection against loss or damage.",
      },
      feature4: {
        title: "Discretion & Security Escorts",
        desc: "Complete confidentiality on routes and schedules. Armed tactical escorts and satellite tracking provided whenever required for high-valuation masterworks.",
      },
    },
    gallery: {
      tag: "Curatorship & Preservation",
      title: "Curatorship and Preservation of Rare Pieces",
      description:
        "Witness our technical precision in crating, temperature control, and physical handling of invaluable cultural collections.",
      items: [
        {
          src: "/imagens/nft-art-2.jpg",
          alt: "Contemporary sculpture and exhibition logistics",
          tag: "Anti-Vibration Handling",
          title: "Sculptures & Large Installations",
          desc: "Specialized vibration-dampening rigging equipment and secure placement at galleries and biennales.",
        },
        {
          src: "/imagens/nft-art.jpg",
          alt: "Technical inspection and art condition reporting",
          tag: "Photographic Audit",
          title: "Condition Reports & Forensics",
          desc: "Microscopic analysis of varnishes, craquelure, and canvas margins before and after cross-border transit.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Museum-grade climate-controlled wooden crates",
          tag: "Microclimate Control",
          title: "Tailored Crates (ISPM 15)",
          desc: "Double-walled museum crating with progressive-density Ethafoam linings and vapor barrier protection.",
        },
        {
          src: "/imagens/feira-nft-logistics-7.jpg",
          alt: "International exhibitions and museum collections",
          tag: "End-to-End Care",
          title: "International Museum Exhibitions",
          desc: "Temporary customs clearance under IPHAN/IBRAM cultural stewardship with full Nail-to-Nail insurance.",
        },
      ],
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想了解更多关于 NFT Logistics 艺术品与贵重文化藏品专业物流服务。",
    block2: {
      imageAlt: "艺术品与历史藏品的精密包装与运输",
      floatingBadgeTitle: "博物馆级预防性保护",
      floatingBadgeDesc: "严格控制温湿度、防潮与振动缓冲",
      tag: "极度敏感与高精标准",
      title: "艺术品不是普通的货物：它们是需要奉献敬畏之心守护的文明瑰宝",
      paragraphs: [
        "油画、古代雕塑、多媒体当代装置与珍贵文物的移动所遵循的规程远超普通商业物流。相对湿度的剧烈变化、温度骤变或不当的机械振动，都会对无价的藏品造成不可逆转的损害。",
        "NFT Logistics 提供严格的“墙到墙”（Nail-to-Nail）闭环管理。我们定制采用 NIMF 15 国际标准的航海级胶合板木箱，内衬透气中性 Tyvek 材料与高密度防震泡沫，并出具详尽的《藏品状况技术报告》（Condition Reports）。",
        "我们协助办理巴西历史艺术遗产局（IPHAN）与博物馆协会（IBRAM）的审批文书，设立免税暂时进境制度，并配置全额 All Risks Fine Arts 艺术品保险。",
      ],
    },
    services: {
      tag: "专业艺术服务",
      title: "艺术品流转中每个环节的极致把控",
      description:
        "针对油画画布、青铜、大理石雕塑、纸本手稿或多媒体现代装置提供针对性的工程防护方案：",
      card1: {
        badge: "结构性防护",
        title: "恒温恒湿定制博物馆木箱",
        desc: "手工定制符合国际植检标准（NIMF 15）的防潮熏蒸木箱。内嵌 Tyvek 透气防护层、化学中性 Plastazote/Ethafoam 缓冲海绵及减震垫。",
        footer: "符合 NIMF 15 国际标准与中性惰性材料",
      },
      card2: {
        badge: "全程不间断押运",
        title: "Nail-to-Nail 专车运输与专递陪同",
        desc: "采用全气囊悬挂恒温卡车，实时监控车厢温湿度与行驶轨迹。支持专业艺术品 Courier 专家在陆运和空运全流程贴身陪同。",
        footer: "气囊减震悬挂与专属押运人员",
      },
      card3: {
        badge: "政府文物法规合规",
        title: "暂时进境与 IPHAN / IBRAM 批文",
        desc: "办理展览专用的暂时进境海关申报以免除进口关税。向巴西国家历史与艺术遗产局（IPHAN）和国家博物馆协会（IBRAM）申请出入境许可。",
        footer: "免税海关制度与 IPHAN 批文代办",
      },
    },
    whyChoose: {
      tag: "机密与信赖",
      title: "为什么 NFT Logistics 备受艺术界知名机构信赖？",
      paragraphs: [
        "珍罕艺术品绝不能交由普通物流承运。任何运输震动都可能导致百年油彩微裂或雕塑结构失衡。",
        "我们的专业人员佩戴无尘纯棉或医用手套操作，严格遵循国际博物馆协会（ICOM）的预防性保护准则，并严格履行保密协议（NDA）。",
      ],
      ctaTalk: "与我们的艺术物流顾问洽谈",
      visualCard: {
        badge: "博物馆级标准",
        desc: "全流程恒温控制、专属定制包装与“钉到钉”综合保险。",
      },
      feature1: {
        title: "详尽状况报告 (Condition Report)",
        desc: "在提货与交付现场由专员进行细致查验，拍摄超高精度微距相片，详细记录藏品各个部位的现状。",
      },
      feature2: {
        title: "恒温恒湿车厢与空气悬挂",
        desc: "专车维持恒温（18°C 至 22°C）与恒湿（50% 至 55%），气囊避震系统百分之百吸收公路颠簸。",
      },
      feature3: {
        title: "All Risks Fine Arts 全险保单 (钉到钉)",
        desc: "与全球知名艺术品保险公司合作，定制涵盖起运地挂钩至目的地入库全行程的综合险保障。",
      },
      feature4: {
        title: "严格保密与安全押运",
        desc: "运输路线与时间绝对保密；对于特级高估值珍贵艺术品，提供便衣武装押运与卫星战术定位。",
      },
    },
    gallery: {
      tag: "策展与馆藏保护",
      title: "稀世珍品策展级包装、运输与防震实况",
      description:
        "真实呈现我们在文化遗产、馆藏文物及当代艺术品在跨国运输与布展中的严苛技术标准。",
      items: [
        {
          src: "/imagens/nft-art-2.jpg",
          alt: "当代大型雕塑与装置艺术品运输",
          tag: "高阶减震吊装",
          title: "重型雕塑与空间装置艺术",
          desc: "气垫悬挂重型特种车运输，双年展及画廊大型雕塑毫米级精细位移。",
        },
        {
          src: "/imagens/nft-art.jpg",
          alt: "艺术品微观状态报告鉴定与检验",
          tag: "数码高清存证",
          title: "状况报告（Condition Reports）与司法鉴定",
          desc: "微观光学检测光油层、画布边缘及细微网状裂纹，进出境双向比对闭环存证。",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "恒温恒湿定制木箱及防震缓冲内衬",
          tag: "微环境控制",
          title: "专属恒温定制木箱（ISPM 15）",
          desc: "双层结构博物馆级木箱，内附渐进式密度吸震发泡胶与铝箔高分子防潮密封气室。",
        },
        {
          src: "/imagens/feira-nft-logistics-7.jpg",
          alt: "国际巡回展览与博物馆馆藏运输",
          tag: "全程点对点保障",
          title: "国际大展与巡展护航",
          desc: "在巴西国家历史艺术遗产局（IPHAN）与博物馆协会（IBRAM）监管下办理免税出入境手续并配套“钉到钉”全额险。",
        },
      ],
    },
  },
};
