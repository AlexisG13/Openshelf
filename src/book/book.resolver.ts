import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Book } from '@prisma/client';
import { BookService } from './book.service';
import { AuthorType } from './graphql_types/author.type';
import { BookType } from './graphql_types/book.type';
import { CreateBookInput } from './graphql_types/create-book.type';
import { PublisherType } from './graphql_types/publisher.type';
import { AuthorService } from './services/author.service';
import { CategoriesService } from './services/categories.service';
import { PublisherService } from './services/publiser.service';

@Resolver((of) => BookType)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private autorsService: AuthorService,
    private publisherService: PublisherService,
    private categoriesService: CategoriesService,
  ) {}

  @Query((returns) => BookType)
  book(@Args('id') bookId: string) {
    return this.bookService.getBook(bookId);
  }

  @Query((returns) => [BookType])
  books() {
    return this.bookService.getBooks();
  }

  @ResolveField((type) => [AuthorType])
  authors(@Parent() book: Book) {
    return this.autorsService.getBookAuthors(book.id);
  }

  @ResolveField((type) => PublisherType)
  publisher(@Parent() book: Book) {
    return this.publisherService.getPublisher(book.publisherId);
  }

  @ResolveField((type) => [CategoriesService])
  categories(@Parent() book: Book) {
    return this.categoriesService.getbookCategories(book.id);
  }

  @Mutation((returns) => BookType)
  createBook(@Args('CreateBookInput') newBook: CreateBookInput) {
    return this.bookService.createBook(newBook);
  }
}
