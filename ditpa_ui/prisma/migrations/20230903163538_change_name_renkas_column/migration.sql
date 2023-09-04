/*
  Warnings:

  - You are about to drop the column `nilai_renkas` on the `Renkas` table. All the data in the column will be lost.
  - Added the required column `renkas` to the `Renkas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Renkas` DROP COLUMN `nilai_renkas`,
    ADD COLUMN `renkas` DECIMAL(18, 2) NOT NULL;
