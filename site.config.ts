import type { SiteConfig } from "@/types/site-config";

export const siteConfig: SiteConfig = {
  business: {
    name: "NEK Ventures",
    tagline: "Fast. Reliable. Worldwide.",
    description:
      "NEK Ventures is a Nigerian logistics company providing reliable air and sea cargo services to the USA, UK, Canada, and Europe — plus trusted sourcing of Nigerian food items and hair accessories for our international clients.",
    logo: {
      light: "/images/logo.png",
      dark: "/images/logo.png",
      favicon: "/favicon.ico",
    },
    yearFounded: 2020,
  },
  theme: {
    colors: {
      primary: "#0F2A5B", // navy from logo
      secondary: "#C42027", // red from logo
      background: "#FFFFFF",
      foreground: "#0F172A",
      muted: "#F5F7FA",
    },
    fonts: {
      heading: "Poppins",
      body: "Inter",
    },
  },
  contact: {
    email: "nkirufidelia@yahoo.com", 
    phone: "+2349028425427",
    whatsapp: "+2349028425427",
    whatsappPrefilledMessage:
      "Hi NEK Ventures! I saw your website and would like to enquire about your cargo services.",
    address: {
      street: "23, Olatunji Idowu Street, Off Alidada, Ago Palace Way", 
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
    instagram: null, 
    facebook: null,
    twitter: null,
    tiktok: null,
    linkedin: null,
  },
  sections: {
    hero: {
      enabled: true,
      headline: "Ship anywhere in the world — fast, reliable, worry-free.",
      subheadline:
        "Air and sea cargo to the USA, UK, Canada and Europe. We also source and ship Nigerian food items and hair accessories on your behalf.",
      ctaPrimary: { label: "Get a Quote", href: "#contact" },
    },
    about: {
      enabled: true,
      heading: "About NEK Ventures",
      body: "At NEK Ventures, we help individuals and businesses move goods across borders with confidence. Whether you're shipping a single package by air or a full container by sea, our team handles the pickup, paperwork and delivery so you can focus on what matters. We specialise in shipments to the USA, UK, Canada and Europe, and we source high-demand Nigerian items — including foodstuff and hair accessories — for clients in the diaspora.",
    },
    services: {
      enabled: true,
      heading: "Our Services",
      items: [
        {
          title: "Air Cargo",
          description:
            "Fast and efficient global delivery for time-sensitive shipments. Perfect for small parcels, documents and urgent goods.",
        },
        {
          title: "Sea Cargo",
          description:
            "Cost-effective shipping for large volumes and heavier goods. Ideal for bulk orders, household items and commercial cargo.",
        },
        {
          title: "Product Sourcing",
          description:
            "We source and ship items on your behalf — crayfish, dried fish, egusi, ogbono, vegetables, palm oil, and hair accessories like wigs, attachments and weavons.",
        },
      ],
    },
    contact: {
      enabled: true,
      heading: "Get in touch",
      subheading:
        "Send us a message on WhatsApp or fill in the form and we'll get back to you within a few hours.",
    },
  },
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: { label: "WhatsApp Us", href: "https://wa.me/2349028425427" },
  },
  footer: {
    showBuiltBy: true,
  },
  seo: {
    defaultTitle: "NEK Ventures | Air & Sea Cargo to USA, UK, Canada & Europe",
    defaultDescription:
      "Reliable air and sea cargo shipping from Nigeria to the USA, UK, Canada and Europe. We also source Nigerian food items and hair accessories for the diaspora.",
    keywords: [
      "NEK Ventures",
      "Nigeria cargo",
      "air cargo Nigeria",
      "sea cargo Nigeria",
      "shipping to USA",
      "shipping to UK",
      "shipping to Canada",
      "Nigerian food export",
      "hair accessories shipping",
    ],
  },
  features: {
    whatsappFloatingButton: true,
    backToTop: true,
  },
};
