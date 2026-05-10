import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { DevisForm } from "@/components/devis-form";
import { SITE } from "@/lib/site";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Demander un devis - Garage de la Paix",
  description:
    "Demandez un devis gratuit au Garage de la Paix au Perreux-sur-Marne. Estimation de prix sous 24h pour vidange, freinage, pneus, carrosserie, diagnostic et plus. Sans engagement.",
};

export default function DevisPage() {
  return (
    <>
      <Hero />
      <FormSection />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
          Devis gratuit
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
          Demandez un devis gratuit.
        </h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
          Décrivez votre besoin et joignez des photos si vous le souhaitez. Nous
          vous répondons avec une estimation claire <strong>sous 24h</strong>.
        </p>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="font-semibold">Pourquoi demander un devis ?</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Estimation gratuite et sans engagement",
                "Réponse sous 24h ouvrées",
                "Tarifs clairs avant toute intervention",
                "Toutes marques",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={SITE.phoneFixedHref}
            className="block rounded-xl border border-primary/40 bg-primary/5 p-5 hover:bg-primary/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Préférez le téléphone ?
              </h3>
            </div>
            <p className="mt-3 text-2xl font-bold text-primary">
              {SITE.phoneFixed}
            </p>
          </a>

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

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Adresse
              </h3>
            </div>
            <p className="mt-3 font-medium">
              {SITE.address.street}, {SITE.address.postalCode}{" "}
              {SITE.address.city}
            </p>
          </div>
        </aside>

        <div>
          <DevisForm />
        </div>
      </div>
    </section>
  );
}
