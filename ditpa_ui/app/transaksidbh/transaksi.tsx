import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { FilterKPPN, FilterPemda, FilterPeriode } from "./filter";
import TabelTransaksi from "./tabelTransaksi";
import RekamPotongan from "./tambah";

// getAll data --> Props ke children (client component)

const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/transaksi", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const Transaksi = async () => {
  const potongan = await getData();

  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex ml-4 font-bold justify-left">
          <RekamPotongan />
          {/* <p className="my-2 text-lg font-bold">Data Potongan DBH</p> reff={Referensi} reffAkun={Akun}*/}
        </CardHeader>
        <Divider />
        <CardBody className="-mt-6">
          <TabelTransaksi potongan={potongan} />
        </CardBody>
      </Card>
    </>
  );
};

export default Transaksi;
