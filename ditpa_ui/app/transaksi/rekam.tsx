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
import { BsCheckLg } from "react-icons/bs";
import { reffPemdaKppn } from "../data/reff_kppn_pemda";

export const RekamData = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const reffKPPN = reffPemdaKppn.filter((item, index, self) => {
    const key = item.kdkppn + item.nmkppn;
    return self.map((e) => e.kdkppn + e.nmkppn).indexOf(key) === index;
  });

  return (
    <>
      <Button
        color="primary"
        size="sm"
        isIconOnly
        radius="none"
        onPress={onOpen}
        className="rounded-full">
        <BsCheckLg className="text-lg font-bold text-white" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rekam Potongan DBH
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row gap-4">
                  <Chip size="md">Pemda : Kab. Aceh Besar</Chip>
                  <Chip size="md">KPPN : Banda Aceh</Chip>
                </div>
                <div>
                  <Select
                    variant="flat"
                    placeholder="Pilih KPPN"
                    size="sm"
                    className="max-w-x">
                    {reffKPPN.map((row: any) => (
                      <SelectItem key={row.kdkppn} value={row.kdkppn}>
                        ({row.kdkppn}) {row.nmkppn}
                      </SelectItem>
                    ))}
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
