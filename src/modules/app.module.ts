import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from 'src/common/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
})
export class AppModule {}
