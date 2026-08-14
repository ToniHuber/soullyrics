import nodemailer from "nodemailer";

const globalForMail = globalThis as typeof globalThis & {
  __transporter?: nodemailer.Transporter;
};

const FROM_ADDRESS = process.env.SMTP_USER ?? "noreply@soullyrics.at";
const NOTIFY_ADDRESS = process.env.REQUEST_NOTIFY_EMAIL ?? "anfrage@soullyrics.at";

function getTransporter() {
  if (globalForMail.__transporter) return globalForMail.__transporter;

  const rawHost = process.env.SMTP_HOST ?? "";
  const rawUser = process.env.SMTP_USER ?? "";
  const rawPass = process.env.SMTP_PASSWORD ?? "";

  const host = rawHost.trim();
  const port = Number((process.env.SMTP_PORT ?? "465").trim());
  const user = rawUser.trim();
  const pass = rawPass.trim();

  if (!host || !user || !pass) {
    throw new Error("SMTP-Konfiguration fehlt (SMTP_HOST/SMTP_USER/SMTP_PASSWORD).");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  if (process.env.NODE_ENV !== "production") {
    globalForMail.__transporter = transporter;
  }

  return transporter;
}

type SongRequestMailData = {
  service: string;
  express: boolean;
  occasion: string;
  occasionOther?: string | null;
  forWhom?: string | null;
  fromWhom?: string | null;
  genre: string;
  genreDescription?: string | null;
  idea: string;
  wishes: string;
  noGos?: string | null;
  language: string;
  languageDetails?: string | null;
  voice: string;
  voiceNotes?: string | null;
  pronunciation?: string | null;
  length: string;
  usage: string;
  usageOther?: string | null;
  story?: string | null;
  deadline: string;
  visualDescription?: string | null;
  name: string;
  address: string;
  email: string;
  phone: string;
  contactMethod: string;
  availability?: string | null;
  availabilityNotes?: string | null;
  paymentMethod: string;
  deliveryMethod: string;
  correctionWishes?: string | null;
};

export async function sendSongRequestNotification(data: SongRequestMailData) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `Soul Lyrics Studio <${FROM_ADDRESS}>`,
    to: NOTIFY_ADDRESS,
    replyTo: data.email,
    subject: `Neue unverbindliche Anfrage von ${data.name}`,
    text: [
      `Leistung: ${data.service}${data.express ? " (Express gewünscht)" : ""}`,
      `Anlass: ${data.occasion}${data.occasionOther ? ` (${data.occasionOther})` : ""}`,
      data.forWhom ? `Für wen: ${data.forWhom}` : null,
      data.fromWhom ? `Von wem: ${data.fromWhom}` : null,
      `Musikrichtung: ${data.genre}${data.genreDescription ? ` (${data.genreDescription})` : ""}`,
      `Grundidee: ${data.idea}`,
      `Besondere Wünsche: ${data.wishes}`,
      data.noGos ? `No-Gos: ${data.noGos}` : null,
      `Sprache: ${data.language}${data.languageDetails ? ` (${data.languageDetails})` : ""}`,
      `Stimmwahl: ${data.voice}${data.voiceNotes ? ` (${data.voiceNotes})` : ""}`,
      data.pronunciation ? `Aussprachehinweise: ${data.pronunciation}` : null,
      `Länge: ${data.length}`,
      `Verwendung: ${data.usage}${data.usageOther ? ` (${data.usageOther})` : ""}`,
      data.story ? `Geschichte/Botschaft: ${data.story}` : null,
      `Gewünschter Fertigstellungstermin: ${data.deadline}`,
      data.visualDescription ? `Bild-/Video-Beschreibung: ${data.visualDescription}` : null,
      "",
      `Name: ${data.name}`,
      `Adresse: ${data.address}`,
      `E-Mail: ${data.email}`,
      `Telefon: ${data.phone}`,
      `Bevorzugte Kontaktart: ${data.contactMethod}`,
      data.availability ? `Bevorzugte Erreichbarkeit: ${data.availability}` : null,
      data.availabilityNotes ? `Hinweise zur Erreichbarkeit: ${data.availabilityNotes}` : null,
      `Zahlungsart: ${data.paymentMethod}`,
      `Lieferweg: ${data.deliveryMethod}`,
      data.correctionWishes ? `Wünsche zu Korrekturen: ${data.correctionWishes}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });
}

export async function sendSongRequestConfirmation(data: Pick<SongRequestMailData, "name" | "email">) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `Soul Lyrics Studio <${FROM_ADDRESS}>`,
    to: data.email,
    replyTo: NOTIFY_ADDRESS,
    subject: "Deine unverbindliche Anfrage bei Soul Lyrics Studio",
    text: `Hallo ${data.name},\n\ndanke für deine Anfrage! Sie ist unverbindlich — es ist dadurch noch kein Vertrag zustande gekommen. Ich melde mich in Kürze mit einem individuellen Angebot bei dir, gemeinsam besprechen wir dann alles Weitere.\n\nLiebe Grüße\nSoul Lyrics Studio`,
  });
}
