import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import TabelAlokasiDBH from "./tabelalokasiDBH";
import { getRefBrand, getProduk } from "../controller/getReferensi";
import { AddData } from "./addData";

const AlokasiDBH = async () => {
  const [Brand, Produk] = await Promise.all([getRefBrand(), getProduk()]);

  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex my-2 ml-4 font-bold justify-left">
          Data Referensi Pemda
        </CardHeader>
        <Divider />
        <CardHeader className="flex my-1 ml-4 font-bold justify-left">
          <AddData refBrand={Brand} />
        </CardHeader>
        <Divider />
        <CardBody className="-mt-5 overflow-y-auto max-h-80">
          <TabelAlokasiDBH refProduk={Produk} refBrand={Brand} />
        </CardBody>
      </Card>
    </>
  );
};

export default AlokasiDBH;
