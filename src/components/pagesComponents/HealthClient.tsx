"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "@/src/components/HeroSection";
import CtaSection from "@/src/components/CtaSection";
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  ChevronDown,
  FileCheck2,
  Stethoscope,
  CalendarCheck,
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

export interface HealthClientProps {
  lang?: LanguageCode;
}

interface ChallengeCard {
  icon: "stethoscope" | "calendar" | "file";
  title: string;
  desc: string;
}

interface StepItem {
  title: string;
  desc: string;
}

interface ExperienceItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
}

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface ContentLocale {
  whatsappMsg: string;
  hero: {
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    ctaProcess: string;
    ctaTalk: string;
    stepsAnchor: string;
    trustBadgeTitle: string;
    trustBadgeDesc: string;
  };
  challenge: {
    tag: string;
    title: string;
    description: string;
    cards: ChallengeCard[];
  };
  stepsSection: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    ctaButton: string;
    steps: StepItem[];
  };
  experience: {
    tag: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  faq: {
    tag: string;
    title: string;
    description: string;
    bottomPrompt: string;
    bottomLinkText: string;
    items: FaqItem[];
  };
  cta: {
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    subText: string;
  };
}

const CONTENT: Record<LanguageCode, ContentLocale> = {
  pt: {
    whatsappMsg:
      "Quero participar de feiras no Brasil e meus equipamentos ainda não tem registro na Anvisa, quero começar um processo de importação.",
    hero: {
      imageAlt: "Logística e importação hospitalar NFT Logistics",
      badge: "Official Freight Forwarder para a feira Hospitalar",
      title: "Importação de Máquinas e Produtos Hospitalares para o Brasil",
      description:
        "Especialistas em Admissão Temporária para uso hospitalar e eventos médicos. Compliance Total | Suspensão de Impostos | Gestão de Prazos",
      ctaProcess: "Conhecer o Processo",
      ctaTalk: "Falar com Especialista",
      stepsAnchor: "#passos",
      trustBadgeTitle: "Operações 100% em Conformidade Regulatória",
      trustBadgeDesc:
        "Assessoria técnica especializada em exigências da Anvisa, RDCs sanitárias e rigorosos protocolos internacionais de manuseio.",
    },
    challenge: {
      tag: "Entrar no Brasil sem surpresas",
      title: "O Desafio da Importação Hospitalar Temporária",
      description:
        "A logística para equipamentos médicos exige precisão cirúrgica. Máquinas de diagnóstico, robótica cirúrgica e dispositivos de alta tecnologia precisam circular sem riscos regulatórios. O caminho mais seguro para o Brasil é a Admissão Temporária.",
      cards: [
        {
          icon: "stethoscope",
          title: "Máquinas e Equipamentos Médicos",
          desc: "Desembaraço e transporte técnico com controle de vibração para tomógrafos, ressonâncias magnéticas, ultrassons, equipamentos laboratoriais e lasers cirúrgicos de alto valor agregado.",
        },
        {
          icon: "calendar",
          title: "Feiras, Congressos & Demonstrações",
          desc: "Admissão temporária com suspensão de impostos para empresas globais que desejam expor produtos médicos em eventos como a Feira Hospitalar, congressos científicos e demonstrações clínicas no Brasil.",
        },
        {
          icon: "file",
          title: "Gestão Regulatória & Anvisa",
          desc: "Elaboração e análise minuciosa de dossiês técnicos, Licença de Importação (LI via módulo LPCO), conformidade com as Resoluções da Diretoria Colegiada (RDCs) e acompanhamento presencial em recintos alfandegados.",
        },
      ],
    },
    stepsSection: {
      tag: "Passo a Passo Estruturado",
      title: "5 Passos Estratégicos para Importar Equipamentos Médicos para o Brasil",
      p1: "A importação de artigos para saúde requer um protocolo rigoroso. Qualquer inconsistência entre a fatura, a classificação fiscal e as exigências sanitárias pode travar o equipamento nos portos ou aeroportos.",
      p2: "Nossa metodologia garante previsibilidade jurídica, velocidade na liberação e preservação total da calibração e sensibilidade dos aparelhos até o destino final.",
      ctaButton: "Tirar Dúvidas sobre seu Equipamento",
      steps: [
        {
          title: "Diagnóstico Regulatório & Classificação Fiscal (NCM)",
          desc: "Análise técnica das especificações dos equipamentos médicos, determinação correta da NCM e verificação do enquadramento sanitário (classe de risco I a IV) e necessidade de LPCO.",
        },
        {
          title: "Dossiê Técnico & Licenciamento Anvisa (LI / LPCO)",
          desc: "Elaboração da documentação exigida, submissão do pedido de Licença de Importação no Siscomex e cumprimento de exigências sanitárias prévias ao embarque na origem.",
        },
        {
          title: "Embalagens Especiais & Logística Internacional",
          desc: "Confecção de caixas de madeira sob medida (norma NIMF 15) com proteção anti-impacto, amortecedores de choque e transporte internacional com rastreamento integral de rota.",
        },
        {
          title: "Desembaraço Aduaneiro e Vistoria Sanitária nos Portos/Aeroportos",
          desc: "Acompanhamento presencial da inspeção física e documental pela autoridade sanitária e pela Receita Federal, agilizando o deferimento da LI e o desembaraço aduaneiro.",
        },
        {
          title: "Transporte Especializado & Entrega Técnica no Destino",
          desc: "Transporte rodoviário em veículos com suspensão a ar e climatização controlada, içamento e descarregamento técnico no hospital, clínica ou pavilhão do evento.",
        },
      ],
    },
    experience: {
      tag: "Aplicação Prática",
      title: "Experiência Comprovada",
      description:
        "Projetos complexos conduzidos com excelência em logística médica, feiras e operações de alto calibre no Brasil.",
      items: [
        {
          src: "/imagens/health-1-nft-logistics.jpg",
          alt: "Importação de Sistemas Cirúrgicos e Tecnologias de Imagem",
          tag: "Alta Complexidade",
          title: "Sistemas Cirúrgicos e Equipamentos de Diagnóstico por Imagem",
        },
        {
          src: "/imagens/doutores-health.nft-logistics.webp",
          alt: "Feiras e Congressos Médicos Internacionais no Brasil",
          tag: "Regime Temporário",
          title: "Robôs Cirúrgicos para demonstrações em congressos.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Transporte Especializado e Manuseio de Cargas Médicas Sensíveis",
          tag: "Logística Técnica",
          title: "Transporte Técnico e Manuseio Especializado para Equipamentos Sensíveis",
        },
        {
          src: "/imagens/anvisa-health-nft-logistics.webp",
          alt: "Aprovação Regulatória e Desembaraço Aduaneiro na Anvisa",
          tag: "Conformidade Sanitária",
          title: "100% de sucesso em liberações ANVISA temporárias nos últimos 12 meses.",
        },
      ],
    },
    faq: {
      tag: "Saiba Mais",
      title: "Perguntas Frequentes sobre Importação na Saúde",
      description:
        "Tire suas principais dúvidas sobre legislação sanitária, desembaraço alfandegário e participação em feiras no Brasil com maquinários que ainda não possuem registro nacional.",
      bottomPrompt: "Ainda tem alguma dúvida específica?",
      bottomLinkText: "Converse com nossa equipe regulatória",
      items: [
        {
          question:
            "Posso importar equipamentos médicos para expor em feiras se ainda não tiverem registro na Anvisa?",
          answer: (
            <p>
              <strong>Sim!</strong> Pela legislação brasileira, é possível realizar a entrada de equipamentos médicos e dispositivos hospitalares pelo regime especial de <strong>Admissão Temporária para eventos e feiras comerciais</strong>. Nesse regime, há suspensão total dos tributos e o equipamento pode ser exibido e demonstrado sem necessidade de registro comercial definitivo da Anvisa, desde que retorne à sua origem após o evento.
            </p>
          ),
        },
        {
          question:
            "Quais são os documentos exigidos para a importação de máquinas e produtos hospitalares?",
          answer: (
            <p>
              A documentação inclui Fatura Comercial (Commercial Invoice), Packing List, Conhecimento de Embarque Internacional (AWB ou Bill of Lading), Licença de Importação (LI) emitida via Siscomex/LPCO, dossiê técnico das especificações do maquinário e, para operações definitivas de comercialização, o respectivo registro ou notificação sanitária e certificações de conformidade técnica.
            </p>
          ),
        },
        {
          question:
            "Como a NFT Logistics assegura a integridade de equipamentos hospitalares sensíveis?",
          answer: (
            <p>
              Desenvolvemos embalagens sob medida com madeira tratada (NIMF 15) e camadas de absorção de vibração e choque. Nossos transportes utilizam veículos com suspensão pneumática, monitoramento de temperatura e sensores de inclinação, além de mão de obra especializada para içamento e entrega técnica no local exato de instalação.
            </p>
          ),
        },
      ],
    },
    cta: {
      imageAlt: "Atendimento para importação hospitalar e feiras NFT Logistics",
      badge: "Agende uma reunião",
      title:
        "Não arrisque sua carga com generalistas. Escolha quem entende de ANVISA e Regimes Aduaneiros Especiais.",
      description:
        "Seja para expor em feiras sem anvisa prévia ou para nacionalizar sua linha de tecnologia médica, nossa equipe especializada orienta você em cada passo.",
      buttonText: "Falar no WhatsApp com Especialista",
      subText: "Atendimento imediato para feiras, congressos e importação hospitalar.",
    },
  },
  en: {
    whatsappMsg:
      "I want to participate in trade shows in Brazil and my medical equipment is not yet registered with Anvisa. I would like to start an import process.",
    hero: {
      imageAlt: "Healthcare logistics and medical import NFT Logistics",
      badge: "Official Freight Forwarder for Hospitalar Trade Show",
      title: "Import of Medical Equipment and Healthcare Machinery into Brazil",
      description:
        "Specialists in Temporary Admission for hospital use and medical events. Full Compliance | Tax Suspension | Deadline Management",
      ctaProcess: "Explore the Process",
      ctaTalk: "Talk to a Specialist",
      stepsAnchor: "#steps",
      trustBadgeTitle: "100% Regulatory Compliant Operations",
      trustBadgeDesc:
        "Specialized technical advice on Anvisa requirements, sanitary RDCs, and strict international handling protocols.",
    },
    challenge: {
      tag: "Enter Brazil Without Surprises",
      title: "The Challenge of Temporary Medical Equipment Import",
      description:
        "Logistics for medical equipment requires surgical precision. Diagnostic machines, surgical robotics, and high-tech devices must circulate without regulatory risks. The safest route to Brazil is Temporary Admission.",
      cards: [
        {
          icon: "stethoscope",
          title: "Medical Machinery & Equipment",
          desc: "Clearance and technical transport with vibration control for CT scanners, MRI systems, ultrasounds, laboratory equipment, and high-value surgical lasers.",
        },
        {
          icon: "calendar",
          title: "Trade Fairs, Congresses & Demonstrations",
          desc: "Temporary admission with tax suspension for global companies exhibiting medical products at events such as Hospitalar, scientific conferences, and clinical demos in Brazil.",
        },
        {
          icon: "file",
          title: "Regulatory Management & Anvisa",
          desc: "Meticulous preparation and review of technical dossiers, Import Licenses (LI via LPCO module), compliance with Collegiate Board Resolutions (RDCs), and in-person clearance at bonded facilities.",
        },
      ],
    },
    stepsSection: {
      tag: "Structured Step-by-Step",
      title: "5 Strategic Steps to Import Medical Equipment into Brazil",
      p1: "Importing healthcare products requires a rigorous protocol. Any discrepancy between the invoice, tariff classification, and sanitary requirements can hold up equipment at ports or airports.",
      p2: "Our methodology ensures legal predictability, swift customs clearance, and complete preservation of equipment calibration and sensitivity until the final destination.",
      ctaButton: "Have Questions About Your Equipment?",
      steps: [
        {
          title: "Regulatory Diagnosis & Tariff Classification (NCM / HS Code)",
          desc: "Technical analysis of medical device specifications, proper tariff classification (NCM), sanitary risk class assessment (Class I to IV), and LPCO requirement verification.",
        },
        {
          title: "Technical Dossier & Anvisa Licensing (LI / LPCO)",
          desc: "Preparation of required documentation, submission of Import License applications via Siscomex/LPCO, and fulfillment of pre-shipment sanitary requirements at origin.",
        },
        {
          title: "Specialized Packaging & International Freight",
          desc: "Custom-built ISPM 15 wooden crating with impact protection and shock absorbers, plus international freight with end-to-end route tracking.",
        },
        {
          title: "Customs Clearance & Sanitary Inspection at Ports/Airports",
          desc: "In-person oversight during physical and documentary inspections by health authorities (Anvisa) and Federal Revenue (Receita Federal), expediting LI approval and customs clearance.",
        },
        {
          title: "Specialized Transport & White-Glove On-Site Delivery",
          desc: "Road freight in air-suspension and climate-controlled vehicles, precision rigging, and technical unloading directly at the hospital, clinic, or exhibition pavilion.",
        },
      ],
    },
    experience: {
      tag: "Practical Applications",
      title: "Proven Track Record",
      description:
        "Complex projects delivered with excellence in healthcare logistics, trade shows, and high-caliber operations across Brazil.",
      items: [
        {
          src: "/imagens/health-1-nft-logistics.jpg",
          alt: "Import of Surgical Systems and Diagnostic Imaging Equipment",
          tag: "High Complexity",
          title: "Surgical Systems & Advanced Diagnostic Imaging Equipment",
        },
        {
          src: "/imagens/doutores-health.nft-logistics.webp",
          alt: "International Medical Congresses and Demonstrations in Brazil",
          tag: "Temporary Regime",
          title: "Surgical Robots for Live Demonstrations at Medical Congresses",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Specialized Transport and Handling of Sensitive Medical Equipment",
          tag: "Technical Logistics",
          title: "Specialized Technical Transport & Handling for Sensitive Medical Cargo",
        },
        {
          src: "/imagens/anvisa-health-nft-logistics.webp",
          alt: "Regulatory Approval and Customs Clearance with Anvisa",
          tag: "Sanitary Compliance",
          title: "100% Success Rate in Temporary ANVISA Clearances Over the Past 12 Months",
        },
      ],
    },
    faq: {
      tag: "Learn More",
      title: "Frequently Asked Questions About Healthcare Import",
      description:
        "Get answers regarding sanitary legislation, customs clearance, and exhibiting machinery in Brazil that does not yet have local registration.",
      bottomPrompt: "Still have a specific question?",
      bottomLinkText: "Speak with our regulatory team",
      items: [
        {
          question:
            "Can I import medical equipment to exhibit at trade shows if it does not yet have Anvisa registration?",
          answer: (
            <p>
              <strong>Yes!</strong> Under Brazilian customs law, medical equipment and hospital devices can enter the country under the special <strong>Temporary Admission regime for trade fairs and commercial events</strong>. Under this regime, import duties and taxes are fully suspended, and equipment can be exhibited and demonstrated without requiring permanent commercial registration with Anvisa, provided it is re-exported after the event.
            </p>
          ),
        },
        {
          question:
            "What documents are required to import healthcare machinery and products into Brazil?",
          answer: (
            <p>
              Required documentation includes the Commercial Invoice, Packing List, International Bill of Lading / Air Waybill (AWB or BL), Import License (LI) issued through Siscomex/LPCO, technical specification dossier of the machinery, and for definitive commercial distribution, the corresponding sanitary registration/notification and technical conformity certificates.
            </p>
          ),
        },
        {
          question:
            "How does NFT Logistics ensure the integrity of sensitive medical equipment?",
          answer: (
            <p>
              We build custom packaging using treated timber (ISPM 15 compliant) with multi-layered shock and vibration absorption. Our transportation employs air-ride suspension trucks, temperature monitoring, and tilt sensors, alongside skilled technical labor for precision rigging and white-glove placement at the exact site of installation.
            </p>
          ),
        },
      ],
    },
    cta: {
      imageAlt: "Consultation for healthcare import and trade shows NFT Logistics",
      badge: "Schedule a Meeting",
      title:
        "Do not risk your cargo with generalists. Choose experts who master ANVISA regulations and Special Customs Regimes.",
      description:
        "Whether exhibiting at trade shows without prior Anvisa registration or permanently nationalizing your medical technology line, our dedicated team guides you at every step.",
      buttonText: "Chat on WhatsApp with a Specialist",
      subText: "Immediate support for trade shows, congresses, and healthcare equipment imports.",
    },
  },
  cn: {
    whatsappMsg:
      "我想参加巴西的展会，但我的医疗设备尚未在 Anvisa 注册，希望启动进口流程。",
    hero: {
      imageAlt: "NFT Logistics 医疗设备与医院物流进口服务",
      badge: "Hospitalar 巴西国际医疗展官方指定国际货运代理",
      title: "医疗设备与医院精密机械进口至巴西",
      description:
        "专注于医院设备与医疗展会“暂时进境”（Admissão Temporária）特殊制度。全流程合规 | 全额税费暂免 | 精确时效把控",
      ctaProcess: "了解操作流程",
      ctaTalk: "咨询行业专家",
      stepsAnchor: "#steps",
      trustBadgeTitle: "100% 监管合规操作",
      trustBadgeDesc:
        "资深专家全程把关巴西国家卫生监督局（Anvisa）技术准入、卫生决议（RDC）及严苛国际装卸规范。",
    },
    challenge: {
      tag: "零意外进入巴西市场",
      title: "医疗设备暂时进境的核心挑战",
      description:
        "医疗设备物流操作要求如外科手术般精准。大型诊断系统、手术机器人与尖端科技设备在跨国调配中绝不容许出现监管合规风险。进入巴西最稳妥、高效的路径即为暂时进境制度（Admissão Temporária）。",
      cards: [
        {
          icon: "stethoscope",
          title: "医疗器械与成套诊断设备",
          desc: "针对CT机、核磁共振（MRI）、超声系统、实验室分析仪及高价值手术激光设备，提供具备避震防护的专业清关与技术级运输。",
        },
        {
          icon: "calendar",
          title: "展会、国际研讨会与现场演示",
          desc: "为跨国企业在 Hospitalar 医疗展、学术峰会及临床展示中参展医疗设备，提供全额暂停进口关税的暂时进境方案。",
        },
        {
          icon: "file",
          title: "法规事务与 Anvisa 卫生监管",
          desc: "严谨编制与审核技术卷宗、进口许可证（通过 Siscomex / LPCO 模块）、严格符合卫生决议（RDC），并在保税监管现场全程陪同查验。",
        },
      ],
    },
    stepsSection: {
      tag: "标准化实施步骤",
      title: "医疗设备进入巴西的 5 大战略步骤",
      p1: "医疗健康产品的进口需要遵循极其严密的程序。发票、税则归类与卫生监管要求之间的任何细微不符，都可能导致设备在海港或机场口岸滞留。",
      p2: "我们的方法论确保法律合规的高确定性、清关通关的高效迅速，并在到达最终目的地前全面保护仪器校准与高敏状态。",
      ctaButton: "针对您的设备咨询详情",
      steps: [
        {
          title: "法规诊断与海关税则归类 (NCM / HS 编码)",
          desc: "深入分析医疗设备技术规范，确定准确的巴西税则编码（NCM），核定卫生监管风险等级（I 至 IV 类）以及 LPCO 模块申请要求。",
        },
        {
          title: "技术卷宗编制与 Anvisa 许可申报 (LI / LPCO)",
          desc: "编制全套申报文件，通过 Siscomex / LPCO 系统递交进口许可证申请，并在始发港起运前确保所有前置卫生合规手续完备。",
        },
        {
          title: "特种防护包装与国际干线运输",
          desc: "按 ISPM 15（NIMF 15）国际标准量身定制防震、防撞木箱包装，配置专用减震缓冲结构，并提供全程可视化的国际干线运输。",
        },
        {
          title: "口岸海关清关与卫生监督现场查验",
          desc: "由资深关务专员在海港/空港现场全程陪同巴西联邦税务局与卫生局进行单证与实物查验，大幅加快 LI 获批与海关放行。",
        },
        {
          title: "特种内陆运输与目的地技术级交付",
          desc: "配备气囊减震与温控厢式车队进行公路运输，并在医院、实验室、诊所或展馆现场提供重型吊装与精密卸货就位。",
        },
      ],
    },
    experience: {
      tag: "实际应用经验",
      title: "实操实绩与口碑背书",
      description:
        "在巴西医疗物流、大型国际展会与尖端设备供应链领域成功执行多起高难度复杂项目。",
      items: [
        {
          src: "/imagens/health-1-nft-logistics.jpg",
          alt: "手术系统与诊断影像设备进口",
          tag: "高精密与复杂项目",
          title: "手术动力系统与高端医学影像诊断设备",
        },
        {
          src: "/imagens/doutores-health.nft-logistics.webp",
          alt: "巴西国际医疗展会与学术研讨会",
          tag: "暂时进境制度",
          title: "用于医学学术大会现场临床实操演示的手术机器人系统",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "高灵敏医疗设备特种专业运输",
          tag: "特种工程物流",
          title: "针对高灵敏度精密医疗仪器的技术运输与专业装卸",
        },
        {
          src: "/imagens/anvisa-health-nft-logistics.webp",
          alt: "巴西卫生监督局 Anvisa 审批与放行",
          tag: "卫生合规保障",
          title: "过去 12 个月内巴西 ANVISA 暂时进境审批保持 100% 成功率",
        },
      ],
    },
    faq: {
      tag: "常见问题",
      title: "医疗健康设备进口常见疑问解答",
      description:
        "解答关于巴西卫生监管法规、口岸清关流程，以及尚未取得巴西正式注册许可的医疗设备赴巴参展的常见问题。",
      bottomPrompt: "还有其他具体产品的问题？",
      bottomLinkText: "即刻与我们的法规事务团队沟通",
      items: [
        {
          question:
            "如果医疗设备尚未在巴西 Anvisa 注册，是否可以进口用于展会展示？",
          answer: (
            <p>
              <strong>可以！</strong> 根据巴西现行海关法规，医疗机械与医院设备可以通过<strong>商业展会与会议专属的“暂时进境”（Admissão Temporária）特殊海关制度</strong>进入巴西。在该制度下，全额免除/暂停缴纳进口税费，且无需具备 Anvisa 终审商业销售注册证即可进行实物展示与实机演示，前提是在展会结束后原样复出口退运。
            </p>
          ),
        },
        {
          question:
            "进口医院设备和医疗用品需要准备哪些单证文件？",
          answer: (
            <p>
              所需单证包括：商业发票（Commercial Invoice）、装箱单（Packing List）、国际提单（海运提单 BL 或空运提单 AWB）、通过巴西外贸系统 Siscomex/LPCO 核发的进口许可证（LI）、设备技术参数与规格卷宗；如为境内商业分销，还须提供对应的卫生注册/备案凭证及产品合格认证文件。
            </p>
          ),
        },
        {
          question:
            "NFT Logistics 如何保障精密脆弱的医疗设备在运输中万无一失？",
          answer: (
            <p>
              我们量身打造经过严格热处理熏蒸（符合 NIMF 15 / ISPM 15 标准）的多层减震防冲击木箱。内陆段全部采用气囊悬挂车队，配备温湿度监测与倾角感应器，并安排经验丰富的技术工程人员在交付地负责专业吊装与平稳就位。
            </p>
          ),
        },
      ],
    },
    cta: {
      imageAlt: "预约咨询巴西医疗设备与展会物流",
      badge: "预约专属咨询",
      title:
        "切勿将精密设备托付给普通货代。选择真正精通 ANVISA 卫生法规与特殊海关制度的专家。",
      description:
        "无论是在无 Anvisa 注册的情况下赴巴参展演示，还是将医疗科技产品正式引入巴西市场，我们的专家团队都会全程为您护航。",
      buttonText: "通过 WhatsApp 咨询专家",
      subText: "专人即时响应展会、峰会参展及医院设备进口需求。",
    },
  },
};

