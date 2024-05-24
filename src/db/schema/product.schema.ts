import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { CategoryTable } from './category.schema';

export const ProductTable = pgTable('product', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: integer('price').notNull().default(0),
  desciption: varchar('description', { length: 255 }).default('description'),
  categoryId: integer('category_id')
    .references(() => CategoryTable.id)
    .notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
