import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserDaoService } from 'src/module/dao/userDao.service';

@Module({
  imports: [UserDaoService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
