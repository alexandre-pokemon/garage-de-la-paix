"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/services";

type Status = "idle" | "submitting" | "submitted" | "error";

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSunday(value: string) {
  if (!value) return false;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d).getDay() === 0;
}

export function RendezvousForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const { minDate, maxDate } = useMemo(() => {
    const now = new Date();
    const min = new Date(now);
    min.setDate(min.getDate() + 1);
    const max = new Date(now);
    max.setDate(max.getDate() + 60);
    return { minDate: formatDate(min), maxDate: formatDate(max) };
  }, []);

  const dateIsSunday = isSunday(selectedDate);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    if (dateIsSunday) {
      setErrorMsg("Le garage est fermé le dimanche. Choisissez un autre jour.");
      return;
    }
    if (!selectedSlot) {
      setErrorMsg("Choisissez un créneau horaire.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const payload = {
      service: formData.get("service"),
      date: selectedDate,
      slot: selectedSlot,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      vehicle: formData.get("vehicle"),
      plate: formData.get("plate"),
      message: formData.get("message"),
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/rendez-vous", {
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
        <h3 className="text-xl font-semibold">Demande de rendez-vous envoyée !</h3>
        <p className="mt-2 text-muted-foreground">
          Le garage vous rappellera rapidement pour confirmer le créneau du{" "}
          <strong>{selectedDate}</strong> à <strong>{selectedSlot}</strong>.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => {
            setStatus("idle");
            setSelectedDate("");
            setSelectedSlot("");
          }}
        >
          Demander un autre rendez-vous
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
          <Label htmlFor="service" className="sr-only">
            Type de prestation
          </Label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              Choisissez une prestation…
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="autre">Autre / je ne sais pas</option>
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">2. Quand ?</legend>

        <div className="space-y-2">
          <Label htmlFor="date">Date souhaitée *</Label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            min={minDate}
            max={maxDate}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          {dateIsSunday && (
            <p className="text-sm text-destructive">
              Le garage est fermé le dimanche.
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Au moins 1 jour à l'avance, hors dimanche.
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium">Créneau horaire *</span>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isActive = selectedSlot === slot;
              return (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={
                    "h-10 rounded-md border text-sm font-medium transition-colors " +
                    (isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:bg-muted")
                  }
                >
                  {slot}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="slot" value={selectedSlot} />
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">3. Vos coordonnées</legend>

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

      <fieldset className="space-y-3">
        <legend className="text-base font-semibold">4. Votre véhicule</legend>

        <div className="space-y-2">
          <Label htmlFor="vehicle">Marque et modèle *</Label>
          <Input
            id="vehicle"
            name="vehicle"
            required
            placeholder="Ex : Peugeot 308 - 2018 - Diesel"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="plate">Immatriculation</Label>
          <Input
            id="plate"
            name="plate"
            placeholder="AA-123-BB (facultatif)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Description du problème</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Bruits, voyants allumés, dernier entretien… (facultatif)"
          />
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
        {status === "submitting" ? "Envoi en cours…" : "Demander ce rendez-vous"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Le garage vous rappellera pour confirmer le créneau. Vos données ne
        sont pas partagées.
      </p>
    </form>
  );
}
