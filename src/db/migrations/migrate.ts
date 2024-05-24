import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';

const mirgateClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

async function migrateRun() {
  await migrate(drizzle(mirgateClient), {
    migrationsFolder: './src/db/migrations',
  });

  await mirgateClient.end();
}

migrateRun();
