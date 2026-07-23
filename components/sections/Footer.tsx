import { siteConfig } from "@/site.config";

type SocialKey = "instagram" | "facebook" | "twitter" | "tiktok" | "linkedin";

const SOCIAL_LABELS: Record<SocialKey, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
};

export function Footer() {
  const { business, contact, social, footer } = siteConfig;
  const year = new Date().getFullYear();

  const activeSocials = (Object.entries(social) as [SocialKey, string | null | undefined][])
    .filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-background mb-2">
              {business.name}
            </h3>
            <p className="text-sm text-background/60">{business.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-background">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-background">
                  {contact.phone}
                </a>
              </li>
              <li className="text-background/60">
                {contact.address.street}, {contact.address.city}
              </li>
            </ul>
          </div>

          {activeSocials.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-background mb-3">Follow us</h4>
              <ul className="space-y-2 text-sm">
                {activeSocials.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-background"
                    >
                      {SOCIAL_LABELS[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          {footer.showBuiltBy && (
            <p>
              Built by{" "}
              <a
                href="https://github.com/Chrisemeka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-background"
              >
                Chukwuemeka Anyanwu
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
