-- CreateTable

CREATE TABLE
    `alokasi_dbh` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `thang` CHAR(4) NOT NULL,
        `kdpemda` CHAR(4) NOT NULL,
        `nmpemda` VARCHAR(255) NOT NULL,
        `kdkppn` CHAR(3) NOT NULL,
        `nmkppn` VARCHAR(255) NOT NULL,
        `dbhcht` DECIMAL(10, 0) NOT NULL,
        `dbhpajak` DECIMAL(10, 0) NOT NULL,
        `dbhsda` DECIMAL(10, 0) NOT NULL,
        `total_alokasi` DECIMAL(10, 0) NOT NULL,

PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `transaksi` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `thang` CHAR(4) NOT NULL,
        `kdpemda` CHAR(4) NOT NULL,
        `nmpemda` VARCHAR(255) NOT NULL,
        `kdkppn` CHAR(3) NOT NULL,
        `nmkppn` VARCHAR(255) NOT NULL,
        `kdjenis` CHAR(4) NULL,
        `nmjenis` VARCHAR(255) NULL,
        `periode` CHAR(4) NOT NULL,
        `nmperiode` VARCHAR(255) NOT NULL,
        `alokasi_periode` DECIMAL(18, 0) NOT NULL,
        `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` DATETIME(0) NULL,

UNIQUE INDEX `transaksi_kdpemda_kdkppn_periode_key`(`kdpemda`, `kdkppn`, `periode`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `potongan` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `thang` CHAR(4) NOT NULL,
        `kdpemda` CHAR(4) NOT NULL,
        `nmpemda` VARCHAR(255) NOT NULL,
        `kdkppn` CHAR(3) NOT NULL,
        `nmkppn` VARCHAR(255) NOT NULL,
        `kdjenis` CHAR(4) NULL,
        `nmjenis` VARCHAR(255) NULL,
        `periode` CHAR(4) NOT NULL,
        `nmperiode` VARCHAR(255) NOT NULL,
        `potongan` DECIMAL(18, 0) NOT NULL,
        `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
        `updatedAt` DATETIME(0) NULL,
        `KDAKUN` CHAR(6) NOT NULL,

INDEX `potongan_kdpemda_kdkppn_periode_idx`(`kdpemda`, `kdkppn`, `periode`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;