import { Injectable } from '@nestjs/common';
import postgres from 'postgres';
import * as schema from '../db/schema/index';
import { drizzle } from 'drizzle-orm/postgres-js';

@Injectable()
export class DatabaseService {
  client() {
    const client = postgres(process.env.DATABASE_URL as string);
    const db = drizzle(client, { schema, logger: true });
    return db;
  }
}
