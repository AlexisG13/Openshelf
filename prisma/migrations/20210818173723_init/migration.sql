/*
  Warnings:

  - You are about to drop the `_BookToPublisher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `publisherId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BookToPublisher" DROP CONSTRAINT "_BookToPublisher_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToPublisher" DROP CONSTRAINT "_BookToPublisher_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "publisherId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BookToPublisher";

-- AddForeignKey
ALTER TABLE "Book" ADD FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
