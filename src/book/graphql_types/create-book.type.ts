import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  synopsis: string;

  @Field()
  quantity: number;

  @Field()
  isForSale: boolean;

  @Field()
  availableQuantity: number;

  @Field()
  price?: number;

  @Field()
  publicationDate: Date;

  @Field()
  isbn: string;

  @Field((type) => [ID])
  authorsIds: string[];

  @Field((type) => ID)
  publisherId: string;

  @Field((type) => [ID])
  categoriesIds: string[];
}
