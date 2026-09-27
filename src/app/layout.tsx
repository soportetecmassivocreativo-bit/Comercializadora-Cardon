import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comercializadora Cardón | Distribución Mayorista en Paraguaná",
  description:
    "Empresa líder en comercialización y distribución mayorista de alimentos y productos de consumo masivo en la Península de Paraguaná, Estado Falcón, Venezuela.",
  keywords:
    "comercializadora, distribución, mayorista, alimentos, consumo masivo, Paraguaná, Punto Fijo, Falcón, Venezuela",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    title: "Comercializadora Cardón de Paraguaná",
    description:
      "Distribución mayorista de alimentos y productos de consumo masivo. Calidad, variedad y precios competitivos.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
