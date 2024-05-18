import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DaoModule } from './dao/dao.module';
import { UserDaoService } from './dao/userDao.service';

@Module({
  imports: [UsersModule, DaoModule],
  controllers: [AppController],
  providers: [AppService, UserDaoService],
})
export class AppModule {}
