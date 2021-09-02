import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/auth/graphql_types/user.type';
import { RentalStates } from 'src/book/enums/rental-states.enum';
import { BookType } from 'src/book/graphql_types/book.type';

@ObjectType()
export class RentalType {
  @Field((type) => ID)
  id: string;

  @Field((type) => BookType)
  book: BookType;

  @Field((type) => UserType)
  user: UserType;

  @Field()
  state: RentalStates;

  @Field()
  rentalDate: Date;

  @Field()
  devolutionDate: Date;

  @Field()
  penaltyFee?: number;
}
