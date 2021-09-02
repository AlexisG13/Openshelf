import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBookInput } from './graphql_types/create-book.type';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getBooks(): Promise<Book[] | null> {
    const books = await this.prisma.book.findMany();
    return books;
  }

  async getBook(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const { authorsIds, publisherId, categoriesIds, ...newBook } =
      createBookInput;
    const authors = await this.prisma.author.findMany({
      where: { id: { in: authorsIds } },
    });
    const publisher = await this.prisma.publisher.findUnique({
      where: { id: publisherId },
    });
    const categories = await this.prisma.category.findMany({
      where: { id: { in: categoriesIds } },
    });
    return this.prisma.book.create({
      data: {
        ...newBook,
        categories: {
          connect: categories.map((c) => {
            return { id: c.id };
          }),
        },
        publisher: { connect: { id: publisher.id } },
        authors: {
          connect: authors.map((a) => {
            return { id: a.id };
          }),
        },
      },
    });
  }
}
