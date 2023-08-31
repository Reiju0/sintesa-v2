"use client";
import Login from "../api/omspan/loginAPI";
import FetchDataAPI from "../api/omspan/fetchDataAPI";
import { useEffect, useState } from "react";
import { typeBrand, typeProduk } from "@/types";
import { UpdateData } from "./updateData";
import { HapusData } from "./deleteData";

const TabelAlokasiDBH = ({
  refProduk,
  refBrand,
}: {
  refProduk: typeProduk[];
  refBrand: typeBrand[];
}) => {
  // const [alokasiDBH, setAlokasiDBH] = useState([]);
  // const endpoint = "bersama/pemdakppnall";
  // const data = async () => {
  //   try {
  //     const token = await Login();
  //     const detailData = await FetchDataAPI(endpoint, token);
  //     setAlokasiDBH(detailData.data);
  //   } catch (error) {
  //     console.log("data gagal di ambil", error);
  //   }
  // };
  // useEffect(() => {
  //   data();
  // }, []);
  // ambil data dari API OMSPAN

  return (
    <>
      <div className="flex flex-col max-w-sm overflow-x-auto md:max-w-5xl">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium text-center border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nama Produk
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nama Brand
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Harga
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {refProduk.map((row: any, i: number) => (
                    <tr
                      key={row.id}
                      className="border-b dark:border-neutral-500">
                      <td className="px-6 py-2 font-light whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="px-6 py-2 font-light whitespace-nowrap">
                        {row.nmproduk}
                      </td>
                      <td className="px-6 py-2 font-light whitespace-nowrap">
                        {row.brand.nama}
                      </td>
                      <td className="px-6 py-2 font-light whitespace-nowrap">
                        {row.harga.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="flex flex-row gap-3 px-6 py-2 font-light whitespace-nowrap">
                        <UpdateData refBrand={refBrand} row={row} />
                        <HapusData row={row} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabelAlokasiDBH;
