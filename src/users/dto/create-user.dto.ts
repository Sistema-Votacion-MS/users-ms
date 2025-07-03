import { IsEmail, IsEnum, IsNotEmpty, Length } from 'class-validator';
export enum RoleEnum {
  VOTER = 'VOTER',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @Length(8, 8)
  dni: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEnum(RoleEnum)
  role: RoleEnum;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
