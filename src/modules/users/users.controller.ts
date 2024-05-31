import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Role } from '../../common/@types/enums/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // POST create one user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    return this.userService.createUser(createUserDto);
  }
  // GET users
  @Get()
  findUsers(@Query('role') role?: Role): string {
    if (role) {
      return this.userService.findUsers(role);
    }
    return this.userService.findUsers();
  }

  // GET one user
  @Get(':id')
  findOneUser(@Param('id', ParseIntPipe) id: number): string {
    return this.userService.findOneUser(id);
  }

  // PATCH update one user
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): string {
    return this.userService.updateUser(updateUserDto);
  }

  // DELETE delete one user
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): string {
    return this.userService.deleteUser(id);
  }
}
