import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/db/db.service';

@Injectable()
export class UserDaoService {
  constructor(private readonly db: DatabaseService) {}

  async findOne(id: number) {
    await const user = this.db.client().query;
  }
}
