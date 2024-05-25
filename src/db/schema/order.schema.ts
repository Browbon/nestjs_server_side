import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { UserTable } from './user.schema';
import { relations } from 'drizzle-orm';
import { OrderProductTable } from './order_product.schema';

export const OrderTable = pgTable('order', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    // Database level constrains
    .references(() => UserTable.id)
    .notNull(),
  price: integer('price').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

// Orm level constrains
export const OrderTableRelations = relations(OrderTable, ({ one, many }) => ({
  // One to many relationship, the table which has foreign key must declare extra references
  user: one(UserTable, {
    fields: [OrderTable.user_id],
    references: [UserTable.id],
  }),
  order_product: many(OrderProductTable),
}));
