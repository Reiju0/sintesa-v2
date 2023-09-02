/*
  Warnings:

  - You are about to drop the column `kdjenis` on the `potongan` table. All the data in the column will be lost.
  - You are about to drop the column `nmjenis` on the `potongan` table. All the data in the column will be lost.
  - You are about to drop the column `nmkppn` on the `potongan` table. All the data in the column will be lost.
  - You are about to drop the column `nmpemda` on the `potongan` table. All the data in the column will be lost.
  - You are about to drop the column `nmperiode` on the `potongan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `potongan` DROP COLUMN `kdjenis`,
    DROP COLUMN `nmjenis`,
    DROP COLUMN `nmkppn`,
    DROP COLUMN `nmpemda`,
    DROP COLUMN `nmperiode`;
