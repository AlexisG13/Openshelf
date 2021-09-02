/*
  Warnings:

  - Added the required column `devolutionDate` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentalDate` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "devolutionDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "penaltyFee" DOUBLE PRECISION,
ADD COLUMN     "rentalDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
