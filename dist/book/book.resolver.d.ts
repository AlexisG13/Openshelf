import { Book } from '@prisma/client';
import { BookService } from './book.service';
import { CreateBookInput } from './graphql_types/create-book.type';
import { AuthorService } from './services/author.service';
import { CategoriesService } from './services/categories.service';
import { PublisherService } from './services/publiser.service';
export declare class BookResolver {
    private bookService;
    private autorsService;
    private publisherService;
    private categoriesService;
    constructor(bookService: BookService, autorsService: AuthorService, publisherService: PublisherService, categoriesService: CategoriesService);
    book(bookId: string): Promise<Book>;
    books(): Promise<Book[]>;
    authors(book: Book): Promise<import(".prisma/client").Author[]>;
    publisher(book: Book): Promise<import(".prisma/client").Publisher>;
    categories(book: Book): Promise<import(".prisma/client").Category[]>;
    createBook(newBook: CreateBookInput): Promise<Book>;
}
