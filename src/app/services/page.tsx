import type { Metadata } from "next";
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
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Nos services - Mécanique auto au Perreux-sur-Marne",
  description:
    "Vidange, freinage, contrôle technique, pneus, climatisation, mécanique générale, diagnostic électronique. Garage de la Paix au Perreux-sur-Marne (94170).",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  vidange: WrenchIcon,
  freins: ShieldIcon,
  "controle-technique": ClipboardIcon,
  pneus: CircleIcon,
  climatisation: SnowflakeIcon,
  "mecanique-generale": CogIcon,
  "diagnostic-electronique": ZapIcon,
  echappement: CarIcon,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <CallToAction />
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e4e?w=1920&q=80&auto=format&fit=crop"
          alt="Mécanicien au travail"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
          Nos prestations
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
          Mécanique, entretien, réparation : tout sous le même toit.
        </h1>
        <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
          Notre atelier est équipé pour intervenir sur la plupart des marques.
          Découvrez en détail ce que nous proposons.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-6 md:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.slug] ?? WrenchIcon;
          return (
            <Card
              key={service.slug}
              id={service.slug}
              className="border-border scroll-mt-20"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.long}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Une question ? Un devis à demander ?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Appelez-nous ou envoyez-nous un message, on vous répond rapidement.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            render={<a href={SITE.phoneFixedHref} />}
            size="lg"
            className="h-12 font-semibold"
          >
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneFixed}
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="h-12"
          >
            Devis gratuit
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
