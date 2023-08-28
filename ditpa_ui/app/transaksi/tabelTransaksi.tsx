import React from "react";
import { RekamData } from "./rekam";
import { UpdateData } from "./update";
import { HapusData } from "./delete";
import { getPotongan, getTransaksi } from "./fetchDataTransaksi";

const TabelTransaksi = async () => {
  const [Potongan, Transaksi] = await Promise.all([
    getPotongan(),
    getTransaksi(),
  ]);
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
                      Tahun
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
                  {Potongan.map((row: any, i: number) => (
                    <tr key={i} className="border-b dark:border-neutral-500">
                      <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                        {row.thang}
                      </td>
                      <td className="px-6 py-4 font-light whitespace-nowrap">
                        {row.nmpemda} ({row.kdpemda})
                      </td>
                      <td className="px-6 py-4 font-light whitespace-nowrap">
                        {row.nmkppn} ({row.kdkppn})
                      </td>
                      <td className="px-6 py-4 font-light text-center whitespace-nowrap">
                        {row.KDAKUN}
                      </td>
                      <td className="px-6 py-4 font-light whitespace-nowrap">
                        {row.transaksi.alokasi_periode}
                      </td>
                      <td className="px-6 py-4 font-light whitespace-nowrap">
                        {row.potongan}
                      </td>
                      <td className="px-6 py-4 font-light whitespace-nowrap">
                        {row.transaksi.alokasi_periode - row.potongan}
                      </td>
                      <td className="flex flex-row gap-3 px-6 py-4 font-medium whitespace-nowrap">
                        <RekamData transaksi={Transaksi} />
                        <UpdateData />
                        <HapusData />
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

export default TabelTransaksi;
