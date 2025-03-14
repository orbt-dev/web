import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbt: Exchange de Criptomoedas Rápida e Segura",
  description: "Troque e negocie criptomoedas com facilidade e segurança na Orbt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:image:alt" content="Descrição da imagem" />
        <meta property="og:title" content="Orbt: Compre Criptomoedas Rápido e Fácil" />
        <meta property="og:description" content="Troque e negocie criptomoedas com facilidade e segurança na Orbt." />
        {/* Add other relevant Open Graph tags as needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
