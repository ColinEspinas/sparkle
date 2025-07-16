import type { z } from 'zod'
import { pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { companies } from './companies.sql'

export const offers = pgTable('offers', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text().notNull(),
  companyId: uuid().notNull(),
})

export const offersRelations = relations(offers, ({ one }) => ({
  company: one(companies, {
    fields: [offers.companyId],
    references: [companies.id],
  }),
}))

export const selectOfferSchema = createSelectSchema(offers)
export const insertOfferSchema = createInsertSchema(offers)

export type Offer = z.infer<typeof selectOfferSchema>
export type NewOffer = z.infer<typeof insertOfferSchema>
