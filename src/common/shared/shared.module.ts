import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { DrizzleModule } from '../drizzle-orm/drizzle.module';

@Module({
  imports: [
    UsersModule,
    DrizzleModule.forRoot({
      connectionString: process.env.DATABASE_URL as string,
    }),
  ],
})
export class SharedModule {}
