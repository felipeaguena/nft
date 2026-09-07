"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/src/components/HeroSection";
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

export type LanguageCode = "pt" | "en" | "cn";

interface SobreClientProps {
  lang?: LanguageCode;
}

export default function SobreClient({ lang = "pt" }: SobreClientProps) {
  const resolvedLang = lang;

  // Mensagens e links de WhatsApp personalizados para cada idioma
  const whatsappMessages: Record<LanguageCode, string> = {
    pt: "Ol├í! Gostaria de conversar com os diretores e especialistas da NFT Logistics sobre solu├º├Áes de com├®rcio exterior e log├¡stica.",
    en: "Hello! I would like to speak with NFT Logistics directors and specialists regarding international trade and logistics solutions.",
    cn: "µé¿ÕÑ¢´╝üµêæµâ│õ©Ä NFT Logistics Úí¥Úù«ÕøóÚÿƒµ▓ƒÚÇÜ´╝îõ║åÞºúÕø¢ÚÖàþë®µÁüõ©ÄÕÀ┤ÞÑ┐ÕñûÞ┤©µ©àÕà│ÞºúÕå│µû╣µíêÒÇé",
  };

  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    whatsappMessages[resolvedLang]
  )}`;

  const content = {
    pt: {
      hero: {
        badge: "Excel├¬ncia em Com├®rcio Exterior & Log├¡stica Internacional",
        title: "Conectamos sua empresa ao mercado brasileiro com intelig├¬ncia regulat├│ria e precis├úo cir├║rgica",
        subtitle:
          "Muito al├®m do transporte de cargas: desarmamos a complexidade burocr├ítica, eliminamos riscos fiscais e garantimos opera├º├Áes ponta a ponta com toler├óncia zero a atrasos.",
        btnPrimary: "Falar com Especialistas",
        btnSecondary: "Conhecer Nossa Hist├│ria",
        trustBadgeTitle: "Seguran├ºa e Conformidade Comprovadas",
        trustBadgeText:
          "Atua├º├úo consolidada nos maiores portos, aeroportos e recintos alfandegados do Brasil (Santos, Paranagu├í, GRU, VCP e GIG).",
      },
      stats: [
        { value: "+15", label: "Anos de Experi├¬ncia", detail: "Lideran├ºa em com├®rcio exterior e tr├ómites regulat├│rios complexos" },
        { value: "+5.000", label: "Opera├º├Áes Conclu├¡das", detail: "Com desembara├ºo aduaneiro seguro em portos e aeroportos" },
        { value: "100%", label: "Conformidade Regulat├│ria", detail: "Rigor fiscal, seguran├ºa jur├¡dica e toler├óncia zero a atrasos" },
        { value: "4", label: "Continentes Conectados", detail: "Am├®ricas, Europa, ├üsia e ├üfrica integrados diretamente ao Brasil" },
      ],
      story: {
        tag: "Nossa Hist├│ria & Prop├│sito",
        title: "Nascemos para transformar barreiras burocr├íticas em caminhos livres para os neg├│cios globais",
        p1: "O Brasil ├® uma das maiores economias do mundo, mas tamb├®m um dos mercados com maior exig├¬ncia regulat├│ria e tribut├íria. Erros no enquadramento de mercadorias, classifica├º├úo fiscal incorreta ou falhas documentais em ├│rg├úos anuentes podem paralisar opera├º├Áes, gerar multas pesadas e causar preju├¡zos incalcul├íveis.",
        p2: "A NFT Logistics foi fundada com o prop├│sito claro de ser a chave que destrava esse cen├írio para corpora├º├Áes internacionais, expositores de feiras globais e ind├║strias de ponta. Combinamos uma consultoria t├®cnica de alto n├¡vel com uma execu├º├úo operacional de campo implac├ível.",
        p3: "N├úo somos apenas despachantes aduaneiros nem meros agentes de carga: somos arquitetos de viabilidade internacional. Cuidamos de cada detalhe antes mesmo de o primeiro container ou palete ser carregado na origem, assegurando previsibilidade de custos, conformidade jur├¡dica e chegada pontual.",
        floatingTitle: "Parceiro Estrat├®gico no Brasil",
        floatingSubtitle: "Da origem internacional ├á entrega f├¡sica no destino",
      },
      triad: {
        tag: "Nossos Princ├¡pios Fundamentais",
        title: "A b├║ssola que orienta cada uma das nossas opera├º├Áes",
        subtitle: "Valores s├│lidos e compromisso inegoci├ível com a integridade, seguran├ºa de carga e sucesso do cliente.",
        cards: [
          {
            badge: "Prop├│sito",
            title: "Nossa Miss├úo",
            desc: "Viabilizar conex├Áes comerciais globais com fluidez, seguran├ºa regulat├│ria e pontualidade cir├║rgica, transformando a complexidade burocr├ítica brasileira em vantagem competitiva e crescimento sustent├ível para nossos parceiros e clientes.",
            icon: Compass,
            image: "/imagens/transporte-nft-logistics.webp",
            imageAlt: "Transporte e log├¡stica internacional multimodal NFT Logistics",
          },
          {
            badge: "Futuro",
            title: "Nossa Vis├úo",
            desc: "Ser a principal refer├¬ncia e parceiro de confian├ºa na Am├®rica Latina para opera├º├Áes de importa├º├úo e exporta├º├úo de alta complexidade, reconhecida pela excel├¬ncia em regimes especiais, feiras internacionais, sa├║de e cargas cr├¡ticas.",
            icon: Award,
            image: "/imagens/armazem.jpg",
            imageAlt: "Infraestrutura e armazenagem log├¡stica NFT Logistics",
          },
          {
            badge: "Cultura",
            title: "Nossos Valores",
            desc: "Seguran├ºa jur├¡dica e conformidade inegoci├ível; Pontualidade e toler├óncia zero a atrasos; Atendimento consultivo s├¬nior e dedicado; Transpar├¬ncia e comunica├º├úo proativa em tempo real; Agilidade na resolu├º├úo de desafios alfandeg├írios.",
            icon: ShieldCheck,
            image: "/imagens/operacao-nft-logistics-5.jpg",
            imageAlt: "Equipe t├®cnica e precis├úo operacional NFT Logistics",
          },
        ],
      },
      pillars: {
        tag: "Excel├¬ncia Operacional",
        title: "Os 4 Pilares Estruturais da NFT Logistics",
        subtitle: "Como estruturamos nossa intelig├¬ncia para entregar tranquilidade absoluta aos nossos clientes.",
        items: [
          {
            icon: ShieldCheck,
            title: "Intelig├¬ncia Aduaneira & Compliance",
            desc: "Auditoria documental minuciosa pr├®-embarque. An├ílise aprofundada de NCM, elabora├º├úo de dossi├¬s t├®cnicos e licenciamento pr├®vio junto a ├│rg├úos anuentes (Anvisa, Inmetro, MAPA e Anatel), garantindo desembara├ºo priorit├írio sem canal vermelho e sem multas.",
          },
          {
            icon: Landmark,
            title: "Dom├¡nio de Regimes Especiais",
            desc: "Expertise consolidada em Admiss├úo Tempor├íria, Drawback, Entreposto Aduaneiro e DAC. Estruturamos a melhor modelagem fiscal para garantir suspens├úo total ou isen├º├úo de impostos de importa├º├úo com absoluta conformidade jur├¡dica e controle rigoroso de prazos de reexporta├º├úo.",
          },
          {
            icon: Truck,
            title: "Log├¡stica Multimodal Porta a Porta",
            desc: "Coordena├º├úo integrada de fretes mar├¡timos (FCL/LCL), a├®reos urgentes e transporte rodovi├írio dedicado. Gerenciamento de cargas sobredimensionadas, sens├¡veis e de alto valor agregado com monitoramento 24/7 e ap├│lices de seguro internacional completas.",
          },
          {
            icon: Globe2,
            title: "Atendimento Global Multil├¡ngue",
            desc: "Comunica├º├úo fluente e t├®cnica em Portugu├¬s, Ingl├¬s e Mandarim (Chin├¬s). Eliminamos ru├¡dos de comunica├º├úo entre matrizes no exterior e autoridades aduaneiras locais, alinhando expectativas t├®cnicas com rapidez e precis├úo cultural.",
          },
        ],
      },
      infrastructure: {
        tag: "Nossa Estrutura em A├º├úo",
        title: "Presen├ºa operacional nos principais n├│s log├¡sticos do Brasil",
        subtitle: "Atua├º├úo direta em terminais a├®reos, mar├¡timos e armaz├®ns alfandegados estrat├®gicos.",
        items: [
          {
            title: "Terminais A├®reos de Carga (GRU & VCP)",
            desc: "Agilidade expressa para componentes eletr├┤nicos, sa├║de e feiras urgentes com libera├º├úo aduaneira acelerada.",
            image: "/imagens/operacao-nft-logistics-4.jpg",
            icon: Plane,
            badge: "Cargas A├®reas Cr├¡ticas",
          },
          {
            title: "Portos de Santos, Paranagu├í & Itaja├¡",
            desc: "Acompanhamento presencial de atraca├º├úo, desova de containers FCL/LCL e coordena├º├úo aduaneira imediata.",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            icon: Anchor,
            badge: "Com├®rcio Mar├¡timo",
          },
          {
            title: "Armazenagem & Recintos Alfandegados",
            desc: "Infraestrutura para entreposto aduaneiro, inspe├º├Áes sanit├írias da Anvisa e montagem de kits especializados.",
            image: "/imagens/armazem-2.jpg",
            icon: Warehouse,
            badge: "Regimes Suspensivos",
          },
        ],
      },
      method: {
        tag: "Metodologia Comprovada",
        title: "O M├®todo NFT: Da Origem ao Destino",
        subtitle: "Um fluxo orquestrado para garantir que nenhuma vari├ível seja deixada ao acaso.",
        steps: [
          {
            num: "01",
            title: "Diagn├│stico & Viabilidade Aduaneira",
            desc: "An├ílise pr├®via de faturas, packing lists, especifica├º├Áes t├®cnicas e enquadramentos fiscais. Defini├º├úo do regime tribut├írio ├│timo e identifica├º├úo antecipada de exig├¬ncias regulat├│rias.",
          },
          {
            num: "02",
            title: "Engenharia de Transporte & Coleta",
            desc: "Defini├º├úo do melhor modal (a├®reo ou mar├¡timo), booking priorit├írio junto a companhias internacionais de primeira linha e coleta no fornecedor com emiss├úo de AWB/BL sob medida.",
          },
          {
            num: "03",
            title: "Desembara├ºo Aduaneiro Priorit├írio",
            desc: "Parametriza├º├úo e registro de DI/DUIMP com atua├º├úo presencial de despachantes seniores nos principais recintos alfandegados para obten├º├úo r├ípida de canal verde.",
          },
          {
            num: "04",
            title: "Entrega T├®cnica & P├│s-Opera├º├úo",
            desc: "Transporte rodovi├írio seguro at├® o pavilh├úo da feira, armaz├®m ou f├íbrica do cliente, acompanhado de gest├úo de prazos para posterior reexporta├º├úo ou nacionaliza├º├úo definitiva.",
          },
        ],
      },
      sectors: {
        tag: "Setores Atendidos",
        title: "Expertise Setorial em Mercados Exigentes",
        subtitle: "Cada segmento possui particularidades regulat├│rias e log├¡sticas que dominamos profundamente.",
        items: [
          {
            icon: CalendarCheck,
            title: "Feiras & Eventos Internacionais",
            desc: "Admiss├úo tempor├íria, entrega porta ao estande nos principais pavilh├Áes do Brasil e cumprimento r├¡gido de cronogramas.",
            link: "/pt/solucoes/feiras-e-eventos",
            image: "/imagens/feira-nft-logistics-3.jpg",
            category: "Exposi├º├Áes & Pavilh├Áes",
          },
          {
            icon: HeartPulse,
            title: "Sa├║de, Farmac├¬utica & Farma",
            desc: "Conformidade integral com normas sanit├írias da Anvisa, controle de temperatura e agilidade em produtos sens├¡veis.",
            link: "/pt/saude",
            image: "/imagens/anvisa-health-nft-logistics.webp",
            category: "Regulat├│rio Anvisa",
          },
          {
            icon: Building,
            title: "Bens de Capital & M├íquinas",
            desc: "Aproveitamento de Ex-Tarif├írio, transporte de cargas pesadas de projeto e desonera├º├úo fiscal para ativos industriais.",
            link: "/pt/solucoes",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            category: "Ind├║stria & Projetos",
          },
          {
            icon: Cpu,
            title: "Alta Tecnologia & Eletr├┤nicos",
            desc: "Homologa├º├Áes junto ├á Anatel e Inmetro, prote├º├úo contra avarias e log├¡stica expressa para produtos de alto valor agregado.",
            link: "/pt/solucoes",
            image: "/imagens/operacao-nft-logistics-6.jpg",
            category: "Telecom & Hardware",
          },
          {
            icon: Palette,
            title: "Obras de Arte & Pe├ºas de Museu",
            desc: "Embalagens climatizadas especiais, escolta armada quando necess├íria e manuseio cir├║rgico para mostras e bienais.",
            link: "/pt/solucoes/logisca-obras-arte",
            image: "/imagens/nft-art-2.jpg",
            category: "Acervos & Mostras",
          },
          {
            icon: Briefcase,
            title: "Representa├º├úo & Expans├úo Comercial",
            desc: "Apoio estrat├®gico para multinacionais que buscam estabelecer presen├ºa e validar produtos no mercado nacional.",
            link: "/pt/contato",
            image: "/imagens/intersolar-nft-logistics.webp",
            category: "Presen├ºa no Brasil",
          },
        ],
      },
      differentials: {
        tag: "Por Que a NFT Logistics?",
        title: "O que nos diferencia no com├®rcio exterior brasileiro",
        cards: [
          {
            title: "Consultoria Ativa vs. Despacho Passivo",
            desc: "N├úo esperamos a carga chegar ao porto brasileiro para descobrir pend├¬ncias. Antecipamos e resolvemos potenciais problemas na origem.",
          },
          {
            title: "Presen├ºa nos Principais Portos e Aeroportos",
            desc: "Operamos diariamente em Santos, Paranagu├í, Itaja├¡, Guarulhos (GRU), Viracopos (VCP) e Gale├úo (GIG) com equipe pr├│pria e parceiros homologados.",
          },
          {
            title: "Comunica├º├úo Sem Filtros ou Burocracia",
            desc: "Voc├¬ conversa diretamente com os especialistas e diretores respons├íveis pelo seu projeto, sem filas de espera, chamados autom├íticos ou call centers.",
          },
          {
            title: "Economia Real com Regimes Aduaneiros",
            desc: "Aplicamos a legisla├º├úo tribut├íria a favor do seu caixa, gerando economias substanciais em impostos de importa├º├úo de forma 100% l├¡cita e segura.",
          },
        ],
      },
      ctaSection: {
        tag: "Pr├│ximo Passo",
        title: "Pronto para estruturar sua opera├º├úo com seguran├ºa jur├¡dica e pontualidade?",
        desc: "Converse agora mesmo com nosso time de especialistas seniores e descubra como a NFT Logistics pode transformar a log├¡stica da sua empresa.",
        btnWhatsapp: "Falar via WhatsApp com Nossos Diretores",
        btnContact: "Enviar Mensagem pelo Formul├írio",
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
          "Consolidated footprint across Brazil's top ports, airports, and bonded warehouses (Santos, Paranagu├í, GRU, VCP, and GIG).",
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
            title: "Santos, Paranagu├í & Itaja├¡ Seaports",
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
            desc: "Ex-Tarif├írio duty reductions, heavy-lift project cargo, and tailored multimodal engineering for industrial plants.",
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
            link: "/en/solutions/artworks-logistics",
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
            desc: "Daily operations across Santos, Paranagu├í, Itaja├¡, S├úo Paulo (GRU/VCP), and Rio de Janeiro (GIG) with our specialized ground team.",
          },
          {
            title: "Direct Access to Senior Specialists",
            desc: "Direct contact with senior directors handling your projectÔÇöno call centers, support tickets, or automated answering machines.",
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
        badge: "Õø¢ÚÖàÞ┤©µÿôõ©ÄÕà¿þÉâþë®µÁüÕìôÞÂèµ£ìÕèí",
        title: "õ╗ÑÞÁäµÀ▒þøæþ«íµÖ║µàºõ©Äþ▓¥ÕçåÕà│Õèí´╝îÕìÅÕè®ÞÀ¿Õø¢õ╝üõ©Üþ¿│ÕüÑµïôÕ▒òÕÀ┤ÞÑ┐Õ©éÕ£║",
        subtitle:
          "ÞÂàÞÂèõ╝áþ╗ƒÞ┤ºÞ┐Éõ╗úþÉå´╝Üµêæõ╗¼ÕîûÞºúþ╣üþÉÉþÜäÕÀ┤ÞÑ┐Õ«ÿÕâÜÕúüÕ×Æ´╝îµÂêÚÖñÕÉêÞºäõ©Äþ¿ÄÕèíÚúÄÚÖ®´╝îµÅÉõ¥øþ½»Õê░þ½»ÒÇüÚøÂÕ╗ÂÞ»»þÜäÚ½ÿÕôüÞ┤¿þë®µÁüÞºúÕå│µû╣µíêÒÇé",
        btnPrimary: "ÕÆ¿Þ»óÕà│Õèíõ©ôÕ«Â",
        btnSecondary: "õ║åÞºúµêæõ╗¼þÜäÕÄåþ¿ï",
        trustBadgeTitle: "þ╗ÅÕ«×ÞÀÁµúÇÚ¬îþÜäÕÉêÞºäõ┐ØÚÜ£",
        trustBadgeText:
          "Õ£¿ÕÀ┤ÞÑ┐õ©╗Þªüµ©»ÕÅúÒÇüµ£║Õ£║ÕÆîõ┐Øþ¿ÄÕø¡Õî║´╝êµíæµëÿµû»µ©»ÒÇüþô£Ú▓üµƒ│µû»GRUÒÇüþ╗┤µïëþºæµ│óµû»VCPþ¡ë´╝ëµïÑµ£ëÞÁäµÀ▒þÄ░Õ£║Þ┐Éõ¢£Þâ¢ÕèøÒÇé",
      },
      stats: [
        { value: "+15", label: "Õ╣┤ÕñûÞ┤©þë®µÁüþ╗ÅÚ¬î", detail: "µÀ▒ÞÇòÕÀ┤ÞÑ┐µÁÀÕà│þë╣µ«èþøæþ«íÕÅèÚ½ÿÚÜ¥Õ║ªÞÀ¿Õø¢þë®µÁü" },
        { value: "+5,000", label: "µêÉÕèƒµôìõ¢£µíêõ¥ï", detail: "ÞªåþøûÕÀ┤ÞÑ┐ÕÉäÕñºõ©╗ÞªüµÁÀµ©»õ©ÄÕø¢ÚÖàþ®║µ©»þÜäÕ╣│þ¿│µ©àÕà│" },
        { value: "100%", label: "µ│òÞºäõ©ÄÕà│ÕèíÕÉêÞºä", detail: "õ©ÑÕ«êþ¿Äµ│òÕÉêÞºäÕ║òþ║┐´╝îµØ£þ╗Øµ╗×þ«▒õ©ÄÞ┐ØÞºäþ¢Üµ¼¥" },
        { value: "4", label: "Õñºµ┤▓þø┤Þ┐×ÕÀ┤ÞÑ┐", detail: "õ║Üµ┤▓ÒÇüµ¼ºµ┤▓ÒÇüþ¥Äµ┤▓ÒÇüÚØ×µ┤▓µùáþ╝ØÕ»╣µÄÑÕÀ┤ÞÑ┐Õà¿Õóâ" },
      ],
      story: {
        tag: "Õà¼ÕÅ©ÕÄåþ¿ïõ©ÄÕêøþ½ïÕêØÕ┐â",
        title: "ÕîûÞºúÕÀ┤ÞÑ┐þøæþ«íÕúüÕ×Æ´╝îõ©║Õà¿þÉâõ╝üõ©ÜµëôÚÇÜÚí║þòàÞ┤©µÿôÚÇÜÞÀ»",
        p1: "ÕÀ┤ÞÑ┐µÿ»µïëõ©üþ¥Äµ┤▓µ£ÇÕñºþÜäþ╗ÅµÁÄõ¢ô´╝îõ¢åÕàÂþ╣üÕñìþÜäµÁÀÕà│ÕêÂÕ║ªÒÇüÕñÜÕ▒éþ║ºþÜäþ¿ÄÕêÂõ╗ÑÕÅèõ©Ñµá╝þÜäþøæþ«íÚâ¿Úù¿´╝êÕªéAnvisaÒÇüInmetroÒÇüMAPA´╝ëÕ¥ÇÕ¥Çõ╗ñµÁÀÕñûõ╝üõ©Üµ£øÞÇîþöƒþòÅÒÇéÕìòµì«Õ¥«Õ░Åþ║░µ╝Åµêûþ¿ÄÕÅÀÚöÖÞ»»Õ░▒ÕÅ»Þâ¢Õ╝òÕÅæÞ┤ºþë®µëúþòÖõ©ÄÕÀ¿ÚóØþ¢ÜÚçæÒÇé",
        p2: "NFT Logistics þÜäÕêøþ½ïÕêØÞíÀÕìüÕêåµÿÄþí«´╝ÜµêÉõ©║ÞÀ¿Õø¢õ╝üõ©ÜÒÇüÕø¢ÚÖàÕ▒òÕòåõ©ÄÕàêÞ┐øÕêÂÚÇáõ©ÜÕ╝ÇµïôÕÀ┤ÞÑ┐Õ©éÕ£║þÜäÕØÜÕø║µíÑµóüÒÇéµêæõ╗¼Õ░åÚ½ÿµ░┤Õ╣│þÜäÕà│ÕèíÕÆ¿Þ»óõ©ÄþÄ░Õ£║µëºÞíîÕèøµÀ▒Õ║ªÞ×ìÕÉêÒÇé",
        p3: "µêæõ╗¼õ©ìõ╗àµÿ»Þ┤ºÞ┐Éõ╗úþÉå´╝îµø┤µÿ»õ╝üõ©ÜÕ£¿ÕÀ┤ÞÑ┐þÜäµêÿþòÑþë®µÁüÚí¥Úù«ÒÇéÕ£¿Þ┤ºþë®õ║ÄÕºïÕÅæÕø¢ÞúàÞ┐Éõ╣ïÕëì´╝îµêæõ╗¼õ¥┐ÕÀ▓Õ«îµêÉÕÉêÞºäÚóäÕ«í´╝îþí«õ┐ØÞ┤╣þö¿ÚÇÅµÿÄÕÅ»µÄºÒÇüµÁüþ¿ïÕÉêµ│òÕÉêÞºäÒÇüÞ┤ºþë®µîëµ£ƒÚÇüÞ¥¥ÒÇé",
        floatingTitle: "ÕÀ┤ÞÑ┐µ£¼Õ£░µêÿþòÑõ╝Öõ╝┤",
        floatingSubtitle: "õ╗ÄµÁÀÕñûÕºïÕÅæÕ£░Õê░µ£Çþ╗êþø«þÜäÕ£░þÜäõ©Çþ½ÖÕ╝Åõ║ñõ╗ÿ",
      },
      triad: {
        tag: "õ╝üõ©Üµá©Õ┐âÕƒ║þƒ│",
        title: "µîçÕ╝òµêæõ╗¼µ»Åõ©ÇÕìòÞ┤ºþë®Úí║Õê®ÚÇÜÕà│þÜäÕÄƒÕêÖ",
        subtitle: "õ╗ÑÕÉêÞºäÞ»Üõ┐íõ©║µ£¼´╝îÕ»╣Þ┤ºþë®Õ«ëÕà¿õ©Äõ║ñõ╗ÿµùÂµòêµü¬Õ«êµ£ÇÚ½ÿµáçÕçåÒÇé",
        cards: [
          {
            badge: "õ¢┐Õæ¢",
            title: "õ╝üõ©Üõ¢┐Õæ¢",
            desc: "õ╗ÑÚí║þòàþÜäÞ┐Éõ¢£ÒÇüþ▓¥ÕçåþÜäþøæþ«íµÖ║µàºÕÆîõ©Ñµá╝þÜäµùÂµòê´╝îÕîûÞºúÕÀ┤ÞÑ┐þ╣üÕñìÕà│ÕèíÕúüÕ×Æ´╝îÞ¢¼Õîûõ©║Õ«óµêÀÕ╝Çµïôµïëþ¥ÄÕ©éÕ£║þÜäµá©Õ┐âþ½×õ║ëõ╝ÿÕè┐ÒÇé",
            icon: Compass,
            image: "/imagens/transporte-nft-logistics.webp",
            imageAlt: "NFT Logistics ÕñÜÕ╝ÅÞüöÞ┐Éþë®µÁü",
          },
          {
            badge: "µä┐µÖ»",
            title: "õ╝üõ©Üµä┐µÖ»",
            desc: "µêÉõ©║µïëõ©üþ¥Äµ┤▓ÕñäþÉåÚ½ÿÚÜ¥Õ║ªÞ┐øÕç║ÕÅúþë®µÁüõ©ÄµÁÀÕà│þë╣µ«èþøæþ«íþÜäÚªûÚÇëµáçµØå´╝îÕ£¿Õø¢ÚÖàÕ▒òõ╝ÜÒÇüÕî╗þûùÕüÑÕ║Àõ©ÄÚçìÕñºÕÀÑþ¿ïþë®µÁüÚóåÕƒƒõ║½µ£ëÕìôÞÂèÕú░Þ¬ëÒÇé",
            icon: Award,
            image: "/imagens/armazem.jpg",
            imageAlt: "NFT Logistics õ┐Øþ¿Äõ╗ôÕé¿õ©¡Õ┐â",
          },
          {
            badge: "õ╗ÀÕÇ╝Þºé",
            title: "µá©Õ┐âõ╗ÀÕÇ╝Þºé",
            desc: "þÖ¥Õêåõ╣ïþÖ¥ÕÉêµ│òÕÉêÞºä´╝øÕ»╣Õ╗ÂÞ»»ÚøÂÕ«╣Õ┐ì´╝øÚ½ÿþ«íþ║ºõ©ôÕ▒×ÕÆ¿Þ»óµ£ìÕèí´╝øÕà¿þ¿ïÚÇÅµÿÄþÜäõ©╗Õè¿µ▓ƒÚÇÜ´╝øÚ½ÿµòêÕîûÞºúÕÉäþ▒╗µÁÀÕà│þûæÚÜ¥Úù«ÚóÿÒÇé",
            icon: ShieldCheck,
            image: "/imagens/operacao-nft-logistics-5.jpg",
            imageAlt: "NFT Logistics õ©ôõ©ÜÕøóÚÿƒõ©ÑÞ░¿µôìõ¢£",
          },
        ],
      },
      pillars: {
        tag: "µá©Õ┐âÞ┐ÉÞÉÑõ╝ÿÕè┐",
        title: "NFT Logistics ÕøøÕñºµö»µƒ▒",
        subtitle: "Õç¡ÕÇƒþ│╗þ╗ƒÕîûþÜäÕà│Õèíõ©Äþë®µÁüõ¢ôþ│╗´╝îõ©║Õ«óµêÀµÅÉõ¥øÕà¿µû╣õ¢ìþÜäÕ«ëÕ┐âõ┐ØÚÜ£ÒÇé",
        items: [
          {
            icon: ShieldCheck,
            title: "µÁÀÕà│µ│òÞºäµÖ║µàºõ©ÄÕÉêÞºäÚóäÕ«í",
            desc: "ÞúàÞ┐ÉÕëìõ©Ñµá╝Õ«íµá©Õòåõ©ÜÕÅæþÑ¿ÒÇüÞúàþ«▒Õìòõ©ÄµèÇµ£»ÞÁäµûÖÒÇéþ▓¥ÕçåÕ¢Æþ▒╗µÁÀÕà│þ╝ûþáü´╝êNCM´╝ë´╝îµÅÉÕëìþö│Þ»Àþøæþ«íÞ«©ÕÅ»Þ»ü´╝êLPCO´╝ë´╝îÕ«×þÄ░Õ┐½ÚÇƒþ╗┐ÚÇÜÚüôµö¥ÞíîÒÇé",
          },
          {
            icon: Landmark,
            title: "þ▓¥ÚÇÜþë╣µ«èµÁÀÕà│þøæþ«íÕêÂÕ║ª",
            desc: "µÀ▒Þ░ÖµÜéµùÂÞ┐øÕç║ÕÅú´╝êAdmiss├úo Tempor├íria´╝ëÒÇüÚÇÇþ¿Ä´╝êDrawback´╝ëÒÇüõ┐Øþ¿Äõ╗ôÕé¿þ¡ëÕêÂÕ║ª´╝îÕÉêµ│òÕ«×þÄ░Õà│þ¿ÄÕàìÚÖñµêûþ╝ôþ╝┤´╝îõ©Ñµá╝þ«íµÄºÕñìÕç║ÕÅúµùÂÚÖÉÒÇé",
          },
          {
            icon: Truck,
            title: "þ½»Õê░þ½»ÕñÜÕ╝ÅÞüöÞ┐Éþ¢æþ╗£",
            desc: "µò┤ÕÉêµÁÀÞ┐É´╝êFCL/LCL´╝ëÒÇüÕèáµÇÑþ®║Þ┐Éõ©ÄÕÀ┤ÞÑ┐Õà¿Õóâþøæþ«íÕìíÞ¢ªÞ┐ÉÞ¥ô´╝îÕàÀÕñçÞÂàÕñºõ╗ÂÒÇüþ▓¥Õ»åõ╗¬ÕÖ¿õ©ÄÚ½ÿÞ┤ºÕÇ╝Þ┤ºþë®þÜäõ©ôõ©ÜÞúàÕì©õ©ÄÕà¿ÚóØÞ┐ÉÞ¥ôõ┐ØÚÖ®ÒÇé",
          },
          {
            icon: Globe2,
            title: "õ©¡ÞæíÞï▒õ©ëÞ»¡µ£¼Õ£░Õîûµùáþ╝ØÕ»╣µÄÑ",
            desc: "ÕøóÚÿƒþ▓¥ÚÇÜÞæíÞÉäþëÖÞ»¡ÒÇüÞï▒Þ»¡õ©Äõ©¡µûç´╝îÞÀ¿ÞÂèÞ»¡Þ¿ÇÚÜ£þóìõ©ÄµùÂÕÀ«´╝îþø┤µÄÑÕ»╣µÄÑµÁÀÕñûµÇ╗Úâ¿õ©ÄÕÀ┤ÞÑ┐µ£¼Õ£░µÁÀÕà│µ£║µ×ä´╝îµ▓ƒÚÇÜÚ½ÿµòêÚí║þòàÒÇé",
          },
        ],
      },
      infrastructure: {
        tag: "þÄ░Õ£║µôìõ¢£Õ«×Õèø",
        title: "ÞªåþøûÕÀ┤ÞÑ┐µá©Õ┐âÕñûÞ┤©ÕÅúÕ▓©þÜäþÄ░Õ£║µ©àÕà│þ¢æþ╗£",
        subtitle: "Õ£¿Õ£úõ┐Øþ¢ùõ©╗Þªüµ£║Õ£║ÒÇüÕñºÕ×ïµÁÀÞ┐Éµ©»ÕÅúÕÅèõ┐Øþ¿Äõ╗ôÕ║ôÕ©©Ú®╗õ©ôõ©Üµôìõ¢£õ║║ÕæÿÒÇé",
        items: [
          {
            title: "Õø¢ÚÖàþ®║µ©»µ×óþ║¢ (GRU & VCP)",
            desc: "õ©║Ú½ÿÞ┤ºÕÇ╝þöÁÕ¡ÉÕàâÕÖ¿õ╗ÂÒÇüÕî╗þûùµÇÑÚ£Çþë®ÞÁäõ©Äþ┤ºµÇÑÕ▒òÕôüµÅÉõ¥øõ╝ÿÕàêÚÇÜÕà│õ©ÄÚ½ÿÚÇƒÕ£░ÚØóõ©¡Þ¢¼ÒÇé",
            image: "/imagens/operacao-nft-logistics-4.jpg",
            icon: Plane,
            badge: "ÕèáµÇÑÞê¬þ®║Þ┤ºÞ┐É",
          },
          {
            title: "µíæµëÿµû»µ©»ÒÇüÕÀ┤µïëÚéúþô£µ©»õ©Äõ╝èÕíöÚøàõ╝èµ©»",
            desc: "ÚøåÞúàþ«▒ÚØáµ│èÕà¿þ¿ïÞÀƒÞ©¬ÒÇüµïåþ«▒Ú¬îÞ┤ºÕÅèµƒÑÚ¬îþÄ░Õ£║Ú½ÿµòêÚàìÕÉê´╝îÚü┐Õàìõ║ºþöƒÚóØÕñûµ╗×µ£ƒÞ┤╣þö¿ÒÇé",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            icon: Anchor,
            badge: "µÁÀÞ┐ÉÕÅúÕ▓©Þ┐Éõ¢£",
          },
          {
            title: "õ┐Øþ¿Äõ╗ôÕé¿õ©Äþë╣µ«èþøæþ«íõ©¡Õ┐â",
            desc: "µÅÉõ¥øõ┐Øþ¿Äõ╗ôÕé¿ÒÇüÕì½þöƒÕ▒ÇµƒÑÚ¬îõ©ôþö¿Õî║õ╗ÑÕÅèÕÀÑþ¿ïþë®ÞÁäÕêåµï¿þ¡ëÕà¿µû╣õ¢ìÚàìÕÑùµö»µîüÒÇé",
            image: "/imagens/armazem-2.jpg",
            icon: Warehouse,
            badge: "õ┐Øþ¿ÄµÜéÕ¡ÿõ©ÄÕêåµï¿",
          },
        ],
      },
      method: {
        tag: "µêÉþåƒµ£ìÕèíµÁüþ¿ï",
        title: "NFT µ£ìÕèíÞÀ»Õ¥ä´╝Üõ╗ÄÞÁÀÞ┐Éµ©»Õê░þø«þÜäÕ£░",
        subtitle: "þÄ»þÄ»þø©µëúþÜäµáçÕçåÕîûµÁüþ¿ï´╝îµØ£þ╗Øõ╗╗õ¢òµôìõ¢£þø▓Õî║ÒÇé",
        steps: [
          {
            num: "01",
            title: "Õà│ÕèíÞ»äõ╝░õ©Äµû╣µíêÞ«¥Þ«í",
            desc: "ÞúàÞ┐ÉÕëìÕ«íµá©Þ┤ºÕôüµ©àÕìòõ©ÄµèÇµ£»Þºäµá╝´╝îÕêÂÕ«Üµ£Çõ¢│µ©àÕà│õ©Äþ¿ÄµöÂþ¡╣ÕêÆÞÀ»Õ¥ä´╝îµÿÄþí«þøæþ«íÕ«íµë╣Þªüþé╣ÒÇé",
          },
          {
            num: "02",
            title: "Õø¢ÚÖàÞ┐ÉÞ¥ôõ©ÄÕºïÕÅæµ©»µÅÉÞ┤º",
            desc: "Õ«ëµÄÆÞÁÀÞ┐Éµ©»µÅÉÞ┤ºõ©ÄÕø¢ÚÖàµÁÀþ®║Þ┐ÉÞ«óÞê▒´╝îÕç║ÕàÀþ¼ªÕÉêÕÀ┤ÞÑ┐µÁÀÕà│Þªüµ▒éþÜäµÅÉÕìò´╝îÕà¿þ¿ïÞÀƒÞ©¬Þ┐ÉÞ¥ôÞèéþé╣ÒÇé",
          },
          {
            num: "03",
            title: "ÕÅúÕ▓©õ╝ÿÕàêµ©àÕà│õ©ÄÕìÅÞ░â",
            desc: "Þ┤ºþë®µèÁÞ¥¥ÕÀ┤ÞÑ┐ÕÅúÕ▓©ÕëìÚóäÕ¢òÕàÑµÁÀÕà│þ│╗þ╗ƒ´╝îÞÁäµÀ▒µ©àÕà│ÕøóÚÿƒþÄ░Õ£║ÞÀƒÞ┐øµƒÑÚ¬îõ©Äþ¿ÄÞ┤╣ÕñäþÉå´╝îþí«õ┐ØÕ┐½ÚÇƒµö¥ÞíîÒÇé",
          },
          {
            num: "04",
            title: "þÄ░Õ£║õ║ñõ╗ÿõ©ÄÕÉÄþ╗¡þøæþ«íÞÀƒÞ┐ø",
            desc: "Õ«ëµÄÆÕÀ┤ÞÑ┐ÕóâÕåàõ©ôÞ¢ªÚÇüÞç│Õ▒òõ¢ìÒÇüõ╗ôÕ║ôµêûÕÀÑÕÄé´╝îÕ╣ÂÞÀƒÞ┐øÕÉÄþ╗¡þÜäÕñìÞ┐ÉÕç║ÕóâµêûÞ¢¼µ¡úµÂêÞ┤╣þ¡ëµ│òÕ«Üµëïþ╗¡ÒÇé",
          },
        ],
      },
      sectors: {
        tag: "µá©Õ┐âµ£ìÕèíÞíîõ©Ü",
        title: "µÀ▒ÞÇòÕÉäÕñºõ©ÑÞïøþøæþ«íÚóåÕƒƒ",
        subtitle: "ÚÆêÕ»╣õ©ìÕÉîÞíîõ©ÜþÜäµèÇµ£»ÞºäÞîâõ©ÄµùÂµòêÞªüµ▒é´╝îµÅÉõ¥øÕ«ÜÕêÂÕîûÕà│Õèíþ¡ûþòÑÒÇé",
        items: [
          {
            icon: CalendarCheck,
            title: "Õø¢ÚÖàÕ▒òõ╝Üõ©ÄÕñºÕ×ïµ┤╗Õè¿",
            desc: "µÜéµùÂÞ┐øÕóâÕàìþ¿Äþö│µèÑÒÇüÚù¿Õê░Õ▒òõ¢ìÕà¿þ¿ïÚàìÚÇü´╝îõ┐ØÚÜ£Õ▒òÕôüÕ£¿Õ©âÕ▒òµùÑÕëìÕ«ëÕà¿Þ┐øÚ®╗Õ▒òÕÅ░ÒÇé",
            link: "/cn/solutions/fairs-and-events",
            image: "/imagens/feira-nft-logistics-3.jpg",
            category: "ÕñºÕ×ïÕ▒òõ╝Üõ©ÄÕ▒òÕÅ░",
          },
          {
            icon: HeartPulse,
            title: "Õî╗þûùÕÖ¿µó░ÒÇüÕî╗Þì»õ©ÄÕñºÕüÑÕ║À",
            desc: "õ©Ñµá╝þ¼ªÕÉêÕÀ┤ÞÑ┐Õì½þöƒþøæþØúÕ▒Ç´╝êAnvisa´╝ëµáçÕçå´╝îµ©®µÄºÕåÀÚô¥õ┐ØÚÜ£´╝îÕî╗þûùµÇÑÚ£Çþë®ÞÁäõ╝ÿÕàêÚÇÜÕà│ÒÇé",
            link: "/cn/health",
            image: "/imagens/anvisa-health-nft-logistics.webp",
            category: "AnvisaÕì½þöƒþøæþ«í",
          },
          {
            icon: Building,
            title: "µ£║µó░Þ«¥Õñçõ©ÄÕñºÕ×ïÕÀÑþ¿ïÚí╣þø«",
            desc: "Õê®þö¿ Ex-Tarif├írio Õà│þ¿ÄÕçÅÕàìµö┐þ¡û´╝îþë╣þºìÕñºõ╗ÂÕñÜÕ╝ÅÞüöÞ┐É´╝îµö»µîüÕÀ┤ÞÑ┐ÕÀÑõ©Üþöƒõ║ºþ║┐Õ╗║Þ«¥ÒÇé",
            link: "/cn/solutions",
            image: "/imagens/operacao-nft-logistics-2.jpg",
            category: "ÚçìÕñºÕÀÑõ©ÜÞúàÕñç",
          },
          {
            icon: Cpu,
            title: "Ú½ÿµû░µèÇµ£»õ©ÄþöÁÕ¡ÉÚÇÜõ┐í",
            desc: "Õè×þÉå Anatel õ©Ä Inmetro Þ«ñÞ»üÕ«íµë╣´╝îµÅÉõ¥øÚ½ÿÚÿ▓Ú£çµèùµ¢«ÕîàÞúàõ©ÄÕèáµÇÑþ®║Þ┐Éµû╣µíêÒÇé",
            link: "/cn/solutions",
            image: "/imagens/operacao-nft-logistics-6.jpg",
            category: "ÚÇÜõ┐íõ©ÄÚ½ÿþ▓¥þí¼õ╗Â",
          },
          {
            icon: Palette,
            title: "Þë║µ£»Õôüõ©ÄÞ┤ÁÚçìÞùÅÕôü",
            desc: "µüÆµ©®µüÆµ╣┐þë╣þºìÕîàÞúàÒÇüõ©ôõ©ÜÕ«ëõ┐Øµè╝Þ┐É´╝îõ©║ÞÀ¿Õø¢Þë║µ£»Õ▒òÞºêµÅÉõ¥øµ£ÇÚ½ÿþ║ºÕê½þÜäþ╗åÞç┤µ£ìÕèíÒÇé",
            link: "/cn/solutions/artworks-logistics",
            image: "/imagens/nft-art-2.jpg",
            category: "Þë║µ£»ÕÅîÕ╣┤Õ▒òõ©ÄÕìÜþë®Úªå",
          },
          {
            icon: Briefcase,
            title: "Õòåõ©Üõ╗úÞí¿õ©ÄÕ©éÕ£║µïôÕ▒òµö»µîü",
            desc: "õ©║µ£ëµäÅÕ╝ÇµïôÕÀ┤ÞÑ┐Õ©éÕ£║þÜäµÁÀÕñûÕêÂÚÇáÕòåµÅÉõ¥øµ£¼Õ£░Õòåõ©Üõ╗úÞí¿ÒÇüÞÁäÞ┤¿ÕçåÕàÑõ©Äõ╗ôÕé¿µö»µîüÒÇé",
            link: "/cn/contact",
            image: "/imagens/intersolar-nft-logistics.webp",
            category: "ÕÀ┤ÞÑ┐Õ©éÕ£║ÞÉ¢Õ£░",
          },
        ],
      },
      differentials: {
        tag: "õ©║õ╗Çõ╣êÚÇëµï® NFT Logistics",
        title: "µêæõ╗¼Õ£¿ÕÀ┤ÞÑ┐ÕñûÞ┤©þë®µÁüÚóåÕƒƒþÜäþï¼þë╣þ½×õ║ëõ╝ÿÕè┐",
        cards: [
          {
            title: "ÕºïÕÅæµ©»õ©╗Õè¿ÚóäÕ«í vs. µèÁµ©»Þó½Õè¿ÞíÑµòæ",
            desc: "õ©ìÕ£¿Þ┤ºþë®µèÁµ©»ÕÉÄµëìÕÅæþÄ░Õìòµì«Úù«ÚóÿÒÇéµêæõ╗¼Õ£¿ÕÅæÞ┤ºÕëìÕ«îµêÉÕà¿ÕÑùÕ«íµá©´╝îµØ£þ╗ØÕÅúÕ▓©ÕÄïµ©»þ¢Üµ¼¥ÒÇé",
          },
          {
            title: "ÞªåþøûÕÀ┤ÞÑ┐ÕÉäÕñºõ©╗ÞªüÕÅúÕ▓©õ©Äµ£║Õ£║",
            desc: "Õ£¿µíæµëÿµû»µ©»ÒÇüÕÀ┤µïëÚéúþô£µ©»ÒÇüÕ£úõ┐Øþ¢ùGRUõ©ÄVCPµ£║Õ£║ÕØçµ£ëþ¿│Õ«ÜþÄ░Õ£║µôìõ¢£ÕèøÚçÅÒÇé",
          },
          {
            title: "Ú½ÿþ«íÕÅèÞÁäµÀ▒Úí¥Úù«õ©ÇÕ»╣õ©Çµ£ìÕèí",
            desc: "þø┤µÄÑõ©ÄÚí╣þø«õ©╗þ«íõ©ôÕ«Âµ▓ƒÚÇÜ´╝îÕàìÚÖñÕæ╝ÕÅ½õ©¡Õ┐âõ©Äþ╣üþÉÉÕÀÑÕìò´╝îõ┐ØÚÜ£Õì│µùÂÕå│þ¡ûõ©ÄÕôìÕ║öÒÇé",
          },
          {
            title: "Þ┐Éþö¿ÕÉêµ│òµÁÀÕà│ÕêÂÕ║ªÕêçÕ«×ÚÖìµ£¼",
            desc: "ÕààÕêåÕê®þö¿ÕÀ┤ÞÑ┐µÁÀÕà│µ│òÞÁïõ║êþÜäþë╣µ«èþøæþ«íÕêÂÕ║ª´╝îÕÉêµ│òÕÉêÞºäõ©║õ╝üõ©ÜÕñºÕ╣àþ╝®ÕçÅþ¿ÄÞ┤╣Õ╝Çµö»ÒÇé",
          },
        ],
      },
      ctaSection: {
        tag: "þ½ïÕì│ÞíîÕè¿",
        title: "ÕçåÕñçÕÑ¢Õ£¿ÕÀ┤ÞÑ┐Õ╝ÇÕ▒òÕ«ëÕà¿ÕÉêÞºäÒÇüÕçåµùÂµùáÕ┐ºþÜäþë®µÁüÞ┐Éõ¢£õ║åÕÉù´╝ƒ",
        desc: "µ¼óÞ┐Äþø┤µÄÑÞüöþ│╗ NFT Logistics ÞÁäµÀ▒Úí¥Úù«ÕøóÚÿƒ´╝îÞÄÀÕÅûÚçÅÞ║½Õ«ÜÕêÂþÜäÕø¢ÚÖàþë®µÁüõ©ÄµÁÀÕà│µ©àÕà│ÞºúÕå│µû╣µíêÒÇé",
        btnWhatsapp: "ÚÇÜÞ┐ç WhatsApp þø┤µÄÑÕÆ¿Þ»óÚ½ÿþ«íÕøóÚÿƒ",
        btnContact: "Õí½ÕåÖÞüöþ╗£Þí¿ÕìòÞÄÀÕÅûµû╣µíê",
      },
    },
  };

  const t = content[resolvedLang] || content.pt;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO INSTITUCIONAL                                                     */}
      {/* ========================================================================= */}
      <HeroSection
        pageKey="sobre"
        lang={resolvedLang}
        whatsappHref={whatsappHref}
      />

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
      {/* 3. HIST├ôRIA & PROP├ôSITO (STORYTELLING EM 2 COLUNAS)                       */}
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
                    alt="Opera├º├Áes de alta complexidade da NFT Logistics"
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
      {/* 4. MISS├âO, VIS├âO E VALORES (TR├ìADE COM FOTOS REAIS)                       */}
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

                    {/* ├ìcone flutuante */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-orange-600 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Conte├║do textual do card */}
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
      {/* 5. PILARES DE EXCEL├èNCIA OPERACIONAL                                      */}
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
      {/* 5.1 NOVA GALERIA DE INFRAESTRUTURA OPERACIONAL (PORTOS, AEROPORTOS, ARMAZ├ëNS) */}
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
      {/* 6. NOSSO M├ëTODO (DA ORIGEM AO DESTINO)                                    */}
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

                    {/* ├ìcone flutuante */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-orange-600 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Conte├║do textual */}
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
                          : "õ║åÞºúÞ»ÑÞíîõ©ÜÞºúÕå│µû╣µíê"}
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
                  ? "Entrar ou operar no Brasil sem uma assessoria especializada ├® assumir riscos tribut├írios e operacionais imensos. N├│s transformamos incertezas em solidez."
                  : resolvedLang === "en"
                  ? "Operating in Brazil without specialized customs intelligence invites tremendous tax and operational risk. We transform uncertainty into solid results."
                  : "Õ£¿þ╝║õ╣Åõ©ôõ©ÜÕà│ÕèíµÖ║µàºþÜäµâàÕåÁõ©ïÞ┐øÕàÑÕÀ┤ÞÑ┐Õ©éÕ£║Õ░åÚØóõ©┤ÕÀ¿ÕñºþÜäþ¿ÄÕèíõ©Äµ©àÕà│ÚúÄÚÖ®ÒÇéµêæõ╗¼Õ░åõ©ìþí«Õ«ÜµÇºÞ¢¼Õîûõ©║ÕØÜÕ«×þÜäÕòåõ©ÜµêÉµ×£ÒÇé"}
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
      {/* 10. CTA FINAL INSTITUCIONAL COM FOTO DE FUNDO CINEMATOGR├üFICA              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white border-t border-neutral-800">
        {/* Imagem de Fundo com Escurecimento e Gradiente */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/imagens/transporte-nft-logistics.webp"
            alt="Log├¡stica Internacional NFT Logistics"
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
                  : "/cn/contact"
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
