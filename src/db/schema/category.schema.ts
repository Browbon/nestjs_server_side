import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const CategoryTable = pgTable('category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
