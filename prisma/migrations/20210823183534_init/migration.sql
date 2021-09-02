/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserAuth.email_unique" ON "UserAuth"("email");
