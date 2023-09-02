/*
  Warnings:

  - You are about to alter the column `potongan` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(18)` to `Int`.

*/
-- AlterTable
ALTER TABLE `potongan` MODIFY `potongan` INTEGER NOT NULL;
