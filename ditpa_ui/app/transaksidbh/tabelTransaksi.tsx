"use client";
import React, { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { UpdateData } from "./update";
import { HapusData } from "./delete";
import type { typePotongan } from "@/types";

const TabelTransaksi = ({ potongan }: { potongan: typePotongan[] }) => {
  const [periodeFilter, setPeriodeFilter] = useState("");
  const [kppnFilter, setKppnFilter] = useState("");

  const filteredPotongan = potongan.filter((row) => {
    const isPeriodeMatch = !periodeFilter || row.periode === periodeFilter;
    const isKppnMatch = !kppnFilter || row.kdkppn === kppnFilter;
    if (!periodeFilter && !kppnFilter) {
      return true;
    }
    return isPeriodeMatch && isKppnMatch;
  });

  const kppnUnik = [...new Set(potongan.map((row: any) => row.kdkppn))];

  const hapusFilter = () => {
    setPeriodeFilter("");
    setKppnFilter("");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-4 py-4 mx-4">
          <p>Filter data :</p>
          <div className="max-w-md p-1.5 text-sm rounded-md bg-foreground-200">
            <select
              aria-label="label for the select"
              value={periodeFilter}
              onChange={(e: any) => setPeriodeFilter(e.target.value)}
              className="bg-transparent">
              <option defaultValue="xx" value="xx">
                pilih periode
              </option>
              <option value="31">Triwulan I</option>
              <option value="32">Triwulan II</option>
              <option value="33">Triwulan III</option>
              <option value="34">Triwulan IV</option>
            </select>
          </div>
          <div className="max-w-md p-1.5 text-sm rounded-md bg-foreground-200">
            <select
              aria-label="label for the select"
              value={kppnFilter}
              onChange={(e: any) => setKppnFilter(e.target.value)}
              className="text-sm bg-transparent">
              <option defaultValue={1} value={0}>
                pilih kppn
              </option>
              {kppnUnik.map((row: any, i: number) => (
                <option key={i} value={row}>
                  ({row}){" "}
                  {
                    potongan.find((kppn: any, i: number) => kppn.kdkppn === row)
                      ?.transaksi.nmkppn
                  }
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={() => hapusFilter()}
            radius="sm"
            size="sm"
            color="default"
            className="text-sm">
            Hapus Filter
          </Button>
        </div>
        <Divider />
        <div
          aria-label="label for the select"
          className="flex flex-col max-w-sm overflow-x-auto md:max-w-5xl">
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
                        Tahun
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Periode
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Pemda
                      </th>
                      <th scope="col" className="px-6 py-4">
                        KPPN
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Akun
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Alokasi Periode
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Nilai Potongan
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Nilai Penyaluran
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPotongan.map((row: any, i: number) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {i + 1}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.thang}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.transaksi.nmperiode}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          ({row.kdpemda}) {row.transaksi.nmpemda}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          ({row.kdkppn}) {row.transaksi.nmkppn}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.KDAKUN}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          {Number(row.transaksi.alokasi_periode).toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          {Number(row.potongan).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          {(
                            Number(row.transaksi.alokasi_periode) -
                            Number(row.potongan)
                          ).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>

                        <td className="flex flex-row gap-3 px-6 py-4 font-medium whitespace-nowrap">
                          <UpdateData row={row} />
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
      </div>
    </>
  );
};

export default TabelTransaksi;
