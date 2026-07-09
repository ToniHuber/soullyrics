import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Soul Lyrics Studio",
};

export default function DatenschutzPage() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        [Vor- und Nachname bzw. Firmenname]
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ und Ort]
        <br />
        E-Mail: [E-Mail-Adresse folgt]
      </p>

      <h2>2. Welche Daten wir verarbeiten</h2>
      <p>Über diese Website werden folgende personenbezogene Daten verarbeitet, wenn du sie aktiv übermittelst:</p>
      <ul>
        <li>
          <strong>Kontaktformular:</strong> Name, E-Mail-Adresse und deine Nachricht.
        </li>
        <li>
          <strong>Anfrageformular für einen persönlichen Song:</strong> Name, E-Mail-Adresse,
          Angaben zum Songempfänger, Anlass, gewünschte Stimmung, gewünschtes Paket sowie die von
          dir mitgeteilte persönliche Geschichte (z.B. Erinnerungen, Namen, besondere Erlebnisse).
        </li>
        <li>
          <strong>Newsletter-Anmeldung:</strong> E-Mail-Adresse.
        </li>
      </ul>
      <p>
        Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage bzw. zum Versand des
        Newsletters verwendet und nicht an Dritte weiterverkauft.
      </p>

      <h2>3. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Erfüllung
        eines Vertrags bzw. zur Durchführung vorvertraglicher Maßnahmen auf deine Anfrage hin)
        sowie bei der Newsletter-Anmeldung auf Grundlage deiner Einwilligung nach Art. 6 Abs. 1
        lit. a DSGVO.
      </p>

      <h2>4. Speicherdauer</h2>
      <p>
        Deine Daten werden gespeichert, solange dies zur Bearbeitung deiner Anfrage bzw. für die
        Dauer deines Newsletter-Abonnements erforderlich ist, sofern keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. [Konkrete Löschfristen bitte ergänzen.]
      </p>

      <h2>5. Hosting und technische Infrastruktur</h2>
      <p>
        Diese Website wird bei Vercel Inc. gehostet. Formulardaten werden in einer PostgreSQL-Datenbank
        gespeichert. Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch
        technische Zugriffsdaten (z.B. IP-Adresse, Zeitpunkt des Zugriffs) in Server-Logs
        verarbeitet, die zur Absicherung des Betriebs erforderlich sind. [Bitte Hosting-Anbieter,
        Serverstandort und ggf. Auftragsverarbeitungsvertrag ergänzen.]
      </p>

      <h2>6. Google Fonts</h2>
      <p>
        Diese Website bindet Schriftarten von Google Fonts ein, die über Server von Google
        geladen werden. Dabei kann die IP-Adresse deines Endgeräts an Google übermittelt werden.
        [Bitte prüfen, ob eine lokale Einbindung der Schriftarten oder eine Einwilligungslösung
        erforderlich ist.]
      </p>

      <h2>7. Cookies und Tracking</h2>
      <p>
        Diese Website setzt aktuell keine Analyse- oder Marketing-Cookies ein. Sollte sich dies
        ändern (z.B. durch Einbindung von Statistik-Tools), wird diese Erklärung entsprechend
        aktualisiert und ggf. eine Einwilligung über ein Cookie-Banner eingeholt.
      </p>

      <h2>8. Deine Rechte</h2>
      <p>Du hast jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über die von uns verarbeiteten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</li>
      </ul>
      <p>
        Wende dich dazu an die im Impressum genannte Kontaktadresse.
        Zudem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.
      </p>
    </>
  );
}
