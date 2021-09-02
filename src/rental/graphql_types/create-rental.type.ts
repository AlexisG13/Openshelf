import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRentalInput {
  @Field((type) => ID)
  bookId: string;
}
