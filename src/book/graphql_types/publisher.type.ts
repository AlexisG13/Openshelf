import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BookType } from './book.type';

@ObjectType()
export class PublisherType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field((type) => [BookType])
  books: BookType[];
}
