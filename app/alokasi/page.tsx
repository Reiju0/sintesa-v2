import { title } from "@/components/primitives";
import DataTable from "./table";

const DocsPage = async () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="justify-center inline-block max-w-lg -mt-8 text-center">
        <h1 className={title()}>Alokasi DBH TA.2023</h1>
      </div>
      <div className="flex gap-3">
        <DataTable />
      </div>
    </section>
  );
};

export default DocsPage;
