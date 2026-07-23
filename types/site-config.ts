export type SiteConfig = {
  business: BusinessInfo;
  theme: ThemeConfig;
  contact: ContactInfo;
  social: SocialLinks;
  sections: Sections;
  nav: NavConfig;
  footer: FooterConfig;
  seo: SEOConfig;
  features: FeaturesConfig;
};

export type BusinessInfo = {
  name: string;
  tagline: string;
  description: string;
  logo: { light: string; dark: string; favicon: string };
  yearFounded?: number;
};

export type ThemeConfig = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappPrefilledMessage?: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    googleMapsEmbedUrl?: string;
  };
  hours: Array<{ day: string; open: string; close: string }>;
};

export type SocialLinks = {
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  tiktok?: string | null;
  linkedin?: string | null;
};

export type Sections = {
  hero: {
    enabled: boolean;
    headline: string;
    subheadline: string;
    ctaPrimary: { label: string; href: string };
    backgroundImage?: string;
  };
  about: {
    enabled: boolean;
    heading: string;
    body: string;
    image?: string;
  };
  services: {
    enabled: boolean;
    heading: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  contact: {
    enabled: boolean;
    heading: string;
    subheading: string;
  };
};

export type NavConfig = {
  items: Array<{ label: string; href: string }>;
  ctaButton?: { label: string; href: string };
};

export type FooterConfig = {
  showBuiltBy: boolean;
};

export type SEOConfig = {
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
  ogImage?: string;
};

export type FeaturesConfig = {
  whatsappFloatingButton: boolean;
  backToTop: boolean;
};