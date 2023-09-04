"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { typeRenkas } from "@/types";
import { toast } from "react-toastify";

export const UpdateData = ({ row }: { row: typeRenkas }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [periode, setPeriode] = useState(row.periode);
  const [kdjenis, setJenis] = useState(row.kdjenis);
  const [kdkppn, setKppn] = useState(row.kdkppn);
  const [kdsatker, setSatker] = useState(row.kdsatker);
  const [renkas, setRenkas] = useState(row.renkas);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/renkas?id=" + row.id, {
        method: "PUT",
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
        toast.success("Data berhasil diupdate!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });
        console.log("Data berhasil di update");
      } else {
        console.error("Data gagal di update ");
      }
    } catch (err) {
      console.log("Terjadi kesalahan Fetch Data dari API ", err);
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
        <form action="" onSubmit={handleUpdate}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update Data Renkas Bulanan
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-row gap-4">
                    <Input
                      isDisabled
                      size="sm"
                      label="Periode"
                      name="Periode"
                      value={periode}
                      placeholder="Pilih periode"
                      onChange={(e) => setPeriode(e.target.value)}
                    />
                    <Input
                      isDisabled
                      size="sm"
                      label="Jenis"
                      name="jenis"
                      value={kdjenis}
                      onChange={(e) => setJenis(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <Input
                      isDisabled
                      size="sm"
                      label="KPPN"
                      name="kppn"
                      value={kdkppn}
                      placeholder="Pilih kppn"
                      onChange={(e) => setKppn(e.target.value)}
                    />
                    <Input
                      isDisabled
                      size="sm"
                      label="Satker"
                      name="satker"
                      value={kdsatker}
                      placeholder="Pilih satker"
                      onChange={(e) => setSatker(e.target.value)}
                    />
                  </div>
                  <Input
                    size="sm"
                    label="Kode Akun"
                    name="KDAKUN"
                    value={renkas.toString()}
                    placeholder="Pilih AKUN"
                    onChange={(e) => setRenkas(parseInt(e.target.value))}
                  />
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
