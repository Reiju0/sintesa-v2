import React from "react";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TabelRenkas from "./tabelRenkas";

// getAll data --> Props ke children (client component)

const getData = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/transaksi", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const RenkasBulanan = async () => {
  const potongan = await getData();

  return (
    <>
      <Card className="max-w-[600]">
        <CardHeader className="flex flex-row gap-4 ml-4 font-bold justify-left">
          <Button>Rekam</Button>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.detail}>
            <BsFillArrowRightCircleFill size={20} />
            Detail
          </Link>
          {/* <p className="my-2 text-lg font-bold">Data Potongan DBH</p> reff={Referensi} reffAkun={Akun}*/}
        </CardHeader>
        <Divider />
        <CardBody className="-mt-4">
          <TabelRenkas />
        </CardBody>
      </Card>
    </>
  );
};

export default RenkasBulanan;
