import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BookType } from './book.type';

@ObjectType()
export class CategoryType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [BookType])
  books: BookType[];
}
