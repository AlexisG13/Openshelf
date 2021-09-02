-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "isForSale" BOOLEAN NOT NULL,
    "rating" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,
    "isbn" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
