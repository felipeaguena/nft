import React from "react";

export interface BottomBlurGradientProps {
  /**
   * Permite ativar ou desativar o efeito facilmente.
   * Padrão: true
   */
  enabled?: boolean;
  /**
   * Classes adicionais para customização.
   */
  className?: string;
  /**
   * Altura do gradiente (cerca de 10% do viewport por padrão).
   */
  heightClassName?: string;
}

/**
 * BottomBlurGradient
 *
 * Componente posicionado na borda inferior da tela (embaixo do botão flutuante de WhatsApp)
 * que projeta um gradiente escuro (do preto ao transparente) com efeito de desfoque (backdrop-blur)
 * em cerca de 10% da altura da tela.
 *
 * Possui `pointer-events-none` para não interferir em cliques e interações da página.
 */
export default function BottomBlurGradient({
  enabled = true,
  className = "",
  heightClassName = "h-[10vh] min-h-[70px] max-h-[110px]",
}: BottomBlurGradientProps) {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-0 left-0 right-0 w-full z-30 pointer-events-none select-none ${heightClassName} ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0) 100%)",
        maskImage:
          "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      {/* Camada com desfoque de fundo suave */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Camada do gradiente escuro de preto para transparente */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
    </div>
  );
}
