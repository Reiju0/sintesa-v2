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
import { typePotongan, typeReferensi, typeAkun, typeTransaksi } from "@/types";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RekamPotongan = ({
  potongan,
  transaksi,
  reff,
}: {
  potongan: typePotongan[];
  transaksi: typeTransaksi[];
  reff: typeReferensi[];
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [periode, setPeriode] = useState("");
  const [kppn, setKppn] = useState("");
  const [pemda, setPemda] = useState("");
  const [akun, setAkun] = useState("");
  const [nilaiPotongan, setNilaiPotongan] = useState("");

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/transaksi", {
      method: "POST",
      headers: {
        "Content-type ": "application/json",
      },
      body: JSON.stringify({
        periode,
        kppn,
        pemda,
        akun,
        nilaiPotongan,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    router.push("/");
  };

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
              <form onSubmit={handelSubmit}>
                <ModalBody>
                  <div className="flex flex-row gap-4">
                    <Select
                      variant="flat"
                      placeholder="2023"
                      value="2023"
                      onChange={(e) => e.target.value}
                      size="sm"
                      className="max-w-xs">
                      <SelectItem key="2023" value="2023">
                        2023
                      </SelectItem>
                    </Select>
                    <Select
                      variant="flat"
                      value={periode}
                      onChange={(e) => setPeriode(e.target.value)}
                      placeholder="Pilih Periode"
                      size="sm"
                      className="max-w-md">
                      <SelectItem key="31" value="31">
                        Triwulan I
                      </SelectItem>
                      <SelectItem key="32" value="32">
                        Triwulan II
                      </SelectItem>
                      <SelectItem key="33" value="33">
                        Triwulan III
                      </SelectItem>
                      <SelectItem key="34" value="34">
                        Triwulan IV
                      </SelectItem>
                    </Select>
                  </div>
                  <Select
                    variant="flat"
                    placeholder="Pilih KPPN"
                    value={kppn}
                    onChange={(e) => setKppn(e.target.value)}
                    size="sm"
                    className="max-w-md ">
                    {reff.map((row: any, i: number) => (
                      <SelectItem
                        key={row.kdkppn}
                        value={row.kdkppn}
                        className="overflow-auto max-h-40">
                        ({row.kdkppn}) {row.nmkppn}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="flat"
                    placeholder="Pilih Pemda"
                    value={pemda}
                    onChange={(e) => setPemda(e.target.value)}
                    size="sm"
                    className="max-w-md">
                    {reff.map((row: any, i: number) => (
                      <SelectItem key={row.kdkabkota} value={row.kdkabkota}>
                        ({row.kdkabkota}) {row.nmkabkota}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="flat"
                    placeholder="817714"
                    value={akun}
                    onChange={(e) => setAkun(e.target.value)}
                    size="sm"
                    className="max-w-md">
                    <SelectItem key="817714" value="817714">
                      817714
                    </SelectItem>
                  </Select>

                  <Input
                    size="sm"
                    label="Nilai"
                    value={nilaiPotongan}
                    onChange={(e) => setNilaiPotongan(e.target.value)}
                    placeholder="Input nilai potongan"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batal
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
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
