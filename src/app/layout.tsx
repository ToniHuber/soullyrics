import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Lyrics Studio | KI-Generierte Musik der nächsten Generation",
  description:
    "Entdecke die Zukunft der Musik. Soul Lyrics Studio verbindet künstliche Intelligenz mit der Seele der Musik – einzigartige Songs, Lyrics und Beats auf Knopfdruck.",
  keywords: ["KI Musik", "AI Music", "Soul Lyrics Studio", "AI Song Generator", "KI Lyrics"],
  openGraph: {
    title: "Soul Lyrics Studio | KI-Generierte Musik",
    description: "Entdecke die Zukunft der Musik mit KI-generierten Songs.",
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
              background: "rgba(26, 26, 46, 0.9)",
              border: "1px solid rgba(139, 61, 255, 0.3)",
              color: "#e4e4f0",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
