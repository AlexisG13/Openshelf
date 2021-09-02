import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    BookModule,
    AuthModule,
    RentalModule,
  ],
})
export class AppModule {}
