"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { toast } from "react-toastify";
import { BsCheckCircleFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

import reffKppn from "../data/reffKppn.json";
import reffPeriode from "../data/reffPeriode.json";
import reffJenis from "../data/reffJenis.json";
import reffSatker from "../data/reffSatker.json";

const RekamRenkas = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [periode, setPeriode] = useState("");
  const [kdjenis, setJenis] = useState("");
  const [kdkppn, setKppn] = useState("");
  const [kdsatker, setSatker] = useState("");
  const [renkas, setRenkas] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/renkas", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          periode,
          kdjenis,
          kdkppn,
          kdsatker,
          renkas,
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

    router.refresh();
  };

  return (
    <>
      <Button
        color="primary"
        size="md"
        radius="full"
        onPress={onOpen}
        startContent={<BsCheckCircleFill size={20} />}
        className="text-md">
        Rekam
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl text-center">
                Rekam Renkas Bulanan
              </ModalHeader>
              <Divider />
              <form
                onSubmit={handleSubmit}
                aria-label="label for the select"
                className="mt-4">
                <ModalBody>
                  <div className="flex flex-row gap-3">
                    <div className="max-w-md p-2 text-sm rounded-lg bg-default-100">
                      <select
                        aria-label="label for the select"
                        placeholder="pilih periode"
                        name="kdkppn"
                        value={periode}
                        onChange={(e: any) => setPeriode(e.target.value)}
                        className="p-1.5 w-[180px] text-sm bg-transparent outline-none focus:outline-none">
                        <option aria-label="label for the select" value="xx">
                          pilih periode
                        </option>
                        {reffPeriode.map((row: any, i: number) => (
                          <option
                            aria-label="label for the select"
                            key={row.periode}
                            value={row.periode}
                            className="overflow-auto max-h-40">
                            {row.nmperiode}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="max-w-md p-1.5 text-sm rounded-lg bg-default-100">
                      <select
                        aria-label="label for the select"
                        value={kdjenis}
                        onChange={(e: any) => setJenis(e.target.value)}
                        className="p-2 w-[180px] text-sm bg-transparent outline-none focus:outline-none">
                        <option
                          className="text-sm"
                          aria-label="label for the select"
                          value="xx">
                          pilih jenis dana
                        </option>
                        {reffJenis.map((row: any, i: number) => (
                          <option
                            aria-label="label for the select"
                            key={row.kdjenis}
                            value={row.kdjenis}
                            className="overflow-auto max-h-40">
                            {row.nmjenis}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="max-w-md p-2 text-sm rounded-lg bg-default-100">
                      <select
                        aria-label="label for the select"
                        name="kdkppn"
                        value={kdkppn}
                        onChange={(e: any) => setKppn(e.target.value)}
                        className="p-1.5 w-[180px] text-sm bg-transparent outline-none focus:outline-none">
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
                        value={kdsatker}
                        onChange={(e: any) => setSatker(e.target.value)}
                        className="p-2 w-[180px] text-sm bg-transparent outline-none focus:outline-none">
                        <option
                          className="text-sm"
                          aria-label="label for the select"
                          value="xx">
                          pilih satker
                        </option>
                        {reffSatker
                          .filter((row: any) => row.kdkppn === kdkppn)
                          .map((row: any, i: number) => (
                            <option
                              className="text-sm"
                              aria-label="label for the select"
                              value={row.kdsatker}
                              key={i}>
                              ({row.kdsatker}) {row.nmsatker}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <Input
                    aria-label="label for the select"
                    size="sm"
                    label="Nilai"
                    name="potongan"
                    value={renkas}
                    onChange={(e: any) => setRenkas(e.target.value)}
                    placeholder="Input nilai renkas"
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

export default RekamRenkas;
