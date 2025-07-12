import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export function useDatabase(): PostgresJsDatabase {
  const { dbUrl } = useRuntimeConfig()
  const sql = neon(dbUrl);
  return drizzle({ client: sql });
}
