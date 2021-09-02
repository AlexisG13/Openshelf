import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RentalType } from 'src/rental/graphql_types/rental.type';

@ObjectType()
export class UserType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field((type) => [RentalType])
  rentals: RentalType[];
}
