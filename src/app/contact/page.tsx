import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MailIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & devis - Garage de la Paix",
  description:
    "Contactez le Garage de la Paix au Perreux-sur-Marne. Devis gratuit, prise de rendez-vous. Tél : 01 43 24 36 27. 99 bis rue de la Paix, 94170.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactSection />
      <MapSection />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
          Contact
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
          Demandez votre devis gratuit.
        </h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
          Décrivez-nous votre besoin, nous vous rappelons rapidement avec un
          chiffrage clair. Vous pouvez aussi nous appeler directement.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div className="space-y-4">
          <InfoCard
            icon={PhoneIcon}
            title="Téléphone (atelier)"
            value={SITE.phoneFixed}
            href={SITE.phoneFixedHref}
            highlight
          />
          <InfoCard
            icon={PhoneIcon}
            title="Mobile"
            value={SITE.phoneMobile}
            href={SITE.phoneMobileHref}
          />
          <InfoCard
            icon={MailIcon}
            title="Email"
            value={SITE.email}
            href={SITE.emailHref}
          />
          <InfoCard
            icon={MapPinIcon}
            title="Adresse"
            value={`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`}
          />
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">Horaires</h3>
            </div>
            <ul className="mt-4 divide-y divide-border text-sm">
              {SITE.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex justify-between py-2 first:pt-0 last:pb-0"
                >
                  <span className="text-muted-foreground">{row.day}</span>
                  <span className="font-medium">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
  highlight = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const cardClass = highlight
    ? "rounded-xl border border-primary/40 bg-primary/5 p-5 hover:bg-primary/10 transition-colors"
    : "rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors";

  const inner = (
    <>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      </div>
      <p
        className={`mt-3 break-all ${
          highlight ? "text-2xl font-bold text-primary" : "font-medium"
        }`}
      >
        {value}
      </p>
    </>
  );

  return href ? (
    <a href={href} className={cardClass + " block"}>
      {inner}
    </a>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}

function MapSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Comment venir
        </h2>
        <p className="mt-2 text-muted-foreground">
          {SITE.address.street}, {SITE.address.postalCode}{" "}
          {SITE.address.city}.
        </p>
        <div className="mt-6 rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            title="Localisation Garage de la Paix"
            src={SITE.mapEmbedSrc}
            className="w-full h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
