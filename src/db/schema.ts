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
  name: text("name").notNull(),
  email: text("email").notNull(),
  recipient: text("recipient").notNull(),
  occasion: text("occasion").notNull(),
  mood: text("mood").notNull(),
  story: text("story").notNull(),
  packageName: text("package_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
