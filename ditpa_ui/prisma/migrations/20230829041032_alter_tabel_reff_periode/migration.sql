/*
  Warnings:

  - Added the required column `kdpemda` to the `reff_periode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nmpemda` to the `reff_periode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thang` to the `reff_periode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reff_periode` ADD COLUMN `kdkppn` CHAR(3) NULL,
    ADD COLUMN `kdpemda` CHAR(4) NOT NULL,
    ADD COLUMN `nmkppn` CHAR(150) NULL,
    ADD COLUMN `nmpemda` VARCHAR(255) NOT NULL,
    ADD COLUMN `thang` CHAR(4) NOT NULL;
