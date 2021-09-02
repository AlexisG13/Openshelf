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
exports.AuthorType = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_type_1 = require("./book.type");
let AuthorType = class AuthorType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], AuthorType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthorType.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthorType.prototype, "biography", void 0);
__decorate([
    graphql_1.Field((type) => [book_type_1.BookType]),
    __metadata("design:type", Array)
], AuthorType.prototype, "books", void 0);
AuthorType = __decorate([
    graphql_1.ObjectType()
], AuthorType);
exports.AuthorType = AuthorType;
//# sourceMappingURL=author.type.js.map