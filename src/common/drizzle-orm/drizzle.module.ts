import { DynamicModule, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../db/schema/index';
import { DrizzleModuleOptions } from '../@types/interfaces';

@Module({})
export class DrizzleModule {
  static forRoot(options: DrizzleModuleOptions): DynamicModule {
    const DrizzleProvider = {
      provide: 'DRIZZLE_CLIENT',
      useFactory: () => {
        const client = postgres(options.connectionString);
        return drizzle(client, { schema, logger: true });
      },
    };

    return {
      module: DrizzleModule,
      providers: [DrizzleProvider],
      exports: [DrizzleProvider],
    };
  }
}
