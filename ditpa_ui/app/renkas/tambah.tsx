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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import reffKppn from "../data/reffKppn.json";
import reffPemda from "../data/reffPemda.json";

const RekamPotongan = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isloading, setIsloading] = useState(false);
  const [thang, setThang] = useState("");
  const [periode, setPeriode] = useState("");
  const [kdkppn, setKppn] = useState("");
  const [kdpemda, setPemda] = useState("");
  const [KDAKUN, setAkun] = useState("");
  const [potongan, setPotongan] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await fetch("/api/transaksi", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          thang,
          periode,
          kdkppn,
          kdpemda,
          potongan,
          KDAKUN,
        }),
      });

      if (response.ok) {
        toast.success("Data berhasil ditambahkan", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });

        console.log("Data baru berhasil di tambahkan");
      } else if (response.status === 400) {
        toast.warning(`Data sudah ada, update data!`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });
        console.error("Data sudah ada, silahkan update data!");
      } else if (response.status === 404) {
        toast.warning("Semua kolom harus diisi!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });
        console.error("Semua kolom harus diisi!");
      }
    } catch (err) {
      console.log("Terjadi kesalahan Fetch Data dari API ", err);
    }

    setIsloading(false);
    router.refresh();
  };

  return (
    <>
      <Button
        color="primary"
        size="md"
        radius="sm"
        onPress={onOpen}
        className="text-md">
        Rekam
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rekam Potongan DBH
              </ModalHeader>
              <form aria-label="label for the select" onSubmit={handleSubmit}>
                <ModalBody>
                  <div className="flex flex-row gap-4">
                    <Select
                      aria-label="label for the select"
                      variant="flat"
                      placeholder="pilih tahun"
                      name="thang"
                      value={thang}
                      onChange={(e: any) => setThang(e.target.value)}
                      size="sm"
                      className="max-w-xs">
                      <SelectItem
                        aria-label="label for the select"
                        key="2023"
                        value="2023">
                        2023
                      </SelectItem>
                    </Select>
                    <Select
                      aria-label="label for the select"
                      variant="flat"
                      name="periode"
                      value={periode}
                      onChange={(e: any) => setPeriode(e.target.value)}
                      placeholder="Pilih Periode"
                      size="sm"
                      className="max-w-md">
                      <SelectItem
                        aria-label="label for the select"
                        key="31"
                        value="31">
                        Triwulan I
                      </SelectItem>
                      <SelectItem
                        aria-label="label for the select"
                        key="32"
                        value="32">
                        Triwulan II
                      </SelectItem>
                      <SelectItem
                        aria-label="label for the select"
                        key="33"
                        value="33">
                        Triwulan III
                      </SelectItem>
                      <SelectItem
                        aria-label="label for the select"
                        key="34"
                        value="34">
                        Triwulan IV
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="max-w-md p-2 text-sm rounded-lg bg-default-100">
                    <select
                      aria-label="label for the select"
                      name="kdkppn"
                      value={kdkppn}
                      onChange={(e: any) => setKppn(e.target.value)}
                      className="p-1.5 w-[380px] text-sm bg-transparent outline-none focus:outline-none">
                      <option aria-label="label for the select" value="xx">
                        pilih kppn
                      </option>
                      {reffKppn.map((row: any, i: number) => (
                        <option
                          aria-label="label for the select"
                          key={row.kdkppn}
                          value={row.kdkppn}
                          className="overflow-auto max-h-40">
                          ({row.kdkppn}) {row.nmkppn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="max-w-md p-1.5 text-sm rounded-lg bg-default-100">
                    <select
                      aria-label="label for the select"
                      value={kdpemda}
                      onChange={(e: any) => setPemda(e.target.value)}
                      className="p-2 w-[380px] text-sm bg-transparent outline-none focus:outline-none">
                      <option
                        className="text-sm"
                        aria-label="label for the select"
                        value="xx">
                        pilih pemda
                      </option>
                      {reffPemda
                        .filter((row: any) => row.kdkppn === kdkppn)
                        .map((row: any, i: number) => (
                          <option
                            className="text-sm"
                            aria-label="label for the select"
                            value={row.kdpemda}
                            key={i}>
                            ({row.kdpemda}) {row.nmpemda}
                          </option>
                        ))}
                    </select>
                  </div>

                  <Select
                    aria-label="label for the select"
                    variant="flat"
                    placeholder="Pilih akun potongan"
                    name="KDAKUN"
                    value={KDAKUN}
                    onChange={(e: any) => setAkun(e.target.value)}
                    size="sm"
                    className="max-w-md">
                    <SelectItem
                      aria-label="label for the select"
                      key="817714"
                      value={817714}>
                      817714
                    </SelectItem>
                  </Select>

                  <Input
                    aria-label="label for the select"
                    size="sm"
                    label="Nilai"
                    name="potongan"
                    value={potongan}
                    onChange={(e: any) => setPotongan(e.target.value)}
                    placeholder="Input nilai potongan"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batal
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    type="submit"
                    isDisabled={isloading}>
                    {isloading ? "Loading..." : "Simpan"}
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
