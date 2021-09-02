import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Rental } from '@prisma/client';
import { BookService } from 'src/book/book.service';
import { RentalStates } from 'src/book/enums/rental-states.enum';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RentalService {
  constructor(
    private prisma: PrismaService,
    private bookService: BookService,
  ) {}

  async getRental(rentalId: string, userId: string): Promise<Rental> {
    const rentalResult = await this.prisma.rental.findFirst({
      where: { id: rentalId, userId },
    });
    if (!rentalResult) {
      throw new NotFoundException('Rental not found');
    }
    return rentalResult;
  }

  async getUserRentals(userId: string): Promise<Rental[]> {
    const rentalsResult = await this.prisma.rental.findMany({
      where: { userId },
    });
    if (rentalsResult.length === 0) {
      throw new NotFoundException('The user has no rentals');
    }
    return rentalsResult;
  }

  private async verifyRental(userId: string, bookId: string): Promise<boolean> {
    const userRentals = await this.prisma.rental.findMany({
      where: { userId },
    });
    if (userRentals.length > 3) {
      throw new BadRequestException(`User can't create more rentals`);
    }
    const book = await this.bookService.getBook(bookId);
    if (book.availableQuantity === 0) {
      throw new BadRequestException('No book copies are available for rental');
    }
    return true;
  }

  async createRental(userId: string, bookId: string): Promise<Rental> {
    if (!this.verifyRental(userId, bookId)) {
      throw new BadRequestException(`User can't create a rental for this book`);
    }
    const devolutionDate = new Date();
    devolutionDate.setDate(new Date().getDate() + 21);
    const [book, rental] = await this.prisma.$transaction([
      this.prisma.book.update({
        where: { id: bookId },
        data: { availableQuantity: { decrement: 1 } },
      }),

      this.prisma.rental.create({
        data: {
          bookId,
          userId,
          rentalDate: new Date(),
          devolutionDate,
          state: RentalStates.OPEN,
        },
      }),
    ]);
    return rental;
  }
}
