import { PrismaService } from 'src/prisma.service';
export declare class AuthorService {
    private prisma;
    constructor(prisma: PrismaService);
    getBookAuthors(bookID: string): Promise<import(".prisma/client").Author[]>;
}
