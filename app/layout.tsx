import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { MelimixProvider } from "@/utils/context/Melimix";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "MéLiMiX",
  description: "MéLiMix est un jeu dont le but est de trouver des mots.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-lvh flex flex-col bg-stone-100">

        <Header />
          <MelimixProvider>
            <Main>
            {children}
            </Main>
          </MelimixProvider>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
