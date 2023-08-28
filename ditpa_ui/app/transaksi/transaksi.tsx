import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { FilterKPPN, FilterPemda, FilterPeriode } from "./filter";
import TabelTransaksi from "./tabelTransaksi";
import RekamPotongan from "./tambahTransaksi";
import { getPotongan } from "./fetchDataTransaksi";

const Transaksi = async () => {
  const Potongan = await getPotongan();
  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex ml-4 font-bold justify-left">
          <RekamPotongan potongan={Potongan} />
          {/* <p className="my-2 text-lg font-bold">Data Potongan DBH</p> */}
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
          <TabelTransaksi />
        </CardBody>
      </Card>
    </>
  );
};

export default Transaksi;
