import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const UserTable = pgTable('user', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  refreshToken: varchar('refreshToken', { length: 255 }).unique().notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});
