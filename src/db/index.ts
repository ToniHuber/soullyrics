import { drizzle } from "drizzle-orm/node-postgres";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __pool?: Pool;
  __db?: NodePgDatabase;
};

function getDb(): NodePgDatabase {
  if (globalForDb.__db) return globalForDb.__db;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is required");

  const isLocal = databaseUrl.includes("localhost") || databaseUrl.includes("127.0.0.1");

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: isLocal ? undefined : { rejectUnauthorized: false },
  });
  const db = drizzle(pool);

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__pool = pool;
    globalForDb.__db = db;
  }

  return db;
}

export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
