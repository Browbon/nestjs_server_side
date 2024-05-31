import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { OrderTable } from './order.schema';
import { ProductTable } from './product.schema';
import { relations } from 'drizzle-orm';

export const OrderProductTable = pgTable('order_product', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id')
    .references(() => OrderTable.id)
    .notNull(),
  product_id: integer('product_id')
    .references(() => ProductTable.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const OrderProductTableRelations = relations(
  OrderProductTable,
  ({ one }) => ({
    order: one(OrderTable, {
      fields: [OrderProductTable.order_id],
      references: [OrderTable.id],
    }),
    product: one(ProductTable, {
      fields: [OrderProductTable.product_id],
      references: [ProductTable.id],
    }),
  }),
);
