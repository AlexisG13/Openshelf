import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BookType } from './book.type';

@ObjectType()
export class AuthorType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  biography: string;

  @Field((type) => [BookType])
  books: BookType[];
}
