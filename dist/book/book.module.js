"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../app.module");
const auth_module_1 = require("../auth/auth.module");
const prisma_service_1 = require("../prisma.service");
const book_resolver_1 = require("./book.resolver");
const book_service_1 = require("./book.service");
const author_service_1 = require("./services/author.service");
const categories_service_1 = require("./services/categories.service");
const publiser_service_1 = require("./services/publiser.service");
let BookModule = class BookModule {
};
BookModule = __decorate([
    common_1.Module({
        providers: [
            book_service_1.BookService,
            prisma_service_1.PrismaService,
            book_resolver_1.BookResolver,
            author_service_1.AuthorService,
            publiser_service_1.PublisherService,
            categories_service_1.CategoriesService,
        ],
        imports: [auth_module_1.AuthModule],
        exports: [book_service_1.BookService],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map