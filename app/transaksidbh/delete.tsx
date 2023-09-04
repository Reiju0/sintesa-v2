"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { BsFillTrashFill } from "react-icons/bs";
import { typePotongan } from "@/types";
import { toast } from "react-toastify";

export const HapusData = ({ row }: { row: typePotongan }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleDelete = async (id: number) => {
    const response = await fetch("/api/transaksi?id=" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      toast.success("Data berhasil dihapus!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
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
              <ModalHeader className="flex flex-col gap-1">
                <p>
                  Apakah anda yakin ingin menghapus data Potongan
                  <span className="text-danger"> {row.transaksi.nmpemda} </span>
                  ?
                </p>
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
