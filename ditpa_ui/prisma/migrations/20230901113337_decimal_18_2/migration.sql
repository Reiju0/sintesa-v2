/*
  Warnings:

  - You are about to alter the column `potongan` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `alokasi_periode` on the `transaksi` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.

*/
-- AlterTable
ALTER TABLE `potongan` MODIFY `potongan` DECIMAL(18, 2) NOT NULL;

-- AlterTable
ALTER TABLE `transaksi` MODIFY `alokasi_periode` DECIMAL(18, 2) NOT NULL;
