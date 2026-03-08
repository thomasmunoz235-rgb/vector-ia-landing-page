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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bricolage.variable} ${ibmMono.variable} ${dmSans.variable} antialiased bg-white text-[#0c1a30]`}>
        {children}
      </body>
    </html>
  );
}
