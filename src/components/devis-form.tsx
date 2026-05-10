"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "submitted" | "error";

const PRESTATIONS = [
  "Vidange",
  "Pneus",
  "Révision",
  "Freinage",
  "Diagnostic",
  "Carrosserie",
  "Climatisation",
  "Autre",
];

export function DevisForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [photoNames, setPhotoNames] = useState<string[]>([]);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) {
      setPhotoNames([]);
      return;
    }
    setPhotoNames(Array.from(files).map((f) => f.name));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      prestation: formData.get("prestation"),
      vehicleBrand: formData.get("vehicleBrand"),
      vehicleModel: formData.get("vehicleModel"),
      vehicleYear: formData.get("vehicleYear"),
      vehicleMileage: formData.get("vehicleMileage"),
      description: formData.get("description"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      photoNames,
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Erreur serveur");
      }
      setStatus("submitted");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Désolé, une erreur est survenue. Réessayez ou appelez-nous directement.",
      );
    }
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
        <h3 className="text-xl font-semibold">Demande de devis envoyée !</h3>
        <p className="mt-2 text-muted-foreground">
          Le garage vous répond avec une estimation sous <strong>24h</strong>{" "}
          (jours ouvrés).
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => {
            setStatus("idle");
            setPhotoNames([]);
          }}
        >
          Faire une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm"
    >
      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">
          1. Quelle prestation ?
        </legend>
        <div className="grid gap-2">
          <Label htmlFor="prestation" className="sr-only">
            Type de prestation
          </Label>
          <select
            id="prestation"
            name="prestation"
            required
            defaultValue=""
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              Choisissez une prestation…
            </option>
            {PRESTATIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">2. Votre véhicule</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="vehicleBrand">Marque *</Label>
            <Input
              id="vehicleBrand"
              name="vehicleBrand"
              required
              placeholder="Peugeot, Renault, BMW…"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleModel">Modèle *</Label>
            <Input
              id="vehicleModel"
              name="vehicleModel"
              required
              placeholder="308, Clio IV, Série 3…"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="vehicleYear">Année</Label>
            <Input
              id="vehicleYear"
              name="vehicleYear"
              type="number"
              min={1980}
              max={2030}
              placeholder="2018 (facultatif)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleMileage">Kilométrage</Label>
            <Input
              id="vehicleMileage"
              name="vehicleMileage"
              type="number"
              min={0}
              placeholder="120 000 (facultatif)"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">3. Votre besoin</legend>

        <div className="space-y-2">
          <Label htmlFor="description">Description détaillée *</Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={5}
            placeholder="Décrivez le problème, les symptômes, les voyants allumés, les bruits anormaux, ou la prestation que vous souhaitez chiffrer…"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="photos">Photos (facultatif)</Label>
          <Input
            id="photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            className="cursor-pointer file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium hover:file:bg-secondary/80"
          />
          {photoNames.length > 0 && (
            <ul className="text-xs text-muted-foreground space-y-0.5">
              {photoNames.map((name) => (
                <li key={name}>• {name}</li>
              ))}
            </ul>
          )}
          <p className="text-xs text-muted-foreground">
            Ajoutez des photos du véhicule ou de la pièce concernée pour un
            devis plus précis.
          </p>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">4. Vos coordonnées</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom *</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              autoComplete="given-name"
              placeholder="Marie"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nom *</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              autoComplete="family-name"
              placeholder="Dupont"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="06 12 34 56 78"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="vous@exemple.fr"
            />
          </div>
        </div>
      </fieldset>

      {errorMsg && (
        <p className="text-sm text-destructive" role="alert">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi en cours…" : "Demander mon devis"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Réponse sous 24h ouvrées. Le devis est gratuit et sans engagement.
      </p>
    </form>
  );
}
