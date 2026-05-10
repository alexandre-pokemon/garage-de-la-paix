import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/30 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{SITE.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Votre garagiste de confiance à {SITE.address.city}.
            Mécanique générale, entretien et réparation toutes marques.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Coordonnées
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={SITE.phoneFixedHref}
                className="hover:text-primary font-medium"
              >
                {SITE.phoneFixed}
              </a>
            </li>
            <li>
              <a
                href={SITE.phoneMobileHref}
                className="hover:text-primary font-medium"
              >
                {SITE.phoneMobile}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="hover:text-primary break-all"
              >
                {SITE.email}
              </a>
            </li>
            <li className="text-muted-foreground">
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Navigation
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Nos services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact & devis
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>
            © {year} {SITE.name}. Tous droits réservés.
          </p>
          <p>Site démo réalisé par Alexandre Rousselin.</p>
        </div>
      </div>
    </footer>
  );
}
