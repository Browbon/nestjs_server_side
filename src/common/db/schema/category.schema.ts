import { relations } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { ProductCategoryTable } from './product_category.schema';
import { baseSchema } from './base.schema';

export const CategoryTable = pgTable('category', {
  ...baseSchema,
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
});

export const CategoryTableRelations = relations(CategoryTable, ({ many }) => ({
  product_category: many(ProductCategoryTable),
}));
