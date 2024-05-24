import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { UserTable } from './user.schema';

export const OrderTable = pgTable('order', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => UserTable.id),
  price: integer('price').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
