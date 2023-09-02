/*
  Warnings:

  - You are about to alter the column `alokasi_periode` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Char(18)` to `Int`.

*/
-- AlterTable
ALTER TABLE `transaksi` MODIFY `alokasi_periode` INTEGER NOT NULL;
