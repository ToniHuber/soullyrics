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
        Meriton Huber
        <br />
        Soul Lyrics Studio (Einzelunternehmen)
        <br />
        Brückenstraße 21/7/4
        <br />
        2100 Korneuburg
        <br />
        Österreich
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon/WhatsApp: +43 677 614 42956
        <br />
        E-Mail: office@soullyrics.at
      </p>

      <h2>Gewerbeinformationen</h2>
      <p>
        Ton- und Musikproduktion
        <br />
        Gewerbebehörde: Bezirkshauptmannschaft Korneuburg
        <br />
        GISA-Zahl: 39781819
        <br />
        Mitglied der Wirtschaftskammer Österreich (WKO-Mitgliedsnummer: 1532808)
        <br />
        Anwendbare Rechtsvorschriften: Gewerbeordnung 1994 (abrufbar unter www.ris.bka.gv.at)
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Kleinunternehmer gemäß § 6 Abs. 1 Z 27 UStG. Es wird keine Umsatzsteuer ausgewiesen.
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Meriton Huber
        <br />
        Anschrift wie oben
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
