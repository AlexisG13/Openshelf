import { Injectable } from '@nestjs/common';
import { Publisher } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PublisherService {
  constructor(private prisma: PrismaService) {}

  getPublisher(publisherID: string): Promise<Publisher> {
    return this.prisma.publisher.findUnique({ where: { id: publisherID } });
  }
}
