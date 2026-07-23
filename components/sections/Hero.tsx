import { siteConfig } from "@/site.config";

export function Hero() {
  const hero = siteConfig.sections.hero;
  if (!hero.enabled) return null;

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-24 bg-muted">
      <div className="max-w-4xl text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          {hero.headline}
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
          {hero.subheadline}
        </p>
        <a
          href={hero.ctaPrimary.href}
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium shadow-sm hover:opacity-90 transition"
        >
          {hero.ctaPrimary.label}
        </a>
      </div>
    </section>
  );
}