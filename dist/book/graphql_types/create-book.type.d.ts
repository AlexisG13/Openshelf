export declare class CreateBookInput {
    title: string;
    synopsis: string;
    quantity: number;
    isForSale: boolean;
    availableQuantity: number;
    price?: number;
    publicationDate: Date;
    isbn: string;
    authorsIds: string[];
    publisherId: string;
    categoriesIds: string[];
}
