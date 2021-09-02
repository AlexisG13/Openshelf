import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBookInput } from './graphql_types/create-book.type';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    getBooks(): Promise<Book[] | null>;
    getBook(id: string): Promise<Book | null>;
    createBook(createBookInput: CreateBookInput): Promise<Book>;
}
