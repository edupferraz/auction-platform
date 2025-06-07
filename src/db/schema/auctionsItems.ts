import { text, integer, timestamp, pgEnum, pgTable } from "drizzle-orm/pg-core"
import { schema } from "./index.ts"

export const auctionItemTypeEnum = pgEnum('auction-item-type', [
    'beverage',
    'home-appliance',
    'household-item',
    'clothing',
    'eletronics',
    'mobile',
    'sound-system',
    'vehicle',
    'jewelry',
    'art',
    'several'
])

export const auctionsItems = pgTable('auctions-itens', {
    id: text().primaryKey(),
    auctionId: text().notNull().references(() => schema.auctions.id),
    batchNumber: integer().notNull(),
    name: text().notNull(),
    description: text().notNull(),
    category: auctionItemTypeEnum().notNull(),
    imageUrl: text(),
    initialValue: integer().notNull(),
    value: integer().notNull().default(0),
    unitType: text().notNull(),
    quantity: integer().notNull(),
    location: text().notNull(),
    winnerUserId: text().references(() => schema.users.id),

    ccreatedAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull()
})