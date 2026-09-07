export type LanguageCode = "pt" | "en" | "cn";

export interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

export interface CapabilityCard {
  badge: string;
  title: string;
  desc: string;
  footer: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
}
