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
exports.RentalType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_type_1 = require("../../auth/graphql_types/user.type");
const rental_states_enum_1 = require("../../book/enums/rental-states.enum");
const book_type_1 = require("../../book/graphql_types/book.type");
let RentalType = class RentalType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], RentalType.prototype, "id", void 0);
__decorate([
    graphql_1.Field((type) => book_type_1.BookType),
    __metadata("design:type", book_type_1.BookType)
], RentalType.prototype, "book", void 0);
__decorate([
    graphql_1.Field((type) => user_type_1.UserType),
    __metadata("design:type", user_type_1.UserType)
], RentalType.prototype, "user", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], RentalType.prototype, "state", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], RentalType.prototype, "rentalDate", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], RentalType.prototype, "devolutionDate", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], RentalType.prototype, "penaltyFee", void 0);
RentalType = __decorate([
    graphql_1.ObjectType()
], RentalType);
exports.RentalType = RentalType;
//# sourceMappingURL=rental.type.js.map