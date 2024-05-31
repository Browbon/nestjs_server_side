import { Injectable } from '@nestjs/common';
import { Role } from '../../common/@types/enums/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDaoService } from 'src/module/dao/userDao.service';

@Injectable()
export class UsersService {
  constructor(private readonly userDaoService: UserDaoService) {}

  createUser(createUserDto: CreateUserDto) {
    return `new user created with username: ${createUserDto.username},
    email: ${createUserDto.email}, role: ${createUserDto.role}`;
  }

  findOneUser(id: number) {
    const user: unknown = 0;
    if (user) return `this is a finded user`;
    return `can not find any user`;
  }

  findUsers(role?: Role) {
    if (role) return `this is a ${role} user response`;
    return `this is a all user response`;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return `this user updated with ${updateUserDto}`;
  }

  deleteUser(id: number) {
    const user: unknown = 1;
    if (user) return `user with id: ${id} deleted`;
    return `user with id: ${id} unexist`;
  }
}
