import { Rental } from '@prisma/client';
import { BookService } from 'src/book/book.service';
import { PrismaService } from 'src/prisma.service';
export declare class RentalService {
    private prisma;
    private bookService;
    constructor(prisma: PrismaService, bookService: BookService);
    getRental(rentalId: string, userId: string): Promise<Rental>;
    getUserRentals(userId: string): Promise<Rental[]>;
    private verifyRental;
    createRental(userId: string, bookId: string): Promise<Rental>;
}
