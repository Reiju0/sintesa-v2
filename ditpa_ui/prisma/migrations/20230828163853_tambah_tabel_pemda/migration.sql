-- CreateTable
CREATE TABLE `t_kppn_lok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdkabkota` CHAR(4) NULL,
    `nmkabkota` CHAR(150) NULL,
    `kdkppn` CHAR(3) NULL,
    `nmkppn` CHAR(150) NULL,
    `kdkanwil` CHAR(2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
