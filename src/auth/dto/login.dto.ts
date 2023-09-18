import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please Enter Valid Email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
