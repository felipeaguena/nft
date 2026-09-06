"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Truck,
  Landmark,
  Layers,
  HeartPulse,
  Compass,
  Cpu,
  Palette,
  Briefcase,
  ChevronRight,
  CalendarCheck,
  Building,
  Plane,
  Anchor,
  Warehouse,
} from "lucide-react";
import SolutionsGrid from "./SolutionsGrid";

export type LanguageCode = "pt" | "en" | "cn";

interface SobreClientProps {
  lang?: LanguageCode;
}

export default function SobreClient({ lang = "pt" }: SobreClientProps) {
  const resolvedLang = lang;

  // Mensagens e links de WhatsApp personalizados para cada idioma
  const whatsappMessages: Record<LanguageCode, string> = {
    pt: "Olá! Gostaria de conversar com os diretores e especialistas da NFT Logistics sobre soluções de comércio exterior e logística.",
    en: "Hello! I would like to speak with NFT Logistics directors and specialists regarding international trade and logistics solutions.",
    cn: "您好！我想与 NFT Logistics 顾问团队沟通，了解国际物流与巴西外贸清关解决方案。",
  };

  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappMessages[resolvedLang]
  )}`;

  const content = {
    pt: {
      hero: {
        badge: "Excelência em Comércio Exterior & Logística Internacional",
        title: "Conectamos sua empresa ao mercado brasileiro com inteligência regulatória e precisão cirúrgica",
        subtitle:
          "Muito além do transporte de cargas: desarmamos a complexidade burocrática, eliminamos riscos fiscais e garantimos operações ponta a ponta com tolerância zero a atrasos.",
        btnPrimary: "Falar com Especialistas",
        btnSecondary: "Conhecer Nossa História",
        trustBadgeTitle: "Segurança e Conformidade Comprovadas",
        trustBadgeText:
          "Atuação consolidada nos maiores portos, aeroportos e recintos alfandegados do Brasil (Santos, Paranaguá, GRU, VCP e GIG).",
      },
      stats: [
        { value: "+15", label: "Anos de Experiência", detail: "Liderança em comércio exterior e trâmites regulatórios complexos" },
        { value: "+5.000", label: "Operações Concluídas", detail: "Com desembaraço aduaneiro seguro em portos e aeroportos" },
        { value: "100%", label: "Conformidade Regulatória", detail: "Rigor fiscal, segurança jurídica e tolerância zero a atrasos" },
        { value: "4", label: "Continentes Conectados", detail: "Américas, Europa, Ásia e África integrados diretamente ao Brasil" },
      ],
      story: {
        tag: "Nossa História & Propósito",
        title: "Nascemos para transformar barreiras burocráticas em caminhos livres para os negócios globais",
        p1: "O Brasil é uma das maiores economias do mundo, mas também um dos mercados com maior exigência regulatória e tributária. Erros no enquadramento de mercadorias, classificação fiscal incorreta ou falhas documentais em órgãos anuentes podem paralisar operações, gerar multas pesadas e causar prejuízos incalculáveis.",
        p2: "A NFT Logistics foi fundada com o propósito claro de ser a chave que destrava esse cenário para corporações internacionais, expositores de feiras globais e indústrias de ponta. Combinamos uma consultoria técnica de alto nível com uma execução operacional de campo implacável.",
        p3: "Não somos apenas despachantes aduaneiros nem meros agentes de carga: somos arquitetos de viabilidade internacional. Cuidamos de cada detalhe antes mesmo de o primeiro container ou palete ser carregado na origem, assegurando previsibilidade de custos, conformidade jurídica e chegada pontual.",
        floatingTitle: "Parceiro Estratégico no Brasil",
        floatingSubtitle: "Da origem internacional à entrega física no destino",
      },
      triad: {
        tag: "Nossos Princípios Fundamentais",
        title: "A bússola que orienta cada uma das nossas operações",
        subtitle: "Valores sólidos e compromisso inegociável com a integridade, segurança de carga e sucesso do cliente.",
        cards: [
          {
            badge: "Propósito",
            title: "Nossa Missão",
            desc: "Viabilizar conexões comerciais globais com fluidez, segurança regulatória e pontualidade cirúrgica, transformando a complexidade burocrática brasileira em vantagem competitiva e crescimento sustentável para nossos parceiros e clientes.",
            icon: Compass,
            image: "/imagens/transporte-nft-logistics.webp",
            imageAlt: "Transporte e logística internacional multimodal NFT Logistics",
          },
          {
            badge: "Futuro",
            title: "Nossa Visão",
            desc: "Ser a principal referência e parceiro de confiança na América Latina para operações de importação e exportação de alta complexidade, reconhecida pela excelência em regimes especiais, feiras internacionais, saúde e cargas críticas.",
            icon: Award,
            image: "/imagens/armazem.jpg",
            imageAlt: "Infraestrutura e armazenagem logística NFT Logistics",
          },
          {
            badge: "Cultura",
            title: "Nossos Valores",
            desc: "Segurança jurídica e conformidade inegociável; Pontualidade e tolerância zero a atrasos; Atendimento consultivo sênior e dedicado; Transparência e comunicação proativa em tempo real; Agilidade na resolução de desafios alfandegários.",
            icon: ShieldCheck,
            image: "/imagens/operacao-nft-logistics-5.jpg",
            imageAlt: "Equipe técnica e precisão operacional NFT Logistics",
          },
        ],
      },
      pillars: {
        tag: "Excelência Operacional",
        title: "Os 4 Pilares Estruturais da NFT Logistics",
        subtitle: "Como estruturamos nossa inteligência para entregar tranquilidade absoluta aos nossos clientes.",
        items: [
          {
            icon: ShieldCheck,
            title: "Inteligência Aduaneira & Compliance",
            desc: "Auditoria documental minuciosa pré-embarque. Análise aprofundada de NCM, elaboração de dossiês técnicos e licenciamento prévio junto a órgãos anuentes (Anvisa, Inmetro, MAPA e Anatel), garantindo desembaraço prioritário sem canal vermelho e sem multas.",
          },
          {
            icon: Landmark,
            title: "Domínio de Regimes Especiais",
            desc: "Expertise consolidada em Admissão Temporária, Drawback, Entreposto Aduaneiro e DAC. Estruturamos a melhor modelagem fiscal para garantir suspensão total ou isenção de impostos de importação com absoluta conformidade jurídica e controle rigoroso de prazos de reexportação.",
          },
          {
            icon: Truck,
            title: "Logística Multimodal Porta a Porta",
            desc: "Coordenação integrada de fretes marítimos (FCL/LCL), aéreos urgentes e transporte rodoviário dedicado. Gerenciamento de cargas sobredimensionadas, sensíveis e de alto valor agregado com monitoramento 24/7 e apólices de seguro internacional completas.",
          },
          {
            icon: Globe2,
            title: "Atendimento Global Multilíngue",
            desc: "Comunicação fluente e técnica em Português, Inglês e Mandarim (Chinês). Eliminamos ruídos de comunicação entre matrizes no exterior e autoridades aduaneiras locais, alinhando expectativas técnicas com rapidez e precisão cultural.",
          },
        ],
      },
      infrastructure: {
        tag: "Nossa Estrutura em Ação",
        title: "Presença operacional nos principais nós logísticos do Brasil",
        subtitle: "Atuação direta em terminais aéreos, marítimos e armazéns alfandegados estratégicos.",
        items: [
          {
            title: "Terminais Aéreos de Carga (GRU & VCP)",
            desc: "Agilidade expressa para componentes eletrônicos, saúde e feiras urgentes com liberação aduaneira acelerada.",
            image: "/imagens/operacao-nft-logistics-4.jpg",
            icon: Plane,
            badge: "Cargas Aéreas Críticas",
          },
          {
            title: "Portos de Santos, Paranaguá & Itajaí",
            desc: "Acompanhamento presencial de atracação, desova de containers FCL/LCL e coordenação aduaneira imediata.",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            icon: Anchor,
            badge: "Comércio Marítimo",
          },
          {
            title: "Armazenagem & Recintos Alfandegados",
            desc: "Infraestrutura para entreposto aduaneiro, inspeções sanitárias da Anvisa e montagem de kits especializados.",
            image: "/imagens/armazem-2.jpg",
            icon: Warehouse,
            badge: "Regimes Suspensivos",
          },
        ],
      },
      method: {
        tag: "Metodologia Comprovada",
        title: "O Método NFT: Da Origem ao Destino",
        subtitle: "Um fluxo orquestrado para garantir que nenhuma variável seja deixada ao acaso.",
        steps: [
          {
            num: "01",
            title: "Diagnóstico & Viabilidade Aduaneira",
            desc: "Análise prévia de faturas, packing lists, especificações técnicas e enquadramentos fiscais. Definição do regime tributário ótimo e identificação antecipada de exigências regulatórias.",
          },
          {
            num: "02",
            title: "Engenharia de Transporte & Coleta",
            desc: "Definição do melhor modal (aéreo ou marítimo), booking prioritário junto a companhias internacionais de primeira linha e coleta no fornecedor com emissão de AWB/BL sob medida.",
          },
          {
            num: "03",
            title: "Desembaraço Aduaneiro Prioritário",
            desc: "Parametrização e registro de DI/DUIMP com atuação presencial de despachantes seniores nos principais recintos alfandegados para obtenção rápida de canal verde.",
          },
          {
            num: "04",
            title: "Entrega Técnica & Pós-Operação",
            desc: "Transporte rodoviário seguro até o pavilhão da feira, armazém ou fábrica do cliente, acompanhado de gestão de prazos para posterior reexportação ou nacionalização definitiva.",
          },
        ],
      },
      sectors: {
        tag: "Setores Atendidos",
        title: "Expertise Setorial em Mercados Exigentes",
        subtitle: "Cada segmento possui particularidades regulatórias e logísticas que dominamos profundamente.",
        items: [
          {
            icon: CalendarCheck,
            title: "Feiras & Eventos Internacionais",
            desc: "Admissão temporária, entrega porta ao estande nos principais pavilhões do Brasil e cumprimento rígido de cronogramas.",
            link: "/pt/solucoes/feiras-e-eventos",
            image: "/imagens/feira-nft-logistics-3.jpg",
            category: "Exposições & Pavilhões",
          },
          {
            icon: HeartPulse,
            title: "Saúde, Farmacêutica & Farma",
            desc: "Conformidade integral com normas sanitárias da Anvisa, controle de temperatura e agilidade em produtos sensíveis.",
            link: "/pt/saude",
            image: "/imagens/anvisa-health-nft-logistics.webp",
            category: "Regulatório Anvisa",
          },
          {
            icon: Building,
            title: "Bens de Capital & Máquinas",
            desc: "Aproveitamento de Ex-Tarifário, transporte de cargas pesadas de projeto e desoneração fiscal para ativos industriais.",
            link: "/pt/solucoes",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            category: "Indústria & Projetos",
          },
          {
            icon: Cpu,
            title: "Alta Tecnologia & Eletrônicos",
            desc: "Homologações junto à Anatel e Inmetro, proteção contra avarias e logística expressa para produtos de alto valor agregado.",
            link: "/pt/solucoes",
            image: "/imagens/operacao-nft-logistics-6.jpg",
            category: "Telecom & Hardware",
          },
          {
            icon: Palette,
            title: "Obras de Arte & Peças de Museu",
            desc: "Embalagens climatizadas especiais, escolta armada quando necessária e manuseio cirúrgico para mostras e bienais.",
            link: "/pt/solucoes",
            image: "/imagens/nft-art-2.jpg",
            category: "Acervos & Mostras",
          },
          {
            icon: Briefcase,
            title: "Representação & Expansão Comercial",
            desc: "Apoio estratégico para multinacionais que buscam estabelecer presença e validar produtos no mercado nacional.",
            link: "/pt/contato",
            image: "/imagens/intersolar-nft-logistics.webp",
            category: "Presença no Brasil",
          },
        ],
      },
      differentials: {
        tag: "Por Que a NFT Logistics?",
        title: "O que nos diferencia no comércio exterior brasileiro",
        cards: [
          {
            title: "Consultoria Ativa vs. Despacho Passivo",
            desc: "Não esperamos a carga chegar ao porto brasileiro para descobrir pendências. Antecipamos e resolvemos potenciais problemas na origem.",
          },
          {
            title: "Presença nos Principais Portos e Aeroportos",
            desc: "Operamos diariamente em Santos, Paranaguá, Itajaí, Guarulhos (GRU), Viracopos (VCP) e Galeão (GIG) com equipe própria e parceiros homologados.",
          },
          {
            title: "Comunicação Sem Filtros ou Burocracia",
            desc: "Você conversa diretamente com os especialistas e diretores responsáveis pelo seu projeto, sem filas de espera, chamados automáticos ou call centers.",
          },
          {
            title: "Economia Real com Regimes Aduaneiros",
            desc: "Aplicamos a legislação tributária a favor do seu caixa, gerando economias substanciais em impostos de importação de forma 100% lícita e segura.",
          },
        ],
      },
      ctaSection: {
        tag: "Próximo Passo",
        title: "Pronto para estruturar sua operação com segurança jurídica e pontualidade?",
        desc: "Converse agora mesmo com nosso time de especialistas seniores e descubra como a NFT Logistics pode transformar a logística da sua empresa.",
        btnWhatsapp: "Falar via WhatsApp com Nossos Diretores",
        btnContact: "Enviar Mensagem pelo Formulário",
      },
    },
    en: {
      hero: {
        badge: "Excellence in International Trade & Global Logistics",
        title: "Connecting global enterprises to the Brazilian market with regulatory certainty and surgical precision",
        subtitle:
          "Far beyond traditional freight forwarding: we dismantle bureaucratic barriers, eliminate customs compliance risks, and guarantee end-to-end operations with zero tolerance for delays.",
        btnPrimary: "Speak with Specialists",
        btnSecondary: "Discover Our History",
        trustBadgeTitle: "Proven Compliance & Reliability",
        trustBadgeText:
          "Consolidated footprint across Brazil's top ports, airports, and bonded warehouses (Santos, Paranaguá, GRU, VCP, and GIG).",
      },
      stats: [
        { value: "+15", label: "Years of Experience", detail: "Leadership in cross-border trade and Brazilian regulatory customs" },
        { value: "+5,000", label: "Operations Delivered", detail: "With seamless clearance across all major Brazilian terminals" },
        { value: "100%", label: "Regulatory Compliance", detail: "Fiscal integrity, legal certainty, and zero tolerance for delays" },
        { value: "4", label: "Continents Connected", detail: "Americas, Europe, Asia, and Africa seamlessly integrated to Brazil" },
      ],
      story: {
        tag: "Our History & Purpose",
        title: "Built to transform regulatory bottlenecks into seamless pathways for global business",
        p1: "Brazil is one of the world's most dynamic markets, yet it poses complex regulatory, customs, and tax demands. Minor invoicing discrepancies or incorrect fiscal classifications can halt shipments and trigger severe penalties.",
        p2: "NFT Logistics was founded with a clear purpose: to be the strategic bridge that unlocks Brazil for multinational corporations, international exhibition leaders, and high-tech industries. We unite senior regulatory advisory with relentless operational field execution.",
        p3: "We are not merely freight forwarders or customs brokers: we are architects of international trade feasibility. We oversee every detail before cargo departs origin, ensuring cost predictability, legal compliance, and punctual arrival.",
        floatingTitle: "Strategic Partner in Brazil",
        floatingSubtitle: "From global origin to final delivery point",
      },
      triad: {
        tag: "Core Principles",
        title: "The compass guiding every shipment we handle",
        subtitle: "Solid values and uncompromised dedication to integrity, cargo safety, and client success.",
        cards: [
          {
            badge: "Purpose",
            title: "Our Mission",
            desc: "To empower global commercial connections with operational fluidity, regulatory certainty, and surgical punctuality, turning Brazilian bureaucracy into a strategic competitive edge for our clients.",
            icon: Compass,
            image: "/imagens/transporte-nft-logistics.webp",
            imageAlt: "NFT Logistics global transportation in motion",
          },
          {
            badge: "Future",
            title: "Our Vision",
            desc: "To be Latin America's leading trusted partner for high-complexity import and export operations, celebrated for excellence in special customs regimes, trade fairs, health solutions, and critical cargo.",
            icon: Award,
            image: "/imagens/armazem.jpg",
            imageAlt: "NFT Logistics bonded storage facility",
          },
          {
            badge: "Culture",
            title: "Our Values",
            desc: "Uncompromising legal and fiscal compliance; Strict punctuality and zero delay tolerance; Senior dedicated advisory; Transparent real-time communication; Agile resolution of customs challenges.",
            icon: ShieldCheck,
            image: "/imagens/operacao-nft-logistics-5.jpg",
            imageAlt: "NFT Logistics operational teamwork and rigor",
          },
        ],
      },
      pillars: {
        tag: "Operational Excellence",
        title: "The 4 Structural Pillars of NFT Logistics",
        subtitle: "How we engineer our logistics and regulatory intelligence to deliver total peace of mind.",
        items: [
          {
            icon: ShieldCheck,
            title: "Customs Intelligence & Compliance",
            desc: "Pre-shipment documentary audit. Rigorous HS code validation, technical dossiers, and regulatory approvals from Brazilian agencies (Anvisa, Inmetro, MAPA, Anatel) ensuring green-channel customs clearance.",
          },
          {
            icon: Landmark,
            title: "Mastery of Special Customs Regimes",
            desc: "Consolidated mastery in Temporary Admission, Drawback, Bonded Warehousing, and DAC. Structuring tax-suspension models that legally eliminate duties while strictly monitoring re-export deadlines.",
          },
          {
            icon: Truck,
            title: "End-to-End Multimodal Logistics",
            desc: "Integrated coordination of ocean freight (FCL/LCL), urgent air cargo, and dedicated bonded trucking. Professional handling for oversized, high-value, and time-critical project shipments.",
          },
          {
            icon: Globe2,
            title: "Global Multilingual Support",
            desc: "Fluent technical advisory in Portuguese, English, and Mandarin (Chinese). Eliminating language barriers between corporate headquarters and local authorities.",
          },
        ],
      },
      infrastructure: {
        tag: "Our Structure in Action",
        title: "Operational footprint across Brazil's key logistics gateways",
        subtitle: "Direct on-the-ground management across major airports, ocean terminals, and bonded hubs.",
        items: [
          {
            title: "Air Cargo Hubs (GRU & VCP)",
            desc: "Expedited handling for high-tech components, healthcare supplies, and urgent exhibition materials with priority release.",
            image: "/imagens/operacao-nft-logistics-4.jpg",
            icon: Plane,
            badge: "Urgent Air Cargo",
          },
          {
            title: "Santos, Paranaguá & Itajaí Seaports",
            desc: "Active dockside tracking, FCL/LCL container devanning, and immediate customs clearance coordination.",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            icon: Anchor,
            badge: "Maritime Trade",
          },
          {
            title: "Bonded Warehousing & Storage",
            desc: "Specialized infrastructure for customs warehousing, Anvisa sanitary inspections, and technical kit assembly.",
            image: "/imagens/armazem-2.jpg",
            icon: Warehouse,
            badge: "Duty-Suspension Regimes",
          },
        ],
      },
      method: {
        tag: "Proven Methodology",
        title: "The NFT Method: From Origin to Destination",
        subtitle: "An orchestrated roadmap ensuring no variable is left to chance.",
        steps: [
          {
            num: "01",
            title: "Customs Diagnosis & Feasibility",
            desc: "Preliminary analysis of invoices, packing lists, and regulatory demands. Selecting the optimal tax regime and identifying required licensing prior to shipment.",
          },
          {
            num: "02",
            title: "Transport Engineering & Origin Pickup",
            desc: "Routing determination, priority carrier booking, supplier pickup, and tailor-made international AWB/BL issuance with comprehensive cargo insurance.",
          },
          {
            num: "03",
            title: "Priority Customs Clearance",
            desc: "Advance filing and active representation across Brazilian customs posts by senior specialists for immediate green channel release.",
          },
          {
            num: "04",
            title: "Technical Delivery & Post-Operation",
            desc: "Dedicated onward transport directly to the exhibition booth, warehouse, or plant, backed by complete compliance monitoring for eventual re-exportation.",
          },
        ],
      },
      sectors: {
        tag: "Sectors We Serve",
        title: "Industry Expertise in Demanding Markets",
        subtitle: "Each sector has unique regulatory and logistic demands that we navigate with mastery.",
        items: [
          {
            icon: CalendarCheck,
            title: "International Fairs & Exhibitions",
            desc: "Door-to-booth logistics, temporary admission regimes, and strict schedule compliance across Brazil's top convention centers.",
            link: "/en/solutions/fairs-and-events",
            image: "/imagens/feira-nft-logistics-3.jpg",
            category: "Trade Fairs & Venues",
          },
          {
            icon: HeartPulse,
            title: "Healthcare, Pharma & Life Sciences",
            desc: "Full compliance with Anvisa healthcare regulations, temperature-controlled cold chains, and priority clearance.",
            link: "/en/health",
            image: "/imagens/anvisa-health-nft-logistics.webp",
            category: "Anvisa Sanitary Clearance",
          },
          {
            icon: Building,
            title: "Capital Goods & Heavy Machinery",
            desc: "Ex-Tarifário duty reductions, heavy-lift project cargo, and tailored multimodal engineering for industrial plants.",
            link: "/en/solutions",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            category: "Industrial Projects",
          },
          {
            icon: Cpu,
            title: "High-Tech & Electronics",
            desc: "Anatel and Inmetro conformity assessment, shock and moisture protection, and expedited air transport.",
            link: "/en/solutions",
            image: "/imagens/operacao-nft-logistics-6.jpg",
            category: "Telecom & Hardware",
          },
          {
            icon: Palette,
            title: "Fine Art & Museum Exhibitions",
            desc: "Climate-controlled specialized packaging, armed escorts when required, and white-glove museum handling.",
            link: "/en/solutions",
            image: "/imagens/nft-art-2.jpg",
            category: "Cultural Exhibitions",
          },
          {
            icon: Briefcase,
            title: "Commercial Representation in Brazil",
            desc: "Strategic local representation and logistical backing for foreign manufacturers entering Latin America's largest economy.",
            link: "/en/contact",
            image: "/imagens/intersolar-nft-logistics.webp",
            category: "Market Expansion",
          },
        ],
      },
      differentials: {
        tag: "Why Choose NFT Logistics?",
        title: "What sets us apart in Brazilian cross-border trade",
        cards: [
          {
            title: "Proactive Advisory vs. Passive Brokerage",
            desc: "We do not wait for cargo to arrive in Brazil to discover discrepancies. We review and resolve documentation at the origin.",
          },
          {
            title: "Presence in All Major Gateways",
            desc: "Daily operations across Santos, Paranaguá, Itajaí, São Paulo (GRU/VCP), and Rio de Janeiro (GIG) with our specialized ground team.",
          },
          {
            title: "Direct Access to Senior Specialists",
            desc: "Direct contact with senior directors handling your project—no call centers, support tickets, or automated answering machines.",
          },
          {
            title: "Substantial Tax Optimization",
            desc: "Leveraging legitimate Brazilian customs regimes to legally minimize tax liabilities and preserve cash flow.",
          },
        ],
      },
      ctaSection: {
        tag: "Next Step",
        title: "Ready to launch your operation with legal certainty and on-time delivery?",
        desc: "Connect directly with our senior directors and specialists to structure your upcoming Brazilian import or export operation.",
        btnWhatsapp: "Chat on WhatsApp with Our Directors",
        btnContact: "Send a Message via Contact Form",
      },
    },
    cn: {
      hero: {
        badge: "国际贸易与全球物流卓越服务",
        title: "以资深监管智慧与精准关务，协助跨国企业稳健拓展巴西市场",
        subtitle:
          "超越传统货运代理：我们化解繁琐的巴西官僚壁垒，消除合规与税务风险，提供端到端、零延误的高品质物流解决方案。",
        btnPrimary: "咨询关务专家",
        btnSecondary: "了解我们的历程",
        trustBadgeTitle: "经实践检验的合规保障",
        trustBadgeText:
          "在巴西主要港口、机场和保税园区（桑托斯港、瓜鲁柳斯GRU、维拉科波斯VCP等）拥有资深现场运作能力。",
      },
      stats: [
        { value: "+15", label: "年外贸物流经验", detail: "深耕巴西海关特殊监管及高难度跨国物流" },
        { value: "+5,000", label: "成功操作案例", detail: "覆盖巴西各大主要海港与国际空港的平稳清关" },
        { value: "100%", label: "法规与关务合规", detail: "严守税法合规底线，杜绝滞箱与违规罚款" },
        { value: "4", label: "大洲直连巴西", detail: "亚洲、欧洲、美洲、非洲无缝对接巴西全境" },
      ],
      story: {
        tag: "公司历程与创立初心",
        title: "化解巴西监管壁垒，为全球企业打通顺畅贸易通路",
        p1: "巴西是拉丁美洲最大的经济体，但其繁复的海关制度、多层级的税制以及严格的监管部门（如Anvisa、Inmetro、MAPA）往往令海外企业望而生畏。单据微小纰漏或税号错误就可能引发货物扣留与巨额罚金。",
        p2: "NFT Logistics 的创立初衷十分明确：成为跨国企业、国际展商与先进制造业开拓巴西市场的坚固桥梁。我们将高水平的关务咨询与现场执行力深度融合。",
        p3: "我们不仅是货运代理，更是企业在巴西的战略物流顾问。在货物于始发国装运之前，我们便已完成合规预审，确保费用透明可控、流程合法合规、货物按期送达。",
        floatingTitle: "巴西本地战略伙伴",
        floatingSubtitle: "从海外始发地到最终目的地的一站式交付",
      },
      triad: {
        tag: "企业核心基石",
        title: "指引我们每一单货物顺利通关的原则",
        subtitle: "以合规诚信为本，对货物安全与交付时效恪守最高标准。",
        cards: [
          {
            badge: "使命",
            title: "企业使命",
            desc: "以顺畅的运作、精准的监管智慧和严格的时效，化解巴西繁复关务壁垒，转化为客户开拓拉美市场的核心竞争优势。",
            icon: Compass,
            image: "/imagens/transporte-nft-logistics.webp",
            imageAlt: "NFT Logistics 多式联运物流",
          },
          {
            badge: "愿景",
            title: "企业愿景",
            desc: "成为拉丁美洲处理高难度进出口物流与海关特殊监管的首选标杆，在国际展会、医疗健康与重大工程物流领域享有卓越声誉。",
            icon: Award,
            image: "/imagens/armazem.jpg",
            imageAlt: "NFT Logistics 保税仓储中心",
          },
          {
            badge: "价值观",
            title: "核心价值观",
            desc: "百分之百合法合规；对延误零容忍；高管级专属咨询服务；全程透明的主动沟通；高效化解各类海关疑难问题。",
            icon: ShieldCheck,
            image: "/imagens/operacao-nft-logistics-5.jpg",
            imageAlt: "NFT Logistics 专业团队严谨操作",
          },
        ],
      },
      pillars: {
        tag: "核心运营优势",
        title: "NFT Logistics 四大支柱",
        subtitle: "凭借系统化的关务与物流体系，为客户提供全方位的安心保障。",
        items: [
          {
            icon: ShieldCheck,
            title: "海关法规智慧与合规预审",
            desc: "装运前严格审核商业发票、装箱单与技术资料。精准归类海关编码（NCM），提前申请监管许可证（LPCO），实现快速绿通道放行。",
          },
          {
            icon: Landmark,
            title: "精通特殊海关监管制度",
            desc: "深谙暂时进出口（Admissão Temporária）、退税（Drawback）、保税仓储等制度，合法实现关税免除或缓缴，严格管控复出口时限。",
          },
          {
            icon: Truck,
            title: "端到端多式联运网络",
            desc: "整合海运（FCL/LCL）、加急空运与巴西全境监管卡车运输，具备超大件、精密仪器与高货值货物的专业装卸与全额运输保险。",
          },
          {
            icon: Globe2,
            title: "中葡英三语本地化无缝对接",
            desc: "团队精通葡萄牙语、英语与中文，跨越语言障碍与时差，直接对接海外总部与巴西本地海关机构，沟通高效顺畅。",
          },
        ],
      },
      infrastructure: {
        tag: "现场操作实力",
        title: "覆盖巴西核心外贸口岸的现场清关网络",
        subtitle: "在圣保罗主要机场、大型海运港口及保税仓库常驻专业操作人员。",
        items: [
          {
            title: "国际空港枢纽 (GRU & VCP)",
            desc: "为高货值电子元器件、医疗急需物资与紧急展品提供优先通关与高速地面中转。",
            image: "/imagens/operacao-nft-logistics-4.jpg",
            icon: Plane,
            badge: "加急航空货运",
          },
          {
            title: "桑托斯港、巴拉那瓜港与伊塔雅伊港",
            desc: "集装箱靠泊全程跟踪、拆箱验货及查验现场高效配合，避免产生额外滞期费用。",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            icon: Anchor,
            badge: "海运口岸运作",
          },
          {
            title: "保税仓储与特殊监管中心",
            desc: "提供保税仓储、卫生局查验专用区以及工程物资分拨等全方位配套支持。",
            image: "/imagens/armazem-2.jpg",
            icon: Warehouse,
            badge: "保税暂存与分拨",
          },
        ],
      },
      method: {
        tag: "成熟服务流程",
        title: "NFT 服务路径：从起运港到目的地",
        subtitle: "环环相扣的标准化流程，杜绝任何操作盲区。",
        steps: [
          {
            num: "01",
            title: "关务评估与方案设计",
            desc: "装运前审核货品清单与技术规格，制定最佳清关与税收筹划路径，明确监管审批要点。",
          },
          {
            num: "02",
            title: "国际运输与始发港提货",
            desc: "安排起运港提货与国际海空运订舱，出具符合巴西海关要求的提单，全程跟踪运输节点。",
          },
          {
            num: "03",
            title: "口岸优先清关与协调",
            desc: "货物抵达巴西口岸前预录入海关系统，资深清关团队现场跟进查验与税费处理，确保快速放行。",
          },
          {
            num: "04",
            title: "现场交付与后续监管跟进",
            desc: "安排巴西境内专车送至展位、仓库或工厂，并跟进后续的复运出境或转正消费等法定手续。",
          },
        ],
      },
      sectors: {
        tag: "核心服务行业",
        title: "深耕各大严苛监管领域",
        subtitle: "针对不同行业的技术规范与时效要求，提供定制化关务策略。",
        items: [
          {
            icon: CalendarCheck,
            title: "国际展会与大型活动",
            desc: "暂时进境免税申报、门到展位全程配送，保障展品在布展日前安全进驻展台。",
            link: "/cn/solutions-cn/fairs-and-events-cn",
            image: "/imagens/feira-nft-logistics-3.jpg",
            category: "大型展会与展台",
          },
          {
            icon: HeartPulse,
            title: "医疗器械、医药与大健康",
            desc: "严格符合巴西卫生监督局（Anvisa）标准，温控冷链保障，医疗急需物资优先通关。",
            link: "/cn/health-cn",
            image: "/imagens/anvisa-health-nft-logistics.webp",
            category: "Anvisa卫生监管",
          },
          {
            icon: Building,
            title: "机械设备与大型工程项目",
            desc: "利用 Ex-Tarifário 关税减免政策，特种大件多式联运，支持巴西工业生产线建设。",
            link: "/cn/solutions-cn",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            category: "重大工业装备",
          },
          {
            icon: Cpu,
            title: "高新技术与电子通信",
            desc: "办理 Anatel 与 Inmetro 认证审批，提供高防震抗潮包装与加急空运方案。",
            link: "/cn/solutions-cn",
            image: "/imagens/operacao-nft-logistics-6.jpg",
            category: "通信与高精硬件",
          },
          {
            icon: Palette,
            title: "艺术品与贵重藏品",
            desc: "恒温恒湿特种包装、专业安保押运，为跨国艺术展览提供最高级别的细致服务。",
            link: "/cn/solutions-cn",
            image: "/imagens/nft-art-2.jpg",
            category: "艺术双年展与博物馆",
          },
          {
            icon: Briefcase,
            title: "商业代表与市场拓展支持",
            desc: "为有意开拓巴西市场的海外制造商提供本地商业代表、资质准入与仓储支持。",
            link: "/cn/contact-cn",
            image: "/imagens/intersolar-nft-logistics.webp",
            category: "巴西市场落地",
          },
        ],
      },
      differentials: {
        tag: "为什么选择 NFT Logistics",
        title: "我们在巴西外贸物流领域的独特竞争优势",
        cards: [
          {
            title: "始发港主动预审 vs. 抵港被动补救",
            desc: "不在货物抵港后才发现单据问题。我们在发货前完成全套审核，杜绝口岸压港罚款。",
          },
          {
            title: "覆盖巴西各大主要口岸与机场",
            desc: "在桑托斯港、巴拉那瓜港、圣保罗GRU与VCP机场均有稳定现场操作力量。",
          },
          {
            title: "高管及资深顾问一对一服务",
            desc: "直接与项目主管专家沟通，免除呼叫中心与繁琐工单，保障即时决策与响应。",
          },
          {
            title: "运用合法海关制度切实降本",
            desc: "充分利用巴西海关法赋予的特殊监管制度，合法合规为企业大幅缩减税费开支。",
          },
        ],
      },
      ctaSection: {
        tag: "立即行动",
        title: "准备好在巴西开展安全合规、准时无忧的物流运作了吗？",
        desc: "欢迎直接联系 NFT Logistics 资深顾问团队，获取量身定制的国际物流与海关清关解决方案。",
        btnWhatsapp: "通过 WhatsApp 直接咨询高管团队",
        btnContact: "填写联络表单获取方案",
      },
    },
  };

  const t = content[resolvedLang] || content.pt;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO INSTITUCIONAL                                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics.jpg"
            alt="NFT Logistics Operação Internacional"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.34] dark:brightness-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#180f08]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-orange-600/15 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.15] drop-shadow-lg">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.hero.btnPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#historia"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.hero.btnSecondary}</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-2xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {t.hero.trustBadgeTitle}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                {t.hero.trustBadgeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS / KEY METRICS RIBBON                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 dark:text-orange-500 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-base font-bold text-neutral-900 dark:text-white">
                  {stat.label}
                </div>
                <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HISTÓRIA & PROPÓSITO (STORYTELLING EM 2 COLUNAS)                       */}
      {/* ========================================================================= */}
      <section
        id="historia"
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna Imagem (6 colunas) */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-3.jpg"
                    alt="Operações de alta complexidade da NFT Logistics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {t.story.floatingTitle}
                    </p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
                      {t.story.floatingSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Texto (6 colunas) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {t.story.tag}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.story.title}
              </h2>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                  {t.story.p3}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all duration-200 shadow-md"
                >
                  <span>{t.hero.btnPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MISSÃO, VISÃO E VALORES (TRÍADE COM FOTOS REAIS)                       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.triad.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.triad.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.triad.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.triad.cards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-orange-500/50 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Foto de Capa do Card */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                    
                    {/* Badge sobre a imagem */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-white/90 dark:bg-neutral-900/90 text-orange-600 dark:text-orange-400 backdrop-blur-md shadow-xs border border-orange-200 dark:border-orange-500/30">
                        {card.badge}
                      </span>
                    </div>

                    {/* Ícone flutuante */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-orange-600 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Conteúdo textual do card */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PILARES DE EXCELÊNCIA OPERACIONAL                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.pillars.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.pillars.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.pillars.items.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-neutral-50/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-400/30 flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5.1 NOVA GALERIA DE INFRAESTRUTURA OPERACIONAL (PORTOS, AEROPORTOS, ARMAZÉNS) */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.infrastructure.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.infrastructure.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.infrastructure.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.infrastructure.items.map((infra, idx) => {
              const IconComp = infra.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={infra.image}
                      alt={infra.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md">
                        {infra.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold drop-shadow-sm">NFT Logistics Ground Presence</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {infra.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {infra.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. NOSSO MÉTODO (DA ORIGEM AO DESTINO)                                    */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.method.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.method.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.method.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.method.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-2xl bg-neutral-50/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-orange-600 dark:text-orange-500">
                      {step.num}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SETORES DE ESPECIALIDADE COM FOTOS REAIS EM CADA CARD                  */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.sectors.tag}
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.sectors.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.sectors.items.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <Link
                  key={idx}
                  href={sector.link}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 hover:border-orange-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
                >
                  {/* Foto de Capa do Setor */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                    {/* Tag Categoria sobre a foto */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-white/90 dark:bg-neutral-900/90 text-orange-600 dark:text-orange-400 backdrop-blur-md shadow-xs border border-orange-200 dark:border-orange-500/30">
                        {sector.category}
                      </span>
                    </div>

                    {/* Ícone flutuante */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-orange-600 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Conteúdo textual */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {sector.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
                      <span>
                        {resolvedLang === "pt"
                          ? "Saiba mais sobre o setor"
                          : resolvedLang === "en"
                          ? "Learn more about the sector"
                          : "了解该行业解决方案"}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DIFERENCIAIS COMPETITIVOS COM IMAGEM OPERACIONAL                       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {t.differentials.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.differentials.title}
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                {resolvedLang === "pt"
                  ? "Entrar ou operar no Brasil sem uma assessoria especializada é assumir riscos tributários e operacionais imensos. Nós transformamos incertezas em solidez."
                  : resolvedLang === "en"
                  ? "Operating in Brazil without specialized customs intelligence invites tremendous tax and operational risk. We transform uncertainty into solid results."
                  : "在缺乏专业关务智慧的情况下进入巴西市场将面临巨大的税务与清关风险。我们将不确定性转化为坚实的商业成果。"}
              </p>

              <div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>{t.hero.btnPrimary}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              {t.differentials.cards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-50/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                        {item.desc}
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
      {/* 10. CTA FINAL INSTITUCIONAL COM FOTO DE FUNDO CINEMATOGRÁFICA              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white border-t border-neutral-800">
        {/* Imagem de Fundo com Escurecimento e Gradiente */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/imagens/transporte-nft-logistics.webp"
            alt="Logística Internacional NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/15 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/70 border border-orange-800/60 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            {t.ctaSection.tag}
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight max-w-4xl drop-shadow-md">
            {t.ctaSection.title}
          </h2>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            {t.ctaSection.desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-base shadow-xl shadow-orange-600/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>{t.ctaSection.btnWhatsapp}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href={
                resolvedLang === "pt"
                  ? "/pt/contato"
                  : resolvedLang === "en"
                  ? "/en/contact"
                  : "/cn/contact-cn"
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
            >
              <span>{t.ctaSection.btnContact}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
