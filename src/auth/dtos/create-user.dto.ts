import { InputType } from '@nestjs/graphql';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  address: string;
  phone: string;
}
