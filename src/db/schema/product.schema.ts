import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { OrderProductTable } from './order_product.schema';
import { ProductCategoryTable } from './product_category.schema';

export const ProductTable = pgTable('product', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  price: integer('price').notNull().default(0),
  desciption: varchar('description', { length: 255 }).default('description'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

// Orm level constrains
export const ProductTableRelations = relations(ProductTable, ({ many }) => ({
  order_product: many(OrderProductTable),
  product_category: many(ProductCategoryTable),
}));
