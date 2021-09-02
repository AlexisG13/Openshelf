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
exports.CreateBookInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateBookInput = class CreateBookInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "synopsis", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "quantity", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], CreateBookInput.prototype, "isForSale", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "availableQuantity", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], CreateBookInput.prototype, "publicationDate", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateBookInput.prototype, "isbn", void 0);
__decorate([
    graphql_1.Field((type) => [graphql_1.ID]),
    __metadata("design:type", Array)
], CreateBookInput.prototype, "authorsIds", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], CreateBookInput.prototype, "publisherId", void 0);
__decorate([
    graphql_1.Field((type) => [graphql_1.ID]),
    __metadata("design:type", Array)
], CreateBookInput.prototype, "categoriesIds", void 0);
CreateBookInput = __decorate([
    graphql_1.InputType()
], CreateBookInput);
exports.CreateBookInput = CreateBookInput;
//# sourceMappingURL=create-book.type.js.map