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
      favicon: "/favicon.png",
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
    phone: "+2349134895792",
    whatsapp: "+2349134895792",
    whatsappPrefilledMessage:
      "Hi NEK Ventures! I saw your website and would like to enquire about your cargo services.",
    address: {
      street: "1b Modinatu Raskiyat Street. Unique Estate. Baruwa Ipaja.", 
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
    hours: [
      { day: "Mon-Fri", open: "09:00am", close: "6:00pm" },
      { day: "Sat", open: "10:00am", close: "4:00pm" },
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
      headline: "Air & sea cargo from Nigeria to the USA, UK, Canada & Europe.",
      subheadline:
        "Fast, reliable, worry-free door-to-door shipping from Lagos. We also source and ship Nigerian foodstuff and hair accessories on your behalf.",
      ctaPrimary: { label: "Get a Quote", href: "#contact" },
    },
    about: {
      enabled: true,
      heading: "About NEK Ventures",
      body: "At NEK Ventures, we help individuals and businesses move goods across borders with confidence. Whether you're shipping a single package by air or a full container by sea, our team handles the pickup, paperwork and delivery so you can focus on what matters. We specialise in shipments to the USA, UK, Canada and Europe, and we source high-demand Nigerian items — including foodstuff and hair accessories — for clients in the diaspora.",
    },
    services: {
      enabled: true,
      heading: "Our Cargo & Sourcing Services",
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
        "Send us a message on WhatsApp or reach us by phone or email — we'll get back to you within a few hours.",
    },
  },
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: { label: "WhatsApp Us", href: "https://wa.me/2349134895792" },
  },
  footer: {
    showBuiltBy: true,
  },
  seo: {
    // Drives canonical URLs, Open Graph image URLs, robots.txt and the sitemap.
    // Resolves itself in every environment, so there is nothing to configure:
    //   1. NEXT_PUBLIC_SITE_URL  — manual override, wins if set.
    //   2. On Vercel, the project's production domain. Vercel sets this to the
    //      custom domain once one is added, and to *.vercel.app until then, so
    //      buying a domain needs no code change.
    //   3. Local dev.
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
    defaultTitle: "Air & Sea Cargo from Nigeria to USA, UK & Europe | NEK Ventures",
    defaultDescription:
      "Lagos-based air and sea cargo to the USA, UK, Canada and Europe. Door-to-door shipping, plus sourcing of Nigerian foodstuff and hair accessories for the diaspora.",
    ogImage: "/og.png",
    keywords: [
      "NEK Ventures",
      "cargo services Nigeria",
      "air cargo from Nigeria",
      "sea cargo from Nigeria",
      "shipping company in Lagos",
      "freight forwarding Nigeria",
      "shipping from Nigeria to USA",
      "shipping from Nigeria to UK",
      "shipping from Nigeria to Canada",
      "shipping from Nigeria to Europe",
      "door to door shipping Nigeria",
      "container shipping Nigeria",
      "Nigerian foodstuff export",
      "ship Nigerian food abroad",
      "hair accessories shipping",
      "wigs and weavons shipping",
      "procurement and sourcing agent Nigeria",
      "diaspora shipping Nigeria",
    ],
  },
  features: {
    whatsappFloatingButton: true,
    backToTop: true,
  },
};
