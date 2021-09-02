import { UserType } from 'src/auth/graphql_types/user.type';
import { RentalStates } from 'src/book/enums/rental-states.enum';
import { BookType } from 'src/book/graphql_types/book.type';
export declare class RentalType {
    id: string;
    book: BookType;
    user: UserType;
    state: RentalStates;
    rentalDate: Date;
    devolutionDate: Date;
    penaltyFee?: number;
}
