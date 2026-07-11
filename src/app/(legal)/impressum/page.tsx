import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Soul Lyrics Studio",
};

export default function ImpressumPage() {
  return (
    <>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 ECG, § 63 GewO, § 14 UGB</h2>
      <p>
        [Vor- und Nachname (Einzelunternehmen)]
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ und Ort]
        <br />
        Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: [Telefonnummer]
        <br />
        E-Mail: office@soullyricsstudio.at
      </p>

      <h2>Gewerbeinformationen</h2>
      <p>
        [Gewerbeart/Tätigkeit] · [Gewerbebehörde] · [ggf. Mitgliedschaft WKO, anwendbare
        Rechtsvorschriften einfügen]
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr. einfügen,
        falls vorhanden]
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        [Vor- und Nachname]
        <br />
        [Anschrift wie oben]
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        [Haftungshinweis nach österreichischem Recht (ECG) bitte final festlegen.]
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
        übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
        Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem österreichischen Urheberrecht. Beiträge Dritter sind als solche
        gekennzeichnet.
      </p>
    </>
  );
}
