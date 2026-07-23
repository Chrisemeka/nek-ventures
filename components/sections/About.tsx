import { siteConfig } from "@/site.config";

export function About() {
  const about = siteConfig.sections.about;
  if (!about.enabled) return null;

  const hasImage = Boolean(about.image);

  return (
    <section id="about" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className={hasImage ? "grid gap-12 md:grid-cols-2 md:items-center" : "max-w-3xl mx-auto text-center"}>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              {about.heading}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">{about.body}</p>
          </div>

          {hasImage && (
            <div className="overflow-hidden rounded-2xl border border-foreground/10 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={about.image!} alt={about.heading} className="h-full w-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
