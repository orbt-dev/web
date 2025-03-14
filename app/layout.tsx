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
  title: "Orbt: Compre e venda Criptomoedas com facilidade e segurança",
  description:
    "Orbt é uma plataforma de compra e venda de criptomoedas com uma interface intuitiva e segura. Compre e venda Bitcoin, Ethereum e outras criptomoedas com facilidade e segurança.",
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
        <meta property="og:image:alt" content="Orbt: Compre e venda Criptomoedas com facilidade e segurança" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
