import { Module } from '@nestjs/common';
import { UserDaoService } from './userDao.service';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserDaoService],
  exports: [UserDaoService],
})
export class DaoModule {}
