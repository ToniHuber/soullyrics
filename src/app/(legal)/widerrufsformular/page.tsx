import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muster-Widerrufsformular | Soul Lyrics Studio",
};

export default function WiderrufsformularPage() {
  return (
    <>
      <h1>Widerrufsformular</h1>
      <p>
        <em>
          (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und
          senden Sie es zurück)
        </em>
      </p>

      <h2>An</h2>
      <p>
        Soul Lyrics Studio - Meriton Huber
        <br />
        Brückenstraße 21/7/4, 2100 Korneuburg, Österreich
        <br />
        E-Mail: office@soullyrics.at
      </p>

      <div className="space-y-6 mt-8">
        <p className="border-b border-white/15 pb-8">
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den
          Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
        </p>
        <p className="border-b border-white/15 pb-8">Bestellt am (*)/erhalten am (*)</p>
        <p className="border-b border-white/15 pb-8">Name des/der Verbraucher(s)</p>
        <p className="border-b border-white/15 pb-8">Anschrift des/der Verbraucher(s)</p>
        <p className="border-b border-white/15 pb-8">
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
        </p>
        <p className="border-b border-white/15 pb-8">Datum</p>
      </div>

      <p className="text-white/50 text-xs mt-6">(*) Unzutreffendes streichen.</p>
    </>
  );
}
