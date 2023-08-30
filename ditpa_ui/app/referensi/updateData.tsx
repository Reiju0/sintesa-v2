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
import { typeBrand } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillPencilFill } from "react-icons/bs";

export const UpdateData = ({ refBrand }: { refBrand: typeBrand[] }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formProduk, setFormProduk] = useState({
    nmproduk: "",
    harga: "",
    brandId: "",
  });

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setFormProduk({
      ...formProduk,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/referensi", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formProduk),
      });
      if (response.ok) {
        console.log("Data baru berhasil di tambahkan");
      } else {
        console.error("Data gagal di tambahkan ");
      }
    } catch {
      console.log("Terjadi kesalahan Fetch Data dari API  ");
    }
    router.refresh();
  };
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
        <form onSubmit={handleSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update Data Potongan DBH
                </ModalHeader>
                <ModalBody>
                  <Input
                    size="sm"
                    label="Produk"
                    name="nmproduk"
                    value={formProduk.nmproduk}
                    placeholder="Input nama produk"
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    label="Harga"
                    name="harga"
                    value={formProduk.harga}
                    placeholder="Input harga produk"
                    onChange={handleChange}
                  />
                  <Select
                    size="sm"
                    name="brandId"
                    placeholder="Pilih brand"
                    value={formProduk.brandId}
                    onChange={handleChange}>
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
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
