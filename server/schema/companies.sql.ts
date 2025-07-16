import type { z } from 'zod'
import { relations } from 'drizzle-orm'
import { pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { offers } from './offers.sql'

export const companies = pgTable('companies', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  website: text().notNull(),
  logo: text().notNull(),
})

export const companiesRelations = relations(companies, ({ many }) => ({
  offers: many(offers),
}))

export const selectCompanySchema = createSelectSchema(companies)
export const insertCompanySchema = createInsertSchema(companies)

export type Company = z.infer<typeof selectCompanySchema>
export type NewCompany = z.infer<typeof insertCompanySchema>
