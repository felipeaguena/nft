"use client";

import React from "react";
import Image from "next/image";
import HeroSection from "@/src/components/HeroSection";
import StepsSection from "@/src/components/StepsSection";
import CtaSection from "@/src/components/CtaSection";
import {
  Palette,
  ArrowRight,
  ShieldCheck,
  Truck,
  Landmark,
  CheckCircle2,
  Boxes,
  Sparkles,
  Eye,
  Lock,
  ThermometerSnowflake,
  FileSpreadsheet,
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

export interface ArtworksLogisticsClientProps {
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
  stepsSection: {
    id: string;
    tag: string;
    title: string;
    description: string;
    steps: StepItem[];
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
      "Olá! Gostaria de falar com um especialista sobre Logística para Obras de Arte e Acervos Culturais com a NFT Logistics.",
    hero: {
      badge: "Curadoria Logística de Artes & Acervos Valiosos",
      title: "Logística Especializada para Obras de Arte e Acervos Culturais",
      description:
        "Transporte nacional e internacional seguro, caixas climatizadas sob medida e gestão aduaneira completa para bienais, museus, galerias, leilões e colecionadores particulares.",
      ctaTalk: "Falar com Especialista em Arte",
      ctaSteps: "Conhecer Nossos Cuidados",
      stepsAnchor: "#etapas",
      trustTitle: "Padrão Internacional Nail-to-Nail (Parede a Parede)",
      trustDesc:
        "Supervisão presencial com couriers especializados, confecção de embalagens museológicas e discrição absoluta.",
    },
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
    stepsSection: {
      id: "etapas",
      tag: "Protocolo Museológico",
      title: "Como Conduzimos a Logística de Arte em 5 Etapas",
      description:
        "Um fluxo rigoroso pautado nos padrões internacionais de preservação para que sua coleção viaje com proteção integral.",
      steps: [
        {
          num: "01",
          title: "Vistoria & Condition Report Inicial",
          desc: "Avaliação técnica presencial das condições físicas da obra, dimensão, suporte, moldura e emissão do laudo inicial detalhado.",
        },
        {
          num: "02",
          title: "Embalagem Sob Medida Climatizada",
          desc: "Construção artesanal da caixa de madeira fumigada (NIMF 15) com forração inerte, barreira térmica e proteção antichoque.",
        },
        {
          num: "03",
          title: "Anuência IPHAN e Despacho Aduaneiro",
          desc: "Concessão de autorizações de trânsito cultural perante o IPHAN/IBRAM e desembaraço aduaneiro com Admissão Temporária.",
        },
        {
          num: "04",
          title: "Transporte Climatizado & Courier",
          desc: "Translado em veículo dedicado com suspensão a ar, telemetria climática e acompanhamento presencial do courier da obra.",
        },
        {
          num: "05",
          title: "Aclimatização & Fixação no Espaço",
          desc: "Período de repouso e aclimatização no ambiente de destino, desempacotamento cuidadoso, conferência do laudo final e montagem.",
        },
      ],
    },
    cta: {
      badge: "Curadoria Logística em Arte",
      title: "Precisa transportar obras de arte com total sigilo e proteção?",
      description:
        "Converse diretamente com nossos curadores logísticos. Desenvolvemos soluções sob medida para exposições, galerias, leilões e colecionadores privados com garantia de preservação irrestrita.",
      btnWhatsapp: "Falar no WhatsApp com Especialista",
      disclaimer:
        "Atendimento exclusivo para museus, bem-sucedidas bienais, galerias e coleções privadas.",
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to speak with a specialist about Logistics for Fine Arts and Cultural Assets with NFT Logistics.",
    hero: {
      badge: "Museum-Grade Logistics Curatorship",
      title: "Specialized Logistics for Fine Arts and Cultural Heritage",
      description:
        "Secure domestic and international transport, tailor-made climate-controlled crating, and complete customs administration for biennials, museums, galleries, auctions, and private collectors.",
      ctaTalk: "Speak with an Art Specialist",
      ctaSteps: "Explore Our Protocols",
      stepsAnchor: "#steps",
      trustTitle: "International Nail-to-Nail Standard",
      trustDesc:
        "On-site supervision with specialized fine-art couriers, bespoke archival packaging, and absolute discretion.",
    },
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
    stepsSection: {
      id: "steps",
      tag: "Museum Protocol",
      title: "Our 5-Step Art Logistics Methodology",
      description:
        "A meticulous workflow compliant with international museum preservation standards.",
      steps: [
        {
          num: "01",
          title: "Initial Condition Report",
          desc: "On-site physical inspection of dimensions, support, frame, and issuance of initial baseline report.",
        },
        {
          num: "02",
          title: "Custom Archival Packaging",
          desc: "Crafting of ISPM 15 fumigated timber crates with inert Tyvek lining and hygrothermal barrier.",
        },
        {
          num: "03",
          title: "Heritage Approvals & Clearance",
          desc: "Securing transit approvals with IPHAN / IBRAM and customs filing under Temporary Admission.",
        },
        {
          num: "04",
          title: "Air-Ride Transport & Courier",
          desc: "Transit in air-ride pneumatic trucks with climate telemetry and professional courier monitoring.",
        },
        {
          num: "05",
          title: "Acclimatization & Wall-Mounting",
          desc: "Controlled resting period, meticulous uncrating, final Condition Report signoff, and mounting.",
        },
      ],
    },
    cta: {
      badge: "Art Logistics Curatorship",
      title: "Need to transport fine art with utmost confidentiality and protection?",
      description:
        "Consult directly with our fine art logistics curators. We develop customized solutions for exhibitions, galleries, auctions, and private collectors with unconditional preservation guarantees.",
      btnWhatsapp: "Speak with a Specialist on WhatsApp",
      disclaimer: "Exclusive care for museums, biennials, galleries, and private collections.",
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想了解更多关于 NFT Logistics 艺术品与贵重文化藏品专业物流服务。",
    hero: {
      badge: "博物馆级艺术物流策展方案",
      title: "艺术品与贵重文化资产专业物流服务",
      description:
        "为双年展、博物馆、画廊、拍卖行及私人藏家提供安全的巴西境内与跨国运输、定制恒温恒湿木箱以及全程海关特殊手续。",
      ctaTalk: "咨询艺术品物流专家",
      ctaSteps: "了解保护标准",
      stepsAnchor: "#steps",
      trustTitle: "国际公认 Nail-to-Nail (墙到墙) 服务标准",
      trustDesc:
        "专业艺术品专递押运员全程陪同、手工定制博物馆级包装与严守商业机密。",
    },
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
    stepsSection: {
      id: "steps",
      tag: "博物馆标准规程",
      title: "艺术品物流五步实施流程",
      description:
        "严格遵循国际文物与艺术保护标准，确保您的珍贵藏品受到全方位呵护。",
      steps: [
        {
          num: "01",
          title: "现场查验与初始状况报告",
          desc: "专员实地测量尺寸、评估材质框架状态，出具严谨的初始 Condition Report。",
        },
        {
          num: "02",
          title: "定制恒温熏蒸木箱包装",
          desc: "手工打制符合 NIMF 15 标准的专用木箱，配以 Tyvek 呼吸层与惰性减震海绵。",
        },
        {
          num: "03",
          title: "文化部批文与暂时进境清关",
          desc: "办妥 IPHAN 与 IBRAM 文化出入境许可证，办理展览专用的免税海关暂时进境。",
        },
        {
          num: "04",
          title: "气囊恒温专车与押运陪同",
          desc: "全气囊避震卡车转运，温湿度远程监控，专业押运专递员跟车保障。",
        },
        {
          num: "05",
          title: "环境适应与挂墙安装",
          desc: "进入展室环境适应静置期，专业开箱复核状态报告并配合布展固定。",
        },
      ],
    },
    cta: {
      badge: "艺术物流策展顾问",
      title: "需要在绝对保密与全面保护下运送艺术品吗？",
      description:
        "欢迎直接咨询我们的艺术品物流策展团队。我们为美术馆、画廊、拍卖机构及私人藏家定制专属运输方案，恪守无条件保护承诺。",
      btnWhatsapp: "通过 WhatsApp 直接咨询专家",
      disclaimer: "为博物馆、双年展、画廊及私人藏家提供专属尊享服务。",
    },
  },
};

export default function ArtworksLogisticsClient({
  lang = "pt",
}: ArtworksLogisticsClientProps) {
  const content = CONTENT[lang] || CONTENT.pt;
  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    content.whatsappMsg
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* ========================================================================= */}
      <HeroSection
        pageKey="logistica-obras-arte"
        lang={lang}
        whatsappHref={whatsappHref}
      />

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda: Imagem */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/nft-art.jpg"
                    alt={content.block2.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
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
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: 3 CARDS DE SERVIÇOS ESPECIALIZADOS                              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {content.services.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {content.services.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {content.services.description}
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
                    {content.services.card1.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.services.card1.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.services.card1.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.services.card1.footer}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Truck className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.services.card2.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.services.card2.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.services.card2.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.services.card2.footer}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/90 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.services.card3.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.services.card3.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.services.card3.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 group-hover:border-white/20 transition-colors flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:text-white">
                <span>{content.services.card3.footer}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: POR QUE ESCOLHER (2 COLUNAS)                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título, Texto, Botão e Card Visual */}
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
                  className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed"
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

              {/* Card visual de autoridade */}
              {/* <div className="relative mt-8 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/imagens/nft-art-2.jpg"
                    alt={content.whyChoose.visualCard.badge}
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

            {/* Coluna da Direita: 4 Cards de Funcionalidade */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Card 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-6 h-6" />
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <ThermometerSnowflake className="w-6 h-6" />
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6" />
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/90 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6" />
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
      {/* SEÇÃO VISUAL: GALERIA DE CURADORIA E OBRAS DE ARTE                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {content.gallery.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {content.gallery.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {content.gallery.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.gallery.items.map((item, idx) => (
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
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-50/90 dark:bg-neutral-900/95">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
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
      {/* BLOCO 5: PASSO A PASSO COM 5 ETAPAS                                       */}
      {/* ========================================================================= */}
      <StepsSection pageKey="logistica-obras-arte" lang={lang} />

      {/* ========================================================================= */}
      {/* BLOCO 6: CTA                                                              */}
      {/* ========================================================================= */}
      <CtaSection
        pageKey="logistica-obras-arte"
        lang={lang}
        whatsappHref={whatsappHref}
      />
    </div>
  );
}
