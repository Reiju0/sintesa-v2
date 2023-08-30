-- CreateTable
CREATE TABLE `reff_periode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periode` CHAR(4) NULL,
    `nmperiode` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
