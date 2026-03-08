import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vector — Desarrollo Web & Inteligencia Artificial",
  description: "Desarrollo web e integraciones de IA para empresas que quieren resultados reales.",
  metadataBase: new URL("https://vector-ia.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vector — Desarrollo Web & Inteligencia Artificial",
    description: "Desarrollo web e integraciones de IA para empresas que quieren resultados reales.",
    url: "https://vector-ia.com.ar",
    siteName: "Vector IA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector — Desarrollo Web & Inteligencia Artificial",
    description: "Desarrollo web e integraciones de IA para empresas que quieren resultados reales.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vector IA",
  url: "https://vector-ia.com.ar",
  logo: "https://vector-ia.com.ar/images/Vector-Ia-trasparente.png",
  description: "Desarrollo web e integraciones de IA para empresas que quieren resultados reales.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "team@vector-ia.com.ar",
  areaServed: "AR",
  serviceType: [
    "Desarrollo Web",
    "Integraciones de Inteligencia Artificial",
    "Automatización de Procesos",
    "Consultoría IA",
    "Sistemas RAG",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bricolage.variable} ${ibmMono.variable} ${dmSans.variable} antialiased bg-white text-[#0c1a30]`}>
        {children}
      </body>
    </html>
  );
}
