import { Module } from '@nestjs/common';
import { UserDaoService } from './userDao.service';

@Module({
  providers: [UserDaoService],
  exports: [UserDaoService],
})
export class DaoModule {}
