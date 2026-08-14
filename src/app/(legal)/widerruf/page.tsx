import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung | Soul Lyrics Studio",
};

export default function WiderrufPage() {
  return (
    <>
      <h1>Widerrufsbelehrung</h1>
      <p>
        Informationen zur Ausübung des Widerrufsrechts bei Dienstleistungen
        <br />
        Für Verbraucher (B2C) · Stand: 12.08.2026
      </p>
      <p>
        <strong>Unternehmen</strong> Soul Lyrics Studio - Meriton Huber
        <br />
        <strong>Anschrift</strong> Brückenstraße 21/7/4, 2100 Korneuburg, Österreich
        <br />
        <strong>E-Mail</strong> office@soullyrics.at
        <br />
        <strong>Telefon / WhatsApp</strong> +43 677 614 42956
      </p>

      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
        widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns, Soul Lyrics Studio - Meriton Huber,
        Brückenstraße 21/7/4, 2100 Korneuburg, Österreich, Telefon / WhatsApp: +43 677 614 42956,
        E-Mail: office@soullyrics.at, mittels einer eindeutigen Erklärung (z. B. ein mit der Post
        versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
        informieren. Sie können dafür das beigefügte{" "}
        <a href="/widerrufsformular" className="text-gold-400 underline">
          Muster-Widerrufsformular
        </a>{" "}
        verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
        des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
        erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten,
        die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns
        angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens
        binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren
        Widerruf dieses Vertrags bei uns eingegangen ist.
      </p>
      <p>
        Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
        ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
        etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
        berechnet.
      </p>
      <p>
        Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen
        sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu
        dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses
        Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang
        der im Vertrag vorgesehenen Dienstleistungen entspricht.
      </p>

      <h2>Ergänzender Hinweis zum vorzeitigen Produktionsbeginn</h2>
      <p>
        Soul Lyrics Studio beginnt auf ausdrückliches Verlangen des Verbrauchers bereits vor
        Ablauf der vierzehntägigen Widerrufsfrist mit der vereinbarten Produktion. Dieses
        Verlangen und die Kenntnisnahme der Rechtsfolgen werden gesondert und aktiv
        dokumentiert.
      </p>
      <p>
        Bei einer entgeltlichen Dienstleistung erlischt das Widerrufsrecht nach vollständiger
        Erbringung der Dienstleistung nur dann vorzeitig, wenn Soul Lyrics Studio aufgrund der
        vorherigen ausdrücklichen Zustimmung des Verbrauchers mit der Vertragserfüllung begonnen
        hat und der Verbraucher vor Beginn bestätigt hat, zur Kenntnis genommen zu haben, dass er
        sein Widerrufsrecht mit vollständiger Vertragserfüllung verliert.
      </p>
      <p>
        Wird der Vertrag vor vollständiger Erbringung der Dienstleistung wirksam widerrufen,
        nachdem der Verbraucher den Beginn während der Widerrufsfrist ausdrücklich verlangt hat,
        ist der gesetzlich vorgesehene angemessene anteilige Betrag für die bis zum Widerruf
        bereits erbrachten Leistungen zu zahlen.
      </p>

      <h2>Hinweis zum Vertragsabschluss</h2>
      <p>
        Das Online-Anfrageformular auf soullyrics.at dient ausschließlich der unverbindlichen
        Anfrage. Der Vertrag kommt erst im anschließenden individuellen Angebots- und
        Annahmeprozess zustande. Diese Widerrufsbelehrung wird dem Verbraucher vor Abgabe seiner
        Vertragserklärung zur Verfügung gestellt und zusammen mit den Vertragsunterlagen auf
        einem dauerhaften Datenträger übermittelt.
      </p>
      <p>
        <em>
          Rechtsgrundlage: Fern- und Auswärtsgeschäfte-Gesetz (FAGG), insbesondere Anhang I Teil
          A sowie §§ 11, 16 und 18 FAGG.
        </em>
      </p>
    </>
  );
}
