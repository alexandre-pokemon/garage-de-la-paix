import { NextRequest, NextResponse } from "next/server";

type RendezvousPayload = {
  service?: string;
  date?: string;
  slot?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  plate?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let data: RendezvousPayload;
  try {
    data = (await req.json()) as RendezvousPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof RendezvousPayload)[] = [
    "service",
    "date",
    "slot",
    "firstName",
    "lastName",
    "phone",
    "email",
    "vehicle",
  ];
  for (const field of required) {
    if (!data[field] || String(data[field]).trim() === "") {
      return NextResponse.json(
        { error: `Champ manquant: ${field}` },
        { status: 400 },
      );
    }
  }

  // TODO: brancher l'envoi par email / la base de données / le calendrier réel
  // Options à venir :
  //  - envoi d'un email au garage (Resend, SendGrid, Nodemailer SMTP)
  //  - écriture dans une base (Postgres, Supabase, KV)
  //  - création d'un événement Google Calendar
  console.log("[rendez-vous] nouvelle demande", {
    receivedAt: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ ok: true });
}
