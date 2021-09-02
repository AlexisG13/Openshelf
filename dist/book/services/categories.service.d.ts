import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    getbookCategories(bookID: string): Promise<Category[]>;
}
