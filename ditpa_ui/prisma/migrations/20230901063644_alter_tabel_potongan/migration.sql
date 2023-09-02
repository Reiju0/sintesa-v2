/*
  Warnings:

  - You are about to alter the column `thang` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.
  - You are about to alter the column `thang` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Char(4)` to `Int`.

*/
-- AlterTable
ALTER TABLE `potongan` MODIFY `thang` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `transaksi` MODIFY `thang` INTEGER NOT NULL;
