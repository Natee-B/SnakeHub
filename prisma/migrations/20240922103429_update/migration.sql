/*
  Warnings:

  - Added the required column `morph` to the `Snake` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `snake` ADD COLUMN `morph` VARCHAR(191) NOT NULL;
