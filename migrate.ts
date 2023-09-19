import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { connect } from "@planetscale/database";

const db = drizzle(connect({ url: process.env.DATABASE_URL }));

await migrate(db, { migrationsFolder: "drizzle" });
