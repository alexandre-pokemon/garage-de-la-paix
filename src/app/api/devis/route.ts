import { NextRequest, NextResponse } from "next/server";

type DevisPayload = {
  prestation?: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleMileage?: string;
  description?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  photoNames?: string[];
};

export async function POST(req: NextRequest) {
  let data: DevisPayload;
  try {
    data = (await req.json()) as DevisPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof DevisPayload)[] = [
    "prestation",
    "vehicleBrand",
    "vehicleModel",
    "description",
    "firstName",
    "lastName",
    "phone",
    "email",
  ];
  for (const field of required) {
    const value = data[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return NextResponse.json(
        { error: `Champ manquant: ${field}` },
        { status: 400 },
      );
    }
  }

  // TODO: brancher l'envoi par email / la base de données / l'upload des photos
  // Options à venir :
  //  - envoi d'un email au garage (Resend, SendGrid, Nodemailer SMTP)
  //  - écriture dans une base (Postgres, Supabase, KV)
  //  - upload des photos vers Vercel Blob ou S3 (multipart/form-data)
  console.log("[devis] nouvelle demande", {
    receivedAt: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ ok: true });
}
