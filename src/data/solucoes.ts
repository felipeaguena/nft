import { LanguageCode } from "@/src/types";

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

export const CONTENT = {
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
          image: "/imagens/feira-nft-logistics.webp",
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
          image: "/imagens/armazem.webp",
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
          image: "/imagens/operacao-nft-logistics-7.webp",
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
          image: "/imagens/nft-art-2.webp",
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
          image: "/imagens/feira-nft-logistics-4.webp",
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
          image: "/imagens/operacao-nft-logistics-4.webp",
          title: "Cargas em Carretas Prancha",
          category: "Cargas de Projeto",
          desc: "Transporte rodoviário pesado e amarração de maquinário industrial de grande porte.",
        },
        {
          image: "/imagens/feira-nft-logistics-6.webp",
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
          image: "/imagens/feira-nft-logistics-7.webp",
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
          image: "/imagens/operacao-nft-logistics-2.webp",
        },
        {
          icon: Layers,
          name: "Indústria de Máquinas & Equipamentos Pesados",
          desc: "Linhas de produção fabris, peças de reposição e maquinário sobredimensionado em regimes de Drawback e Admissão Temporária.",
          badge: "Ver Regimes Especiais",
          href: "/pt/solucoes/regimes-especiais",
          image: "/imagens/operacao-nft-logistics-6.webp",
        },
        {
          icon: Palette,
          name: "Artes Visuais, Leilões & Museus",
          desc: "Transporte climatizado, seguro total nail-to-nail e embalagens museum grade para mostras de relevância global.",
          badge: "Ver Logística de Arte",
          href: "/pt/solucoes/logistica-obras-arte",
          image: "/imagens/nft-art.webp",
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
          image: "/imagens/feira-nft-logistics.webp",
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
          image: "/imagens/armazem.webp",
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
          image: "/imagens/operacao-nft-logistics-7.webp",
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
          image: "/imagens/nft-art-2.webp",
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
          image: "/imagens/feira-nft-logistics-4.webp",
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
          image: "/imagens/operacao-nft-logistics-4.webp",
          title: "Flatbed Heavy-Lift Transport",
          category: "Project Cargo",
          desc: "Specialized lowboy trucking and heavy industrial machinery rigging on location.",
        },
        {
          image: "/imagens/feira-nft-logistics-6.webp",
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
          image: "/imagens/feira-nft-logistics-7.webp",
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
          image: "/imagens/operacao-nft-logistics-2.webp",
        },
        {
          icon: Layers,
          name: "Heavy Machinery & Industrial Equipment",
          desc: "Full factory assembly lines, oversized replacement components, and capital goods under Drawback regimes.",
          badge: "View Special Regimes",
          href: "/en/solutions/special-customs-regimes",
          image: "/imagens/operacao-nft-logistics-6.webp",
        },
        {
          icon: Palette,
          name: "Visual Arts, Auctions & Museums",
          desc: "Climate-controlled transport, nail-to-nail insurance, and museum-grade handling for world-class exhibitions.",
          badge: "View Art Logistics",
          href: "/en/solutions/artworks-logistics",
          image: "/imagens/nft-art.webp",
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
          image: "/imagens/feira-nft-logistics.webp",
          imageAlt: "巴西国际展会物流与展位搭建现场",
          description: "门到展位（Door-to-Booth）运输、临时入境（Admissão Temporária）全额税收暂缓，以及巴西各大展馆现场驻场服务。",
          bullets: [
            "精准配合展位搭建日程的海运与特快空运安排",
            "临时入境制度全程申报与担保管理",
            "展馆现场拆箱卸货、布展及空箱安全寄存",
            "展后返运（复出口）或转为永久进口一站式清关",
          ],
          href: "/cn/solutions/fairs-and-events",
        },
        {
          id: "regimes",
          icon: Scale,
          tag: "税收合规优化",
          title: "特殊海关监管制度（免税/保税）",
          image: "/imagens/armazem.webp",
          imageAlt: "巴西保税仓储与特殊海关监管制度",
          description: "临时入境、Drawback（退税/免税）、保税仓及 RECOF 制度方案设计，大幅减轻企业进口现金流压力。",
          bullets: [
            "进口关税及各项联邦税、州税合法暂缓或免征",
            "商业发票、箱单及责任担保文件的预防性预审",
            "海关期限与合法延期手续的严密跟进",
            "制度核销与复出口结案全流程护航",
          ],
          href: "/cn/solutions/special-customs-regimes",
        },
        {
          id: "projetos",
          icon: Boxes,
          tag: "重大件与交钥匙工程",
          title: "定制工程与超限特种货物物流",
          image: "/imagens/operacao-nft-logistics-7.webp",
          imageAlt: "巴西大型工业重大件与超限设备现场吊装作业",
          description: "针对超重、超长、超高（OOG）重大件货物、成套工业生产线以及超紧急供应链的高难度运输保障。",
          bullets: [
            "陆运途经桥梁、隧道及道路通行可行性勘测（Route Survey）",
            "巴西交通局（DNIT、DER）与联邦交警特种通行许可证审批",
            "专业特种重型装备：大型吊机、特种低平板拖车等",
            "资深项目工程师全程现场监督装卸作业",
          ],
          href: "/cn/solutions/customized-projects",
        },
        {
          id: "arte",
          icon: Palette,
          tag: "极度细致与保密",
          title: "艺术品与高价值藏品物流",
          image: "/imagens/nft-art-2.webp",
          imageAlt: "高价值艺术珍品、博物馆展品定制木箱与安全押运",
          description: "为画廊、艺术馆、拍卖行和收藏家提供定制恒温防震木箱、专业押运人员护送以及全程钉到钉保险保障。",
          bullets: [
            "符合国际博物馆标准的熏蒸防潮木箱（ISPM 15）",
            "专业信使（Courier）陪同押运与全程看护",
            "巴西文化遗产局（IPHAN）与海关专属清关批文",
            "全程钉对钉（Nail-to-Nail）综合艺术品保险",
          ],
          href: "/cn/solutions/artworks-logistics",
        },
      ],
    },
    gallery: {
      tag: "现场实况",
      title: "深入一线的高标准现场执行力",
      description: "NFT Logistics 团队在巴西各大海空港口、保税仓及国际会展中心亲自把关与护航关键业务的真实记录。",
      items: [
        {
          image: "/imagens/feira-nft-logistics-4.webp",
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
          image: "/imagens/operacao-nft-logistics-4.webp",
          title: "重工业机床与特种低平板拖车",
          category: "特种工程物流",
          desc: "超限工业设备严密捆扎加固，专线平稳运抵最终厂区及交付现场。",
        },
        {
          image: "/imagens/feira-nft-logistics-6.webp",
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
          href: "/cn/health",
          image: "/imagens/doutores-health.nft-logistics.webp",
        },
        {
          icon: CalendarCheck,
          name: "展会博览与大型国际峰会",
          desc: "为 São Paulo Expo、Anhembi、Riocentro 等巴西国家级展馆提供全程门到展位保障。",
          badge: "查看展会物流",
          href: "/cn/solutions/fairs-and-events",
          image: "/imagens/feira-nft-logistics-7.webp",
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
          image: "/imagens/operacao-nft-logistics-2.webp",
        },
        {
          icon: Layers,
          name: "重工业机械与成套装备制造",
          desc: "完整厂房搬迁设备、重型机床在 Drawback 和保税制度下的进出口运作。",
          badge: "查看特殊制度",
          href: "/cn/solutions/special-customs-regimes",
          image: "/imagens/operacao-nft-logistics-6.webp",
        },
        {
          icon: Palette,
          name: "艺术品、文博珍品与拍卖行",
          desc: "全恒温避震押运、博物馆级木箱以及全额钉对钉艺术品专属保险。",
          badge: "查看艺术品物流",
          href: "/cn/solutions/artworks-logistics",
          image: "/imagens/nft-art.webp",
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