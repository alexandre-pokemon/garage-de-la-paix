import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { RendezvousForm } from "@/components/rendezvous-form";
import { SITE } from "@/lib/site";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Prendre rendez-vous - Garage de la Paix",
  description:
    "Réservez un rendez-vous au Garage de la Paix au Perreux-sur-Marne. Vidange, freins, contrôle technique, pneus, climatisation. Réponse rapide, devis gratuit.",
};

export default function RendezvousPage() {
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
          Rendez-vous en ligne
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
          Réservez votre rendez-vous.
        </h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
          Choisissez votre prestation, une date et un créneau. Le garage vous
          rappellera pour confirmer.
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
            <h2 className="font-semibold">Pourquoi prendre rendez-vous ?</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Pas d'attente à l'atelier",
                "Devis confirmé avant intervention",
                "Créneau qui vous convient",
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
          <RendezvousForm />
        </div>
      </div>
    </section>
  );
}
