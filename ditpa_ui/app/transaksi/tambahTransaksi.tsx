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
import { potongan } from "@prisma/client";
import { useEffect, useState } from "react";

const RekamPotongan = ({ potongan }: { potongan: potongan[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(process.env.BASE_URL + "/api/reff")
        .then((response) => {
          if (!response.ok) {
            throw new Error("network no response!");
          }
          return response.json();
        })
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          console.log("data gagal di ambil" + err);
        });
      fetchData();
    };
  }, []);
  console.log(`ini data : ${data}`);

  return (
    <>
      <Button color="primary" size="md" onPress={onOpen}>
        Rekam
        {}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rekam Potongan DBH
              </ModalHeader>
              <form action="">
                <ModalBody>
                  <div className="flex flex-row gap-4">
                    <Select
                      variant="flat"
                      placeholder="2023"
                      size="sm"
                      isDisabled
                      className="max-w-xs">
                      <SelectItem key="1" value="2023">
                        2023
                      </SelectItem>
                    </Select>
                    <Select
                      variant="flat"
                      placeholder="Pilih Periode"
                      size="sm"
                      className="max-w-md">
                      <SelectItem key="1" value="31">
                        Triwulan I
                      </SelectItem>
                      <SelectItem key="2" value="32">
                        Triwulan II
                      </SelectItem>
                      <SelectItem key="3" value="33">
                        Triwulan III
                      </SelectItem>
                      <SelectItem key="4" value="34">
                        Triwulan IV
                      </SelectItem>
                    </Select>
                  </div>
                  <Select
                    variant="flat"
                    placeholder="Pilih KPPN"
                    size="sm"
                    className="flex max-w-md overflow-y-auto">
                    {data.map((row: any, index: number) => (
                      <SelectItem key={index} value={row.kdkppn}>
                        {row.nmkppn}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    variant="flat"
                    placeholder="Pilih Pemda"
                    size="sm"
                    className="max-w-md">
                    <SelectItem key="" value="kode pemda">
                      Nama Pemda
                    </SelectItem>
                  </Select>
                  <Select
                    variant="flat"
                    placeholder="Pilih Akun"
                    size="sm"
                    className="max-w-md">
                    <SelectItem key="akun" value="817111">
                      817111
                    </SelectItem>
                  </Select>

                  <Input
                    size="sm"
                    label="Nilai"
                    placeholder="Input nilai potongan"
                    value="nilai potongan"
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
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RekamPotongan;
