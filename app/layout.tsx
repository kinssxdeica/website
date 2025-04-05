import type { Metadata } from "next";
import { Space_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "KINSS X DEICA",
  description: "Página oficial de kinss x deica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${archivoBlack.variable}`}>
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
} 