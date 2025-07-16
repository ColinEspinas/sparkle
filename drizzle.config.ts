import process from 'node:process'
import { defineConfig } from 'drizzle-kit'
import '@dotenvx/dotenvx/config'

export default defineConfig({
  schema: './server/schema/*.sql.ts',
  out: './.drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL || '',
  },
})
