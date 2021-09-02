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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const ctx_user_decorator_1 = require("../auth/decorators/ctx-user.decorator");
const user_type_1 = require("../auth/graphql_types/user.type");
const gql_auth_guard_1 = require("../auth/guards/gql-auth.guard");
const book_service_1 = require("../book/book.service");
const book_type_1 = require("../book/graphql_types/book.type");
const create_rental_type_1 = require("./graphql_types/create-rental.type");
const rental_type_1 = require("./graphql_types/rental.type");
const rental_service_1 = require("./rental.service");
let RentalResolver = class RentalResolver {
    constructor(rentalService, bookService) {
        this.rentalService = rentalService;
        this.bookService = bookService;
    }
    createRental({ bookId }, user) {
        return this.rentalService.createRental(user.id, bookId);
    }
    rental(rentalId, user) {
        return this.rentalService.getRental(rentalId, user.id);
    }
    rentals(user) {
        return this.rentalService.getUserRentals(user.id);
    }
    book(rental) {
        return this.bookService.getBook(rental.bookId);
    }
};
__decorate([
    graphql_1.Mutation((returns) => rental_type_1.RentalType),
    common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('createRentalInput')),
    __param(1, ctx_user_decorator_1.CtxUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rental_type_1.CreateRentalInput, Object]),
    __metadata("design:returntype", void 0)
], RentalResolver.prototype, "createRental", null);
__decorate([
    graphql_1.Query((returns) => rental_type_1.RentalType),
    common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('rentalId')),
    __param(1, ctx_user_decorator_1.CtxUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RentalResolver.prototype, "rental", null);
__decorate([
    graphql_1.Query((returns) => [rental_type_1.RentalType]),
    common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard),
    __param(0, ctx_user_decorator_1.CtxUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RentalResolver.prototype, "rentals", null);
__decorate([
    graphql_1.ResolveField((type) => book_type_1.BookType),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RentalResolver.prototype, "book", null);
RentalResolver = __decorate([
    graphql_1.Resolver((of) => rental_type_1.RentalType),
    __metadata("design:paramtypes", [rental_service_1.RentalService,
        book_service_1.BookService])
], RentalResolver);
exports.RentalResolver = RentalResolver;
//# sourceMappingURL=rental.resolver.js.map