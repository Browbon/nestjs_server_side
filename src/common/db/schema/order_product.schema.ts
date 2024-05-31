import { integer, pgTable } from 'drizzle-orm/pg-core';
import { OrderTable } from './order.schema';
import { ProductTable } from './product.schema';
import { relations } from 'drizzle-orm';
import { baseSchema } from './base.schema';

export const OrderProductTable = pgTable('order_product', {
  ...baseSchema,
  order_id: integer('order_id')
    .references(() => OrderTable.id)
    .notNull(),
  product_id: integer('product_id')
    .references(() => ProductTable.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
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
