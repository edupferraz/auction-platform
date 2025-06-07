import { schema } from './index.ts' 
import { text, date, timestamp, integer, pgEnum, pgTable,  } from "drizzle-orm/pg-core";

export const auctionTypeEnum = pgEnum('auction-type', [
    'buy',
    'sale'
])


export const auctionStatusEnum = pgEnum('auction-status', [
    'waiting', 
    'ongoing', 
    'finished', 
    'canceled'
])

export const auctions = pgTable('auctions', {
    id: text().primaryKey(),
    startDate: date().notNull(),
    finishDate: date().notNull(),
    type: auctionTypeEnum().notNull(),
    status: auctionStatusEnum().notNull().default('waiting'),
    createdAt: timestamp().defaultNow().notNull(),
})


