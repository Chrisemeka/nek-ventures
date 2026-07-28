import { siteConfig } from "@/site.config";

export function Contact() {
  const contact = siteConfig.sections.contact;
  if (!contact.enabled) return null;

  const { email, phone, whatsapp, whatsappPrefilledMessage, address, hours } = siteConfig.contact;
  const waNumber = whatsapp?.replace(/[^0-9]/g, "");
  const waHref = waNumber
    ? `https://wa.me/${waNumber}${whatsappPrefilledMessage ? `?text=${encodeURIComponent(whatsappPrefilledMessage)}` : ""}`
    : null;

  return (
    <section id="contact" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {contact.heading}
          </h2>
          <p className="text-foreground/70">{contact.subheading}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a href={`mailto:${email}`} className="text-foreground/70 hover:text-primary">
                {email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <a href={`tel:${phone}`} className="text-foreground/70 hover:text-primary">
                {phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-foreground/70">
                {address.street}, {address.city}, {address.state}
              </p>
            </div>
            {hours.length > 0 && (
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <ul className="text-foreground/70">
                  {hours.map((h) => (
                    <li key={h.day}>
                      {h.day}: {h.open}–{h.close}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center gap-3 rounded-xl border border-foreground/10 p-8">
            <p className="text-sm text-foreground/70">
              The fastest way to reach us is WhatsApp — we usually reply within a few hours.
            </p>
            {waHref && (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            )}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-lg border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
