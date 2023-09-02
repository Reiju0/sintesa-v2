/*
  Warnings:

  - You are about to alter the column `KDAKUN` on the `potongan` table. The data in that column could be lost. The data in that column will be cast from `Char(6)` to `Int`.

*/
-- AlterTable
ALTER TABLE `potongan` MODIFY `KDAKUN` INTEGER NOT NULL;
