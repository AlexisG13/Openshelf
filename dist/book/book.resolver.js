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
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_service_1 = require("./book.service");
const author_type_1 = require("./graphql_types/author.type");
const book_type_1 = require("./graphql_types/book.type");
const create_book_type_1 = require("./graphql_types/create-book.type");
const publisher_type_1 = require("./graphql_types/publisher.type");
const author_service_1 = require("./services/author.service");
const categories_service_1 = require("./services/categories.service");
const publiser_service_1 = require("./services/publiser.service");
let BookResolver = class BookResolver {
    constructor(bookService, autorsService, publisherService, categoriesService) {
        this.bookService = bookService;
        this.autorsService = autorsService;
        this.publisherService = publisherService;
        this.categoriesService = categoriesService;
    }
    book(bookId) {
        return this.bookService.getBook(bookId);
    }
    books() {
        return this.bookService.getBooks();
    }
    authors(book) {
        return this.autorsService.getBookAuthors(book.id);
    }
    publisher(book) {
        return this.publisherService.getPublisher(book.publisherId);
    }
    categories(book) {
        return this.categoriesService.getbookCategories(book.id);
    }
    createBook(newBook) {
        return this.bookService.createBook(newBook);
    }
};
__decorate([
    graphql_1.Query((returns) => book_type_1.BookType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "book", null);
__decorate([
    graphql_1.Query((returns) => [book_type_1.BookType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "books", null);
__decorate([
    graphql_1.ResolveField((type) => [author_type_1.AuthorType]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "authors", null);
__decorate([
    graphql_1.ResolveField((type) => publisher_type_1.PublisherType),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "publisher", null);
__decorate([
    graphql_1.ResolveField((type) => [categories_service_1.CategoriesService]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "categories", null);
__decorate([
    graphql_1.Mutation((returns) => book_type_1.BookType),
    __param(0, graphql_1.Args('CreateBookInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_type_1.CreateBookInput]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "createBook", null);
BookResolver = __decorate([
    graphql_1.Resolver((of) => book_type_1.BookType),
    __metadata("design:paramtypes", [book_service_1.BookService,
        author_service_1.AuthorService,
        publiser_service_1.PublisherService,
        categories_service_1.CategoriesService])
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.resolver.js.map