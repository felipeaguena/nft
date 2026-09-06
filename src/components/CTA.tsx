import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button, { ButtonVariant } from "./Button";

export interface CTAProps {
  /**
   * Imagem de fundo (caminho string ou StaticImageData).
   * Opcional caso seja passada via children com <CTA.Background> ou elemento customizado.
   */
  imageSrc?: string | StaticImageData;
  /** Texto alternativo para a imagem de fundo */
  imageAlt?: string;
  /** Prioridade no carregamento da imagem (LCP) */
  imagePriority?: boolean;

  /** Título principal do CTA */
  title?: React.ReactNode;
  /** Texto descritivo curto do CTA */
  description?: React.ReactNode;

  /** Texto exibido dentro do botão */
  buttonText?: React.ReactNode;
  /** Link para o qual o botão direciona (cobre todo o elemento clicável) */
  buttonHref?: string;
  /** Abre link em nova aba se "_blank" */
  buttonTarget?: string;
  /** Variante visual do botão do design system */
  buttonVariant?: ButtonVariant;
  /** Ícone à direita do texto do botão */
  buttonIcon?: React.ReactNode;

  /**
   * Posição horizontal do bloco de conteúdo (40% em desktop):
   * - "left": alinhado à esquerda (padrão)
   * - "center": centralizado no container
   * - "right": alinhado à direita
   */
  contentPosition?: "left" | "center" | "right";

  /** Classes CSS adicionais para o container externo */
  className?: string;
  /** Classes CSS adicionais para o bloco de conteúdo (40%) */
  contentClassName?: string;
  /** Classes para personalizar o overlay de fundo sobre a imagem */
  overlayClassName?: string;
  /** Classes para altura mínima do container */
  minHeightClassName?: string;

  /**
   * Elementos filhos customizados (podem incluir imagem de fundo,
   * subcomponentes de CTA ou outros conteúdos)
   */
  children?: React.ReactNode;
}

/**
 * Subcomponente para imagem ou elemento de fundo de preenchimento total
 */
export function CTABackground({
  src,
  alt = "CTA Background",
  priority = false,
  className = "",
  children,
}: {
  src?: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1080px) 100vw, 1080px"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        children
      )}
    </div>
  );
}

/**
 * Subcomponente para o bloco de conteúdo (limitado a ~40% no desktop)
 */
export function CTAContent({
  children,
  position = "left",
  className = "",
}: {
  children: React.ReactNode;
  position?: "left" | "center" | "right";
  className?: string;
}) {
  const positionClasses = {
    left: "items-start text-left mr-auto",
    center: "items-center text-center mx-auto",
    right: "items-end text-right ml-auto",
  }[position];

  return (
    <div
      className={`relative z-10 flex flex-col justify-center w-full md:max-w-[50%] lg:max-w-[50%] gap-4 sm:gap-5 ${positionClasses} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Subcomponente para o título do CTA
 */
export function CTATitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight drop-shadow-md ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * Subcomponente para o texto curto do CTA
 */
export function CTADescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm sm:text-base text-neutral-200 leading-relaxed line-clamp-4 drop-shadow-sm ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Subcomponente para o botão do CTA com link em todo o elemento
 */
export function CTAButton({
  href,
  target,
  variant,
  icon = <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />,
  className = "",
  children,
}: {
  href: string;
  target?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-2 w-full sm:w-auto">
      <Button
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        variant={variant}
        size="lg"
        rightIcon={icon}
        className={`group w-full sm:w-auto font-semibold shadow-lg shadow-black/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      >
        {children}
      </Button>
    </div>
  );
}

/**
 * Componente principal CTA
 * - Largura máxima de 1080px (max-w-[1080px])
 * - Imagem de fundo com preenchimento total de largura e alinhada ao centro
 * - Bloco de conteúdo ocupando cerca de 40% da largura total em desktop
 * - Título, texto curto e botão interativo com link em todo o elemento
 */
export default function CTA({
  imageSrc,
  imageAlt = "CTA Background",
  imagePriority = false,
  title,
  description,
  buttonText,
  buttonHref,
  buttonTarget,
  buttonVariant,
  buttonIcon,
  contentPosition = "left",
  className = "",
  contentClassName = "",
  overlayClassName = "bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/40 dark:from-neutral-950/95 dark:via-neutral-950/80 dark:to-neutral-950/50",
  minHeightClassName = "min-h-[380px] sm:min-h-[320px] lg:min-h-[360px]",
  children,
}: CTAProps) {
  const hasPropsContent = Boolean(title || description || (buttonText && buttonHref));

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div
        className={`relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200/20 dark:border-neutral-800/80 flex items-center p-6 sm:p-10 lg:p-14 ${minHeightClassName} ${className}`}
      >
        {/* Imagem de Fundo (se fornecida via prop) */}
        {imageSrc && (
          <CTABackground
            src={imageSrc}
            alt={imageAlt}
            priority={imagePriority}
          />
        )}

        {/* Camada de Overlay com Gradiente para legibilidade do texto e contraste visual */}
        <div
          className={`absolute inset-0 z-[1] transition-opacity duration-300 pointer-events-none ${overlayClassName}`}
          aria-hidden="true"
        />

        {/* Conteúdo: Se forem passadas as props diretas, renderiza a estrutura otimizada */}
        {hasPropsContent ? (
          <CTAContent position={contentPosition} className={contentClassName}>
            {title && <CTATitle>{title}</CTATitle>}
            {description && <CTADescription>{description}</CTADescription>}
            {buttonText && buttonHref && (
              <CTAButton
                href={buttonHref}
                target={buttonTarget}
                variant={buttonVariant}
                icon={buttonIcon}
              >
                {buttonText}
              </CTAButton>
            )}
            {/* Permite adicionar nós adicionais dentro do bloco de 40% se desejado */}
            {children}
          </CTAContent>
        ) : (
          /* Se o usuário preferir compor tudo livremente via children */
          children
        )}
      </div>
    </section>
  );
}

// Anexando subcomponentes ao CTA para sintaxe composable elegante: <CTA.Content>, etc.
CTA.Background = CTABackground;
CTA.Content = CTAContent;
CTA.Title = CTATitle;
CTA.Description = CTADescription;
CTA.Button = CTAButton;
