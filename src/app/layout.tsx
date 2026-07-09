import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soul Lyrics Studio | Dein persönlicher Song aus deiner Geschichte",
  description:
    "Soul Lyrics Studio verwandelt deine Erinnerungen, Gefühle und besonderen Momente in einen persönlich gestalteten Song — mit Unterstützung moderner Technologie musikalisch umgesetzt.",
  keywords: [
    "Personalisierter Song",
    "Individueller Song",
    "Song als Geschenk",
    "Soul Lyrics Studio",
    "Song aus Erinnerungen",
    "Liedtext schreiben lassen",
  ],
  openGraph: {
    title: "Soul Lyrics Studio | Dein persönlicher Song aus deiner Geschichte",
    description: "Erinnerungen, Gefühle und besondere Momente werden zu deinem individuellen Song.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`scroll-smooth ${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(30, 30, 30, 0.9)",
              border: "1px solid rgba(245, 166, 35, 0.3)",
              color: "#f2ece0",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
