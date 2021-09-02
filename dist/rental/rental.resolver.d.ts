import { Rental, User } from '@prisma/client';
import { BookService } from 'src/book/book.service';
import { CreateRentalInput } from './graphql_types/create-rental.type';
import { RentalService } from './rental.service';
export declare class RentalResolver {
    private rentalService;
    private bookService;
    constructor(rentalService: RentalService, bookService: BookService);
    createRental({ bookId }: CreateRentalInput, user: User): Promise<Rental>;
    rental(rentalId: string, user: User): Promise<Rental>;
    rentals(user: User): Promise<Rental[]>;
    book(rental: Rental): Promise<import(".prisma/client").Book>;
}
