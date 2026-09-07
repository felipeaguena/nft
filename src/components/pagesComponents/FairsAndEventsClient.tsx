"use client";

import React from "react";
import Image from "next/image";
import HeroSection from "@/src/components/HeroSection";
import StepsSection from "@/src/components/StepsSection";
import CtaSection from "@/src/components/CtaSection";
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

export type LanguageCode = "pt" | "en" | "cn";

export interface FairsAndEventsClientProps {
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

interface TaxCard {
  badge: string;
  title: string;
  desc: string;
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
      "Olá! Gostaria de saber mais sobre apoio para Feiras e Eventos no Brasil com a NFT Logistics.",
    hero: {
      badge: "Logística Internacional & Regimes Aduaneiros",
      title: "Logística para Feiras e Eventos Internacionais no Brasil",
      description:
        "Garantimos o transporte porta-ao-estande, desembaraço aduaneiro sem surpresas e o cumprimento rigoroso de prazos para que sua empresa brilhe nos maiores centros de convenções e exposições do país.",
      ctaTalk: "Falar com Especialista",
      ctaSteps: "Ver Como Funciona",
      stepsAnchor: "#etapas",
      trustTitle: "Compromisso com Tolerância Zero a Atrasos",
      trustDesc:
        "Know-how comprovado nos principais pavilhões do Brasil: São Paulo Expo, Anhembi, Riocentro e Transamerica Expo Center.",
    },
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
          src: "/imagens/feira-nft-logistics-7.jpg",
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
          src: "/imagens/feira-nft-logistics-2.jpg",
          alt: "Estande de mobilidade elétrica e motos em exposição internacional",
          tag: "Mobilidade & Tech",
          title: "Mostruários Tecnológicos",
          desc: "Admissão temporária e liberação expressa para protótipos e veículos elétricos importados.",
        },
        {
          src: "/imagens/feira-nft-logistics-6.jpg",
          alt: "Transamerica Expo Center - Fachada do centro de convenções",
          tag: "Centros de Convenções",
          title: "Transamerica & São Paulo Expo",
          desc: "Acesso prioritário e trânsito ágil nas docas de carga e descarga dos maiores pavilhões do país.",
        },
      ],
    },
    stepsSection: {
      id: "etapas",
      tag: "Metodologia Operacional",
      title: "Como Funciona a Nossa Operação",
      description:
        "Um fluxo rigoroso, transparente e testado centenas de vezes para garantir que seu estande esteja 100% pronto no dia do evento.",
      steps: [
        {
          num: "01",
          title: "Diagnóstico & Planejamento Aduaneiro",
          desc: "Análise antecipada da lista de materiais (Invoice & Packing List), classificação fiscal (NCM) e definição da estratégia ideal entre Admissão Temporária e Nacionalização.",
        },
        {
          num: "02",
          title: "Licenciamento e Anuências Prévias",
          desc: "Emissão de Licenças de Importação (LI via módulo LPCO/Siscomex) e deferimentos prévios junto a órgãos como Anvisa, MAPA, Inmetro ou Anatel antes da saída do país de origem.",
        },
        {
          num: "03",
          title: "Coleta na Origem & Frete Internacional",
          desc: "Coleta internacional, conferência de embalagens certificadas (madeira tratada NIMF 15) e coordenação de frete aéreo expresso ou marítimo com rastreamento integral.",
        },
        {
          num: "04",
          title: "Desembaraço Aduaneiro Prioritário",
          desc: "Acompanhamento presencial da conferência física e documental pela Receita Federal, assinatura do Termo de Responsabilidade e liberação rápida nos portos e aeroportos.",
        },
        {
          num: "05",
          title: "Entrega no Estande & Reexportação",
          desc: "Transporte local dedicado até o pavilhão, descarregamento técnico no estande, guarda de embalagens vazias e coordenação do retorno (reexportação) pós-evento.",
        },
      ],
    },
    cta: {
      badge: "Consultoria Especializada",
      title: "Pronto para expor no Brasil com total tranquilidade e pontualidade?",
      description:
        "Não deixe a complexidade aduaneira e o rigor dos prazos colocarem em risco a sua participação. Fale agora mesmo com nossos especialistas em logística de eventos e receba um planejamento sob medida.",
      btnWhatsapp: "Falar no WhatsApp com Especialista",
      disclaimer: "Atendimento ágil para feiras, congressos e exposições em todo o Brasil.",
    },
  },
  en: {
    whatsappMsg:
      "Hello! I would like to learn more about support for Fairs and Events in Brazil with NFT Logistics.",
    hero: {
      badge: "International Logistics & Customs Regimes",
      title: "Logistics for International Fairs and Events in Brazil",
      description:
        "We guarantee door-to-booth delivery, flawless customs clearance, and strict schedule adherence so your enterprise shines across Brazil's leading convention centers.",
      ctaTalk: "Speak with a Specialist",
      ctaSteps: "See How It Works",
      stepsAnchor: "#etapas",
      trustTitle: "Zero Delay Tolerance Commitment",
      trustDesc:
        "Proven track record in Brazil's major venues: São Paulo Expo, Anhembi, Riocentro, and Transamerica Expo Center.",
    },
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
          src: "/imagens/feira-nft-logistics.jpg",
          alt: "Agrishow and international agribusiness exhibition",
          tag: "Ribeirão Preto, SP",
          title: "Agrishow & Heavy Machinery",
          desc: "Temporary admission clearance and specialized flatbed transport for oversized agricultural tech.",
        },
        {
          src: "/imagens/feira-nft-logistics-3.jpg",
          alt: "Hospitalar and international healthcare technology",
          tag: "São Paulo Expo, SP",
          title: "Hospitalar & Healthcare Tech",
          desc: "Diagnostic and ultrasound systems with import licenses pre-cleared with Anvisa.",
        },
        {
          src: "/imagens/feira-nft-logistics-2.jpg",
          alt: "Electric mobility and industrial clean tech expo",
          tag: "Transamerica Expo, SP",
          title: "Mobility & Clean Energy",
          desc: "Complete rigging, uncrating, stand delivery, and secure storage of empty packaging throughout the show.",
        },
        {
          src: "/imagens/feira-nft-logistics-6.jpg",
          alt: "Industrial automation and technology expo",
          tag: "Distrito Anhembi, SP",
          title: "Industry 4.0 & Automation",
          desc: "Door-to-door coordination, expedited post-event dismantling, and tax-exempt re-exportation.",
        },
      ],
    },
    stepsSection: {
      id: "etapas",
      tag: "Operational Methodology",
      title: "How Our Operations Work",
      description:
        "A rigorous, transparent workflow tested across hundreds of exhibitions to ensure your booth is 100% prepared.",
      steps: [
        {
          num: "01",
          title: "Customs Diagnosis & Planning",
          desc: "Advance audit of invoices, packing lists, HS classifications, and definition of optimal temporary vs. definitive regimes.",
        },
        {
          num: "02",
          title: "Prior Licensing & Permits",
          desc: "Filing of LPCO import licenses with regulatory bodies like Anvisa, MAPA, Inmetro, or Anatel before cargo leaves the country of origin.",
        },
        {
          num: "03",
          title: "Origin Pickup & Freight",
          desc: "International pickup, verification of ISPM 15 treated crates, and priority express air or ocean freight booking with full tracking.",
        },
        {
          num: "04",
          title: "Priority Customs Clearance",
          desc: "On-site presence during customs inspections at Brazilian terminals, signing liability terms, and obtaining fast green channel release.",
        },
        {
          num: "05",
          title: "Booth Delivery & Re-Export",
          desc: "Dedicated local trucking to the venue, booth offloading, empty crate storage, and coordination of post-event re-exportation.",
        },
      ],
    },
    cta: {
      badge: "Specialized Advisory",
      title: "Ready to exhibit in Brazil with complete peace of mind and punctuality?",
      description:
        "Do not let regulatory hurdles and rigid deadlines jeopardize your participation. Contact our trade show logistics specialists today for customized planning.",
      btnWhatsapp: "Chat on WhatsApp with a Specialist",
      disclaimer: "Prompt support for fairs, congresses, and exhibitions throughout Brazil.",
    },
  },
  cn: {
    whatsappMsg:
      "您好！我想了解更多关于 NFT Logistics 在巴西的国际展会与大型活动物流支持服务。",
    hero: {
      badge: "国际物流与海关特殊监管制度",
      title: "巴西国际展会与大型商业活动物流服务",
      description:
        "我们保障门到展台全程交付、无缝海关优先清关以及严格按时履约，助力您的企业在巴西各大国际展览中心大放异彩。",
      ctaTalk: "咨询展会物流专家",
      ctaSteps: "了解服务流程",
      stepsAnchor: "#etapas",
      trustTitle: "延误零容忍庄严承诺",
      trustDesc:
        "深谙巴西主流展馆操作准则：São Paulo Expo、Anhembi、Riocentro 及 Transamerica Expo Center。",
    },
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
          src: "/imagens/feira-nft-logistics.jpg",
          alt: "Agrishow 巴西国际农业机械展现场",
          tag: "Ribeirão Preto, SP",
          title: "Agrishow 重型机械展",
          desc: "大型农用装备与重型机械的暂准进境清关及特种低平板车辆运输。",
        },
        {
          src: "/imagens/feira-nft-logistics-3.jpg",
          alt: "Hospitalar 巴西国际医疗器械展",
          tag: "São Paulo Expo, SP",
          title: "Hospitalar 医疗健康展",
          desc: "超声波及高端影像医疗设备，提前获得巴西国家卫生监督局（Anvisa）进口许可。",
        },
        {
          src: "/imagens/feira-nft-logistics-2.jpg",
          alt: "巴西电动出行与新能源科技展",
          tag: "Transamerica Expo, SP",
          title: "Mobility & 绿色能源展",
          desc: "展台全套设备拆箱、吊装就位以及展期全程空箱安全仓储托管。",
        },
        {
          src: "/imagens/feira-nft-logistics-6.jpg",
          alt: "巴西工业自动化与智能制造展",
          tag: "Distrito Anhembi, SP",
          title: "工业4.0 与自动化展",
          desc: "门到展位全程协调，展后极速撤展并办理免税复运出境手续。",
        },
      ],
    },
    stepsSection: {
      id: "etapas",
      tag: "标准化运作流程",
      title: "我们的展会物流五步流程",
      description:
        "严谨可靠、经过数百场大型国际展会反复验证的标准化操作体系。",
      steps: [
        {
          num: "01",
          title: "方案评估与海关规划",
          desc: "装运前详细预审发票、装箱单与技术规格，精确分类海关编码（NCM），制定最优清关策略。",
        },
        {
          num: "02",
          title: "前置许可与单据审批",
          desc: "在货物离开起运国前，通过 Siscomex/LPCO 模块向 Anvisa、Inmetro 或 Anatel 办妥准入许可。",
        },
        {
          num: "03",
          title: "起运地提货与国际运输",
          desc: "安排境外工厂提货，核查符合 NIMF 15 国际熏蒸标准的包装，预订加急海空运舱位并全程跟踪。",
        },
        {
          num: "04",
          title: "口岸优先查验与快速放行",
          desc: "资深清关团队在巴西机场或港口现场跟进海关查验，签署责任保函，争取以最快速度获得绿通道放行。",
        },
        {
          num: "05",
          title: "展台现场交付与后续复出境",
          desc: "专车安全送抵展馆内卸货就位，代管空箱包装，并在展会闭幕后高效协调展品复运出境手续。",
        },
      ],
    },
    cta: {
      badge: "资深展会关务咨询",
      title: "准备好以百分之百的安心与准时在巴西精彩参展了吗？",
      description:
        "切勿让复杂的巴西海关法规与严苛的布展时限影响您的全球参展计划。立即与我们的国际展会物流专家团队取得联系。",
      btnWhatsapp: "通过 WhatsApp 直接咨询专家",
      disclaimer: "高效支持在圣保罗、里约热内卢及巴西全境举办的国际展会与经贸峰会。",
    },
  },
};

