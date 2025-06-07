import { text, timestamp, integer, pgTable } from "drizzle-orm/pg-core";
import { schema } from "./index.ts";

export const bids = pgTable('bids', {
  id: text().primaryKey(),
  auctionItemId: text().notNull().references(() => schema.auctionsItems.id),
  userId: text().notNull().references(() => schema.users.id),
  amount: integer().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
})