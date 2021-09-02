/*
  Warnings:

  - Added the required column `email` to the `UserAuth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
