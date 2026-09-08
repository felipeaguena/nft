import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import Button, { ButtonVariant, ButtonSize } from "./Button";

export type LanguageCode = "pt" | "en" | "cn";

export interface ImagemTexto2ColunasLocale {
  tag?: string;
  titulo: string;
  texto: string;
  subtitulo?: string;
  buttonText: string;
  buttonHref: string;
  imageAlt: string;
  imageSrc: string;
}

const DEFAULT_LOCALES: Record<LanguageCode, ImagemTexto2ColunasLocale> = {
  pt: {
    tag: "Excelência Operacional",
    titulo: "Conectamos sua operação ao mercado com agilidade e inteligência aduaneira",
    texto:
      "Com profunda expertise em regimes aduaneiros especiais, feiras internacionais e transportes de alta complexidade, a NFT Logistics simplifica operações desafiadoras no Brasil e no exterior. Cuidamos de cada etapa do processo garantindo total conformidade e pontualidade.",
    buttonText: "Conheça Nossa História",
    buttonHref: "/pt/sobre",
    imageAlt: "Operação de logística e comércio exterior da NFT Logistics",
    imageSrc: "/imagens/operacao-nft-logistics-2.webp",
  },
  en: {
    tag: "Operational Excellence",
    titulo: "Connecting your operations to the market with agility and customs intelligence",
    texto:
      "With deep expertise in special customs regimes, international trade fairs, and highly complex transport, NFT Logistics streamlines challenging operations across Brazil and worldwide. We oversee every stage of the process, ensuring full compliance and timely delivery.",
    buttonText: "Discover Our Story",
    buttonHref: "/en/about",
    imageAlt: "NFT Logistics operations and international customs intelligence",
    imageSrc: "/imagens/operacao-nft-logistics-2.webp",
  },
  cn: {
    tag: "卓越运营",
    titulo: "以高效敏捷与关务智慧，无缝连接您的全球运营与巴西市场",
    texto:
      "凭借在特殊海关监管制度、国际展会物流和高复杂度货物运输方面的深厚专长，NFT Logistics 简化了巴西及全球范围内的复杂操作流程。我们严格把控每个环节，确保百分之百合规与准时交付。",
    buttonText: "了解我们的发展历程",
    buttonHref: "/cn/about",
    imageAlt: "NFT Logistics 国际物流与海关外贸运营",
    imageSrc: "/imagens/operacao-nft-logistics-2.webp",
  },
};

export interface ImagemTexto2ColunasProps {
  /**
   * Idioma padrão para textos institucionais ("pt" | "en" | "cn").
   * Quando informado, fornece valores padrão para título, texto, tag e botão caso não sejam passados.
   */
  lang?: LanguageCode;

  // --- Imagem (Coluna da Esquerda / Direita se invertido) ---
  /** Caminho ou import da imagem (Next.js StaticImageData ou string URL/path) */
  imageSrc?: string | StaticImageData;
  /** Texto alternativo para acessibilidade e SEO da imagem */
  imageAlt?: string;
  /** Ativa prioridade de carregamento na imagem (útil se estiver acima da dobra) */
  imagePriority?: boolean;
  /** Componente ou nó customizado para a coluna de imagem (sobrescreve imageSrc se fornecido) */
  image?: React.ReactNode;
  /** Classes CSS para a tag de imagem */
  imageClassName?: string;
  /** Classes CSS para o container com borda/sombra que envolve a imagem */
  imageContainerClassName?: string;
  /** Classes de proporção para a imagem (ex: "aspect-[4/3]", "aspect-video", "aspect-square") */
  imageAspectClassName?: string;

  // --- Conteúdo de Texto (Coluna da Direita / Esquerda se invertido) ---
  /** Título principal */
  titulo?: React.ReactNode;
  /** Alias em inglês para o título */
  title?: React.ReactNode;
  /** Tag HTML semântica para o título (padrão: "h2") */
  titleTag?: "h1" | "h2" | "h3" | "h4";
  /** Classes adicionais para o título */
  titleClassName?: string;

  /** Badge ou etiqueta exibida acima do título (opcional) */
  tag?: React.ReactNode;
  /** Classes adicionais para a tag/badge */
  tagClassName?: string;

  /** Subtítulo curto opcional entre a tag e o parágrafo */
  subtitulo?: React.ReactNode;
  /** Alias em inglês para o subtítulo */
  subtitle?: React.ReactNode;

  /** Texto ou parágrafos descritivos (aceita string com <br> ou quebras de linha duplas, ou nós React) */
  texto?: React.ReactNode;
  /** Alias em inglês para o texto */
  text?: React.ReactNode;
  /** Alias adicional para descrição */
  description?: React.ReactNode;
  /** Conteúdo livre passado como children (renderizado na coluna de texto) */
  children?: React.ReactNode;
  /** Classes adicionais para os parágrafos de texto */
  textClassName?: string;

