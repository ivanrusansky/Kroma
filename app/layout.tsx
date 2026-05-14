import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kroma - Servicios de Contenido Visual",
  description:
    "Kroma potencia la imagen y presentación de toda propuesta. Fotografía profesional, sitios web y contenido con IA para marcas, negocios y empresas.",
  keywords: [
    "fotografía profesional",
    "sitios web",
    "contenido IA",
    "fotografía de producto",
    "diseño web",
    "contenido visual",
    "Kroma",
  ],
  authors: [{ name: "Kroma" }],
  openGraph: {
    title: "Kroma - Servicios de Contenido Visual",
    description:
      "Fotografía profesional, sitios web y contenido con IA para marcas, negocios y empresas.",
    type: "website",
    locale: "es_AR",
    siteName: "Kroma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kroma - Servicios de Contenido Visual",
    description:
      "Fotografía profesional, sitios web y contenido con IA para marcas, negocios y empresas.",
  },
  icons: {
    icon: "/images/icons/logo-kroma.png",
    apple: "/images/icons/logo-kroma.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
