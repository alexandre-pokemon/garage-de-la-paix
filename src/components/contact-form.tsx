"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold">Demande envoyée !</h3>
        <p className="mt-2 text-muted-foreground">
          Nous vous recontactons sous 24h ouvrées. Pour une demande urgente,
          appelez-nous directement.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            required
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="vous@exemple.fr"
          autoComplete="email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle">Véhicule</Label>
        <Input
          id="vehicle"
          name="vehicle"
          placeholder="Ex : Peugeot 308 - 2018 - Diesel"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre demande *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Décrivez le problème, les bruits, les voyants allumés…"
          required
        />
      </div>

      <Button type="submit" className="w-full h-12 text-base font-semibold">
        Demander un devis gratuit
      </Button>

      <p className="text-xs text-muted-foreground">
        En envoyant ce formulaire, vous acceptez d'être recontacté par le
        garage. Vos données ne sont pas partagées.
      </p>
    </form>
  );
}
