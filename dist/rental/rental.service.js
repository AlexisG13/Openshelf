"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("../book/book.service");
const rental_states_enum_1 = require("../book/enums/rental-states.enum");
const prisma_service_1 = require("../prisma.service");
let RentalService = class RentalService {
    constructor(prisma, bookService) {
        this.prisma = prisma;
        this.bookService = bookService;
    }
    async getRental(rentalId, userId) {
        const rentalResult = await this.prisma.rental.findFirst({
            where: { id: rentalId, userId },
        });
        if (!rentalResult) {
            throw new common_1.NotFoundException('Rental not found');
        }
        return rentalResult;
    }
    async getUserRentals(userId) {
        const rentalsResult = await this.prisma.rental.findMany({
            where: { userId },
        });
        if (rentalsResult.length === 0) {
            throw new common_1.NotFoundException('The user has no rentals');
        }
        return rentalsResult;
    }
    async verifyRental(userId, bookId) {
        const userRentals = await this.prisma.rental.findMany({
            where: { userId },
        });
        if (userRentals.length > 3) {
            throw new common_1.BadRequestException(`User can't create more rentals`);
        }
        const book = await this.bookService.getBook(bookId);
        if (book.availableQuantity === 0) {
            throw new common_1.BadRequestException('No book copies are available for rental');
        }
        return true;
    }
    async createRental(userId, bookId) {
        if (!this.verifyRental(userId, bookId)) {
            throw new common_1.BadRequestException(`User can't create a rental for this book`);
        }
        const devolutionDate = new Date();
        devolutionDate.setDate(new Date().getDate() + 21);
        const [book, rental] = await this.prisma.$transaction([
            this.prisma.book.update({
                where: { id: bookId },
                data: { availableQuantity: { decrement: 1 } },
            }),
            this.prisma.rental.create({
                data: {
                    bookId,
                    userId,
                    rentalDate: new Date(),
                    devolutionDate,
                    state: rental_states_enum_1.RentalStates.OPEN,
                },
            }),
        ]);
        return rental;
    }
};
RentalService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        book_service_1.BookService])
], RentalService);
exports.RentalService = RentalService;
//# sourceMappingURL=rental.service.js.map