import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const tracks = pgTable("tracks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  artist: text("artist").notNull(),
  genre: text("genre").notNull(),
  description: text("description"),
  duration: text("duration").notNull(),
  imageUrl: text("image_url"),
  plays: integer("plays").default(0).notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const songRequests = pgTable("song_requests", {
  id: serial("id").primaryKey(),

  // Gewünschte Leistung
  service: text("service").notNull(),
  express: boolean("express").default(false).notNull(),

  // Angaben zum Projekt
  occasion: text("occasion").notNull(),
  occasionOther: text("occasion_other"),
  forWhom: text("for_whom"),
  fromWhom: text("from_whom"),
  genre: text("genre").notNull(),
  genreDescription: text("genre_description"),
  idea: text("idea").notNull(),
  wishes: text("wishes").notNull(),
  noGos: text("no_gos"),
  language: text("language").notNull(),
  languageDetails: text("language_details"),
  voice: text("voice").notNull(),
  voiceNotes: text("voice_notes"),
  pronunciation: text("pronunciation"),
  length: text("length").notNull(),
  usage: text("usage").notNull(),
  usageOther: text("usage_other"),
  story: text("story"),
  deadline: text("deadline").notNull(),
  visualDescription: text("visual_description"),

  // Kundendaten
  name: text("name").notNull(),
  address: text("address").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  contactMethod: text("contact_method").notNull(),
  availability: text("availability"),
  availabilityNotes: text("availability_notes"),
  paymentMethod: text("payment_method").notNull(),
  deliveryMethod: text("delivery_method").notNull(),
  correctionWishes: text("correction_wishes"),

  // Einwilligungen
  consentVersion: text("consent_version").notNull(),
  consentAt: timestamp("consent_at").notNull(),
  agbVersion: text("agb_version").notNull(),
  agbAcceptedAt: timestamp("agb_accepted_at").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});
