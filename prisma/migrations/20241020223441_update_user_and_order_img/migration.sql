-- AlterTable
ALTER TABLE `order` ADD COLUMN `img` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `address1` VARCHAR(191) NULL,
    ADD COLUMN `address2` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `firstName` VARCHAR(191) NULL,
    ADD COLUMN `lastName` VARCHAR(191) NULL,
    ADD COLUMN `phoneNumber` INTEGER NULL,
    ADD COLUMN `zipCode` INTEGER NULL;