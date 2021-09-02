import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BookModule } from 'src/book/book.module';
import { PrismaService } from 'src/prisma.service';
import { RentalResolver } from './rental.resolver';
import { RentalService } from './rental.service';

@Module({
  providers: [RentalService, PrismaService, RentalResolver],
  imports: [BookModule, AuthModule],
})
export class RentalModule {}
