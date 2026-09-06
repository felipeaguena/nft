import React from "react";

export type LanguageCode = "pt" | "en" | "cn";

export interface Texto2ColunasLocale {
  tag?: string;
  titulo: string;
  texto: string;
  subtitulo?: string;
}

const DEFAULT_LOCALES: Record<LanguageCode, Texto2ColunasLocale> = {
  pt: {
    tag: "Quem Somos",
    titulo: "Conectamos sua empresa ao mercado brasileiro com inteligência regulatória e precisão operacional.",
    texto: "A NFT Logistics simplifica operações internacionais de alta complexidade no Brasil. Combinamos profunda assessoria aduaneira, regimes especiais como Admissão Temporária e logística sob medida para que feiras, expositores e corporações globais atuem com segurança, conformidade e agilidade.",
  },
  en: {
    tag: "Who We Are",
    titulo: "Connecting global enterprises to Brazil with regulatory certainty and operational excellence.",
    texto: "NFT Logistics simplifies high-stakes international trade in Brazil. We combine deep customs intelligence, special customs regimes like Temporary Admission, and personalized logistics to ensure global exhibitors, importers, and enterprises thrive without regulatory bottlenecks.",
  },
  cn: {
    tag: "关于我们",
    titulo: "以专业合规与卓越运营，协助全球企业顺利进入并深耕巴西市场。",
    texto: "NFT Logistics 专注于化解巴西繁复的清关与监管挑战。依托资深的进出口关务经验、暂时进出境等特殊海关监管制度以及端到端物流保障，确保海外展商与跨国企业高效合规落地。",
  },
};

export interface Texto2ColunasProps {
  /**
   * Idioma padrão para textos institucionais ("pt" | "en" | "cn").
   * Quando informado, fornece valores padrão para título, texto e tag caso não sejam passados.
   */
  lang?: LanguageCode;

  /**
   * Texto comum da coluna direita (60% de largura).
   * Aceita string ou qualquer elemento React.
   */
  texto?: React.ReactNode;
  /**
   * Alias em inglês para a prop texto.
   */
  text?: React.ReactNode;
  /**
   * Conteúdo flexível para a coluna direita caso prefira usar como children.
   */
  children?: React.ReactNode;

  /**
   * Título da coluna esquerda (40% de largura).
   * Aceita string ou qualquer elemento React.
   */
  titulo?: React.ReactNode;
  /**
   * Alias em inglês para a prop titulo.
   */
  title?: React.ReactNode;

  /**
   * Tag / Badge opcional exibida acima do título ou no topo da seção.
   */
  tag?: React.ReactNode;

  /**
   * Subtítulo ou complemento opcional.
   */
  subtitulo?: React.ReactNode;

  /**
   * Elementos de ação/botões opcionais (exibidos na coluna direita).
   */
  actions?: React.ReactNode;

  /**
   * Tag HTML raiz da seção (padrão: "section").
   */
  as?: "section" | "div" | "article";

  /**
   * Nível de cabeçalho para o título (padrão: "h3").
   */
  titleTag?: "h1" | "h2" | "h3" | "h4";

  /**
   * Alinhamento vertical dos blocos em telas médias/grandes (padrão: "start").
   */
  align?: "start" | "center" | "end";

  /**
   * Inverte a ordem visual das colunas se desejado (padrão: false).
   */
  reverse?: boolean;

  /**
   * Classes adicionais para o container externo da seção.
   */
  className?: string;

  /**
   * Classes adicionais para o container interno que delimita a largura máxima.
   */
  containerClassName?: string;

  /**
   * Classes adicionais para a coluna esquerda (40%).
   */
  leftClassName?: string;

  /**
   * Classes adicionais para a coluna direita (60%).
   */
  rightClassName?: string;

  /**
   * Classes adicionais para o elemento de título.
   */
  titleClassName?: string;

  /**
   * Classes adicionais para o elemento de texto.
   */
  textClassName?: string;
}

export default function Texto2Colunas({
  lang,
  texto,
  text,
  children,
  titulo,
  title,
  tag,
  subtitulo,
  actions,
  as: Component = "section",
  titleTag: TitleComponent = "h3",
  align = "start",
  reverse = false,
  className = "",
  containerClassName = "",
  leftClassName = "",
  rightClassName = "",
  titleClassName = "",
  textClassName = "",
}: Texto2ColunasProps) {
  const localeFallback = lang ? DEFAULT_LOCALES[lang] : undefined;
  const contentText = texto ?? text ?? children ?? localeFallback?.texto;
  const contentTitle = titulo ?? title ?? localeFallback?.titulo;
  const contentTag = tag ?? localeFallback?.tag;
  const contentSubtitulo = subtitulo ?? localeFallback?.subtitulo;

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[align];

  return (
    <Component
      className={`w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${className}`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-16 ${alignClasses} ${
          reverse ? "md:flex-row-reverse" : ""
        } ${containerClassName}`}
      >
        {/* Coluna Esquerda: 40% de largura - Tag, Título e Subtítulo */}
        <div
          className={`w-full md:w-[40%] flex flex-col space-y-4 ${leftClassName}`}
        >
          {contentTag && (
            <div>
              {typeof contentTag === "string" ? (
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                  {contentTag}
                </span>
              ) : (
                contentTag
              )}
            </div>
          )}

          {contentTitle &&
            (typeof contentTitle === "string" ? (
              <TitleComponent
                className={`text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-snug sm:leading-snug ${titleClassName}`}
              >
                {contentTitle}
              </TitleComponent>
            ) : (
              contentTitle
            ))}

          {contentSubtitulo && (
            <div className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
              {contentSubtitulo}
            </div>
          )}
        </div>

        {/* Coluna Direita: 60% de largura - Texto comum */}
        <div
          className={`w-full md:w-[60%] flex flex-col space-y-4 ${rightClassName}`}
        >
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

          {actions && <div className="pt-2">{actions}</div>}
        </div>
      </div>
    </Component>
  );
}
