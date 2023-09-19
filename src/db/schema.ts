import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const labseven = mysqlTable("labseven", {
  id: int("id").primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).unique().notNull(),
});

export type Insert = InferInsertModel<typeof labseven>;
export type Select = InferSelectModel<typeof labseven>;
