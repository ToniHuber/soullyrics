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
        Meriton Huber, Soul Lyrics Studio (Einzelunternehmen)
        <br />
        Brückenstraße 21/7/4
        <br />
        2100 Korneuburg, Österreich
        <br />
        E-Mail: office@soullyrics.at
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
      </ul>
      <p>
        Für allgemeine Anfragen kannst du uns außerdem direkt über Instagram kontaktieren; es
        gelten dann zusätzlich die Datenschutzbestimmungen von Meta/Instagram.
      </p>
      <p>
        Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht an
        Dritte weiterverkauft.
      </p>

      <h2>3. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Erfüllung
        eines Vertrags bzw. zur Durchführung vorvertraglicher Maßnahmen auf deine Anfrage hin)
        sowie, sofern du der Verarbeitung sensibler Angaben in deiner Geschichte gesondert
        zugestimmt hast, auf Grundlage deiner Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
      </p>

      <h2>4. Speicherdauer</h2>
      <p>
        [Konkrete Speicherdauer bzw. Löschfristen bitte final festlegen.] Deine Daten werden
        gespeichert, solange dies zur Bearbeitung deiner Anfrage erforderlich ist, sofern keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>5. Hosting und technische Infrastruktur</h2>
      <p>
        Diese Website wird bei Netlify gehostet. Statische Inhalte (z.B. Texte, Bilder) werden
        dabei über ein weltweites Content-Delivery-Netzwerk ausgeliefert. Die serverseitige
        Verarbeitung, insbesondere die Verarbeitung deiner Eingaben im Anfrageformular, erfolgt in
        einem Rechenzentrum von Netlify in Columbus, Ohio, USA. Dies stellt eine Datenübermittlung
        in ein Land außerhalb der EU/des EWR (Drittland) dar. Netlify Inc. hat seinen Sitz in den
        USA; für eine solche Übermittlung sind geeignete Garantien nach Art. 46 DSGVO
        erforderlich, üblicherweise in Form von EU-Standardvertragsklauseln im Rahmen einer
        Auftragsverarbeitungsvereinbarung mit Netlify. [Bitte bestätigen, ob eine entsprechende
        Auftragsverarbeitungsvereinbarung mit Netlify abgeschlossen bzw. aktiviert wurde.]
      </p>
      <p>
        Formulardaten werden zusätzlich in einer PostgreSQL-Datenbank bei Supabase
        (Serverstandort Frankfurt/Deutschland) gespeichert. Beim Aufruf der Website werden durch
        den Hosting-Anbieter automatisch technische Zugriffsdaten (z.B. IP-Adresse, Zeitpunkt des
        Zugriffs) in Server-Logs verarbeitet, die zur Absicherung des Betriebs erforderlich sind.
        Nach dem Absenden des Anfrageformulars wird zudem automatisch eine Bestätigungs-E-Mail an
        dich sowie eine interne Benachrichtigung versendet; der Versand erfolgt über den
        E-Mail-Anbieter easyname. [Genaue Speicherdauer der Server-Logs sowie
        Auftragsverarbeitungsverträge mit den eingesetzten Dienstleistern bitte final ergänzen.]
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten (Google Fonts) werden lokal auf unserem
        eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google statt und
        es werden dabei keine Daten an Google übermittelt.
      </p>

      <h2>7. Cookies und Einwilligung</h2>
      <p>
        Diese Website setzt keine Analyse- oder Marketing-Cookies ein. Beim ersten Besuch wird
        ein Hinweis zu den technisch notwendigen Funktionen angezeigt; deine Bestätigung wird
        lokal in deinem Browser (localStorage) gespeichert, nicht als Cookie und nicht auf
        unseren Servern. Du kannst diesen Hinweis jederzeit über den Link
        „Cookie-Hinweis“ im Footer der Website erneut aufrufen. Sollten wir künftig
        Statistik- oder Marketing-Dienste einsetzen, werden diese ausschließlich nach deiner
        ausdrücklichen Einwilligung aktiviert und diese Erklärung entsprechend aktualisiert.
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
