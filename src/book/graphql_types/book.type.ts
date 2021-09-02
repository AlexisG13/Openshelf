import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuthorType } from './author.type';
import { CategoryType } from './category.type';
import { PublisherType } from './publisher.type';

@ObjectType()
export class BookType {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  synopsis: string;

  @Field()
  quantity: number;

  @Field()
  isForSale: boolean;

  @Field()
  rating: number;

  @Field()
  availableQuantity: number;

  @Field({ nullable: true })
  price?: number;

  @Field()
  publicationDate: Date;

  @Field()
  isbn: string;

  @Field({ nullable: true })
  state?: string;

  @Field((type) => [AuthorType])
  authors: AuthorType[];

  @Field((type) => PublisherType)
  publisher: PublisherType;

  @Field((type) => [CategoryType])
  categories: CategoryType[];
}
