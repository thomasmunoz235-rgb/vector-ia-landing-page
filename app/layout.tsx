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
  title: "Vector IA — Desarrollo Web & Inteligencia Artificial | Buenos Aires",
  description:
    "Agencia de desarrollo web e inteligencia artificial en Buenos Aires. Construimos aplicaciones con Next.js, React y TypeScript. Integramos IA, chatbots y automatizaciones para empresas que quieren resultados reales.",
  keywords: [
    "desarrollo web Buenos Aires",
    "agencia IA Argentina",
    "inteligencia artificial empresas",
    "Next.js React TypeScript",
    "chatbots IA",
    "automatización procesos",
    "RAG conocimiento",
    "consultoría inteligencia artificial",
    "desarrollo software Argentina",
    "agentes IA",
    "integración OpenAI",
    "aplicaciones web modernas",
  ],
  authors: [{ name: "Vector IA", url: "https://vector-ia.com.ar" }],
  creator: "Vector IA",
  publisher: "Vector IA",
  metadataBase: new URL("https://vector-ia.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vector IA — Desarrollo Web & Inteligencia Artificial",
    description:
      "Agencia de desarrollo web e IA en Buenos Aires. Aplicaciones con Next.js, React y TypeScript. Chatbots, automatizaciones y sistemas RAG para empresas.",
    url: "https://vector-ia.com.ar",
    siteName: "Vector IA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector IA — Desarrollo Web & Inteligencia Artificial",
    description:
      "Agencia de desarrollo web e IA en Buenos Aires. Aplicaciones con Next.js, React y TypeScript. Chatbots, automatizaciones y sistemas RAG para empresas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vector IA",
  url: "https://vector-ia.com.ar",
  logo: "https://vector-ia.com.ar/images/Vector-Ia-trasparente.png",
  image: "https://vector-ia.com.ar/opengraph-image",
  description:
    "Agencia de desarrollo web e inteligencia artificial en Buenos Aires. Construimos aplicaciones con Next.js, React y TypeScript, e integramos IA, chatbots y automatizaciones para empresas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  email: "team@vector-ia.com.ar",
  areaServed: [
    { "@type": "Country", name: "Argentina" },
  ],
  priceRange: "$$",
  knowsAbout: [
    "Desarrollo Web",
    "Inteligencia Artificial",
    "Next.js",
    "React",
    "TypeScript",
    "ChatGPT",
    "OpenAI",
    "Automatización",
    "RAG",
    "LLM",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de desarrollo web e IA",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Web", description: "Aplicaciones modernas con Next.js, React y TypeScript" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integraciones IA", description: "Chatbots, asistentes y automatizaciones con IA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG & Conocimiento", description: "Sistemas que permiten a modelos consultar documentos internos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización", description: "Flujos automatizados conectando herramientas, APIs y modelos IA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoría IA", description: "Auditoría y estrategia para integrar IA en tu negocio" } },
    ],
  },
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
