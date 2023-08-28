import { title } from "@/components/primitives";
import Transaksi from "./transaksi";

export default function PricingPage() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className={title()}>RUH Potongan</h1>
      <Transaksi />
    </section>
  );
}
