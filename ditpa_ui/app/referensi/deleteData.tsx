"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { BsFillTrashFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import type { Produk } from "@prisma/client";

interface Props {
  row: Produk;
}

export const HapusData = ({ row }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const response = await fetch("/api/referensi?id=" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Data Berhasil di hapus");
    }
    router.refresh();
  };

  return (
    <>
      <Button
        color="danger"
        size="sm"
        isIconOnly
        radius="none"
        onPress={onOpen}
        className="rounded-full">
        <BsFillTrashFill className="text-lg font-bold text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-4 text-danger">
                {`Apakah anda yakin ingin menghapus produk ${row.nmproduk}?`}
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={() => handleDelete(row.id)}>
                  Hapus
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HapusData;