  // --- Botão de Ação ---
  /** Texto do botão da coluna */
  buttonText?: React.ReactNode;
  /** Alias em português para o texto do botão */
  botaoTexto?: React.ReactNode;
  /** Link (URL/rota) para o qual o botão direciona */
  buttonHref?: string;
  /** Alias em português para o link do botão */
  botaoHref?: string;
  /** Variação de estilo visual do botão ("primary" | "secondary" | "outline" | "ghost" | "danger") */
  buttonVariant?: ButtonVariant;
  /** Tamanho do botão ("sm" | "md" | "lg") */
  buttonSize?: ButtonSize;
  /** Ícone customizado à direita do botão (padrão: seta ArrowRight se não especificado) */
  buttonIcon?: React.ReactNode;
  /** Mostra ou oculta o ícone padrão de seta à direita (padrão: true) */
  showButtonIcon?: boolean;
  /** Alvo do link do botão (ex: "_blank" para nova aba) */
  buttonTarget?: string;
  /** Função de clique opcional para o botão */
  buttonOnClick?: () => void;
  /** Classes CSS adicionais para o botão */
  buttonClassName?: string;
  /** Elemento ou lista de botões/ações customizados (substitui ou complementa o botão padrão) */
  actions?: React.ReactNode;

  // --- Posicionamento e Inversão de Colunas ---
  /**
   * Inverte as colunas.
   * - Quando false (padrão): Imagem na esquerda, textos na direita.
   * - Quando true: Textos na esquerda, imagem na direita.
   */
  reverse?: boolean;
  /**
   * Posição explícita da imagem ("left" | "right").
   * Tem precedência ou funciona como alternativa direta à prop `reverse`.
   */
  imagePosition?: "left" | "right";
  /**
   * Define se no mobile a imagem deve vir antes ou depois do texto.
   * "top": imagem acima do texto (padrão).
   * "bottom": texto acima da imagem.
   */
  mobileOrder?: "top" | "bottom";

  // --- Layout e Estrutura Geral ---
  /** Alinhamento vertical das duas colunas em desktop (padrão: "center") */
  align?: "start" | "center" | "end";
  /** Tag HTML raiz da seção (padrão: "section") */
  as?: "section" | "div" | "article";
  /** Classes CSS adicionais para a tag raiz externa */
  className?: string;
  /** Classes CSS adicionais para o container centralizado interno (máx. largura) */
  containerClassName?: string;
  /** Classes CSS adicionais para a coluna da imagem */
  imageColumnClassName?: string;
  /** Classes CSS adicionais para a coluna de textos */
  textColumnClassName?: string;
}

