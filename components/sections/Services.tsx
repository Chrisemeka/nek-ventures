import { siteConfig } from "@/site.config";

export function Services() {
  const services = siteConfig.sections.services;
  if (!services.enabled) return null;

  return (
    <section id="services" className="px-6 py-24 bg-muted">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center mb-14">
          {services.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-foreground/10 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 transition group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
