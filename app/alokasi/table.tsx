// fetch data api
const getAlokasi = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/posts", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
};

const DataTable = async () => {
  const alokasi = await getAlokasi();
  return (
    <div className="flex flex-col max-w-sm overflow-x-auto md:max-w-5xl">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm font-light text-left">
              <thead className="font-medium text-center border-b dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
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
                    Alokasi DBH CHT
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Alokasi DBH Pajak
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Alokasi DBH sda
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total Alokasi DBH
                  </th>
                </tr>
              </thead>
              <tbody>
                {alokasi.map((row: any, i: number) => (
                  <tr key={i} className="border-b dark:border-neutral-500">
                    <td className="px-6 py-4 font-medium text-center whitespace-nowrap">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {row.thang}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.nmpemda} ({row.kdpemda})
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.nmkppn} ({row.kdkppn})
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.dbhcht}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.dbhpajak}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.dbhsda}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.total_alokasi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
``;
