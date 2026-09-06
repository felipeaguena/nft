"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Scale,
  Boxes,
  Palette,
  Clock,
  Truck,
  Users,
  CheckCircle2,
  FileText,
  ChevronDown,
  Activity,
  Layers,
  Zap,
  Globe2,
} from "lucide-react";

export type LanguageCode = "pt" | "en" | "cn";

interface SolucoesClientProps {
  lang?: LanguageCode;
}

const CONTENT = {
  pt: {
    hero: {
      badge: "Logística Internacional & Inteligência Aduaneira",
      title: "Soluções Estratégicas para Conectar o seu Negócio ao Brasil",
      description:
        "Da desoneração tributária por regimes especiais ao transporte de cargas pesadas, obras de arte e participação em feiras internacionais. Gestão ponta a ponta com rigor regulatório e compromisso de tolerância zero a atrasos.",
      ctaTalk: "Falar com Especialista",
      ctaExplore: "Explorar Soluções",
      trustTitle: "Mais de 20 anos de Segurança Operacional e Aduaneira",
      trustText:
        "Know-how consolidado nos principais portos, aeroportos, recintos alfandegados e pavilhões de eventos do país.",
    },
    col2: {
      tag: "Engenharia Aduaneira & Logística Integrada",
      title: "Muito além do frete: inteligência fiscal e operacional que protege seu fluxo de caixa",
      paragraphs: [
        "O comércio exterior brasileiro é reconhecido globalmente por sua complexidade burocrática e fiscal. Um erro de classificação tarifária (NCM) ou a ausência de anuências prévias de órgãos reguladores pode paralisar cargas valiosas, gerar multas pesadas e comprometer cronogramas críticos.",
        "A NFT Logistics opera como parceira estratégica na originação, trâmite e desembaraço aduaneiro. Criamos soluções logísticas personalizadas integrando frete internacional multimodal (aéreo, marítimo e rodoviário), regimes aduaneiros suspensivos e desembaraço prioritário.",
        "Nosso objetivo é assegurar previsibilidade absoluta, economia tributária legal e fluidez para que sua empresa atue com tranquilidade e foco nos negócios.",
      ],
      floatingBadgeTitle: "Operação Ponto a Ponto (Door-to-Door)",
      floatingBadgeText: "Da coleta internacional à entrega técnica no destino",
    },
    solutionsGrid: {
      tag: "Portfólio de Especialidades",
      title: "Nossas Principais Soluções",
      description:
        "Selecione uma especialidade para entender como a nossa equipe estrutura cada etapa com segurança jurídica e excelência operacional.",
      buttonLabel: "Ver detalhes da solução",
      items: [
        {
          id: "feiras",
          icon: CalendarCheck,
          tag: "Tolerância Zero a Atrasos",
          title: "Feiras e Eventos Internacionais",
          image: "/imagens/feira-nft-logistics.jpg",
          imageAlt: "Logística para feiras e eventos internacionais no Brasil",
          description:
            "Transporte porta-ao-estande (door-to-booth), Admissão Temporária com suspensão tributária e suporte presencial nos maiores centros de convenções do Brasil.",
          bullets: [
            "Transporte aéreo e marítimo coordenado com cronograma de montagem",
            "Gestão integral do regime aduaneiro temporário",
            "Apoio presencial para desova, manuseio e guarda de embalagens",
            "Coordenação de reexportação ou nacionalização pós-evento",
          ],
          href: "/pt/solucoes/feiras-e-eventos",
        },
        {
          id: "regimes",
          icon: Scale,
          tag: "Otimização Tributária",
          title: "Regimes Aduaneiros Especiais",
          image: "/imagens/armazem.jpg",
          imageAlt: "Armazém alfandegado e gestão de regimes aduaneiros especiais",
          description:
            "Estruturação jurídica e operacional de Admissão Temporária, Drawback, Entreposto Aduaneiro e RECOF para preservar o fluxo de caixa da sua empresa.",
          bullets: [
            "Suspensão legal de tributos federais e estaduais (II, IPI, PIS/Cofins)",
            "Auditoria preventiva de documentação e Termos de Responsabilidade",
            "Controle rigoroso de prazos e prorrogações legais",
            "Assessoria completa na extinção regular do regime",
          ],
          href: "/pt/solucoes/regimes-especiais",
        },
        {
          id: "projetos",
          icon: Boxes,
          tag: "Cargas Especiais & Turn-key",
          title: "Projetos Customizados & Cargas Críticas",
          image: "/imagens/operacao-nft-logistics-7.jpg",
          imageAlt: "Movimentação de cargas de projeto e maquinário pesado em pavilhão",
          description:
            "Logística para cargas sobredimensionadas (OOG), equipamentos de alto peso (breakbulk), plantas industriais e cronogramas de entrega ultrassensíveis.",
          bullets: [
            "Estudo minucioso de viabilidade de rota (route survey)",
            "Licenciamento prévio em órgãos reguladores (DNIT, DER, PRF)",
            "Equipamentos dedicados: guindastes, carretas extensivas e pranchas",
            "Acompanhamento técnico presencial em todas as fases da movimentação",
          ],
          href: "/pt/solucoes/projetos-customizados",
        },
        {
          id: "arte",
          icon: Palette,
          tag: "Máximo Cuidado & Sigilo",
          title: "Logística para Obras de Arte & Alto Valor",
          image: "/imagens/nft-art-2.jpg",
          imageAlt: "Curadoria logística e transporte para obras de arte e acervos valiosos",
          description:
            "Curadoria logística para galerias, museus, leilões e colecionadores com caixas climáticas personalizadas, escolta dedicada e seguro especializado.",
          bullets: [
            "Embalagens de padrão museológico com madeira tratada (NIMF 15)",
            "Acompanhamento integral por correio técnico (courier)",
            "Desembaraço com autorização IPHAN e Receita Federal",
            "Cobertura de seguro porta a porta (nail-to-nail / prego a prego)",
          ],
          href: "/pt/solucoes/logistica-obras-arte",
        },
      ],
    },
    gallery: {
      tag: "Operações em Foco",
      title: "Presença Ativa e Rigor Operacional em Campo",
      description:
        "Registros reais de operações complexas coordenadas pela equipe da NFT Logistics nos principais portos, aeroportos e pavilhões de eventos do país.",
      items: [
        {
          image: "/imagens/feira-nft-logistics-4.jpg",
          title: "Montagem Técnica em Pavilhões",
          category: "Feiras & Congressos",
          desc: "Supervisão presencial com ferramental e equipe técnica qualificada dentro do pavilhão.",
        },
        {
          image: "/imagens/transporte-nft-logistics.webp",
          title: "Desova de Robótica Médica",
          category: "Saúde & MedTech",
          desc: "Descarregamento técnico com caixas tratadas e manuseio milimétrico de equipamentos cirúrgicos.",
        },
        {
          image: "/imagens/operacao-nft-logistics-4.jpg",
          title: "Cargas em Carretas Prancha",
          category: "Cargas de Projeto",
          desc: "Transporte rodoviário pesado e amarração de maquinário industrial de grande porte.",
        },
        {
          image: "/imagens/feira-nft-logistics-6.jpg",
          title: "Grandes Centros de Convenções",
          category: "Infraestrutura",
          desc: "Operações contínuas em recintos como Transamerica Expo Center, São Paulo Expo e Anhembi.",
        },
      ],
    },
    whyUs: {
      tag: "Vantagens Competitivas",
      title: "Por que escolher a NFT Logistics para suas operações?",
      description:
        "Não operamos com soluções genéricas. Atuamos como extensão da sua equipe, desenhando estratégias sob medida que combinam solidez aduaneira, infraestrutura global e prontidão operacional.",
      secondaryText:
        "Nossos especialistas acompanham cada embarque proativamente, antecipando exigências burocráticas antes que elas se tornem gargalos.",
      ctaButton: "Solicitar Análise de Operação",
      cards: [
        {
          icon: Clock,
          title: "Pontualidade Crítica e Monitoramento Contínuo",
          text: "Rastreamento ponta a ponta e gestão de marcos críticos para que sua carga chegue exatamente quando planejado.",
        },
        {
          icon: ShieldCheck,
          title: "Compliance Regulatório e Segurança Jurídica",
          text: "Conformidade irrestrita com a Receita Federal e órgãos anuentes (Anvisa, Inmetro, MAPA, Exército e Decex).",
        },
        {
          icon: Truck,
          title: "Rede Global com Execução Local",
          text: "Parcerias consolidadas nos 5 continentes aliadas a presença física nos maiores portos, aeroportos e recintos alfandegados do Brasil.",
        },
        {
          icon: Users,
          title: "Atendimento Consultivo e Multilíngue",
          text: "Equipe especializada prestando suporte ágil em Português, Inglês e Mandarim, sem intermediários ou burocracia.",
        },
      ],
    },
    methodology: {
      tag: "Metodologia Operacional",
      title: "Como Funciona a Nossa Atuação",
      description:
        "Um fluxo comprovado de 5 etapas para transformar operações complexas em processos fluidos, seguros e previsíveis.",
      steps: [
        {
          number: "01",
          icon: FileText,
          title: "Diagnóstico & Enquadramento Fiscal",
          text: "Análise profunda da fatura comercial, packing list, classificação tarifária (NCM) e escolha da melhor estratégia tributária.",
        },
        {
          number: "02",
          icon: CheckCircle2,
          title: "Licenças & Anuências Prévias",
          text: "Emissão de Licenças de Importação (LI via módulo LPCO/Siscomex) e deferimentos técnicos antes do embarque na origem.",
        },
        {
          number: "03",
          icon: Truck,
          title: "Coleta na Origem & Frete Internacional",
          text: "Coleta com embalagem certificada, transporte internacional marítimo ou aéreo seguro e emissão de documentação de embarque.",
        },
        {
          number: "04",
          icon: ShieldCheck,
          title: "Desembaraço Aduaneiro Prioritário",
          text: "Acompanhamento da conferência física e documental pela autoridade fiscal, registro de DI/DUIMP e liberação rápida.",
        },
        {
          number: "05",
          icon: Boxes,
          title: "Entrega Técnica & Pós-Operação",
          text: "Transporte rodoviário dedicado até o destino final, descarregamento técnico e gestão do encerramento ou reexportação.",
        },
      ],
    },
    sectors: {
      tag: "Segmentos Atendidos",
      title: "Experiência Comprovada em Setores Estratégicos",
      description:
        "Atendemos indústrias com exigências regulatórias, de temperatura, de manuseio e de tempo que não toleram falhas.",
      items: [
        {
          icon: Activity,
          name: "Saúde, Farmacêutica & Diagnósticos",
          desc: "Importação e admissão temporária de tomógrafos, equipamentos de ressonância e dispositivos cirúrgicos com conformidade Anvisa.",
          badge: "Ver Soluções de Saúde",
          href: "/pt/saude",
          image: "/imagens/doutores-health.nft-logistics.webp",
        },
        {
          icon: CalendarCheck,
          name: "Exposições & Grandes Congressos",
          desc: "Logística porta ao estande para os maiores eventos em pavilhões como São Paulo Expo, Anhembi, Transamerica e Riocentro.",
          badge: "Ver Feiras & Eventos",
          href: "/pt/solucoes/feiras-e-eventos",
          image: "/imagens/feira-nft-logistics-7.jpg",
        },
        {
          icon: Zap,
          name: "Energia Renovável, Solar & Infraestrutura",
          desc: "Movimentação de painéis fotovoltaicos, inversores, transformadores pesados e componentes para usinas e subestações.",
          badge: null,
          href: null,
          image: "/imagens/intersolar-nft-logistics.webp",
        },
        {
          icon: Globe2,
          name: "Tecnologia, TI & Telecomunicações",
          desc: "Desembaraço ágil com homologação Anatel para servidores, estações rádio-base, fibra óptica e componentes eletrônicos.",
          badge: null,
          href: null,
          image: "/imagens/operacao-nft-logistics-2.jpg",
        },
        {
          icon: Layers,
          name: "Indústria de Máquinas & Equipamentos Pesados",
          desc: "Linhas de produção fabris, peças de reposição e maquinário sobredimensionado em regimes de Drawback e Admissão Temporária.",
          badge: "Ver Regimes Especiais",
          href: "/pt/solucoes/regimes-especiais",
          image: "/imagens/operacao-nft-logistics-6.jpg",
        },
        {
          icon: Palette,
          name: "Artes Visuais, Leilões & Museus",
          desc: "Transporte climatizado, seguro total nail-to-nail e embalagens museum grade para mostras de relevância global.",
          badge: "Ver Logística de Arte",
          href: "/pt/solucoes/logistica-obras-arte",
          image: "/imagens/nft-art.jpg",
        },
      ],
    },
    faq: {
      tag: "Dúvidas Frequentes",
      title: "Perguntas Frequentes sobre Nossas Soluções",
      description:
        "Tire suas principais dúvidas sobre regimes aduaneiros, prazos de importação e contratação de serviços com a NFT Logistics.",
      items: [
        {
          q: "Qual a diferença entre a Admissão Temporária e a Importação Definitiva?",
          a: "A Admissão Temporária permite que mercadorias ingressem no território brasileiro por um prazo determinado com a suspensão total de impostos federais (II, IPI, PIS/Cofins-Importação) e benefício do ICMS, condicionada à reexportação após o evento ou uso autorizado. Já a Importação Definitiva envolve o pagamento integral de tributos para consumo e permanência dos bens no Brasil.",
        },
        {
          q: "Com quanto tempo de antecedência devo iniciar o planejamento de um embarque?",
          a: "Recomendamos iniciar entre 45 e 90 dias antes da data em que a mercadoria precisa estar disponível no Brasil. Esse prazo permite a análise prévia documental, classificação tarifária, obtenção de licenças prévias (Anvisa, Inmetro, MAPA) e escolha do melhor modal de transporte sem custos emergenciais.",
        },
        {
          q: "A NFT Logistics cuida de cargas vindas de qualquer país do mundo?",
          a: "Sim. Possuímos uma rede consolidada de agentes e parceiros logísticos nos principais pólos comerciais do mundo (América do Norte, Europa, Ásia com forte atuação na China, e América Latina), realizando a coleta na fábrica do fornecedor até o destino final no Brasil.",
        },
        {
          q: "Como a NFT Logistics ajuda a reduzir custos tributários na importação?",
          a: "Avaliamos minuciosamente o enquadramento em regimes aduaneiros especiais (como Drawback para indústrias, Entreposto Aduaneiro, Ex-Tarifário para bens de capital e Admissão Temporária), permitindo postergação, suspensão ou redução substancial da carga tributária com plena segurança fiscal.",
        },
        {
          q: "Vocês realizam o suporte presencial no momento do desembaraço e desova?",
          a: "Sim. Contamos com equipes próprias e despachantes aduaneiros credenciados presentes nos principais portos (Santos, Paranaguá, Itajaí), aeroportos (Guarulhos, Viracopos, Galeão) e pavilhões de exposições para acompanhar a conferência física da Receita Federal e coordenar o manuseio técnico.",
        },
      ],
    },
    cta: {
      badge: "Consultoria Dedicada",
      title: "Pronto para otimizar a logística internacional da sua empresa?",
      text: "Converse diretamente com nossos especialistas e receba um diagnóstico detalhado para sua próxima operação com foco em pontualidade, compliance e economia fiscal.",
      button: "Falar no WhatsApp com Especialista",
      subtext: "Atendimento ágil em Português, Inglês e Mandarim.",
      whatsappMessage:
        "Olá! Gostaria de falar com um especialista sobre as soluções em logística internacional e comércio exterior da NFT Logistics.",
    },
  },
  en: {
    hero: {
      badge: "International Logistics & Customs Intelligence",
      title: "Strategic Solutions to Connect Your Business to Brazil",
      description:
        "From tax exemption through special customs regimes to heavy-lift project cargo, fine arts, and international trade fair logistics. End-to-end management with strict regulatory compliance and zero-delay commitment.",
      ctaTalk: "Talk to a Specialist",
      ctaExplore: "Explore Solutions",
      trustTitle: "Over 20 Years of Operational and Customs Safety",
      trustText:
        "Consolidated expertise across Brazil's key ports, airports, bonded warehouses, and major exhibition centers.",
    },
    col2: {
      tag: "Customs Engineering & Integrated Logistics",
      title: "Far beyond standard freight: fiscal and operational intelligence protecting your cash flow",
      paragraphs: [
        "Brazilian foreign trade is known worldwide for its regulatory and fiscal complexity. A tariff classification mistake or the lack of prior approvals from regulatory agencies can halt valuable shipments, generate severe fines, and compromise critical schedules.",
        "NFT Logistics acts as your strategic partner from origin collection to destination delivery and customs clearance. We build tailored logistics solutions integrating multimodal international freight, duty-suspension regimes, and priority clearance.",
        "Our mission is to provide absolute predictability, legal tax savings, and peace of mind so your company can focus entirely on growth.",
      ],
      floatingBadgeTitle: "Door-to-Door Operation",
      floatingBadgeText: "From international pickup to technical delivery at destination",
    },
    solutionsGrid: {
      tag: "Areas of Expertise",
      title: "Our Core Solutions",
      description:
        "Select a specialty to understand how our team structures every phase with legal certainty and operational excellence.",
      buttonLabel: "View solution details",
      items: [
        {
          id: "feiras",
          icon: CalendarCheck,
          tag: "Zero Tolerance for Delays",
          title: "Trade Fairs & International Events",
          image: "/imagens/feira-nft-logistics.jpg",
          imageAlt: "Trade fair logistics and booth setups in Brazil",
          description:
            "Door-to-booth logistics, Temporary Admission with duty suspension, and on-site support at Brazil's leading convention centers.",
          bullets: [
            "Coordinated air and ocean freight aligned with setup timelines",
            "Comprehensive temporary customs admission management",
            "On-site presence for unloading, handling, and empty crate storage",
            "Re-export or post-event nationalization coordination",
          ],
          href: "/en/solutions/fairs-and-events",
        },
        {
          id: "regimes",
          icon: Scale,
          tag: "Tax Optimization",
          title: "Special Customs Regimes",
          image: "/imagens/armazem.jpg",
          imageAlt: "Bonded warehouse and special customs regimes in Brazil",
          description:
            "Legal and operational structuring of Temporary Admission, Drawback, Bonded Warehousing, and RECOF to protect cash flow.",
          bullets: [
            "Full federal and state tax suspension on eligible imports",
            "Preventive audit of commercial documentation and liability terms",
            "Rigorous deadline tracking and formal extension handling",
            "Complete guidance on regular regime extinction",
          ],
          href: "/en/solutions/special-customs-regimes",
        },
        {
          id: "projetos",
          icon: Boxes,
          tag: "Project Cargo & Turn-Key",
          title: "Customized Projects & Heavy-Lift Cargo",
          image: "/imagens/operacao-nft-logistics-7.jpg",
          imageAlt: "Heavy project cargo handling and industrial logistics in Brazil",
          description:
            "Logistics for out-of-gauge (OOG) equipment, breakbulk shipments, complete manufacturing lines, and time-critical project timelines.",
          bullets: [
            "Detailed route surveys and transport feasibility studies",
            "Permit acquisition with road and transport regulatory authorities",
            "Dedicated equipment: heavy cranes, modular lowboys, and flat racks",
            "Hands-on supervision throughout all loading and unloading stages",
          ],
          href: "/en/solutions/customized-projects",
        },
        {
          id: "arte",
          icon: Palette,
          tag: "Maximum Care & Discretion",
          title: "Fine Art & High-Value Cargo Logistics",
          image: "/imagens/nft-art-2.jpg",
          imageAlt: "Museum-grade fine art logistics and high-value cultural artifacts",
          description:
            "Logistics curation for galleries, museums, art auctions, and private collectors with climate-controlled crates, escorts, and nail-to-nail insurance.",
          bullets: [
            "Museum-grade ISPM 15 treated wooden crates and thermal buffers",
            "Dedicated courier accompaniment throughout the entire transit",
            "Customs clearance with IPHAN and Federal Revenue permits",
            "Comprehensive nail-to-nail international insurance coverage",
          ],
          href: "/en/solutions/artworks-logistics",
        },
      ],
    },
    gallery: {
      tag: "Operations in Focus",
      title: "Active Presence and Operational Excellence in the Field",
      description:
        "Real-world photographic records of mission-critical logistics coordinated by NFT Logistics across Brazil's top ports, airports, and convention pavilions.",
      items: [
        {
          image: "/imagens/feira-nft-logistics-4.jpg",
          title: "On-Site Pavilion Assembly",
          category: "Trade Fairs & Expos",
          desc: "Dedicated hands-on technical supervision and booth setup within major convention centers.",
        },
        {
          image: "/imagens/transporte-nft-logistics.webp",
          title: "Surgical Robotics Unpacking",
          category: "Healthcare & MedTech",
          desc: "Precision uncrating and delicate positioning of advanced robotic medical systems.",
        },
        {
          image: "/imagens/operacao-nft-logistics-4.jpg",
          title: "Flatbed Heavy-Lift Transport",
          category: "Project Cargo",
          desc: "Specialized lowboy trucking and heavy industrial machinery rigging on location.",
        },
        {
          image: "/imagens/feira-nft-logistics-6.jpg",
          title: "Major Exhibition Centers",
          category: "Infrastructure",
          desc: "Continuous presence at premier venues: Transamerica Expo Center, São Paulo Expo, and Anhembi.",
        },
      ],
    },
    whyUs: {
      tag: "Competitive Advantages",
      title: "Why global leaders choose NFT Logistics for Brazilian operations?",
      description:
        "We do not provide off-the-shelf formulas. We operate as an extension of your company, designing tailored strategies that unite customs depth, global reach, and relentless operational execution.",
      secondaryText:
        "Our specialists monitor each shipment proactively, anticipating regulatory hurdles before they can cause delays.",
      ctaButton: "Request Operational Analysis",
      cards: [
        {
          icon: Clock,
          title: "Zero Delay Commitment & Real-Time Tracking",
          text: "End-to-end milestone supervision to ensure your cargo arrives strictly on schedule.",
        },
        {
          icon: ShieldCheck,
          title: "Strict Regulatory Compliance & Fiscal Safety",
          text: "Uncompromising conformity with Brazilian Federal Revenue and consenting bodies (Anvisa, Inmetro, MAPA).",
        },
        {
          icon: Truck,
          title: "Global Reach with Deep Local Presence",
          text: "Established partnerships across 5 continents paired with physical presence in Brazil's premier hubs.",
        },
        {
          icon: Users,
          title: "Dedicated Multilingual Advisory",
          text: "Rapid, personal support in English, Portuguese, and Mandarin without bureaucratic intermediaries.",
        },
      ],
    },
    methodology: {
      tag: "Operational Methodology",
      title: "How Our Process Works",
      description:
        "A proven 5-step methodology that turns intricate cross-border operations into smooth, transparent, and predictable journeys.",
      steps: [
        {
          number: "01",
          icon: FileText,
          title: "Diagnosis & Fiscal Assessment",
          text: "Deep analysis of commercial invoices, packing lists, tariff codes (NCM), and optimal customs regime definition.",
        },
        {
          number: "02",
          icon: CheckCircle2,
          title: "Licensing & Prior Authorizations",
          text: "Import license issuance (LPCO / Siscomex) and regulatory approvals before origin departure.",
        },
        {
          number: "03",
          icon: Truck,
          title: "Origin Pickup & International Transport",
          text: "Certified packaging pickup, multimodal air or ocean freight, and compliant shipping documentation.",
        },
        {
          number: "04",
          icon: ShieldCheck,
          title: "Priority Customs Clearance",
          text: "Close supervision during physical and documentary inspections by customs officials for fast release.",
        },
        {
          number: "05",
          icon: Boxes,
          title: "Technical Delivery & Post-Operation",
          text: "Dedicated domestic transport, site delivery, and structured management of return or nationalization.",
        },
      ],
    },
    sectors: {
      tag: "Industries Served",
      title: "Proven Expertise in Mission-Critical Industries",
      description:
        "We serve sectors with stringent regulatory demands, temperature requirements, and zero tolerance for supply chain disruption.",
      items: [
        {
          icon: Activity,
          name: "Healthcare, MedTech & Diagnostics",
          desc: "Importation and temporary admission of CT scanners, MRI systems, and medical devices under strict Anvisa compliance.",
          badge: "View Healthcare Solutions",
          href: "/en/health",
          image: "/imagens/doutores-health.nft-logistics.webp",
        },
        {
          icon: CalendarCheck,
          name: "Exhibitions & Major Conventions",
          desc: "Door-to-booth logistics for leading exhibitions at São Paulo Expo, Anhembi, Transamerica, and Riocentro.",
          badge: "View Fairs & Events",
          href: "/en/solutions/fairs-and-events",
          image: "/imagens/feira-nft-logistics-7.jpg",
        },
        {
          icon: Zap,
          name: "Renewable Energy & Infrastructure",
          desc: "Shipment of photovoltaic solar panels, heavy inverters, transformers, and equipment for power plants.",
          badge: null,
          href: null,
          image: "/imagens/intersolar-nft-logistics.webp",
        },
        {
          icon: Globe2,
          name: "Technology, IT & Telecom",
          desc: "Fast customs clearance with Anatel approvals for servers, cell towers, fiber optics, and advanced electronics.",
          badge: null,
          href: null,
          image: "/imagens/operacao-nft-logistics-2.jpg",
        },
        {
          icon: Layers,
          name: "Heavy Machinery & Industrial Equipment",
          desc: "Full factory assembly lines, oversized replacement components, and capital goods under Drawback regimes.",
          badge: "View Special Regimes",
          href: "/en/solutions/special-customs-regimes",
          image: "/imagens/operacao-nft-logistics-6.jpg",
        },
        {
          icon: Palette,
          name: "Visual Arts, Auctions & Museums",
          desc: "Climate-controlled transport, nail-to-nail insurance, and museum-grade handling for world-class exhibitions.",
          badge: "View Art Logistics",
          href: "/en/solutions/artworks-logistics",
          image: "/imagens/nft-art.jpg",
        },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions About Our Solutions",
      description:
        "Key questions and answers regarding customs regimes, import timelines, and contracting NFT Logistics services.",
      items: [
        {
          q: "What is the difference between Temporary Admission and Permanent Importation?",
          a: "Temporary Admission allows goods to enter Brazilian territory for a specified period with full suspension of federal import duties and ICMS benefits, provided the cargo is re-exported after the event or authorized usage. Permanent Importation involves full upfront tax payment for continuous commercialization in Brazil.",
        },
        {
          q: "How far in advance should we initiate the shipment planning?",
          a: "We recommend starting 45 to 90 days before your intended arrival date in Brazil. This window allows thorough document checks, tariff classification, obtaining prior licenses (Anvisa, Inmetro, MAPA), and booking optimal freight schedules without emergency surcharges.",
        },
        {
          q: "Can NFT Logistics handle shipments originating from anywhere in the world?",
          a: "Yes. We maintain a reliable network of logistics partners across North America, Europe, Asia (with strong hubs in China), and Latin America, managing factory pickup directly through to Brazilian destination delivery.",
        },
        {
          q: "How does NFT Logistics assist in reducing customs tax liabilities?",
          a: "We assess eligibility for special customs regimes (such as Drawback, Bonded Warehousing, Ex-Tarifário duty reductions, and Temporary Admission), enabling significant duty deferral, suspension, or elimination under full legal certainty.",
        },
        {
          q: "Do you provide on-site supervision during customs clearance and delivery?",
          a: "Yes. Our team and licensed customs brokers are physically present at major ports (Santos, Paranaguá), international airports (Guarulhos, Viracopos), and exhibition pavilions to oversee inspections and coordinate technical handling.",
        },
      ],
    },
    cta: {
      badge: "Dedicated Advisory",
      title: "Ready to elevate your international logistics in Brazil?",
      text: "Speak directly with our senior specialists and receive an operational roadmap focused on punctuality, compliance, and tax efficiency.",
      button: "Chat on WhatsApp with Specialist",
      subtext: "Prompt support in English, Portuguese, and Mandarin.",
      whatsappMessage:
        "Hello! I would like to speak with a specialist about NFT Logistics' international freight and customs solutions.",
    },
  },
  cn: {
    hero: {
      badge: "国际物流与巴西海关清关专家",
      title: "连接您业务与巴西市场的战略性国际物流解决方案",
      description:
        "从特殊海关制度税收减免，到超限大型项目货物、艺术品及国际展会物流。全程严密风控、合规保障，对延误实行零容忍。",
      ctaTalk: "咨询专家团队",
      ctaExplore: "探索解决方案",
      trustTitle: "超过20年运营与海关安全经验",
      trustText: "深入掌握巴西主要海运港口、空运机场、保税仓以及国家级展馆的操作全流程。",
    },
    col2: {
      tag: "海关工程与一体化物流",
      title: "超越普通货代：以财税与清关智慧保障您的现金流与时效",
      paragraphs: [
        "巴西的外贸体系以复杂繁琐的法律法规与高税赋著称。税号分类（NCM）哪怕出现细微偏差，或缺少监管机构的事先许可，都可能导致昂贵货物滞港、遭受严厉罚金并彻底耽误项目周期。",
        "NFT Logistics 不仅是货代，更是您在巴西的战略物流顾问。我们为全球客户定制涵盖多式联运（海空陆运）、保税免税特殊制度以及优先清关的一站式物流方案。",
        "我们的目标是消除不确定性，合法合规降低进口税负，让您的企业在巴西市场轻装上阵、高效开拓。",
      ],
      floatingBadgeTitle: "门到门全程无缝保障",
      floatingBadgeText: "从全球海外工厂提货直达巴西最终交付点",
    },
    solutionsGrid: {
      tag: "专业业务板块",
      title: "核心解决方案",
      description: "探索我们精心设计的核心专业领域，了解团队如何以高度的法律合规与卓越执行力为您的货物保驾护航。",
      buttonLabel: "查看业务详情",
      items: [
        {
          id: "feiras",
          icon: CalendarCheck,
          tag: "时效零延误",
          title: "国际展会与大型会议物流",
          image: "/imagens/feira-nft-logistics.jpg",
          imageAlt: "巴西国际展会物流与展位搭建现场",
          description: "门到展位（Door-to-Booth）运输、临时入境（Admissão Temporária）全额税收暂缓，以及巴西各大展馆现场驻场服务。",
          bullets: [
            "精准配合展位搭建日程的海运与特快空运安排",
            "临时入境制度全程申报与担保管理",
            "展馆现场拆箱卸货、布展及空箱安全寄存",
            "展后返运（复出口）或转为永久进口一站式清关",
          ],
          href: "/cn/solutions-cn/fairs-and-events-cn",
        },
        {
          id: "regimes",
          icon: Scale,
          tag: "税收合规优化",
          title: "特殊海关监管制度（免税/保税）",
          image: "/imagens/armazem.jpg",
          imageAlt: "巴西保税仓储与特殊海关监管制度",
          description: "临时入境、Drawback（退税/免税）、保税仓及 RECOF 制度方案设计，大幅减轻企业进口现金流压力。",
          bullets: [
            "进口关税及各项联邦税、州税合法暂缓或免征",
            "商业发票、箱单及责任担保文件的预防性预审",
            "海关期限与合法延期手续的严密跟进",
            "制度核销与复出口结案全流程护航",
          ],
          href: "/cn/solutions-cn/special-customs-regimes-cn",
        },
        {
          id: "projetos",
          icon: Boxes,
          tag: "重大件与交钥匙工程",
          title: "定制工程与超限特种货物物流",
          image: "/imagens/operacao-nft-logistics-7.jpg",
          imageAlt: "巴西大型工业重大件与超限设备现场吊装作业",
          description: "针对超重、超长、超高（OOG）重大件货物、成套工业生产线以及超紧急供应链的高难度运输保障。",
          bullets: [
            "陆运途经桥梁、隧道及道路通行可行性勘测（Route Survey）",
            "巴西交通局（DNIT、DER）与联邦交警特种通行许可证审批",
            "专业特种重型装备：大型吊机、特种低平板拖车等",
            "资深项目工程师全程现场监督装卸作业",
          ],
          href: "/cn/solutions-cn/customized-projects-cn",
        },
        {
          id: "arte",
          icon: Palette,
          tag: "极度细致与保密",
          title: "艺术品与高价值藏品物流",
          image: "/imagens/nft-art-2.jpg",
          imageAlt: "高价值艺术珍品、博物馆展品定制木箱与安全押运",
          description: "为画廊、艺术馆、拍卖行和收藏家提供定制恒温防震木箱、专业押运人员护送以及全程钉到钉保险保障。",
          bullets: [
            "符合国际博物馆标准的熏蒸防潮木箱（ISPM 15）",
            "专业信使（Courier）陪同押运与全程看护",
            "巴西文化遗产局（IPHAN）与海关专属清关批文",
            "全程钉对钉（Nail-to-Nail）综合艺术品保险",
          ],
          href: "/cn/solutions-cn/artworks-logistics-cn",
        },
      ],
    },
    gallery: {
      tag: "现场实况",
      title: "深入一线的高标准现场执行力",
      description: "NFT Logistics 团队在巴西各大海空港口、保税仓及国际会展中心亲自把关与护航关键业务的真实记录。",
      items: [
        {
          image: "/imagens/feira-nft-logistics-4.jpg",
          title: "展馆现场专业安装作业",
          category: "国际展会与博览会",
          desc: "持证专业团队进驻展馆，亲自操作工具监督设备拆箱就位与安全安装。",
        },
        {
          image: "/imagens/transporte-nft-logistics.webp",
          title: "精密手术机器人无损拆箱",
          category: "高端医疗设备",
          desc: "遵循国际严密操作规程，以定制防震熏蒸木箱完成高精密医疗仪器卸载。",
        },
        {
          image: "/imagens/operacao-nft-logistics-4.jpg",
          title: "重工业机床与特种低平板拖车",
          category: "特种工程物流",
          desc: "超限工业设备严密捆扎加固，专线平稳运抵最终厂区及交付现场。",
        },
        {
          image: "/imagens/feira-nft-logistics-6.jpg",
          title: "巴西国家级重点大型会展中心",
          category: "展会场馆枢纽",
          desc: "长期驻场服务于 Transamerica Expo Center、São Paulo Expo 等核心展馆。",
        },
      ],
    },
    whyUs: {
      tag: "竞争优势",
      title: "为什么跨国企业选择 NFT Logistics 开展巴西业务？",
      description: "我们从不提供千篇一律的粗放方案，而是作为您驻巴西团队的延伸，结合专业清关智慧、全球网络与落地执行力。",
      secondaryText: "专家团队在起运前主动排查所有政策与单证隐患，将潜在清关风险与额外成本杜绝在萌芽阶段。",
      ctaButton: "申请业务咨询与评估",
      cards: [
        {
          icon: Clock,
          title: "时效零容忍与全流程节点监控",
          text: "全程关键节点实时追踪，确保每票货物按既定计划安全准时送达目的地。",
        },
        {
          icon: ShieldCheck,
          title: "严密法规合规与法律安全保障",
          text: "全面满足巴西联邦税务局（Receita Federal）及卫生署（Anvisa）、计量局（Inmetro）等监管要求。",
        },
        {
          icon: Truck,
          title: "辐射全球的专业网络与本土深耕",
          text: "覆盖全球五大洲的成熟协作网络，在巴西各大枢纽海空港口及保税区均有常驻团队。",
        },
        {
          icon: Users,
          title: "专属顾问团队与多语种服务",
          text: "提供葡萄牙语、英语、中文无障碍直接对接沟通，消除语言壁垒与时差顾虑。",
        },
      ],
    },
    methodology: {
      tag: "标准化操作流程",
      title: "我们如何高效开展业务",
      description: "经过数百次验证的五步闭环流程，让复杂的跨国物流转变为顺畅、透明且可预期的省心体验。",
      steps: [
        {
          number: "01",
          icon: FileText,
          title: "业务诊断与税号规划",
          text: "深入评估发票、装箱单、巴西税号（NCM）匹配度，量身制定最优关税与清关路径。",
        },
        {
          number: "02",
          icon: CheckCircle2,
          title: "进口许可证与前置批文",
          text: "在起运国发货前，办理巴西 Siscomex 进口许可证（LI）及监管部门审批。",
        },
        {
          number: "03",
          icon: Truck,
          title: "海外工厂提货与国际运输",
          text: "按标准完成包装检验，组织海运或空运干线运输，确保国际提单与合规单证完备。",
        },
        {
          number: "04",
          icon: ShieldCheck,
          title: "巴西港口优先清关查验",
          text: "清关行专家现场配合海关官员查验，快速处理核税并完成进口申报放行。",
        },
        {
          number: "05",
          icon: Boxes,
          title: "内陆转运技术交付与后续闭环",
          text: "专属卡车专线送达最终地点，完成拆箱就位，并跟进展后复出口或转内销完税手续。",
        },
      ],
    },
    sectors: {
      tag: "重点服务行业",
      title: "服务战略产业的成熟实战经验",
      description: "我们专注于对政策法规、温控要求、安全防护有极高标准的行业客户。",
      items: [
        {
          icon: Activity,
          name: "医疗设备、生命健康与诊断仪器",
          desc: "核磁共振、CT机、手术机器人等大型医疗仪器的进口清关及展会参展，具备专业 Anvisa 资质。",
          badge: "查看医疗健康物流",
          href: "/cn/health-cn",
          image: "/imagens/doutores-health.nft-logistics.webp",
        },
        {
          icon: CalendarCheck,
          name: "展会博览与大型国际峰会",
          desc: "为 São Paulo Expo、Anhembi、Riocentro 等巴西国家级展馆提供全程门到展位保障。",
          badge: "查看展会物流",
          href: "/cn/solutions-cn/fairs-and-events-cn",
          image: "/imagens/feira-nft-logistics-7.jpg",
        },
        {
          icon: Zap,
          name: "新能源、光伏与电网基建",
          desc: "光伏组件、逆变器、重型变压器及大型变电站工程设备跨国多式联运。",
          badge: null,
          href: null,
          image: "/imagens/intersolar-nft-logistics.webp",
        },
        {
          icon: Globe2,
          name: "IT通信、电子与半导体",
          desc: "配合巴西电信局（Anatel）认证标准，提供服务器、基站、光纤及高科技器材绿色通道。",
          badge: null,
          href: null,
          image: "/imagens/operacao-nft-logistics-2.jpg",
        },
        {
          icon: Layers,
          name: "重工业机械与成套装备制造",
          desc: "完整厂房搬迁设备、重型机床在 Drawback 和保税制度下的进出口运作。",
          badge: "查看特殊制度",
          href: "/cn/solutions-cn/special-customs-regimes-cn",
          image: "/imagens/operacao-nft-logistics-6.jpg",
        },
        {
          icon: Palette,
          name: "艺术品、文博珍品与拍卖行",
          desc: "全恒温避震押运、博物馆级木箱以及全额钉对钉艺术品专属保险。",
          badge: "查看艺术品物流",
          href: "/cn/solutions-cn/artworks-logistics-cn",
          image: "/imagens/nft-art.jpg",
        },
      ],
    },
    faq: {
      tag: "常见问题",
      title: "关于解决方案的常见咨询",
      description: "了解关于巴西海关政策、进口周期与合作流程的常见疑问与专业解答。",
      items: [
        {
          q: "临时入境（Admissão Temporária）与永久进口有什么区别？",
          a: "临时入境制度允许货物在规定时间内进入巴西用于展会、测试或维修，享受联邦关税和州增值税（ICMS）的暂缓甚至免除，到期需按规定复出口。永久进口则需要在清关时全额缴纳所有税费，货物在巴西境内可自由买卖永久停留。",
        },
        {
          q: "通常需要提前多长时间开始准备货物的运输与清关？",
          a: "建议至少在货物计划抵达巴西前的45至90天启动筹备。这包含单证审核、巴西税号归类、办理前置许可证（如Anvisa、Inmetro、MAPA）以及锁定国际运力，避免产生昂贵的紧急赶工成本。",
        },
        {
          q: "NFT Logistics 能否处理从中国或全球其他国家发出的货物？",
          a: "完全可以。我们在中国主要沿海口岸以及欧美、拉美均有成熟协作的海外代理网络，支持从境外工厂上门提货、出口申报到巴西清关送达的一站式闭环服务，并由中文专员无缝沟通。",
        },
        {
          q: "你们如何帮助企业降低巴西进口的关税与税费负担？",
          a: "我们结合客户货物特性与商业目的，评估运用 Drawback（加工贸易免税/退税）、保税仓、Ex-Tarifário（针对巴西无同类生产的资本货物降税政策）以及临时入境制度，在合规前提下最大化节约税负。",
        },
        {
          q: "在货物到达巴西港口清关及交付时，是否有专人现场协助？",
          a: "是的。我们在桑托斯港、瓜鲁柳斯机场、维拉科波斯机场及各大展馆常驻有持证专业清关行人员与技术协调员，亲自陪同海关查验并监督货物的吊装与转运安全。",
        },
      ],
    },
    cta: {
      badge: "一对一专属咨询",
      title: "准备好优化您在巴西的国际供应链了吗？",
      text: "立即与我们的资深国际物流与海关专家交流，获取针对您业务的详细操作方案与合规建议。",
      button: "通过 WhatsApp 咨询专家",
      subtext: "支持葡萄牙语、英语、中文快速响应服务。",
      whatsappMessage:
        "您好！我想咨询有关 NFT Logistics 国际物流与巴西清关解决方案的详细信息。",
    },
  },
};

export default function SolucoesClient({ lang = "pt" }: SolucoesClientProps) {
  const t = CONTENT[lang] || CONTENT.pt;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const whatsappHref = `https://wa.me/5511948530057?text=${encodeURIComponent(
    t.cta.whatsappMessage
  )}`;

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 overflow-hidden">
      {/* ========================================================================= */}
      {/* BLOCO 1: HERO                                                             */}
      {/* Título de impacto, subtítulo, botões e trust badge                        */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[82vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background com imagem operacional e iluminação quente */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics-3.jpg"
            alt="Soluções em Logística Internacional NFT Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.38] dark:brightness-[0.34]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#160d06]/75 to-neutral-50 dark:to-[#0a0a0a] transition-colors duration-200" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-orange-600/15 blur-[135px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-orange-300 dark:text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight sm:leading-[1.14] drop-shadow-lg">
            {t.hero.title}
          </h1>

          {/* Subtítulo / Descrição */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl leading-relaxed drop-shadow-sm">
            {t.hero.description}
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.hero.ctaTalk}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#solucoes-grid"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.hero.ctaExplore}</span>
            </a>
          </div>

          {/* Trust Element */}
          <div className="mt-12 flex items-center justify-center gap-3.5 max-w-xl text-left bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-xl transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center shrink-0 text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t.hero.trustTitle}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug mt-0.5">
                {t.hero.trustText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 2: DUAS COLUNAS (IMAGEM + TEXTO)                                    */}
      {/* Imagem com badge flutuante + Texto de autoridade aduaneira                 */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna da Esquerda (6 colunas): Imagem com Badge */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl group transition-colors duration-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagens/operacao-nft-logistics-2.jpg"
                    alt="Operação de comércio exterior e desembaraço aduaneiro da NFT Logistics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Badge flutuante na imagem */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {t.col2.floatingBadgeTitle}
                    </p>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300">
                      {t.col2.floatingBadgeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita (6 colunas): Texto */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full inline-block">
                {t.col2.tag}
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.col2.title}
              </h2>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.col2.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 3: AS 4 GRANDES SOLUÇÕES EM DESTAQUE                                */}
      {/* Grid com 4 cards interativos completos                                    */}
      {/* ========================================================================= */}
      <section
        id="solucoes-grid"
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.solutionsGrid.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.solutionsGrid.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.solutionsGrid.description}
            </p>
          </div>

          {/* Grid de 4 cards (2x2 em telas médias/grandes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.solutionsGrid.items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative rounded-3xl overflow-hidden bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/90 shadow-md dark:shadow-xl transition-all duration-300 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-600/10 dark:hover:shadow-orange-600/20 flex flex-col justify-between"
                >
                  <div>
                    {/* Imagem de Destaque da Solução com Zoom Suave */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                    </div>

                    {/* Conteúdo textual do Card */}
                    <div className="p-8 sm:p-10">
                      {/* Título */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Bullets de diferenciais */}
                      <ul className="space-y-2.5 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-6">
                        {item.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botão de ação */}
                  <div className="px-8 sm:p-10 ">
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-neutral-200/70 hover:bg-orange-600 hover:text-white dark:bg-white/5 dark:hover:bg-orange-600 border border-neutral-300/80 hover:border-orange-600 dark:border-white/10 text-neutral-800 dark:text-white text-sm font-semibold transition-all duration-200 group-hover:shadow-md cursor-pointer"
                    >
                      <span>{t.solutionsGrid.buttonLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 4: VANTAGENS COMPETITIVAS (2 COLUNAS COM STICKY + FOTO OPERACIONAL) */}
      {/* Esquerda fixa com card visual + Direita com 4 cards de diferenciais       */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda (5 colunas): Sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span>{t.whyUs.tag}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {t.whyUs.title}
              </h2>

              <p className="text-neutral-700 dark:text-neutral-200 text-base sm:text-lg leading-relaxed">
                {t.whyUs.description}
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.whyUs.secondaryText}
              </p>

              <div className="pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>{t.whyUs.ctaButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna da Direita (7 colunas): 4 Cards */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {t.whyUs.cards.map((card, cIdx) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={cIdx}
                    className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 shadow-md dark:shadow-lg group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-orange-100/80 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 dark:border-orange-400/30 flex items-center justify-center shrink-0 transition-all duration-200 dark:group-hover:text-white group-hover:border-orange-600 dark:group-hover:border-orange-400">
                        <CardIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO VISUAL: OPERAÇÕES EM FOCO (GALERIA OPERACIONAL DE CAMPO)             */}
      {/* 4 fotos reais com categorias e descrições técnicas                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.gallery.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.gallery.description}
            </p>
          </div>

          {/* Grid de 4 fotos em 2 colunas / 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.gallery.items.map((item, gIdx) => (
              <div
                key={gIdx}
                className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-semibold">
                      {item.category}
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
      {/* BLOCO 5: PASSO A PASSO COM 5 ETAPAS                                       */}
      {/* Metodologia Operacional de 01 a 05                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.methodology.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.methodology.title}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.methodology.description}
            </p>
          </div>

          {/* Grid das 5 Etapas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.methodology.steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-md dark:shadow-lg flex flex-col justify-between hover:border-orange-500/50  transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-orange-500/30">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-orange-100/80 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 6: SETORES E VERTICAIS ATENDIDAS                                    */}
      {/* Grid com indústrias e link especial para saúde                            */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#0e0e0e] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.sectors.title}
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.sectors.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sectors.items.map((sec, sIdx) => {
              const SecIcon = sec.icon;
              return (
                <div
                  key={sIdx}
                  className="group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between shadow-md dark:shadow-lg hover:shadow-xl hover:shadow-orange-600/10"
                >
                  <div>
                    {/* Header com Imagem do Setor */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={sec.image}
                        alt={sec.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                      {/* Ícone flutuante sobre a imagem */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-11 h-11 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/30 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <SecIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Texto do Setor */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                        {sec.name}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-200 text-sm leading-relaxed">
                        {sec.desc}
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
      {/* BLOCO 7: FAQ INTERATIVO (ACCORDION)                                       */}
      {/* Dúvidas Frequentes                                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 px-3.5 py-1 rounded-full">
              {t.faq.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.faq.title}
            </h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed">
              {t.faq.description}
            </p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/80 shadow-sm dark:shadow-md overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-100/80 dark:hover:text-black transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed border-t border-neutral-200/80 dark:border-neutral-800/60 pt-4 bg-white/70 dark:bg-neutral-900/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOCO 8: CTA PADRÃO COM WHATSAPP OFICIAL                                  */}
      {/* Fundo escuro, botão verde #25D366 com ícone do WhatsApp                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#060606] border-t border-neutral-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagens/operacao-nft-logistics-5.jpg"
            alt="Consultoria em Soluções Logísticas NFT Logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#180f08]/85 to-[#0a0a0a]/95" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>{t.cta.badge}</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            {t.cta.title}
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {t.cta.text}
          </p>

          {/* Botão Oficial WhatsApp */}
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
              <span>{t.cta.button}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-300">{t.cta.subtext}</p>
        </div>
      </section>
    </div>
  );
}
