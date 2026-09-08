import React from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Mail, 
  MapPin
} from 'lucide-react';
import {
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon
} from '@/src/components/icons';
import Image from 'next/image';

type PersonData = {
  nome: string;
  url: string;
  telefone: string;
  whatsapp: string;
  emailComercial: string;
  instagram: string;
  linkedin: string;
  linkedinPessoal: {
    nome: string;
    url: string;
  };
  endereco: {
    address: string;
    adressLink: string;
  };
};

type Language = 'pt' | 'en' | 'cn';

interface LinkTreeProps {
  personKey: string;
  personData: PersonData;
  lang?: Language;
}

const translations = {
  pt: {
    website: "Site Oficial",
    whatsapp: "WhatsApp",
    email: "E-mail Comercial",
    instagram: "Instagram",
    linkedinCompany: "LinkedIn NFT Logistics",
    linkedinPersonal: "LinkedIn Pessoal",
    address: "Nossa Localização"
  },
  en: {
    website: "Official Website",
    whatsapp: "WhatsApp",
    email: "Commercial Email",
    instagram: "Instagram",
    linkedinCompany: "NFT Logistics LinkedIn",
    linkedinPersonal: "Personal LinkedIn",
    address: "Our Location"
  },
  cn: {
    website: "官方网站",
    whatsapp: "WhatsApp",
    email: "商业邮箱",
    instagram: "Instagram",
    linkedinCompany: "NFT Logistics 领英",
    linkedinPersonal: "个人领英",
    address: "我们的位置"
  }
};

const namesMap: Record<string, string> = {
  felipe: "Felipe Aguena",
  marcos: "Marcos Krekovski",
  vitor: "Vítor Schimmelpfeng"
};

export default function LinkTree({ personKey, personData, lang = 'pt' }: LinkTreeProps) {
  const t = translations[lang];
  const personName = namesMap[personKey] || personKey;

  const parseInstagram = (url: string) => '@' + url.replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/$/, '');
  const parseLinkedin = (url: string) => '@' + url.replace(/^https?:\/\/(www\.)?linkedin\.com\/company\//, '').replace(/\/$/, '');
  const parseWebsite = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  const links = [
    {
      title: t.website,
      value: parseWebsite(personData.url),
      url: personData.url,
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: t.whatsapp,
      value: personData.telefone,
      url: personData.whatsapp,
      icon: <WhatsAppIcon className="w-5 h-5" />
    },
    {
      title: t.email,
      value: personData.emailComercial,
      url: `mailto:${personData.emailComercial}`,
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: t.linkedinPersonal,
      value: personData.linkedinPessoal.nome,
      url: personData.linkedinPessoal.url,
      icon: <LinkedInIcon className="w-5 h-5" />
    },
    {
      title: t.linkedinCompany,
      value: parseLinkedin(personData.linkedin),
      url: personData.linkedin,
      icon: <LinkedInIcon className="w-5 h-5" />
    },
    {
      title: t.instagram,
      value: parseInstagram(personData.instagram),
      url: personData.instagram,
      icon: <InstagramIcon className="w-5 h-5" />
    },
    {
      title: t.address,
      value: personData.endereco.address,
      url: personData.endereco.adressLink,
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto py-10 flex flex-col items-center animate-fade-in">
      {/* Profile Section */}
      <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-4 overflow-hidden border-2 border-white/20 relative shadow-lg">
        <Image 
          src={`/perfil/${personKey}-perfil.webp`}
          alt={`Foto de perfil de ${personName}`}
          fill
          priority
          sizes="128px"
          className="object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold mb-1 text-center">{personName}</h1>
      <p className="text-white/70 mb-5 text-center">{personData.nome}</p>

      {/* Language Selector */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <Link 
          href={`/nft-links/${personKey}`} 
          className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${lang === 'en' ? 'bg-white text-neutral-950 border-white' : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
        >
          EN
        </Link>
        <Link 
          href={`/nft-links/pt/${personKey}`} 
          className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${lang === 'pt' ? 'bg-white text-neutral-950 border-white' : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
        >
          PT
        </Link>
        <Link 
          href={`/nft-links/cn/${personKey}`} 
          className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${lang === 'cn' ? 'bg-white text-neutral-950 border-white' : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
        >
          中文
        </Link>
      </div>

      {/* Links Section */}
      <div className="w-full flex flex-col gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex-shrink-0 text-white/70 group-hover:text-white transition-colors">
              {link.icon}
            </div>
            <div className="flex-grow flex flex-col justify-center items-center pr-7">
              <span className="font-medium group-hover:text-white transition-colors text-center">{link.title}</span>
              <span className="text-xs text-white/50 mt-0.5 group-hover:text-white/80 transition-colors line-clamp-1 text-center" title={link.value}>{link.value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Logo */}
      <div className="mt-12 opacity-60 hover:opacity-100 transition-opacity">
        <a href={personData.url} target="_blank" rel="noopener noreferrer" aria-label="NFT Logistics">
          <Image 
            src="/logo/nft-logistics-logo-completo-branco.webp"
            alt="NFT Logistics"
            width={150}
            height={43}
            className="h-9 w-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
}
