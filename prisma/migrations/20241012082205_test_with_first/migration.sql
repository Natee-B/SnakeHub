/*
  Warnings:

  - You are about to alter the column `age` on the `snake` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `birthdate` on the `snake` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `img` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `content` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `snake` ADD COLUMN `price` INTEGER NULL,
    MODIFY `img` VARCHAR(191) NULL,
    MODIFY `age` INTEGER NULL,
    MODIFY `birthdate` DATETIME(3) NULL;