export default function ImagemTexto2Colunas({
  lang,

  // Imagem
  imageSrc,
  imageAlt,
  imagePriority = false,
  image,
  imageClassName = "",
  imageContainerClassName = "",
  imageAspectClassName = "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]",

  // Textos
  titulo,
  title,
  titleTag: TitleTag = "h2",
  titleClassName = "",
  tag,
  tagClassName = "",
  subtitulo,
  subtitle,
  texto,
  text,
  description,
  children,
  textClassName = "",

  // Botão
  buttonText,
  botaoTexto,
  buttonHref,
  botaoHref,
  buttonVariant = "primary",
  buttonSize = "lg",
  buttonIcon,
  showButtonIcon = true,
  buttonTarget,
  buttonOnClick,
  buttonClassName = "",
  actions,

  // Inversão e posicionamento
  reverse = false,
  imagePosition,
  mobileOrder = "top",

  // Layout
  align = "center",
  as: Component = "section",
  className = "",
  containerClassName = "",
  imageColumnClassName = "",
  textColumnClassName = "",
}: ImagemTexto2ColunasProps) {
  // Consolidação das props com aliases e fallback do idioma
  const localeFallback = lang ? DEFAULT_LOCALES[lang] : undefined;
  const contentTitle = titulo ?? title ?? localeFallback?.titulo;
  const contentSubtitle = subtitulo ?? subtitle ?? localeFallback?.subtitulo;
  const contentText = texto ?? text ?? description ?? children ?? localeFallback?.texto;
  const contentTag = tag ?? localeFallback?.tag;
  const btnLabel = buttonText ?? botaoTexto ?? localeFallback?.buttonText;
  const btnLink = buttonHref ?? botaoHref ?? localeFallback?.buttonHref;
  const resolvedImageSrc = imageSrc ?? localeFallback?.imageSrc;
  const resolvedImageAlt = imageAlt || localeFallback?.imageAlt || "";

  // Determina se as colunas estão invertidas (imagem na direita)
  const isReversed = imagePosition !== undefined ? imagePosition === "right" : reverse;

  // Alinhamento vertical no desktop
  const verticalAlignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[align];

  // Ordem visual no mobile e desktop:
  // Se mobileOrder === "top", imagem vem no topo no mobile (order-1), texto depois (order-2)
  // No desktop (lg:), se isReversed: texto fica à esquerda (lg:order-1) e imagem à direita (lg:order-2)
  // Se NOT isReversed: imagem fica à esquerda (lg:order-1) e texto à direita (lg:order-2)
  const imageOrderClasses = isReversed
    ? mobileOrder === "top"
      ? "order-1 lg:order-2"
      : "order-2 lg:order-2"
    : mobileOrder === "top"
    ? "order-1 lg:order-1"
    : "order-2 lg:order-1";

  const textOrderClasses = isReversed
    ? mobileOrder === "top"
      ? "order-2 lg:order-1"
      : "order-1 lg:order-1"
    : mobileOrder === "top"
    ? "order-2 lg:order-2"
    : "order-1 lg:order-2";

  // Renderização do botão padrão ou ícone
  const renderDefaultButtonIcon = () => {
    if (buttonIcon) return buttonIcon;
    if (showButtonIcon) {
      return (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      );
    }
    return undefined;
  };

  return (
    <Component
      className={`w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 ${verticalAlignClass} ${containerClassName}`}
      >
        {/* =========================================================================
            COLUNA DE IMAGEM
        ========================================================================= */}
        <div className={`w-full ${imageOrderClasses} ${imageColumnClassName}`}>
          {image ? (
            image
          ) : resolvedImageSrc ? (
            <div
              className={`group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md shadow-neutral-900/5 dark:shadow-black/40 ${imageAspectClassName} ${imageContainerClassName}`}
            >
              <Image
                src={resolvedImageSrc}
                alt={resolvedImageAlt}
                fill
                priority={imagePriority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
              />
              {/* Overlay sutil para realce visual */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 dark:opacity-80 transition-opacity duration-300" />
            </div>
          ) : null}
        </div>

        {/* =========================================================================
            COLUNA DE CONTEÚDO (TÍTULO, PARÁGRAFO E BOTÃO)
        ========================================================================= */}
        <div
          className={`w-full flex flex-col justify-center space-y-6 ${textOrderClasses} ${textColumnClassName}`}
        >
          {/* Badge / Tag Opcional */}
          {contentTag && (
            <div>
              {typeof contentTag === "string" ? (
                <span
                  className={`inline-flex items-center px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60 ${tagClassName}`}
                >
                  {contentTag}
                </span>
              ) : (
                contentTag
              )}
            </div>
          )}

          {/* Bloco de Título e Subtítulo */}
          {(contentTitle || contentSubtitle) && (
            <div className="space-y-3">
              {contentTitle &&
                (typeof contentTitle === "string" ? (
                  <TitleTag
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight ${titleClassName}`}
                  >
                    {contentTitle}
                  </TitleTag>
                ) : (
                  contentTitle
                ))}

              {contentSubtitle &&
                (typeof contentSubtitle === "string" ? (
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-medium">
                    {contentSubtitle}
                  </p>
                ) : (
                  contentSubtitle
                ))}
            </div>
          )}

          {/* Texto / Parágrafos */}
          {contentText && (
            <div>
              {typeof contentText === "string" ? (
                contentText.includes("<br") || contentText.includes("\n\n") ? (
                  <div className={`space-y-4 ${textClassName}`}>
                    {contentText
                      .split(/(?:<br\s*\/?>|\n\n)/gi)
                      .filter((p) => p.trim().length > 0)
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-200 font-normal"
                        >
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>
                ) : (
                  <p
                    className={`text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-200 font-normal whitespace-pre-line ${textClassName}`}
                  >
                    {contentText}
                  </p>
                )
              ) : (
                contentText
              )}
            </div>
          )}

          {/* Botão de Ação / Custom Actions */}
          {(btnLabel || actions) && (
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {btnLabel && (
                <Button
                  href={btnLink}
                  variant={buttonVariant}
                  size={buttonSize}
                  rightIcon={renderDefaultButtonIcon()}
                  target={buttonTarget}
                  onClick={buttonOnClick}
                  className={`group ${buttonClassName}`}
                >
                  {btnLabel}
                </Button>
              )}
              {actions}
            </div>
          )}
        </div>
      </div>
    </Component>
  );
}

// Exportações adicionais para conveniência
export { ImagemTexto2Colunas as ImageText2Colunas, ImagemTexto2Colunas as TwoColumnImageText };
