import { RentalType } from 'src/rental/graphql_types/rental.type';
export declare class UserType {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    rentals: RentalType[];
}
