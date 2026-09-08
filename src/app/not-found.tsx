import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Página Não Encontrada (404) | NFT Logistics',
  description: 'A página que você procura não foi encontrada no portal da NFT Logistics.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="h-[100dvh] overflow-hidden bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex justify-center relative z-10">
          <Link href="/" className="inline-block transition-transform hover:scale-105 opacity-80 hover:opacity-100">
            <Image 
              src="/logo/nft-logistics-logo-completo-branco.webp" 
              alt="NFT Logistics" 
              width={140} 
              height={45} 
              className="object-contain"
            />
          </Link>
        </div>

        <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-orange-600 leading-none">
          404
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Página não encontrada
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg">
            A página que você está procurando pode ter sido removida, mudado de nome ou está temporariamente indisponível.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-200 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}
