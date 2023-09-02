/*
  Warnings:

  - You are about to alter the column `kdpemda` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.
  - You are about to alter the column `kdkppn` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(3)` to `Int`.
  - You are about to alter the column `periode` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.
  - You are about to alter the column `kdpemda` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.
  - You are about to alter the column `kdkppn` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Char(3)` to `Int`.
  - You are about to alter the column `periode` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.

*/
-- AlterTable
ALTER TABLE `potongan` MODIFY `kdpemda` INTEGER NOT NULL,
    MODIFY `kdkppn` INTEGER NOT NULL,
    MODIFY `periode` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `transaksi` MODIFY `kdpemda` INTEGER NOT NULL,
    MODIFY `kdkppn` INTEGER NOT NULL,
    MODIFY `periode` INTEGER NOT NULL;
