import type { SiteConfig } from "@/types/site-config";

export const siteConfig: SiteConfig = {
  business: {
    name: "Acme Business",
    tagline: "The trusted choice for [industry] in Lagos.",
    description: "Placeholder description. Replace per client.",
    logo: {
      light: "/images/logo-light.svg",
      dark: "/images/logo-dark.svg",
      favicon: "/favicon.ico",
    },
    yearFounded: 2020,
  },
  theme: {
    colors: {
      primary: "#0F5132",
      secondary: "#D97706",
      background: "#FFFFFF",
      foreground: "#0A0A0A",
      muted: "#F4F4F5",
    },
    fonts: {
      heading: "Poppins",
      body: "Inter",
    },
  },
  contact: {
    email: "hello@acme.com",
    phone: "+2348000000000",
    whatsapp: "+2348000000000",
    whatsappPrefilledMessage: "Hi! I saw your website and wanted to get in touch.",
    address: {
      street: "1 Placeholder Street",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    hours: [
      { day: "Mon-Fri", open: "09:00", close: "18:00" },
      { day: "Sat", open: "10:00", close: "16:00" },
    ],
  },
  social: {
    instagram: "https://instagram.com/acme",
    facebook: null,
    twitter: null,
    tiktok: null,
    linkedin: null,
  },
  sections: {
    hero: {
      enabled: true,
      headline: "Your headline goes here",
      subheadline: "A supporting line that explains what you do.",
      ctaPrimary: { label: "Get In Touch", href: "#contact" },
    },
    about: {
      enabled: true,
      heading: "About Us",
      body: "Two or three sentences about the business, its history, and what makes it special.",
    },
    services: {
      enabled: true,
      heading: "What We Do",
      items: [
        { title: "Service One", description: "Brief description." },
        { title: "Service Two", description: "Brief description." },
        { title: "Service Three", description: "Brief description." },
      ],
    },
    contact: {
      enabled: true,
      heading: "Get In Touch",
      subheading: "We typically respond within 2 hours.",
    },
  },
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: { label: "WhatsApp Us", href: "#whatsapp" },
  },
  footer: {
    showBuiltBy: true,
  },
  seo: {
    defaultTitle: "Acme Business | Lagos",
    defaultDescription: "Placeholder description.",
    keywords: [],
  },
  features: {
    whatsappFloatingButton: true,
    backToTop: true,
  },
};