import React, { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonBaseProps {
  /**
   * Variações visuais do botão:
   * - primary: Ação principal com destaque e cor da marca
   * - secondary: Ação secundária com fundo neutro sutil
   * - outline: Botão com borda e fundo transparente
   * - ghost: Botão sem borda nem fundo fixo, com efeito hover suave
   * - danger: Ações destrutivas ou de alerta crítico
   */
  variant?: ButtonVariant;
  /**
   * Tamanho do botão:
   * - sm: Compacto
   * - md: Padrão
   * - lg: Destaque / Amplo
   * - icon: Quadrado ideal para botões que contêm apenas ícone
   */
  size?: ButtonSize;
  /** Ícone opcional exibido antes do texto (à esquerda) */
  leftIcon?: React.ReactNode;
  /** Ícone opcional exibido depois do texto (à direita) */
  rightIcon?: React.ReactNode;
  /** Estado de carregamento com spinner integrado */
  isLoading?: boolean;
  /** Se informado, o botão se comportará como um link Next.js (Link) */
  href?: string;
  /** Classes CSS adicionais */
  className?: string;
  /** Conteúdo do botão (pode ser texto, ícone, ou ambos combinados) */
  children?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-600 hover:bg-orange-500 text-white shadow-sm shadow-orange-600/20 active:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-500 focus-visible:ring-orange-500",
  secondary:
    "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
  outline:
    "border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
  ghost:
    "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
  danger:
    "bg-red-600 hover:bg-red-500 text-white shadow-sm shadow-red-600/20 active:bg-red-700 focus-visible:ring-red-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-lg",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-base gap-2.5 rounded-xl",
  icon: "h-10 w-10 p-0 justify-center rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      href,
      className = "",
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:active:scale-100";

    const computedClasses = [
      baseClasses,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-0.5 mr-2 h-4 w-4 shrink-0 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {leftIcon}
          </span>
        )}

        {children}

        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href && !isDisabled) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={computedClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading}
        className={computedClasses}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