export default function FairsAndEventsClient({
  lang = "pt",
}: FairsAndEventsClientProps) {
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
        pageKey="feiras-e-eventos"
        lang={lang}
        whatsappHref={whatsappHref}
      />

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda: Imagem */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/feira-nft-logistics.jpg"
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
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: MODELOS TRIBUTÁRIOS (3 CARDS)                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {content.taxModels.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {content.taxModels.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {content.taxModels.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.taxModels.card1.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.taxModels.card1.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.taxModels.card1.desc}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.taxModels.card2.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.taxModels.card2.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.taxModels.card2.desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl p-8 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-600/20 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100/80 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-orange-600 group-hover:border-transparent transition-all duration-300">
                  <Landmark className="w-7 h-7" />
                </div>
                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 group-hover:text-orange-100 transition-colors">
                    {content.taxModels.card3.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {content.taxModels.card3.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                  {content.taxModels.card3.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: VANTAGENS COMPETITIVAS (DUAS COLUNAS + 4 CARDS)                  */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda */}
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
            </div>

            {/* Coluna da Direita (4 cards) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Feature 1 - Clock */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
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

              {/* Feature 2 - ShieldCheck */}
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

              {/* Feature 3 - Truck */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
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

              {/* Feature 4 - Users */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
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
      {/* BLOCO 5: GALERIA DE OPERAÇÕES EM PAVILHÕES (4 FOTOS)                      */}
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
      {/* BLOCO 6: METODOLOGIA OPERACIONAL (5 ETAPAS)                                */}
      {/* ========================================================================= */}
      <StepsSection pageKey="feiras-e-eventos" lang={lang} />

      {/* ========================================================================= */}
      {/* BLOCO 7: CTA PADRÃO COM WHATSAPP                                          */}
      {/* ========================================================================= */}
      <CtaSection
        pageKey="feiras-e-eventos"
        lang={lang}
        whatsappHref={whatsappHref}
      />
    </div>
  );
}
