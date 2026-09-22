import React from "react";
import Image from "next/image";

import { FadeIn } from "@/src/components/animations";

export interface HeroProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayClassName?: string;
  className?: string;
  contentClassName?: string;
  heightClassName?: string;
}

export default function Hero({
  children,
  title,
  subtitle,
  actions,
  videoSrc,
  imageSrc = "/imagens/operacao-nft-logistics.webp",
  imageAlt = "NFT Logistics",
  overlayClassName = "bg-gradient-to-b from-black/60 via-black/40 to-black/80 dark:from-black/70 dark:via-black/50 dark:to-neutral-950",
  className = "",
  contentClassName = "",
  heightClassName = "min-h-[80vh]",
}: HeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24 ${heightClassName} ${className}`}
    >
      {/* Background: Vídeo com fallback ou Imagem */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={imageSrc}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover select-none"
        />
      ) : null}

      {/* Overlay com gradiente escurecido para máxima legibilidade do conteúdo */}
      <div className={`absolute inset-0 z-10 ${overlayClassName}`} />

      {/* Conteúdo do Hero com FadeIn */}
      <div
        className={`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center text-white ${contentClassName}`}
      >
        {/* Caso seja passado prop title ou subtitle diretamente */}
        {title && (
          <FadeIn direction="up" duration={0.7} distance={20}>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6 drop-shadow-md leading-tight sm:leading-[1.15]">
              {title}
            </h1>
          </FadeIn>
        )}

        {/* Children para títulos ou estruturas personalizadas por página */}
        {typeof children === "string" ? (
          <FadeIn direction="up" duration={0.7} distance={20}>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight max-w-5xl leading-tight sm:leading-[1.15] drop-shadow-md mb-6">
              {children}
            </h1>
          </FadeIn>
        ) : (
          children
        )}

        {subtitle && (
          <FadeIn direction="up" duration={0.7} delay={0.2} distance={20}>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl font-normal leading-relaxed drop-shadow">
              {subtitle}
            </p>
          </FadeIn>
        )}

        {actions && (
          <FadeIn direction="up" duration={0.7} delay={0.35} distance={20}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              {actions}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
