"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <WrenchIcon className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">{SITE.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            render={<a href={SITE.phoneFixedHref} />}
            variant="outline"
            className="font-semibold"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phoneFixed}
          </Button>
          <Button
            render={<Link href="/devis" />}
            variant="outline"
            className="font-semibold"
          >
            Demander un devis
          </Button>
          <Button render={<Link href="/rendez-vous" />} className="font-semibold">
            Prendre rendez-vous
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={<Link href="/rendez-vous" />}
              className="mt-2 h-12 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              Prendre rendez-vous
            </Button>
            <Button
              render={<Link href="/devis" />}
              variant="outline"
              className="h-12 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </Button>
            <Button
              render={<a href={SITE.phoneFixedHref} />}
              variant="outline"
              className="h-12 text-base font-semibold"
            >
              <PhoneIcon className="h-4 w-4" />
              Appeler le {SITE.phoneFixed}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function WrenchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
