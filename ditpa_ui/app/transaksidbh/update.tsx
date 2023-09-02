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
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { typePotongan } from "@/types";

export const UpdateData = ({ row }: { row: typePotongan }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [thang, setThang] = useState(row.thang);
  const [periode, setPeriode] = useState(row.periode);
  const [kdkppn, setKppn] = useState(row.kdkppn);
  const [kdpemda, setPemda] = useState(row.kdpemda);
  const [KDAKUN, setAkun] = useState(row.KDAKUN);
  const [potongan, setPotongan] = useState(row.potongan);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/transaksi?id=" + row.id, {
        method: "PUT",
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
                  Update Data Potongan DBH
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-row gap-4">
                    <Input
                      isDisabled
                      size="sm"
                      label="Tahun"
                      name="thang"
                      value={thang}
                      placeholder="Pilih tahun"
                      onChange={(e) => setThang(e.target.value)}
                    />
                    <Input
                      isDisabled
                      size="sm"
                      label="Periode"
                      name="periode"
                      value={periode}
                      onChange={(e) => setPeriode(e.target.value)}
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
                      label="Pemda"
                      name="pemda"
                      value={kdpemda}
                      placeholder="Pilih pemda"
                      onChange={(e) => setPemda(e.target.value)}
                    />
                  </div>
                  <Input
                    isDisabled
                    size="sm"
                    label="Kode Akun"
                    name="KDAKUN"
                    value={KDAKUN.toString()}
                    placeholder="Pilih AKUN"
                    onChange={(e) => setAkun(e.target.value)}
                  />

                  <Input
                    aria-label="label for the select"
                    size="sm"
                    label="Nilai"
                    placeholder="Input nilai potongan"
                    value={potongan.toString()}
                    onChange={(e) => setPotongan(e.target.value)}
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
