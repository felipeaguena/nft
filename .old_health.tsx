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
      "Quero participar de feiras no Brasil e meus equipamentos ainda n├úo tem registro na Anvisa, quero come├ºar um processo de importa├º├úo.",
    hero: {
      imageAlt: "Log├¡stica e importa├º├úo hospitalar NFT Logistics",
      badge: "Official Freight Forwarder para a feira Hospitalar",
      title: "Importa├º├úo de M├íquinas e Produtos Hospitalares para o Brasil",
      description:
        "Especialistas em Admiss├úo Tempor├íria para uso hospitalar e eventos m├®dicos. Compliance Total | Suspens├úo de Impostos | Gest├úo de Prazos",
      ctaProcess: "Conhecer o Processo",
      ctaTalk: "Falar com Especialista",
      stepsAnchor: "#passos",
      trustBadgeTitle: "Opera├º├Áes 100% em Conformidade Regulat├│ria",
      trustBadgeDesc:
        "Assessoria t├®cnica especializada em exig├¬ncias da Anvisa, RDCs sanit├írias e rigorosos protocolos internacionais de manuseio.",
    },
    challenge: {
      tag: "Entrar no Brasil sem surpresas",
      title: "O Desafio da Importa├º├úo Hospitalar Tempor├íria",
      description:
        "A log├¡stica para equipamentos m├®dicos exige precis├úo cir├║rgica. M├íquinas de diagn├│stico, rob├│tica cir├║rgica e dispositivos de alta tecnologia precisam circular sem riscos regulat├│rios. O caminho mais seguro para o Brasil ├® a Admiss├úo Tempor├íria.",
      cards: [
        {
          icon: "stethoscope",
          title: "M├íquinas e Equipamentos M├®dicos",
          desc: "Desembara├ºo e transporte t├®cnico com controle de vibra├º├úo para tom├│grafos, resson├óncias magn├®ticas, ultrassons, equipamentos laboratoriais e lasers cir├║rgicos de alto valor agregado.",
        },
        {
          icon: "calendar",
          title: "Feiras, Congressos & Demonstra├º├Áes",
          desc: "Admiss├úo tempor├íria com suspens├úo de impostos para empresas globais que desejam expor produtos m├®dicos em eventos como a Feira Hospitalar, congressos cient├¡ficos e demonstra├º├Áes cl├¡nicas no Brasil.",
        },
        {
          icon: "file",
          title: "Gest├úo Regulat├│ria & Anvisa",
          desc: "Elabora├º├úo e an├ílise minuciosa de dossi├¬s t├®cnicos, Licen├ºa de Importa├º├úo (LI via m├│dulo LPCO), conformidade com as Resolu├º├Áes da Diretoria Colegiada (RDCs) e acompanhamento presencial em recintos alfandegados.",
        },
      ],
    },
    stepsSection: {
      tag: "Passo a Passo Estruturado",
      title: "5 Passos Estrat├®gicos para Importar Equipamentos M├®dicos para o Brasil",
      p1: "A importa├º├úo de artigos para sa├║de requer um protocolo rigoroso. Qualquer inconsist├¬ncia entre a fatura, a classifica├º├úo fiscal e as exig├¬ncias sanit├írias pode travar o equipamento nos portos ou aeroportos.",
      p2: "Nossa metodologia garante previsibilidade jur├¡dica, velocidade na libera├º├úo e preserva├º├úo total da calibra├º├úo e sensibilidade dos aparelhos at├® o destino final.",
      ctaButton: "Tirar D├║vidas sobre seu Equipamento",
      steps: [
        {
          title: "Diagn├│stico Regulat├│rio & Classifica├º├úo Fiscal (NCM)",
          desc: "An├ílise t├®cnica das especifica├º├Áes dos equipamentos m├®dicos, determina├º├úo correta da NCM e verifica├º├úo do enquadramento sanit├írio (classe de risco I a IV) e necessidade de LPCO.",
        },
        {
          title: "Dossi├¬ T├®cnico & Licenciamento Anvisa (LI / LPCO)",
          desc: "Elabora├º├úo da documenta├º├úo exigida, submiss├úo do pedido de Licen├ºa de Importa├º├úo no Siscomex e cumprimento de exig├¬ncias sanit├írias pr├®vias ao embarque na origem.",
        },
        {
          title: "Embalagens Especiais & Log├¡stica Internacional",
          desc: "Confec├º├úo de caixas de madeira sob medida (norma NIMF 15) com prote├º├úo anti-impacto, amortecedores de choque e transporte internacional com rastreamento integral de rota.",
        },
        {
          title: "Desembara├ºo Aduaneiro e Vistoria Sanit├íria nos Portos/Aeroportos",
          desc: "Acompanhamento presencial da inspe├º├úo f├¡sica e documental pela autoridade sanit├íria e pela Receita Federal, agilizando o deferimento da LI e o desembara├ºo aduaneiro.",
        },
        {
          title: "Transporte Especializado & Entrega T├®cnica no Destino",
          desc: "Transporte rodovi├írio em ve├¡culos com suspens├úo a ar e climatiza├º├úo controlada, i├ºamento e descarregamento t├®cnico no hospital, cl├¡nica ou pavilh├úo do evento.",
        },
      ],
    },
    experience: {
      tag: "Aplica├º├úo Pr├ítica",
      title: "Experi├¬ncia Comprovada",
      description:
        "Projetos complexos conduzidos com excel├¬ncia em log├¡stica m├®dica, feiras e opera├º├Áes de alto calibre no Brasil.",
      items: [
        {
          src: "/imagens/health-1-nft-logistics.jpg",
          alt: "Importa├º├úo de Sistemas Cir├║rgicos e Tecnologias de Imagem",
          tag: "Alta Complexidade",
          title: "Sistemas Cir├║rgicos e Equipamentos de Diagn├│stico por Imagem",
        },
        {
          src: "/imagens/doutores-health.nft-logistics.webp",
          alt: "Feiras e Congressos M├®dicos Internacionais no Brasil",
          tag: "Regime Tempor├írio",
          title: "Rob├┤s Cir├║rgicos para demonstra├º├Áes em congressos.",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Transporte Especializado e Manuseio de Cargas M├®dicas Sens├¡veis",
          tag: "Log├¡stica T├®cnica",
          title: "Transporte T├®cnico e Manuseio Especializado para Equipamentos Sens├¡veis",
        },
        {
          src: "/imagens/anvisa-health-nft-logistics.webp",
          alt: "Aprova├º├úo Regulat├│ria e Desembara├ºo Aduaneiro na Anvisa",
          tag: "Conformidade Sanit├íria",
          title: "100% de sucesso em libera├º├Áes ANVISA tempor├írias nos ├║ltimos 12 meses.",
        },
      ],
    },
    faq: {
      tag: "Saiba Mais",
      title: "Perguntas Frequentes sobre Importa├º├úo na Sa├║de",
      description:
        "Tire suas principais d├║vidas sobre legisla├º├úo sanit├íria, desembara├ºo alfandeg├írio e participa├º├úo em feiras no Brasil com maquin├írios que ainda n├úo possuem registro nacional.",
      bottomPrompt: "Ainda tem alguma d├║vida espec├¡fica?",
      bottomLinkText: "Converse com nossa equipe regulat├│ria",
      items: [
        {
          question:
            "Posso importar equipamentos m├®dicos para expor em feiras se ainda n├úo tiverem registro na Anvisa?",
          answer: (
            <p>
              <strong>Sim!</strong> Pela legisla├º├úo brasileira, ├® poss├¡vel realizar a entrada de equipamentos m├®dicos e dispositivos hospitalares pelo regime especial de <strong>Admiss├úo Tempor├íria para eventos e feiras comerciais</strong>. Nesse regime, h├í suspens├úo total dos tributos e o equipamento pode ser exibido e demonstrado sem necessidade de registro comercial definitivo da Anvisa, desde que retorne ├á sua origem ap├│s o evento.
            </p>
          ),
        },
        {
          question:
            "Quais s├úo os documentos exigidos para a importa├º├úo de m├íquinas e produtos hospitalares?",
          answer: (
            <p>
              A documenta├º├úo inclui Fatura Comercial (Commercial Invoice), Packing List, Conhecimento de Embarque Internacional (AWB ou Bill of Lading), Licen├ºa de Importa├º├úo (LI) emitida via Siscomex/LPCO, dossi├¬ t├®cnico das especifica├º├Áes do maquin├írio e, para opera├º├Áes definitivas de comercializa├º├úo, o respectivo registro ou notifica├º├úo sanit├íria e certifica├º├Áes de conformidade t├®cnica.
            </p>
          ),
        },
        {
          question:
            "Como a NFT Logistics assegura a integridade de equipamentos hospitalares sens├¡veis?",
          answer: (
            <p>
              Desenvolvemos embalagens sob medida com madeira tratada (NIMF 15) e camadas de absor├º├úo de vibra├º├úo e choque. Nossos transportes utilizam ve├¡culos com suspens├úo pneum├ítica, monitoramento de temperatura e sensores de inclina├º├úo, al├®m de m├úo de obra especializada para i├ºamento e entrega t├®cnica no local exato de instala├º├úo.
            </p>
          ),
        },
      ],
    },
    cta: {
      imageAlt: "Atendimento para importa├º├úo hospitalar e feiras NFT Logistics",
      badge: "Agende uma reuni├úo",
      title:
        "N├úo arrisque sua carga com generalistas. Escolha quem entende de ANVISA e Regimes Aduaneiros Especiais.",
      description:
        "Seja para expor em feiras sem anvisa pr├®via ou para nacionalizar sua linha de tecnologia m├®dica, nossa equipe especializada orienta voc├¬ em cada passo.",
      buttonText: "Falar no WhatsApp com Especialista",
      subText: "Atendimento imediato para feiras, congressos e importa├º├úo hospitalar.",
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
      "µêæµâ│ÕÅéÕèáÕÀ┤ÞÑ┐þÜäÕ▒òõ╝Ü´╝îõ¢åµêæþÜäÕî╗þûùÞ«¥ÕñçÕ░Üµ£¬Õ£¿ Anvisa µ│¿Õåî´╝îÕ©îµ£øÕÉ»Õè¿Þ┐øÕÅúµÁüþ¿ïÒÇé",
    hero: {
      imageAlt: "NFT Logistics Õî╗þûùÞ«¥Õñçõ©ÄÕî╗ÚÖóþë®µÁüÞ┐øÕÅúµ£ìÕèí",
      badge: "Hospitalar ÕÀ┤ÞÑ┐Õø¢ÚÖàÕî╗þûùÕ▒òÕ«ÿµû╣µîçÕ«ÜÕø¢ÚÖàÞ┤ºÞ┐Éõ╗úþÉå",
      title: "Õî╗þûùÞ«¥Õñçõ©ÄÕî╗ÚÖóþ▓¥Õ»åµ£║µó░Þ┐øÕÅúÞç│ÕÀ┤ÞÑ┐",
      description:
        "õ©ôµ│¿õ║ÄÕî╗ÚÖóÞ«¥Õñçõ©ÄÕî╗þûùÕ▒òõ╝ÜÔÇ£µÜéµùÂÞ┐øÕóâÔÇØ´╝êAdmiss├úo Tempor├íria´╝ëþë╣µ«èÕêÂÕ║ªÒÇéÕà¿µÁüþ¿ïÕÉêÞºä | Õà¿ÚóØþ¿ÄÞ┤╣µÜéÕàì | þ▓¥þí«µùÂµòêµèèµÄº",
      ctaProcess: "õ║åÞºúµôìõ¢£µÁüþ¿ï",
      ctaTalk: "ÕÆ¿Þ»óÞíîõ©Üõ©ôÕ«Â",
      stepsAnchor: "#steps",
      trustBadgeTitle: "100% þøæþ«íÕÉêÞºäµôìõ¢£",
      trustBadgeDesc:
        "ÞÁäµÀ▒õ©ôÕ«ÂÕà¿þ¿ïµèèÕà│ÕÀ┤ÞÑ┐Õø¢Õ«ÂÕì½þöƒþøæþØúÕ▒Ç´╝êAnvisa´╝ëµèÇµ£»ÕçåÕàÑÒÇüÕì½þöƒÕå│Þ««´╝êRDC´╝ëÕÅèõ©ÑÞïøÕø¢ÚÖàÞúàÕì©ÞºäÞîâÒÇé",
    },
    challenge: {
      tag: "ÚøÂµäÅÕñûÞ┐øÕàÑÕÀ┤ÞÑ┐Õ©éÕ£║",
      title: "Õî╗þûùÞ«¥ÕñçµÜéµùÂÞ┐øÕóâþÜäµá©Õ┐âµîæµêÿ",
      description:
        "Õî╗þûùÞ«¥Õñçþë®µÁüµôìõ¢£Þªüµ▒éÕªéÕñûþºæµëïµ£»Þê¼þ▓¥ÕçåÒÇéÕñºÕ×ïÞ»èµû¡þ│╗þ╗ƒÒÇüµëïµ£»µ£║ÕÖ¿õ║║õ©ÄÕ░ûþ½»þºæµèÇÞ«¥ÕñçÕ£¿ÞÀ¿Õø¢Þ░âÚàìõ©¡þ╗Øõ©ìÕ«╣Þ«©Õç║þÄ░þøæþ«íÕÉêÞºäÚúÄÚÖ®ÒÇéÞ┐øÕàÑÕÀ┤ÞÑ┐µ£Çþ¿│ÕªÑÒÇüÚ½ÿµòêþÜäÞÀ»Õ¥äÕì│õ©║µÜéµùÂÞ┐øÕóâÕêÂÕ║ª´╝êAdmiss├úo Tempor├íria´╝ëÒÇé",
      cards: [
        {
          icon: "stethoscope",
          title: "Õî╗þûùÕÖ¿µó░õ©ÄµêÉÕÑùÞ»èµû¡Þ«¥Õñç",
          desc: "ÚÆêÕ»╣CTµ£║ÒÇüµá©þúüÕà▒µî»´╝êMRI´╝ëÒÇüÞÂàÕú░þ│╗þ╗ƒÒÇüÕ«×Ú¬îÕ«ñÕêåµ×Éõ╗¬ÕÅèÚ½ÿõ╗ÀÕÇ╝µëïµ£»µ┐ÇÕàëÞ«¥Õñç´╝îµÅÉõ¥øÕàÀÕñçÚü┐Ú£çÚÿ▓µèñþÜäõ©ôõ©Üµ©àÕà│õ©ÄµèÇµ£»þ║ºÞ┐ÉÞ¥ôÒÇé",
        },
        {
          icon: "calendar",
          title: "Õ▒òõ╝ÜÒÇüÕø¢ÚÖàþáöÞ«¿õ╝Üõ©ÄþÄ░Õ£║µ╝öþñ║",
          desc: "õ©║ÞÀ¿Õø¢õ╝üõ©ÜÕ£¿ Hospitalar Õî╗þûùÕ▒òÒÇüÕ¡ªµ£»Õ│░õ╝ÜÕÅèõ©┤Õ║èÕ▒òþñ║õ©¡ÕÅéÕ▒òÕî╗þûùÞ«¥Õñç´╝îµÅÉõ¥øÕà¿ÚóØµÜéÕü£Þ┐øÕÅúÕà│þ¿ÄþÜäµÜéµùÂÞ┐øÕóâµû╣µíêÒÇé",
        },
        {
          icon: "file",
          title: "µ│òÞºäõ║ïÕèíõ©Ä Anvisa Õì½þöƒþøæþ«í",
          desc: "õ©ÑÞ░¿þ╝ûÕêÂõ©ÄÕ«íµá©µèÇµ£»ÕìÀÕ«ùÒÇüÞ┐øÕÅúÞ«©ÕÅ»Þ»ü´╝êÚÇÜÞ┐ç Siscomex / LPCO µ¿íÕØù´╝ëÒÇüõ©Ñµá╝þ¼ªÕÉêÕì½þöƒÕå│Þ««´╝êRDC´╝ë´╝îÕ╣ÂÕ£¿õ┐Øþ¿Äþøæþ«íþÄ░Õ£║Õà¿þ¿ïÚÖ¬ÕÉîµƒÑÚ¬îÒÇé",
        },
      ],
    },
    stepsSection: {
      tag: "µáçÕçåÕîûÕ«×µû¢µ¡ÑÚ¬ñ",
      title: "Õî╗þûùÞ«¥ÕñçÞ┐øÕàÑÕÀ┤ÞÑ┐þÜä 5 ÕñºµêÿþòÑµ¡ÑÚ¬ñ",
      p1: "Õî╗þûùÕüÑÕ║Àõ║ºÕôüþÜäÞ┐øÕÅúÚ£ÇÞªüÚüÁÕ¥¬µ×üÕàÂõ©ÑÕ»åþÜäþ¿ïÕ║ÅÒÇéÕÅæþÑ¿ÒÇüþ¿ÄÕêÖÕ¢Æþ▒╗õ©ÄÕì½þöƒþøæþ«íÞªüµ▒éõ╣ïÚù┤þÜäõ╗╗õ¢òþ╗åÕ¥«õ©ìþ¼ª´╝îÚâ¢ÕÅ»Þâ¢Õ»╝Þç┤Þ«¥ÕñçÕ£¿µÁÀµ©»µêûµ£║Õ£║ÕÅúÕ▓©µ╗×þòÖÒÇé",
      p2: "µêæõ╗¼þÜäµû╣µ│òÞ«║þí«õ┐Øµ│òÕ¥ïÕÉêÞºäþÜäÚ½ÿþí«Õ«ÜµÇºÒÇüµ©àÕà│ÚÇÜÕà│þÜäÚ½ÿµòêÞ┐àÚÇƒ´╝îÕ╣ÂÕ£¿Õê░Þ¥¥µ£Çþ╗êþø«þÜäÕ£░ÕëìÕà¿ÚØóõ┐Øµèñõ╗¬ÕÖ¿µáíÕçåõ©ÄÚ½ÿµòÅþèÂµÇüÒÇé",
      ctaButton: "ÚÆêÕ»╣µé¿þÜäÞ«¥ÕñçÕÆ¿Þ»óÞ»ªµâà",
      steps: [
        {
          title: "µ│òÞºäÞ»èµû¡õ©ÄµÁÀÕà│þ¿ÄÕêÖÕ¢Æþ▒╗ (NCM / HS þ╝ûþáü)",
          desc: "µÀ▒ÕàÑÕêåµ×ÉÕî╗þûùÞ«¥ÕñçµèÇµ£»ÞºäÞîâ´╝îþí«Õ«ÜÕçåþí«þÜäÕÀ┤ÞÑ┐þ¿ÄÕêÖþ╝ûþáü´╝êNCM´╝ë´╝îµá©Õ«ÜÕì½þöƒþøæþ«íÚúÄÚÖ®þ¡ëþ║º´╝êI Þç│ IV þ▒╗´╝ëõ╗ÑÕÅè LPCO µ¿íÕØùþö│Þ»ÀÞªüµ▒éÒÇé",
        },
        {
          title: "µèÇµ£»ÕìÀÕ«ùþ╝ûÕêÂõ©Ä Anvisa Þ«©ÕÅ»þö│µèÑ (LI / LPCO)",
          desc: "þ╝ûÕêÂÕà¿ÕÑùþö│µèÑµûçõ╗Â´╝îÚÇÜÞ┐ç Siscomex / LPCO þ│╗þ╗ƒÚÇÆõ║ñÞ┐øÕÅúÞ«©ÕÅ»Þ»üþö│Þ»À´╝îÕ╣ÂÕ£¿ÕºïÕÅæµ©»ÞÁÀÞ┐ÉÕëìþí«õ┐ØµëÇµ£ëÕëìþ¢«Õì½þöƒÕÉêÞºäµëïþ╗¡Õ«îÕñçÒÇé",
        },
        {
          title: "þë╣þºìÚÿ▓µèñÕîàÞúàõ©ÄÕø¢ÚÖàÕ╣▓þ║┐Þ┐ÉÞ¥ô",
          desc: "µîë ISPM 15´╝êNIMF 15´╝ëÕø¢ÚÖàµáçÕçåÚçÅÞ║½Õ«ÜÕêÂÚÿ▓Ú£çÒÇüÚÿ▓µÆ×µ£¿þ«▒ÕîàÞúà´╝îÚàìþ¢«õ©ôþö¿ÕçÅÚ£çþ╝ôÕå▓þ╗ôµ×ä´╝îÕ╣ÂµÅÉõ¥øÕà¿þ¿ïÕÅ»ÞºåÕîûþÜäÕø¢ÚÖàÕ╣▓þ║┐Þ┐ÉÞ¥ôÒÇé",
        },
        {
          title: "ÕÅúÕ▓©µÁÀÕà│µ©àÕà│õ©ÄÕì½þöƒþøæþØúþÄ░Õ£║µƒÑÚ¬î",
          desc: "þö▒ÞÁäµÀ▒Õà│Õèíõ©ôÕæÿÕ£¿µÁÀµ©»/þ®║µ©»þÄ░Õ£║Õà¿þ¿ïÚÖ¬ÕÉîÕÀ┤ÞÑ┐ÞüöÚéªþ¿ÄÕèíÕ▒Çõ©ÄÕì½þöƒÕ▒ÇÞ┐øÞíîÕìòÞ»üõ©ÄÕ«×þë®µƒÑÚ¬î´╝îÕñºÕ╣àÕèáÕ┐½ LI ÞÄÀµë╣õ©ÄµÁÀÕà│µö¥ÞíîÒÇé",
        },
        {
          title: "þë╣þºìÕåàÚÖåÞ┐ÉÞ¥ôõ©Äþø«þÜäÕ£░µèÇµ£»þ║ºõ║ñõ╗ÿ",
          desc: "ÚàìÕñçµ░öÕøèÕçÅÚ£çõ©Äµ©®µÄºÕÄóÕ╝ÅÞ¢ªÚÿƒÞ┐øÞíîÕà¼ÞÀ»Þ┐ÉÞ¥ô´╝îÕ╣ÂÕ£¿Õî╗ÚÖóÒÇüÕ«×Ú¬îÕ«ñÒÇüÞ»èµëÇµêûÕ▒òÚªåþÄ░Õ£║µÅÉõ¥øÚçìÕ×ïÕÉèÞúàõ©Äþ▓¥Õ»åÕì©Þ┤ºÕ░▒õ¢ìÒÇé",
        },
      ],
    },
    experience: {
      tag: "Õ«×ÚÖàÕ║öþö¿þ╗ÅÚ¬î",
      title: "Õ«×µôìÕ«×þ╗®õ©ÄÕÅúþóæÞâîõ╣ª",
      description:
        "Õ£¿ÕÀ┤ÞÑ┐Õî╗þûùþë®µÁüÒÇüÕñºÕ×ïÕø¢ÚÖàÕ▒òõ╝Üõ©ÄÕ░ûþ½»Þ«¥Õñçõ¥øÕ║öÚô¥ÚóåÕƒƒµêÉÕèƒµëºÞíîÕñÜÞÁÀÚ½ÿÚÜ¥Õ║ªÕñìµØéÚí╣þø«ÒÇé",
      items: [
        {
          src: "/imagens/health-1-nft-logistics.jpg",
          alt: "µëïµ£»þ│╗þ╗ƒõ©ÄÞ»èµû¡Õ¢▒ÕâÅÞ«¥ÕñçÞ┐øÕÅú",
          tag: "Ú½ÿþ▓¥Õ»åõ©ÄÕñìµØéÚí╣þø«",
          title: "µëïµ£»Õè¿Õèøþ│╗þ╗ƒõ©ÄÚ½ÿþ½»Õî╗Õ¡ªÕ¢▒ÕâÅÞ»èµû¡Þ«¥Õñç",
        },
        {
          src: "/imagens/doutores-health.nft-logistics.webp",
          alt: "ÕÀ┤ÞÑ┐Õø¢ÚÖàÕî╗þûùÕ▒òõ╝Üõ©ÄÕ¡ªµ£»þáöÞ«¿õ╝Ü",
          tag: "µÜéµùÂÞ┐øÕóâÕêÂÕ║ª",
          title: "þö¿õ║ÄÕî╗Õ¡ªÕ¡ªµ£»Õñºõ╝ÜþÄ░Õ£║õ©┤Õ║èÕ«×µôìµ╝öþñ║þÜäµëïµ£»µ£║ÕÖ¿õ║║þ│╗þ╗ƒ",
        },
        {
          src: "/imagens/transporte-nft-logistics.webp",
          alt: "Ú½ÿþüÁµòÅÕî╗þûùÞ«¥Õñçþë╣þºìõ©ôõ©ÜÞ┐ÉÞ¥ô",
          tag: "þë╣þºìÕÀÑþ¿ïþë®µÁü",
          title: "ÚÆêÕ»╣Ú½ÿþüÁµòÅÕ║ªþ▓¥Õ»åÕî╗þûùõ╗¬ÕÖ¿þÜäµèÇµ£»Þ┐ÉÞ¥ôõ©Äõ©ôõ©ÜÞúàÕì©",
        },
        {
          src: "/imagens/anvisa-health-nft-logistics.webp",
          alt: "ÕÀ┤ÞÑ┐Õì½þöƒþøæþØúÕ▒Ç Anvisa Õ«íµë╣õ©Äµö¥Þíî",
          tag: "Õì½þöƒÕÉêÞºäõ┐ØÚÜ£",
          title: "Þ┐çÕÄ╗ 12 õ©¬µ£êÕåàÕÀ┤ÞÑ┐ ANVISA µÜéµùÂÞ┐øÕóâÕ«íµë╣õ┐Øµîü 100% µêÉÕèƒþÄç",
        },
      ],
    },
    faq: {
      tag: "Õ©©ÞºüÚù«Úóÿ",
      title: "Õî╗þûùÕüÑÕ║ÀÞ«¥ÕñçÞ┐øÕÅúÕ©©ÞºüþûæÚù«Þºúþ¡ö",
      description:
        "Þºúþ¡öÕà│õ║ÄÕÀ┤ÞÑ┐Õì½þöƒþøæþ«íµ│òÞºäÒÇüÕÅúÕ▓©µ©àÕà│µÁüþ¿ï´╝îõ╗ÑÕÅèÕ░Üµ£¬ÕÅûÕ¥ùÕÀ┤ÞÑ┐µ¡úÕ╝Åµ│¿ÕåîÞ«©ÕÅ»þÜäÕî╗þûùÞ«¥ÕñçÞÁ┤ÕÀ┤ÕÅéÕ▒òþÜäÕ©©ÞºüÚù«ÚóÿÒÇé",
      bottomPrompt: "Þ┐ÿµ£ëÕàÂõ╗ûÕàÀõ¢ôõ║ºÕôüþÜäÚù«Úóÿ´╝ƒ",
      bottomLinkText: "Õì│Õê╗õ©Äµêæõ╗¼þÜäµ│òÞºäõ║ïÕèíÕøóÚÿƒµ▓ƒÚÇÜ",
      items: [
        {
          question:
            "Õªéµ×£Õî╗þûùÞ«¥ÕñçÕ░Üµ£¬Õ£¿ÕÀ┤ÞÑ┐ Anvisa µ│¿Õåî´╝îµÿ»ÕÉªÕÅ»õ╗ÑÞ┐øÕÅúþö¿õ║ÄÕ▒òõ╝ÜÕ▒òþñ║´╝ƒ",
          answer: (
            <p>
              <strong>ÕÅ»õ╗Ñ´╝ü</strong> µá╣µì«ÕÀ┤ÞÑ┐þÄ░ÞíîµÁÀÕà│µ│òÞºä´╝îÕî╗þûùµ£║µó░õ©ÄÕî╗ÚÖóÞ«¥ÕñçÕÅ»õ╗ÑÚÇÜÞ┐ç<strong>Õòåõ©ÜÕ▒òõ╝Üõ©Äõ╝ÜÞ««õ©ôÕ▒×þÜäÔÇ£µÜéµùÂÞ┐øÕóâÔÇØ´╝êAdmiss├úo Tempor├íria´╝ëþë╣µ«èµÁÀÕà│ÕêÂÕ║ª</strong>Þ┐øÕàÑÕÀ┤ÞÑ┐ÒÇéÕ£¿Þ»ÑÕêÂÕ║ªõ©ï´╝îÕà¿ÚóØÕàìÚÖñ/µÜéÕü£þ╝┤þ║│Þ┐øÕÅúþ¿ÄÞ┤╣´╝îõ©öµùáÚ£ÇÕàÀÕñç Anvisa þ╗êÕ«íÕòåõ©ÜÚöÇÕö«µ│¿ÕåîÞ»üÕì│ÕÅ»Þ┐øÞíîÕ«×þë®Õ▒òþñ║õ©ÄÕ«×µ£║µ╝öþñ║´╝îÕëìµÅÉµÿ»Õ£¿Õ▒òõ╝Üþ╗ôµØƒÕÉÄÕÄƒµáÀÕñìÕç║ÕÅúÚÇÇÞ┐ÉÒÇé
            </p>
          ),
        },
        {
          question:
            "Þ┐øÕÅúÕî╗ÚÖóÞ«¥ÕñçÕÆîÕî╗þûùþö¿ÕôüÚ£ÇÞªüÕçåÕñçÕô¬õ║øÕìòÞ»üµûçõ╗Â´╝ƒ",
          answer: (
            <p>
              µëÇÚ£ÇÕìòÞ»üÕîàµï¼´╝ÜÕòåõ©ÜÕÅæþÑ¿´╝êCommercial Invoice´╝ëÒÇüÞúàþ«▒Õìò´╝êPacking List´╝ëÒÇüÕø¢ÚÖàµÅÉÕìò´╝êµÁÀÞ┐ÉµÅÉÕìò BL µêûþ®║Þ┐ÉµÅÉÕìò AWB´╝ëÒÇüÚÇÜÞ┐çÕÀ┤ÞÑ┐ÕñûÞ┤©þ│╗þ╗ƒ Siscomex/LPCO µá©ÕÅæþÜäÞ┐øÕÅúÞ«©ÕÅ»Þ»ü´╝êLI´╝ëÒÇüÞ«¥ÕñçµèÇµ£»ÕÅéµò░õ©ÄÞºäµá╝ÕìÀÕ«ù´╝øÕªéõ©║ÕóâÕåàÕòåõ©ÜÕêåÚöÇ´╝îÞ┐ÿÚí╗µÅÉõ¥øÕ»╣Õ║öþÜäÕì½þöƒµ│¿Õåî/ÕñçµíêÕç¡Þ»üÕÅèõ║ºÕôüÕÉêµá╝Þ«ñÞ»üµûçõ╗ÂÒÇé
            </p>
          ),
        },
        {
          question:
            "NFT Logistics Õªéõ¢òõ┐ØÚÜ£þ▓¥Õ»åÞäåÕ╝▒þÜäÕî╗þûùÞ«¥ÕñçÕ£¿Þ┐ÉÞ¥ôõ©¡õ©çµùáõ©ÇÕñ▒´╝ƒ",
          answer: (
            <p>
              µêæõ╗¼ÚçÅÞ║½µëôÚÇáþ╗ÅÞ┐çõ©Ñµá╝þâ¡ÕñäþÉåþåÅÞÆ©´╝êþ¼ªÕÉê NIMF 15 / ISPM 15 µáçÕçå´╝ëþÜäÕñÜÕ▒éÕçÅÚ£çÚÿ▓Õå▓Õç╗µ£¿þ«▒ÒÇéÕåàÚÖåµ«ÁÕà¿Úâ¿Úççþö¿µ░öÕøèµé¼µîéÞ¢ªÚÿƒ´╝îÚàìÕñçµ©®µ╣┐Õ║ªþøæµÁïõ©ÄÕÇ¥ÞºÆµäƒÕ║öÕÖ¿´╝îÕ╣ÂÕ«ëµÄÆþ╗ÅÚ¬îõ©░Õ»îþÜäµèÇµ£»ÕÀÑþ¿ïõ║║ÕæÿÕ£¿õ║ñõ╗ÿÕ£░Þ┤ƒÞ┤úõ©ôõ©ÜÕÉèÞúàõ©ÄÕ╣│þ¿│Õ░▒õ¢ìÒÇé
            </p>
          ),
        },
      ],
    },
    cta: {
      imageAlt: "Úóäþ║ªÕÆ¿Þ»óÕÀ┤ÞÑ┐Õî╗þûùÞ«¥Õñçõ©ÄÕ▒òõ╝Üþë®µÁü",
      badge: "Úóäþ║ªõ©ôÕ▒×ÕÆ¿Þ»ó",
      title:
        "ÕêçÕï┐Õ░åþ▓¥Õ»åÞ«¥Õñçµëÿõ╗ÿþ╗ÖµÖ«ÚÇÜÞ┤ºõ╗úÒÇéÚÇëµï®þ£ƒµ¡úþ▓¥ÚÇÜ ANVISA Õì½þöƒµ│òÞºäõ©Äþë╣µ«èµÁÀÕà│ÕêÂÕ║ªþÜäõ©ôÕ«ÂÒÇé",
      description:
        "µùáÞ«║µÿ»Õ£¿µùá Anvisa µ│¿ÕåîþÜäµâàÕåÁõ©ïÞÁ┤ÕÀ┤ÕÅéÕ▒òµ╝öþñ║´╝îÞ┐ÿµÿ»Õ░åÕî╗þûùþºæµèÇõ║ºÕôüµ¡úÕ╝ÅÕ╝òÕàÑÕÀ┤ÞÑ┐Õ©éÕ£║´╝îµêæõ╗¼þÜäõ©ôÕ«ÂÕøóÚÿƒÚâ¢õ╝ÜÕà¿þ¿ïõ©║µé¿µèñÞê¬ÒÇé",
      buttonText: "ÚÇÜÞ┐ç WhatsApp ÕÆ¿Þ»óõ©ôÕ«Â",
      subText: "õ©ôõ║║Õì│µùÂÕôìÕ║öÕ▒òõ╝ÜÒÇüÕ│░õ╝ÜÕÅéÕ▒òÕÅèÕî╗ÚÖóÞ«¥ÕñçÞ┐øÕÅúÚ£Çµ▒éÒÇé",
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
          {/* Cabe├ºalho da se├º├úo */}
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
            {/* Coluna da Esquerda: T├¡tulo e Texto */}
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

            {/* Coluna da Direita: 5 passos estrat├®gicos */}
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
      {/* BLOCO 4: NOSSAS EXPERI├èNCIAS                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#040812] border-t border-sky-950/50">
        <div className="max-w-7xl mx-auto">
          {/* Cabe├ºalho */}
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

                {/* T├¡tulo H3 */}
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
            {/* Coluna da Esquerda: T├¡tulo e Texto */}
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
