"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav, business } = siteConfig;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={business.logo.light}
            alt={business.name}
            width={288}
            height={144}
            className="h-9 w-auto"
          />
          <span className="sr-only">{business.name}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-foreground/70 transition hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {nav.ctaButton && (
          <a
            href={nav.ctaButton.href}
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 md:inline-block"
          >
            {nav.ctaButton.label}
          </a>
        )}

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-foreground/10 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {nav.ctaButton && (
              <li className="pt-2">
                <a
                  href={nav.ctaButton.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white"
                >
                  {nav.ctaButton.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
