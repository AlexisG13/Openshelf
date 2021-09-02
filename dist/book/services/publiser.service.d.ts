import { Publisher } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class PublisherService {
    private prisma;
    constructor(prisma: PrismaService);
    getPublisher(publisherID: string): Promise<Publisher>;
}
