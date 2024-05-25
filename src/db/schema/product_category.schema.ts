import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { ProductTable } from './product.schema';
import { CategoryTable } from './category.schema';
import { relations } from 'drizzle-orm';

export const ProductCategoryTable = pgTable('product_category', {
  id: serial('id').primaryKey(),
  product_id: integer('product_id')
    .notNull()
    .references(() => ProductTable.id),
  category_id: integer('category_id')
    .notNull()
    .references(() => CategoryTable.id),
});

export const ProductCategoryTableRelations = relations(
  ProductCategoryTable,
  ({ one }) => ({
    product: one(ProductTable, {
      fields: [ProductCategoryTable.product_id],
      references: [ProductTable.id],
    }),
    order: one(CategoryTable, {
      fields: [ProductCategoryTable.category_id],
      references: [CategoryTable.id],
    }),
  }),
);
