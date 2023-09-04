"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { typeRenkas } from "@/types";
import { UpdateData } from "./update";

const TabelRenkas = ({ renkas }: { renkas: typeRenkas[] }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-4 py-4 mx-4">
          <p>Filter data :</p>
          <div className="max-w-md p-1.5 text-sm rounded-md bg-foreground-200">
            <select
              aria-label="label for the select"
              value=""
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
          <div className="max-w-md p-1.5 text-sm rounded-md bg-default-200">
            <select
              aria-label="label for the select"
              value=""
              className="text-sm bg-transparent">
              <option>pilih Satker</option>
              <option>500012</option>
            </select>
          </div>
          <Button radius="sm" size="sm" color="default" className="text-sm">
            Hapus Filter
          </Button>
        </div>
        <Divider />
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
                        KPPN
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Satker
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Jenis Dana
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Bulan
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Tanggal Submit
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Nilai Renkas
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {renkas.map((row: any, i: number) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {i + 1}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.kdkppn}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.kdsatker}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.Alokasi_tkd.nmjenis}
                        </td>
                        <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                          {row.periode}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          {new Date(row.updatedAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            timeZoneName: "short",
                          })}
                        </td>
                        <td className="px-6 py-4 font-light whitespace-nowrap">
                          {Number(row.renkas).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                        <td className="flex flex-row gap-3 px-6 py-4 whitespace-nowrap">
                          <UpdateData row={row} />
                          <Button size="sm" color="danger">
                            Hapus
                          </Button>
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

export default TabelRenkas;
