import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async getBookAuthors(bookID: string) {
    return this.prisma.author.findMany({
      where: { books: { some: { id: bookID } } },
    });
  }
}
