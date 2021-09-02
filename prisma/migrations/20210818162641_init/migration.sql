/*
  Warnings:

  - You are about to drop the column `email` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `UserAuth` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "email",
DROP COLUMN "password";

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_userId_unique" ON "UserAuth"("userId");
