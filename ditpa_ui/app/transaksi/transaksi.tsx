import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { FilterKPPN, FilterPemda, FilterPeriode } from "./filter";
import TabelTransaksi from "./tabelTransaksi";
import RekamPotongan from "./tambahTransaksi";
import {
  getAkun,
  getPotongan,
  getReferensiKPPN,
  getTransaksi,
} from "./fetchDataTransaksi";

// getAll data --> Props ke children (client component )

const Transaksi = async () => {
  const [Potongan, Transaksi, Referensi, Akun] = await Promise.all([
    getPotongan(),
    getTransaksi(),
    getReferensiKPPN(),
    getAkun(),
  ]);

  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex ml-4 font-bold justify-left">
          <RekamPotongan
            potongan={Potongan}
            transaksi={Transaksi}
            reff={Referensi}
          />
          {/* <p className="my-2 text-lg font-bold">Data Potongan DBH</p> reff={Referensi} reffAkun={Akun}*/}
        </CardHeader>
        <Divider />
        <div className="flex flex-row">
          <CardHeader className="flex flex-row justify-start gap-2 mx-4 text-sm font-light">
            <p className="flex-none w-20 text-left">Filter Data : </p>
            <FilterPeriode />
            <FilterKPPN />
            <FilterPemda />
          </CardHeader>
        </div>
        <Divider />
        <CardBody className="-mt-6">
          <TabelTransaksi potongan={Potongan} transaksi={Transaksi} />
        </CardBody>
      </Card>
    </>
  );
};

export default Transaksi;
