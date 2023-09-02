-- AlterTable
ALTER TABLE `potongan` MODIFY `thang` CHAR(4) NOT NULL,
    MODIFY `kdpemda` CHAR(4) NOT NULL,
    MODIFY `kdkppn` CHAR(3) NOT NULL,
    MODIFY `periode` CHAR(4) NOT NULL;

-- AlterTable
ALTER TABLE `transaksi` MODIFY `thang` CHAR(4) NOT NULL,
    MODIFY `kdpemda` CHAR(4) NOT NULL,
    MODIFY `kdkppn` CHAR(3) NOT NULL,
    MODIFY `periode` CHAR(4) NOT NULL;
