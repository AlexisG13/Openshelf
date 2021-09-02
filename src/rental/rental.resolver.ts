import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Rental, User } from '@prisma/client';
import { CtxUser } from 'src/auth/decorators/ctx-user.decorator';
import { UserType } from 'src/auth/graphql_types/user.type';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { BookService } from 'src/book/book.service';
import { BookType } from 'src/book/graphql_types/book.type';
import { CreateRentalInput } from './graphql_types/create-rental.type';
import { RentalType } from './graphql_types/rental.type';
import { RentalService } from './rental.service';

@Resolver((of) => RentalType)
export class RentalResolver {
  constructor(
    private rentalService: RentalService,
    private bookService: BookService,
  ) {}

  @Mutation((returns) => RentalType)
  @UseGuards(GqlAuthGuard)
  createRental(
    @Args('createRentalInput') { bookId }: CreateRentalInput,
    @CtxUser() user: User,
  ) {
    return this.rentalService.createRental(user.id, bookId);
  }

  @Query((returns) => RentalType)
  @UseGuards(GqlAuthGuard)
  rental(@Args('rentalId') rentalId: string, @CtxUser() user: User) {
    return this.rentalService.getRental(rentalId, user.id);
  }

  @Query((returns) => [RentalType])
  @UseGuards(GqlAuthGuard)
  rentals(@CtxUser() user: User) {
    return this.rentalService.getUserRentals(user.id);
  }

  @ResolveField((type) => BookType)
  book(@Parent() rental: Rental) {
    return this.bookService.getBook(rental.bookId);
  }
}
