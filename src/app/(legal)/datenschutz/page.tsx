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
          <strong>Anfrageformular für einen persönlichen Song:</strong> Name, E-Mail-Adresse,
          Angaben zum Songempfänger, Anlass, gewünschte Stimmung, gewünschte Leistung sowie die
          von dir mitgeteilte persönliche Geschichte (z.B. Erinnerungen, Namen, besondere
          Erlebnisse).
        </li>
        <li>
          <strong>Newsletter-Anmeldung:</strong> E-Mail-Adresse (Funktion aktuell nicht auf der
          Website aktiv).
        </li>
      </ul>
      <p>
        Für allgemeine Anfragen kannst du uns außerdem direkt über Instagram kontaktieren; es
        gelten dann zusätzlich die Datenschutzbestimmungen von Meta/Instagram.
      </p>
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

      <h2>6. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten (Google Fonts) werden lokal auf unserem
        eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google statt und
        es werden dabei keine Daten an Google übermittelt.
      </p>

      <h2>7. Cookies und Einwilligung</h2>
      <p>
        Diese Website setzt aktuell keine Analyse- oder Marketing-Cookies ein. Beim ersten Besuch
        wird dir ein Cookie-Banner angezeigt, über den du optionale Kategorien (Statistik,
        Marketing) zwar bereits jetzt einsehen und auswählen kannst — diese sind jedoch derzeit
        technisch nicht aktiv, da wir entsprechende Dienste noch nicht einsetzen. Deine Auswahl
        wird lokal in deinem Browser (localStorage) gespeichert, nicht als Cookie und nicht auf
        unseren Servern. Du kannst deine Auswahl jederzeit über den Link „Cookie-Einstellungen“
        im Footer der Website ändern. Sollten wir künftig Statistik- oder Marketing-Dienste
        einsetzen, werden diese ausschließlich nach deiner ausdrücklichen Einwilligung aktiviert
        und diese Erklärung entsprechend aktualisiert.
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
