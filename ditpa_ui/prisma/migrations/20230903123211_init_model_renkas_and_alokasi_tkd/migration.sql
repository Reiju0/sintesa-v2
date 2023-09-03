-- CreateTable
CREATE TABLE `Alokasi_tkd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdsatker` CHAR(6) NOT NULL,
    `kdkppn` CHAR(3) NOT NULL,
    `nmkppn` VARCHAR(255) NOT NULL,
    `kdjenis` CHAR(4) NOT NULL,
    `nmjenis` CHAR(128) NOT NULL,
    `periode` CHAR(2) NOT NULL,
    `nmperiode` CHAR(128) NOT NULL,
    `alokasi_periode` DECIMAL(18, 2) NOT NULL,
    `alokasi_total` DECIMAL(18, 2) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    UNIQUE INDEX `Alokasi_tkd_kdsatker_kdkppn_kdjenis_periode_key`(`kdsatker`, `kdkppn`, `kdjenis`, `periode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Renkas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kdsatker` CHAR(6) NOT NULL,
    `kdkppn` CHAR(3) NOT NULL,
    `kdjenis` CHAR(4) NOT NULL,
    `periode` CHAR(2) NOT NULL,
    `nilai_renkas` DECIMAL(18, 2) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    INDEX `Renkas_kdsatker_kdkppn_kdjenis_periode_idx`(`kdsatker`, `kdkppn`, `kdjenis`, `periode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
