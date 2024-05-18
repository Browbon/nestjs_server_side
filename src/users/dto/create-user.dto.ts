import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../Enum/role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Role, {
    message: 'Valid role required',
  })
  role: Role;
}
