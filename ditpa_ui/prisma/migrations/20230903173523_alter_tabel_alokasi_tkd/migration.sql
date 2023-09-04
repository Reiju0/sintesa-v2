/*
  Warnings:

  - You are about to drop the column `nmperiode` on the `Alokasi_tkd` table. All the data in the column will be lost.
  - You are about to drop the column `periode` on the `Alokasi_tkd` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Alokasi_tkd` DROP COLUMN `nmperiode`,
    DROP COLUMN `periode`;
