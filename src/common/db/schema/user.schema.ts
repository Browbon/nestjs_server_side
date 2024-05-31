import { relations } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { OrderTable } from './order.schema';
import { baseSchema } from './base.schema';

export const UserTable = pgTable('user', {
  ...baseSchema,
  username: varchar('username', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  refreshToken: varchar('refreshToken', { length: 255 }).unique().notNull(),
});

export const UserTableRelations = relations(UserTable, ({ many }) => ({
  order: many(OrderTable),
}));
