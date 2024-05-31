import { boolean, serial, timestamp, uuid } from 'drizzle-orm/pg-core';

export const baseSchema = {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid').defaultRandom().notNull(),
  isDelete: boolean('isDelete').default(false),
  deleteAt: timestamp('deteleAt'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
};
