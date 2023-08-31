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

import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillPencilFill } from "react-icons/bs";
import type { Brand, Produk } from "@prisma/client";

export const UpdateData = ({
  refBrand,
  row,
}: {
  refBrand: Brand[];
  row: Produk;
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formProduk, setFormProduk] = useState({
    nmproduk: row.nmproduk,
    harga: row.harga,
    brandId: row.brandId,
  });

  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setFormProduk((formProduk) => ({
      ...formProduk,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/referensi?id=" + row.id, {
        method: "PUT", // Anda harus menentukan metode HTTP PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProduk),
      });
      if (response.ok) {
        console.log("Data berhasil di update");
      } else {
        console.error("Data gagal di update ");
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
        <form onSubmit={handleUpdate}>
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
                    value={formProduk.harga.toString()}
                    placeholder="Input harga produk"
                    onChange={handleChange}
                  />
                  <Select
                    size="sm"
                    name="brandId"
                    placeholder="Pilih update brand"
                    value={formProduk.brandId}
                    onChange={handleChange}>
                    {refBrand.map((row: any) => (
                      <SelectItem key={row.id} value={row.id}>
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
