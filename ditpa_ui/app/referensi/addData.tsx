"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { BsCheckLg } from "react-icons/bs";
import { typeBrand } from "@/types";

export const AddData = ({ refBrand }: { refBrand: typeBrand[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color="primary"
        size="sm"
        radius="sm"
        onPress={onOpen}
        className="flex flex-row gap-2">
        <BsCheckLg className="text-lg font-extrabold text-white" />
        <p>Rekam</p>
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rekam Data Produk
              </ModalHeader>
              <ModalBody>
                <Input
                  size="sm"
                  label="Produk"
                  placeholder="Input nama produk"
                />
                <Input
                  size="sm"
                  label="Harga"
                  placeholder="Input harga produk"
                />
                <Select size="sm" placeholder="Pilih brand">
                  {refBrand.map((row: any) => (
                    <SelectItem key={row.id} value={row.nama}>
                      {row.nama}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button color="primary" onPress={onClose} type="submit">
                  Simpan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