export default function HealthClient({ lang = "pt" }: HealthClientProps) {
  const t = CONTENT[lang] || CONTENT.pt;

  // Estado para o Accordion de FAQ (Bloco 5)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const whatsappHref = `https://wa.me/5511948530048?text=${encodeURIComponent(
    t.whatsappMsg
  )}`;

  const renderCardIcon = (icon: ChallengeCard["icon"]) => {
    switch (icon) {
      case "stethoscope":
        return <Stethoscope className="w-6 h-6" />;
      case "calendar":
        return <CalendarCheck className="w-6 h-6" />;
      case "file":
        return <FileCheck2 className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const stepsId = t.hero.stepsAnchor.replace("#", "");

  return (
    <div className="w-full bg-[#050b14] text-neutral-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* ========================================================================= */}
      <HeroSection
        pageKey="health"
        lang={lang}
      />

      {/* ========================================================================= */}
      {/* BLOCO 2: 3 CARDS ESCUROS                                                  */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#040912] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              {t.challenge.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {t.challenge.title}
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.challenge.description}
            </p>
          </div>

          {/* Grid com 3 cards escuros com hover suave para fundo azul e letras brancas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.challenge.cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-8 bg-[#09111e] shadow-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-600/30 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-sky-950/80 text-sky-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-sky-600 group-hover:border-transparent transition-all duration-300">
                    {renderCardIcon(card.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: 2 COLUNAS (5 PASSOS)                                             */}
      {/* ========================================================================= */}
      <section id={stepsId} className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#060e1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título e Texto */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>{t.stepsSection.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {t.stepsSection.title}
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {t.stepsSection.p1}
              </p>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                {t.stepsSection.p2}
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-sky-600/25"
                >
                  <span>{t.stepsSection.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna da Direita: 5 passos estratégicos */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              {t.stepsSection.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-12 rounded-2xl bg-[#0a1424] hover:bg-orange-600 hover:border-sky-600/50 transition-all duration-200 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: NOSSAS EXPERIÊNCIAS                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#040812] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1 rounded-full">
              {t.experience.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.experience.title}
            </h2>
            <p className="mt-3 text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.experience.description}
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {t.experience.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] bg-[#09111e] shadow-2xl flex items-end p-6 sm:p-8 cursor-pointer"
              >
                {/* Imagem de fundo: escurece no hover sem encolher */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-500 ease-out group-hover:brightness-60"
                  />
                </div>

                {/* Overlay com gradiente azul hospitalar escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/40 to-transparent transition-opacity duration-300 pointer-events-none" />

                {/* Título H3 */}
                <div className="relative z-10 w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 5: FAQ (PERGUNTAS FREQUENTES)                                       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#050b16]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título e Texto */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>{t.faq.tag}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.faq.title}
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                {t.faq.description}
              </p>

              <div className="pt-2 text-sm text-neutral-300">
                {t.faq.bottomPrompt}{" "}
                <br />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline font-medium"
                >
                  {t.faq.bottomLinkText}
                </a>
                .
              </div>
            </div>

            {/* Coluna da Direita: Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {t.faq.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#091220] border border-sky-950/70 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-sky-950/20 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full bg-sky-950/80 border border-sky-800/50 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180 bg-sky-600 text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-sky-950/60 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 6: HERO COMO CTA                                                    */}
      <CtaSection
        pageKey="saude"
        lang={lang}
        whatsappHref={whatsappHref}
      />
    </div>
  );
}
