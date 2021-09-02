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
exports.BookType = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_type_1 = require("./author.type");
const category_type_1 = require("./category.type");
const publisher_type_1 = require("./publisher.type");
let BookType = class BookType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], BookType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], BookType.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], BookType.prototype, "synopsis", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], BookType.prototype, "quantity", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], BookType.prototype, "isForSale", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], BookType.prototype, "rating", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], BookType.prototype, "availableQuantity", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], BookType.prototype, "price", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], BookType.prototype, "publicationDate", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], BookType.prototype, "isbn", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], BookType.prototype, "state", void 0);
__decorate([
    graphql_1.Field((type) => [author_type_1.AuthorType]),
    __metadata("design:type", Array)
], BookType.prototype, "authors", void 0);
__decorate([
    graphql_1.Field((type) => publisher_type_1.PublisherType),
    __metadata("design:type", publisher_type_1.PublisherType)
], BookType.prototype, "publisher", void 0);
__decorate([
    graphql_1.Field((type) => [category_type_1.CategoryType]),
    __metadata("design:type", Array)
], BookType.prototype, "categories", void 0);
BookType = __decorate([
    graphql_1.ObjectType()
], BookType);
exports.BookType = BookType;
//# sourceMappingURL=book.type.js.map