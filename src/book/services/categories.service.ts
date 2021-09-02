import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  getbookCategories(bookID: string): Promise<Category[]> {
    return this.prisma.category.findMany({
      where: { books: { some: { id: bookID } } },
    });
  }
}
