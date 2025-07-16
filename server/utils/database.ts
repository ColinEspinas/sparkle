import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

export function useDatabase() {
  const { databaseUrl } = useRuntimeConfig()
  const sql = neon(databaseUrl)
  return drizzle({ client: sql })
}
