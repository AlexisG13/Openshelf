-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "synopsis" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL;