import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { AuthorService } from './services/author.service';
import { CategoriesService } from './services/categories.service';
import { PublisherService } from './services/publiser.service';

@Module({
  providers: [
    BookService,
    PrismaService,
    BookResolver,
    AuthorService,
    PublisherService,
    CategoriesService,
  ],
  imports: [AuthModule],
  exports: [BookService],
})
export class BookModule {}
