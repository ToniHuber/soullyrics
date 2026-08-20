import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Soul Lyrics Studio",
};

export default function DatenschutzPage() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>
      <p>
        Informationen gemäß Art. 13 DSGVO · Stand: 20.08.2026
      </p>
      <p>
        Diese Datenschutzerklärung beschreibt, wie Soul Lyrics Studio personenbezogene Daten bei
        der Nutzung der Website, bei unverbindlichen Anfragen, Kommunikation, Vertrags- und
        Auftragsabwicklung, Produktion, Zahlung, Lieferung, Newsletter-Anmeldungen sowie bei der
        optionalen Nutzung von KI-, Audio-, Bild- und Videodiensten verarbeitet.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        <strong>Unternehmen:</strong> Soul Lyrics Studio - Meriton Huber
        <br />
        <strong>Anschrift:</strong> Brückenstraße 21/7/4, 2100 Korneuburg, Österreich
        <br />
        <strong>E-Mail:</strong> office@soullyrics.at
        <br />
        <strong>Telefon / WhatsApp:</strong> +43 677 614 42956
      </p>

      <h2>2. Grundsätze und Kategorien personenbezogener Daten</h2>
      <p>
        Je nach Kontaktweg und gewünschter Leistung können insbesondere Stamm- und Kontaktdaten,
        Anfrage- und Vertragsdaten, Zahlungs- und Rechnungsdaten, Kommunikationsdaten, Projekt-
        und Inhaltsdaten sowie technische Daten verarbeitet werden.
      </p>
      <p>
        Besondere Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO (z. B. Angaben zur
        Gesundheit, religiösen oder weltanschaulichen Überzeugung oder sexuellen Orientierung)
        sollen nur angegeben werden, wenn sie für den vom Kunden gewünschten Inhalt tatsächlich
        erforderlich sind. Die Verarbeitung solcher Daten erfolgt nur auf Grundlage einer
        ausdrücklichen Einwilligung und nur im erforderlichen Umfang.
      </p>

      <h2>3. Website-Hosting und technische Protokolldaten (Netlify)</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Beim Aufruf der Website können technisch
        erforderliche Zugriffsdaten verarbeitet werden, insbesondere IP-Adresse, Datum und
        Uhrzeit des Zugriffs, aufgerufene Seite bzw. Ressource, Browser- und Gerätedaten sowie
        Fehler-, Sicherheits- und technische Protokolldaten.
      </p>
      <p>
        <strong>Zweck:</strong> Bereitstellung und Auslieferung der Website, technischer Betrieb,
        Stabilität, Fehleranalyse, Missbrauchsabwehr und Gewährleistung der Sicherheit.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        einem sicheren, stabilen und funktionsfähigen Webauftritt).
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Netlify, Inc. als Hosting-, Deployment- und
        Functions-Plattform.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Netlify ist ein international tätiger Anbieter mit
        Sitz in den USA. Netlify stellt für die Verarbeitung als Dienstleister ein Data Processing
        Agreement (DPA) bereit und nennt für internationale Datenübermittlungen die jeweils
        anwendbaren gesetzlichen Transfermechanismen. Nach den vom Anbieter bereitgestellten
        Informationen nimmt Netlify außerdem am EU-U.S. Data Privacy Framework teil.
      </p>
      <p>
        <strong>Speicherdauer der technischen Logs:</strong> Im aktuell verwendeten Free-Tarif
        werden Function Logs und Edge Function Logs nach den vorliegenden technischen Angaben 24
        Stunden vorgehalten. Request-/Observability-Logs werden im Free-/Personal-Tarif 1 Tag
        vorgehalten. Audit Logs sind im Free-Tarif nicht verfügbar. Ändert sich der Tarif oder die
        technische Konfiguration, wird diese Datenschutzerklärung entsprechend angepasst.
      </p>
      <p>
        <strong>Bereitstellung der Daten:</strong> Die technische Verarbeitung erfolgt beim Aufruf
        der Website automatisch. Ohne diese Verarbeitung kann die Website technisch nicht sicher
        und zuverlässig bereitgestellt werden.
      </p>

      <h2>4. Online-Anfrageformular, Netlify Functions, Supabase und Formular-E-Mail</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Name, Adresse, E-Mail-Adresse, Telefonnummer,
        bevorzugte Kontaktart und Erreichbarkeit, gewünschte Leistung, Anlass, Angaben zu
        Empfänger und Absender des Projekts, Musikrichtung und Klangwünsche, Grundidee, besondere
        Wünsche und No-Gos, Sprache, Stimme und Aussprachehinweise, gewünschte Länge und
        Verwendung, frei formulierte Geschichte/Botschaft, gewünschter Fertigstellungstermin,
        gegebenenfalls Beschreibungen zu Cover- oder Videowünschen, Zahlungsart, Lieferweg,
        Korrekturwünsche sowie freiwillige Zusatzangaben.
      </p>
      <p>
        <strong>Kein Datei-Upload:</strong> Das Online-Anfrageformular enthält nach dem aktuellen
        technischen Stand ausschließlich Eingabe- und Auswahlfelder. Über das Formular werden
        keine Bilder, Videos, Audiodateien oder sonstigen Dateien hochgeladen oder gespeichert.
      </p>
      <p>
        <strong>Technischer Ablauf:</strong> Die Formulareingaben werden zunächst über die Netlify
        Function /api/request verarbeitet. Die für diese Function aktuell konfigurierte Region ist
        CMH (Ohio, USA). Die Function übermittelt die Daten anschließend an die
        Supabase-Datenbank und löst den E-Mail-Versand über easyname aus.
      </p>
      <p>
        <strong>Zweck:</strong> Bearbeitung der unverbindlichen Anfrage, Rückfragen, Erstellung
        eines individuellen Angebots und Durchführung vorvertraglicher Maßnahmen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO. Soweit freiwillig besondere
        Kategorien personenbezogener Daten übermittelt werden, erfolgt deren Verarbeitung auf
        Grundlage der ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO; soweit eine
        Einwilligung für die KI-Verarbeitung erforderlich ist, zusätzlich Art. 6 Abs. 1 lit. a
        DSGVO.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Netlify, Inc. für die technische Ausführung
        der Function; Supabase für die PostgreSQL-Datenbank; easyname für den technischen
        E-Mail-Versand. Das eingesetzte Supabase-Projekt ist in der Region Frankfurt/Deutschland
        (eu-central-1) eingerichtet.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Durch die Ausführung der Netlify Function in Ohio,
        USA, werden die Formulareingaben technisch kurzfristig in einem Drittland verarbeitet,
        bevor sie in der Supabase-Datenbank in Frankfurt gespeichert bzw. über easyname per E-Mail
        weitergeleitet werden. Für Netlify gelten die in Abschnitt 3 genannten
        Transfermechanismen. Das Supabase-Projekt selbst ist in Frankfurt/Deutschland
        bereitgestellt; Supabase ist international tätig und kann nach seinen
        Vertragsunterlagen Unterauftragsverarbeiter an weiteren Standorten einsetzen, sofern die
        datenschutzrechtlichen Voraussetzungen für internationale Übermittlungen eingehalten
        werden. easyname ist ein österreichischer E-Mail-/Hostinganbieter; bei der
        E-Mail-Zustellung können technisch notwendige Mailserver und Empfänger-Systeme beteiligt
        sein.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Reine Anfragen ohne Auftrag werden nach Abschluss der
        Bearbeitung bzw. sobald feststeht, dass kein Auftrag zustande kommt, zeitnah gelöscht oder
        anonymisiert, soweit keine berechtigten Gründe für eine weitere begrenzte Aufbewahrung
        bestehen. Eine automatische Löschung im Hintergrund ist derzeit nicht eingerichtet. Kommt
        ein Auftrag zustande, werden die erforderlichen Daten nach den für Vertrags-, Auftrags-
        und Buchhaltungsunterlagen geltenden Fristen weiterverarbeitet. Für die Netlify-Logs
        gelten die Speicherfristen nach Abschnitt 3.
      </p>
      <p>
        <strong>Bereitstellung der Daten:</strong> Pflichtangaben sind erforderlich, um die
        Anfrage sinnvoll bearbeiten und gegebenenfalls ein Angebot erstellen zu können. Freiwillige
        Zusatzangaben und sensible Angaben können weggelassen werden, soweit sie für den
        gewünschten Inhalt nicht erforderlich sind.
      </p>

      <h2>5. Newsletter-Anmeldung</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> E-Mail-Adresse sowie technisch erforderliche
        Verarbeitungsdaten der Anmeldung.
      </p>
      <p>
        <strong>Technischer Ablauf:</strong> Bei Nutzung der Newsletter-Anmeldung wird die
        E-Mail-Adresse über die Netlify Function /api/newsletter verarbeitet. Die Function wird in
        der aktuell konfigurierten Region CMH (Ohio, USA) ausgeführt und speichert die
        E-Mail-Adresse in einer dafür vorgesehenen Datenbanktabelle.
      </p>
      <p>
        <strong>Zweck:</strong> Verwaltung der freiwilligen Newsletter-Anmeldung und Versand von
        Informationen, sofern die Newsletter-Funktion genutzt wird.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Netlify, Inc. für die technische Ausführung
        der Function sowie der eingesetzte Datenbankdienst für die Speicherung der
        Newsletter-Anmeldung.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Durch die Ausführung der Netlify Function in Ohio,
        USA, findet eine technische Verarbeitung in einem Drittland statt. Für Netlify gelten die
        in Abschnitt 3 beschriebenen Transfermechanismen.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die E-Mail-Adresse wird bis zum Widerruf der Einwilligung
        bzw. bis zur Abmeldung vom Newsletter gespeichert, soweit keine andere Rechtsgrundlage
        oder gesetzliche Aufbewahrungspflicht besteht.
      </p>
      <p>
        <strong>Freiwilligkeit / Widerruf:</strong> Die Anmeldung ist freiwillig. Eine erteilte
        Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
      </p>

      <h2>6. KI-gestützte Erstellung sowie Audio-, Bild- und Videoproduktion</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Je nach Auftrag die vom Kunden bereitgestellten
        Projekt- und Inhaltsdaten, Texte, Namen, Erinnerungen, Geschichten sowie gegebenenfalls
        Bild-, Audio- und Videodateien, die außerhalb des Websiteformulars über einen vereinbarten
        Kommunikationsweg übermittelt wurden. Besondere Kategorien personenbezogener Daten werden
        nur bei ausdrücklicher Einwilligung verarbeitet.
      </p>
      <p>
        <strong>Zweck:</strong> Erstellung und Bearbeitung der beauftragten personalisierten
        Inhalte, insbesondere Liedtexte, Songs, Coverbilder und Videos.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Für erforderliche normale Vertrags- und Projektdaten
        Art. 6 Abs. 1 lit. b DSGVO. Soweit eine KI-Verarbeitung auf einer gesonderten Einwilligung
        beruht, Art. 6 Abs. 1 lit. a DSGVO; bei besonderen Kategorien personenbezogener Daten
        zusätzlich Art. 9 Abs. 2 lit. a DSGVO.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Je nach Auftrag und tatsächlich eingesetztem
        Arbeitsschritt insbesondere OpenAI/ChatGPT, Suno, Canva und CapCut. Es werden nur die für
        den jeweiligen Arbeitsschritt erforderlichen Daten übermittelt; unnötige
        Identifikationsdaten werden nach Möglichkeit weggelassen oder reduziert.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Bei einzelnen Anbietern kann eine Verarbeitung
        außerhalb des Europäischen Wirtschaftsraums erfolgen. OpenAI nennt für Übermittlungen
        außerhalb des EWR insbesondere Angemessenheitsbeschlüsse und EU-Standardvertragsklauseln.
        Suno ist in den USA ansässig und gibt für EWR-Nutzer an, Daten in die USA zu übertragen
        und bei weiteren Übermittlungen geeignete Garantien bzw. Angemessenheitsentscheidungen zu
        verwenden. Canva verarbeitet Daten global und sieht für internationale Übermittlungen
        geeignete vertragliche Schutzmechanismen, einschließlich Standardvertragsklauseln, vor.
        CapCut kann Daten unter anderem in den USA und Singapur verarbeiten und nennt für die
        europäische Region Angemessenheitsbeschlüsse bzw. Standardvertragsklauseln als
        Transfermechanismen.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Projekt- und Inhaltsdateien bei Soul Lyrics Studio werden
        grundsätzlich sechs Monate nach vollständiger Lieferung gelöscht, sofern keine längere
        Aufbewahrung ausdrücklich vereinbart wurde oder noch Änderungen, Gewährleistungsfragen
        bzw. Rechtsansprüche offen sind. Die Speicherdauer bei externen Dienstleistern richtet
        sich zusätzlich nach deren jeweiligen Datenschutz- und Nutzungsbedingungen sowie den dort
        vorgenommenen Kontoeinstellungen.
      </p>
      <p>
        <strong>Freiwilligkeit / Widerruf:</strong> Die Angabe sensibler Inhalte ist freiwillig.
        Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
        Soweit die ausdrücklich gewünschte Leistung ohne bestimmte Angaben oder ohne den
        vereinbarten KI-/Produktionsdienst nicht sinnvoll erbracht werden kann, kann ein Widerruf
        dazu führen, dass die betreffende Leistung nicht oder nicht in der vereinbarten Form
        fortgeführt werden kann.
      </p>

      <h2>7. Kommunikation per E-Mail, Telefon, WhatsApp und Social Media</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Name, Kontaktdaten, Kommunikationsinhalte, Anhänge
        und technische Metadaten des gewählten Kommunikationswegs.
      </p>
      <p>
        <strong>Zweck:</strong> Beantwortung von Anfragen, Abstimmung von Projekten,
        Kundenbetreuung, Termin-, Zahlungs- und Lieferkommunikation.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche und
        vertragliche Kommunikation; Art. 6 Abs. 1 lit. f DSGVO für allgemeine geschäftliche
        Kommunikation und Organisation, soweit keine überwiegenden Interessen der betroffenen
        Person entgegenstehen.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Für E-Mail-Kommunikation und den SMTP-Versand
        wird insbesondere easyname eingesetzt. Bei vom Kunden gewählter Nutzung können außerdem
        Kommunikations- oder Social-Media-Dienste wie WhatsApp/Meta, Instagram/Meta oder
        vergleichbare Plattformen beteiligt sein.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Bei internationalen Kommunikations- und
        Social-Media-Diensten können Daten auch außerhalb des EWR verarbeitet werden. Soweit eine
        Drittlandübermittlung erfolgt, richtet sich diese nach den jeweils anwendbaren
        gesetzlichen Transfermechanismen und den Datenschutzinformationen des jeweiligen
        Anbieters.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Kommunikationsverläufe werden nur so lange aufbewahrt, wie
        sie für Anfragebearbeitung, Auftragsabwicklung, Nachbetreuung, Beweissicherung oder
        gesetzliche Aufbewahrungspflichten erforderlich sind. Reine Kommunikation ohne Auftrag
        wird nach Abschluss zeitnah gelöscht oder anonymisiert, soweit keine berechtigten Gründe
        für eine weitere begrenzte Aufbewahrung bestehen.
      </p>

      <h2>8. Vertrags- und Auftragsabwicklung</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Kundendaten, Angebots- und Vertragsdaten, gewünschte
        Leistung, Projektangaben, Preis, Zahlungsart, Lieferweg, Korrekturregelung,
        Auftragsbestätigung sowie erforderliche Zustimmungs- und Nachweisdaten.
      </p>
      <p>
        <strong>Zweck:</strong> Erstellung und Abwicklung des Vertrags, Produktion, Lieferung,
        Bearbeitung von Änderungen sowie Dokumentation des Vertragsabschlusses und der erteilten
        Erklärungen.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO; soweit gesetzliche
        Dokumentations- oder Aufbewahrungspflichten bestehen zusätzlich Art. 6 Abs. 1 lit. c
        DSGVO.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Interne Auftragsverwaltung; gegebenenfalls
        eingesetzte Cloud-/Dateidienste sowie berufsmäßige Berater, Banken oder Behörden, soweit
        dies für die Abwicklung oder aufgrund gesetzlicher Pflichten erforderlich ist.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Soweit eingesetzte Cloud- oder Softwareanbieter
        Daten außerhalb des EWR verarbeiten, gelten die in Abschnitt 13 beschriebenen Grundsätze
        zu Drittlandübermittlungen.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Vertrags- und Auftragsunterlagen werden grundsätzlich bis
        zum Ablauf der für mögliche vertragliche Ansprüche relevanten Aufbewahrungs- bzw.
        Verjährungsfristen aufbewahrt. Soweit Unterlagen zugleich Buchhaltungs- oder Steuerbelege
        sind, gelten die längeren gesetzlichen Aufbewahrungsfristen gemäß Abschnitt 9.
      </p>

      <h2>9. Zahlung, Rechnung und Buchhaltung</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Name, Anschrift, Rechnungsdaten, Betrag, Zahlungsart,
        Zahlungsstatus, Transaktions- und Buchungsdaten sowie gesetzlich erforderliche
        Belegdaten.
      </p>
      <p>
        <strong>Zweck:</strong> Zahlungsabwicklung, Rechnungslegung, Buchhaltung, steuerliche
        Dokumentation und Erfüllung gesetzlicher Pflichten.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO für die Zahlungsabwicklung;
        Art. 6 Abs. 1 lit. c DSGVO für gesetzliche Aufbewahrungs- und Dokumentationspflichten.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Banken und Zahlungsdienstleister, insbesondere
        PayPal, soweit diese Zahlungsart gewählt wird; Rechnungs- und Buchhaltungsdienste,
        insbesondere sevDesk; gegebenenfalls Steuerberatung und zuständige Behörden.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Je nach gewähltem Zahlungs- oder
        Buchhaltungsdienst kann eine Verarbeitung außerhalb des EWR erfolgen. In diesem Fall sind
        die gesetzlichen Voraussetzungen der Art. 44 ff. DSGVO für internationale
        Datenübermittlungen maßgeblich.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Rechnungen, Zahlungsnachweise und buchhaltungsrelevante
        Unterlagen werden grundsätzlich sieben Jahre entsprechend den steuer- und
        unternehmensrechtlichen Aufbewahrungspflichten aufbewahrt; bei anhängigen Verfahren oder
        gesetzlich vorgesehenen Sonderfällen gegebenenfalls länger.
      </p>

      <h2>10. Cloud- und Dateispeicherung</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Projektdateien, Arbeitsunterlagen, Text-, Audio-,
        Bild- und Videodateien sowie die für die Zuordnung notwendigen Kunden- und Auftragsdaten.
      </p>
      <p>
        <strong>Zweck:</strong> Sichere Arbeitsorganisation, Zwischenspeicherung, Datensicherung,
        Bearbeitung und Lieferung von Projektdateien.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, soweit die Speicherung für
        die Vertragserfüllung erforderlich ist; ergänzend Art. 6 Abs. 1 lit. f DSGVO für eine
        sichere und effiziente Dateiorganisation.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Insbesondere Microsoft OneDrive, soweit dort
        Projektdateien oder Arbeitsunterlagen gespeichert werden.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Bei internationalen Cloud-Infrastrukturen kann
        eine Verarbeitung außerhalb des EWR erfolgen. In diesem Fall sind geeignete
        Transfermechanismen nach Art. 44 ff. DSGVO erforderlich.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Projekt- und Inhaltsdateien werden grundsätzlich sechs
        Monate nach vollständiger Lieferung gelöscht, sofern keine längere Aufbewahrung vereinbart
        wurde oder noch berechtigte Gründe für eine weitere Speicherung bestehen. Technische
        Sicherungskopien können im Rahmen üblicher Lösch- und Überschreibzyklen vorübergehend
        fortbestehen.
      </p>

      <h2>11. Veröffentlichung als Referenz / Social Media</h2>
      <p>
        <strong>Verarbeitete Daten:</strong> Je nach erteilter Freigabe Name oder Pseudonym,
        Projektbeschreibung, Song, Text, Cover, Bild, Video, Bewertung oder sonstiges
        freigegebenes Projektergebnis.
      </p>
      <p>
        <strong>Zweck:</strong> Veröffentlichung auf der Website, in sozialen Netzwerken oder zu
        Referenz- und Werbezwecken.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (gesonderte freiwillige
        Einwilligung). Bei besonderen Kategorien personenbezogener Daten zusätzlich Art. 9 Abs. 2
        lit. a DSGVO.
      </p>
      <p>
        <strong>Empfänger / Dienstleister:</strong> Je nach Freigabe insbesondere
        Websitebesucher sowie Plattformanbieter wie Instagram/Meta, Facebook/Meta, YouTube/Google
        oder andere ausdrücklich vereinbarte Plattformen.
      </p>
      <p>
        <strong>Drittlandübermittlung:</strong> Bei Veröffentlichungen auf internationalen
        Plattformen kann eine Datenverarbeitung außerhalb des EWR erfolgen. Die jeweilige
        Plattform verarbeitet Daten zusätzlich nach ihren eigenen Datenschutzbestimmungen.
      </p>
      <p>
        <strong>Speicherdauer:</strong> Bis zum Widerruf der Einwilligung bzw. bis zum Wegfall des
        Veröffentlichungszwecks, soweit keine andere Rechtsgrundlage oder Aufbewahrungspflicht
        entgegensteht. Ein Widerruf wirkt für die Zukunft; eine vollständige Entfernung bereits
        von Dritten weiterverbreiteter Inhalte kann technisch nicht in jedem Fall gewährleistet
        werden.
      </p>

      <h2>12. Local Storage, Cookies, Tracking und eingebettete Inhalte</h2>
      <p>
        Nach dem aktuellen technischen Stand werden auf der Website keine Analyse- oder
        Marketingdienste wie Google Analytics oder Meta Pixel eingesetzt. Es wird kein reCAPTCHA
        verwendet. Google Fonts werden lokal eingebunden, sodass hierfür keine Verbindung zu
        Google-Servern erforderlich ist. YouTube- oder Social-Media-Inhalte werden nicht direkt
        eingebettet, sondern lediglich über normale Links erreichbar gemacht.
      </p>
      <p>
        <strong>Local Storage:</strong> Es wird lediglich ein localStorage-Eintrag verwendet, um
        den Status des Cookie-/Datenschutzhinweises auf dem verwendeten Endgerät zu speichern.
        Dieser Eintrag dient nicht der Reichweitenmessung, Werbung oder Profilbildung.
      </p>
      <p>
        <strong>Einwilligungsmanagement:</strong> Werden später nicht technisch notwendige
        Cookies, Trackingdienste, Analysewerkzeuge oder externe Einbettungen ergänzt, wird diese
        Datenschutzerklärung vor deren Einsatz angepasst und - soweit rechtlich erforderlich -
        eine vorherige Einwilligung eingeholt.
      </p>

      <h2>13. Drittlandübermittlungen - allgemeine Hinweise</h2>
      <p>
        Werden personenbezogene Daten an Empfänger außerhalb des Europäischen Wirtschaftsraums
        übermittelt, erfolgt dies unter Beachtung der Art. 44 ff. DSGVO. Je nach Empfänger kommen
        insbesondere Angemessenheitsbeschlüsse der Europäischen Kommission oder geeignete
        Garantien wie die von der Europäischen Kommission beschlossenen Standardvertragsklauseln
        in Betracht. Welche Anbieter tatsächlich Daten erhalten, hängt vom gewählten
        Kommunikationsweg, der Website-Technik und der konkret beauftragten Leistung ab.
      </p>

      <h2>14. Speicherdauer und Löschkonzept</h2>
      <ul>
        <li>
          Reine Anfragen ohne Auftrag: nach Abschluss der Bearbeitung bzw. sobald feststeht, dass
          kein Auftrag zustande kommt, zeitnahe Löschung oder Anonymisierung, soweit keine
          berechtigten Gründe für eine begrenzte weitere Aufbewahrung bestehen.
        </li>
        <li>
          Formulardaten in Supabase: entsprechend der vorstehenden Regel für Anfragen; derzeit
          keine automatische Hintergrundlöschung.
        </li>
        <li>
          Netlify Function Logs und Edge Function Logs im aktuellen Free-Tarif: 24 Stunden;
          Request-/Observability-Logs: 1 Tag; Audit Logs: im Free-Tarif nicht verfügbar.
        </li>
        <li>
          Newsletter-Daten: bis zur Abmeldung bzw. zum Widerruf der Einwilligung, soweit keine
          andere Rechtsgrundlage oder Aufbewahrungspflicht besteht.
        </li>
        <li>
          Vertrags- und Auftragsunterlagen: bis zum Ablauf der für die Vertragsabwicklung und
          mögliche Rechtsansprüche erforderlichen Aufbewahrungs- bzw. Verjährungsfristen; längere
          gesetzliche Pflichten bleiben unberührt.
        </li>
        <li>
          Projekt- und Inhaltsdateien: grundsätzlich sechs Monate nach vollständiger Lieferung,
          sofern keine längere Aufbewahrung vereinbart wurde oder noch Änderungen bzw.
          Rechtsfragen offen sind.
        </li>
        <li>
          Rechnungen, Belege und buchhaltungsrelevante Unterlagen: grundsätzlich sieben Jahre; bei
          anhängigen Verfahren oder Sondervorschriften gegebenenfalls länger.
        </li>
        <li>
          Daten auf Grundlage einer Einwilligung: bis zum Widerruf oder Wegfall des Zwecks, sofern
          keine andere Rechtsgrundlage oder Aufbewahrungspflicht besteht.
        </li>
        <li>
          Backups: technisch bedingte Fortexistenz für einen begrenzten Zeitraum im Rahmen
          üblicher Lösch- und Überschreibzyklen.
        </li>
      </ul>

      <h2>15. Rechte betroffener Personen</h2>
      <ul>
        <li>Auskunft über die verarbeiteten personenbezogenen Daten.</li>
        <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</li>
        <li>
          Löschung oder Einschränkung der Verarbeitung, soweit keine gesetzlichen Pflichten oder
          sonstigen vorrangigen Gründe entgegenstehen.
        </li>
        <li>Datenübertragbarkeit bei Vorliegen der gesetzlichen Voraussetzungen.</li>
        <li>Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO gestützt werden.</li>
        <li>
          Widerruf einer erteilten Einwilligung jederzeit mit Wirkung für die Zukunft. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
        </li>
        <li>Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde.</li>
      </ul>
      <p>
        Österreichische Datenschutzbehörde: Barichgasse 40-42, 1030 Wien, Österreich; E-Mail:
        dsb@dsb.gv.at; Telefon: +43 1 52 152-0.
      </p>
      <p>Datenschutzanfragen an Soul Lyrics Studio: office@soullyrics.at</p>

      <h2>16. Bereitstellung der Daten</h2>
      <p>
        Die Bereitstellung jener Daten, die zur Anfragebearbeitung, Vertragserfüllung, Zahlung und
        Rechnungslegung erforderlich sind, ist notwendig. Ohne diese Daten kann eine Anfrage
        möglicherweise nicht bearbeitet oder ein Auftrag nicht angenommen, durchgeführt oder
        abgerechnet werden. Freiwillige Zusatzangaben, insbesondere sensible Angaben, können
        grundsätzlich weggelassen werden, soweit sie nicht für den ausdrücklich gewünschten Inhalt
        erforderlich sind.
      </p>

      <h2>17. Daten anderer Personen und Minderjährige</h2>
      <ul>
        <li>
          Wer Namen, Fotos, Geschichten oder andere personenbezogene Daten Dritter übermittelt,
          muss dazu berechtigt sein und die betroffenen Personen - soweit erforderlich -
          informieren.
        </li>
        <li>
          Eine Veröffentlichung oder erkennbare Darstellung anderer Personen erfolgt nur, wenn die
          dafür erforderliche Berechtigung bzw. Zustimmung vorliegt.
        </li>
        <li>
          Bei Inhalten über Minderjährige ist besonders sorgfältig vorzugehen. Je nach Alter,
          Inhalt und geplanter Nutzung kann eine Zustimmung einer erziehungsberechtigten Person
          erforderlich sein.
        </li>
      </ul>

      <h2>18. Automatisierte Entscheidungen</h2>
      <p>
        Es findet keine ausschließlich automatisierte Entscheidungsfindung einschließlich
        Profiling statt, die gegenüber Kunden rechtliche Wirkung entfaltet oder sie in ähnlich
        erheblicher Weise beeinträchtigt.
      </p>

      <h2>19. Datensicherheit</h2>
      <p>
        Soul Lyrics Studio trifft angemessene technische und organisatorische Maßnahmen, um
        personenbezogene Daten vor Verlust, unbefugtem Zugriff, Veränderung oder Offenlegung zu
        schützen. Bei Kommunikation über das Internet oder soziale Netzwerke kann jedoch keine
        absolute Sicherheit garantiert werden. Besonders vertrauliche Inhalte sollten nur über
        einen zuvor vereinbarten geeigneten Übermittlungsweg gesendet werden.
      </p>

      <h2>20. Aktualisierung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung wird angepasst, wenn sich Rechtslage, Arbeitsabläufe,
        Website-Technik, eingesetzte Dienstleister, Hostingregionen, Tarifmodelle oder
        Speicherfristen ändern. Maßgeblich ist die jeweils aktuelle veröffentlichte Fassung.
      </p>
    </>
  );
}
