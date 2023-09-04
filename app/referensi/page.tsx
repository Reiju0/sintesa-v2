import { title } from "@/components/primitives";
import AlokasiDBH from "./alokasidbh";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={title()}>Referensi Pemda</h1>
      <AlokasiDBH />
    </div>
  );
}
