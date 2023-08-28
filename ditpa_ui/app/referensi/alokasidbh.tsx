import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import TabelAlokasiDBH from "./tabelalokasiDBH";

const AlokasiDBH = async () => {
  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex my-2 ml-4 font-bold justify-left">
          Data Referensi Pemda
        </CardHeader>
        <Divider />
        <CardBody className="-mt-6">
          <TabelAlokasiDBH />
        </CardBody>
      </Card>
    </>
  );
};

export default AlokasiDBH;
