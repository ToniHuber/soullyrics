import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Lyrics Studio | Dein persönlicher Song aus deiner Geschichte",
  description:
    "Soul Lyrics Studio verwandelt deine Erinnerungen, Gefühle und besonderen Momente in einen individuell komponierten Song — persönlich ausgearbeitet, mit moderner Technologie als Werkzeug.",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
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
