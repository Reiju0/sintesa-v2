"use client";
import Login from "../api/omspan/loginAPI";
import FetchDataAPI from "../api/omspan/fetchDataAPI";
import { useEffect, useState } from "react";

const TabelAlokasiDBH = () => {
  const [alokasiDBH, setAlokasiDBH] = useState([]);
  const endpoint = "bersama/pemdakppnall";
  const data = async () => {
    try {
      const token = await Login();
      const detailData = await FetchDataAPI(endpoint, token);
      setAlokasiDBH(detailData.data);
    } catch (error) {
      console.log("data gagal di ambil", error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  console.log(alokasiDBH);
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
                      Nilai Potongan
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabelAlokasiDBH;
