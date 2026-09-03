import React from "react";
import Image from "next/image";

export interface HeroProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
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
  videoSrc,
  imageSrc = "/imagens/bg-nft-logistics.jpg",
  imageAlt = "NFT Logistics",
  overlayClassName = "bg-gradient-to-b from-black/60 via-black/40 to-black/80 dark:from-black/70 dark:via-black/50 dark:to-neutral-950",
  className = "",
  contentClassName = "",
  heightClassName = "min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]",
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

      {/* Conteúdo do Hero */}
      <div
        className={`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center text-white ${contentClassName}`}
      >
        {/* Caso seja passado prop title ou subtitle diretamente */}
        {title && (
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 drop-shadow-md">
            {title}
          </h1>
        )}

        {/* Children para títulos ou estruturas personalizadas por página */}
        {typeof children === "string" ? (
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-5xl leading-tight drop-shadow-md mb-6">
            {children}
          </h1>
        ) : (
          children
        )}

        {subtitle && (
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 dark:text-neutral-300 max-w-3xl font-normal leading-relaxed drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
