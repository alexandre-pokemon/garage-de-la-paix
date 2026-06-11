import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import {
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  WrenchIcon,
  ShieldIcon,
  ClipboardIcon,
  CircleIcon,
  SnowflakeIcon,
  CogIcon,
  ZapIcon,
  CarIcon,
  ClockIcon,
  MapPinIcon,
} from "@/components/icons";

const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  vidange: WrenchIcon,
  freins: ShieldIcon,
  "controle-technique": ClipboardIcon,
  pneus: CircleIcon,
  climatisation: SnowflakeIcon,
  "mecanique-generale": CogIcon,
  "diagnostic-electronique": ZapIcon,
  echappement: CarIcon,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <ProcessSection />
      <GarageSection />
      <HoursSection />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/garage.jpg"
          alt="Façade et atelier du Garage de la Paix"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="relative aspect-[1600/583] w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl">
          <Image
            src="/enseigne.jpg"
            alt="Logo Garage de la Paix"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 576px"
            className="object-contain"
          />
        </div>
        <Badge className="mt-6 bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
          {SITE.address.city}
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-balance">
          Votre garage de confiance au Perreux-sur-Marne.
        </h1>
        <p className="mt-5 text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Mécanique générale, entretien, freinage, pneus, climatisation,
          diagnostic électronique. Devis gratuit, intervention rapide,
          toutes marques.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button
            render={<Link href="/rendez-vous" />}
            size="lg"
            className="h-12 font-semibold"
          >
            Prendre rendez-vous
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            render={<Link href="/devis" />}
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            Demander un devis
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            render={<a href={SITE.phoneFixedHref} />}
            size="lg"
            variant="outline"
            className="h-12 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneFixed}
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-300">
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-primary" />
            {SITE.address.street}, {SITE.address.city}
          </span>
          <span className="inline-flex items-center gap-2">
            <ClockIcon className="h-4 w-4 text-primary" />
            Lun–Ven 8h–18h30 · Sam 9h–12h30
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-primary" />
            Devis gratuit, sans engagement
          </span>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      icon: WrenchIcon,
      title: "Toutes marques",
      desc: "Atelier équipé pour les marques européennes et asiatiques.",
    },
    {
      icon: ShieldIcon,
      title: "Travail garanti",
      desc: "Pièces de qualité, main-d'œuvre soignée, conseils honnêtes.",
    },
    {
      icon: ClockIcon,
      title: "Délais courts",
      desc: "Prise de rendez-vous rapide et interventions efficaces.",
    },
    {
      icon: ClipboardIcon,
      title: "Devis gratuit",
      desc: "Un chiffrage clair avant toute intervention.",
    },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);
  return (
    <section className="border-t border-border bg-secondary/30 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
              Nos prestations
            </Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Mécanique, entretien, réparation.
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Une équipe expérimentée pour prendre soin de votre véhicule, de la
              vidange à la grande mécanique.
            </p>
          </div>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            className="self-start sm:self-end"
          >
            Tous les services
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const Icon = SERVICE_ICONS[service.slug] ?? WrenchIcon;
            return (
              <Card key={service.slug} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.short}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Décrivez votre besoin",
      desc: "Par téléphone, via le formulaire de devis ou en passant à l'atelier. Nous établissons un chiffrage clair et gratuit.",
    },
    {
      step: "2",
      title: "Réservez votre créneau",
      desc: "Nous convenons ensemble d'une date qui vous arrange. La plupart des interventions sont réalisées dans la journée.",
    },
    {
      step: "3",
      title: "Repartez l'esprit tranquille",
      desc: "Nous vous expliquons ce qui a été fait, pièces à l'appui. Pas de surprise sur la facture : c'est le devis, rien de plus.",
    },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
            Comment ça se passe
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Simple, clair, sans surprise.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GarageSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
          <Image
            src="/garage.jpg"
            alt="Atelier du Garage de la Paix au Perreux-sur-Marne"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
            Notre garage
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Un atelier de quartier, à votre service.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Installé au cœur du Perreux-sur-Marne, le Garage de la Paix
            accompagne les automobilistes du Val-de-Marne avec une approche
            simple : un travail soigné, des conseils honnêtes et des prix
            justes. Notre équipe est formée pour intervenir sur la plupart des
            marques, en mécanique courante comme sur des opérations plus
            techniques.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Diagnostic clair avant toute intervention",
              "Pièces d'origine ou équivalentes au choix",
              "Devis gratuit et sans engagement",
              "Accueil chaleureux et explications simples",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              render={<a href={SITE.phoneFixedHref} />}
              size="lg"
              className="h-12 font-semibold"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler
            </Button>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              variant="outline"
              className="h-12"
            >
              Nous écrire
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoursSection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
            Infos pratiques
          </Badge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Horaires & accès.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Passez à l'atelier ou appelez-nous pour prendre rendez-vous.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="font-medium">
                    {SITE.address.street}, {SITE.address.postalCode}{" "}
                    {SITE.address.city}
                  </p>
                </div>
              </div>
              <Button
                render={
                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                size="sm"
              >
                Itinéraire
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              src={SITE.mapEmbedSrc}
              title="Plan d'accès au Garage de la Paix"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <ClockIcon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Horaires d'ouverture</h3>
          </div>
          <ul className="mt-4 divide-y divide-border text-sm">
            {SITE.hours.map((row) => (
              <li
                key={row.day}
                className="flex justify-between py-2.5 first:pt-0 last:pb-0"
              >
                <span className="text-muted-foreground">{row.day}</span>
                <span className="font-medium">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Prêt à passer au garage ?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Réservez votre créneau, demandez un devis gratuit ou appelez-nous.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Button
            render={<Link href="/rendez-vous" />}
            size="lg"
            className="h-12 font-semibold"
          >
            Prendre rendez-vous
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            render={<Link href="/devis" />}
            size="lg"
            variant="outline"
            className="h-12"
          >
            Demander un devis
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button
            render={<a href={SITE.phoneFixedHref} />}
            size="lg"
            variant="outline"
            className="h-12"
          >
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneFixed}
          </Button>
        </div>
      </div>
    </section>
  );
}
