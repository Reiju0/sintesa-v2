-- CreateTable
CREATE TABLE `reff_akun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdakun` CHAR(6) NOT NULL,
    `nmakun` VARCHAR(255) NOT NULL,
    `kdsatker` CHAR(6) NULL,
    `nmsatker` VARCHAR(255) NULL,
    `kdlokasi_potong` CHAR(4) NULL,
    `nmlokasi_potong` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
