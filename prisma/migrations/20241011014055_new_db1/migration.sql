/*
  Warnings:

  - You are about to drop the column `userId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `morph` on the `snake` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `snake` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `morphId` to the `Snake` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_userId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `userId`,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `img` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `snake` DROP COLUMN `morph`,
    DROP COLUMN `name`,
    ADD COLUMN `age` VARCHAR(191) NULL,
    ADD COLUMN `birthdate` VARCHAR(191) NULL,
    ADD COLUMN `feed` VARCHAR(191) NULL,
    ADD COLUMN `morphId` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Morph` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `Morph_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- AddForeignKey
ALTER TABLE `Snake` ADD CONSTRAINT `Snake_morphId_fkey` FOREIGN KEY (`morphId`) REFERENCES `Morph`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Morph` ADD CONSTRAINT `Morph_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
