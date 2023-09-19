import type { Config } from "drizzle-kit";
import "dotenv/config";

const databaseURL = process.env["DATABASE_URL"];

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: databaseURL,
  },
} satisfies Config;
