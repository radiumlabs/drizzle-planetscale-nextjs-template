import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

const client = connect({
  url: process.env.DATABASE_URL,
});
export const pscale = drizzle(client);
