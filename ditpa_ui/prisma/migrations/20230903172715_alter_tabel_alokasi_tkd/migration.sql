/*
  Warnings:

  - You are about to drop the column `alokasi_periode` on the `Alokasi_tkd` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[kdsatker,kdkppn,kdjenis]` on the table `Alokasi_tkd` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Alokasi_tkd_kdsatker_kdkppn_kdjenis_periode_key` ON `Alokasi_tkd`;

-- DropIndex
DROP INDEX `Renkas_kdsatker_kdkppn_kdjenis_periode_idx` ON `Renkas`;

-- AlterTable
ALTER TABLE `Alokasi_tkd` DROP COLUMN `alokasi_periode`;

-- CreateIndex
CREATE UNIQUE INDEX `Alokasi_tkd_kdsatker_kdkppn_kdjenis_key` ON `Alokasi_tkd`(`kdsatker`, `kdkppn`, `kdjenis`);

-- CreateIndex
CREATE INDEX `Renkas_kdsatker_kdkppn_kdjenis_idx` ON `Renkas`(`kdsatker`, `kdkppn`, `kdjenis`);
