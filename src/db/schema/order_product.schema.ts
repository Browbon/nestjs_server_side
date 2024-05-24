import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { OrderTable } from './order.schema';
import { ProductTable } from './product.schema';

export const OrderProdctTable = pgTable('order_product', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id')
    .references(() => OrderTable.id)
    .notNull(),
  productId: integer('product_id')
    .references(() => ProductTable.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
