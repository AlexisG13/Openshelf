import { AuthorType } from './author.type';
import { CategoryType } from './category.type';
import { PublisherType } from './publisher.type';
export declare class BookType {
    id: string;
    title: string;
    synopsis: string;
    quantity: number;
    isForSale: boolean;
    rating: number;
    availableQuantity: number;
    price?: number;
    publicationDate: Date;
    isbn: string;
    state?: string;
    authors: AuthorType[];
    publisher: PublisherType;
    categories: CategoryType[];
}
