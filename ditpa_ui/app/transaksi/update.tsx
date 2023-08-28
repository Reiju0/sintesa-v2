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
import { Chip } from "@nextui-org/chip";
import { BsFillPencilFill } from "react-icons/bs";

export const UpdateData = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color="warning"
        size="sm"
        isIconOnly
        radius="none"
        onPress={onOpen}
        className="rounded-full">
        <BsFillPencilFill className="text-lg font-bold text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Data Potongan DBH
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row gap-4">
                  <Chip size="md">Pemda : Kab. Aceh Besar</Chip>
                  <Chip size="md">KPPN : Banda Aceh</Chip>
                </div>
                <div>
                  <Select
                    variant="flat"
                    placeholder="Pilih Akun"
                    size="xs"
                    className="max-w-xs">
                    <SelectItem value="817111">817111</SelectItem>
                  </Select>
                </div>

                <Input
                  size="sm"
                  label="Nilai"
                  placeholder="Input nilai potongan"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button color="primary" onPress={onClose}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
