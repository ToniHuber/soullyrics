import nodemailer from "nodemailer";

const globalForMail = globalThis as typeof globalThis & {
  __transporter?: nodemailer.Transporter;
};

const FROM_ADDRESS = process.env.SMTP_USER ?? "noreply@soullyrics.at";
const NOTIFY_ADDRESS = process.env.REQUEST_NOTIFY_EMAIL ?? "anfrage@soullyrics.at";

function getTransporter() {
  if (globalForMail.__transporter) return globalForMail.__transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

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
  name: string;
  email: string;
  recipient: string;
  occasion: string;
  mood: string;
  story: string;
  packageName?: string | null;
};

export async function sendSongRequestNotification(data: SongRequestMailData) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `Soul Lyrics Studio <${FROM_ADDRESS}>`,
    to: NOTIFY_ADDRESS,
    replyTo: data.email,
    subject: `Neue Song-Anfrage von ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `E-Mail: ${data.email}`,
      `Für: ${data.recipient}`,
      `Anlass: ${data.occasion}`,
      `Stimmung: ${data.mood}`,
      data.packageName ? `Paket: ${data.packageName}` : null,
      "",
      "Geschichte:",
      data.story,
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
    subject: "Deine Anfrage bei Soul Lyrics Studio",
    text: `Hallo ${data.name},\n\ndanke für deine Anfrage! Ich melde mich in Kürze bei dir, um alles Weitere gemeinsam zu besprechen.\n\nLiebe Grüße\nSoul Lyrics Studio`,
  });
}
