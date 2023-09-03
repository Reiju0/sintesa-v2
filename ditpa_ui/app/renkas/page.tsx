import { title } from "@/components/primitives";
import RenkasBulanan from "./renkas";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 ">
      <h1 className={title()}>Rencana Kas Bulanan</h1>
      <RenkasBulanan />
    </section>
  );
}
