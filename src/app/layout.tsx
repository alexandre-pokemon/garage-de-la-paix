import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AiChatWidget } from "@/components/ai-chat-widget";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://garage-de-la-paix-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Garage de la Paix — Mécanique auto au Perreux-sur-Marne (94)",
    template: "%s | Garage de la Paix",
  },
  description:
    "Garage indépendant au Perreux-sur-Marne (94170). Vidange, freins, contrôle technique, pneus, climatisation, diagnostic électronique. Devis gratuit. Tél : 01 43 24 36 27.",
  keywords: [
    "garage Le Perreux-sur-Marne",
    "mécanicien 94170",
    "réparation auto Le Perreux",
    "vidange Le Perreux",
    "contrôle technique 94",
    "garage automobile Val-de-Marne",
  ],
  openGraph: {
    title: "Garage de la Paix — Mécanique auto au Perreux-sur-Marne (94)",
    description:
      "Garage indépendant au Perreux-sur-Marne. Mécanique générale, entretien, réparation. Devis gratuit.",
    url: SITE_URL,
    siteName: "Garage de la Paix",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Garage de la Paix",
  image: SITE_URL + "/og.jpg",
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+33143243627",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "99 bis rue de la Paix",
    addressLocality: "Le Perreux-sur-Marne",
    postalCode: "94170",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8459,
    longitude: 2.5048,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:30",
    },
  ],
  email: "garagedelapaix94@gmail.com",
  areaServed: {
    "@type": "City",
    name: "Le Perreux-sur-Marne",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AiChatWidget />
      </body>
    </html>
  );
}
