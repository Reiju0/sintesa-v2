import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-4 ">
      <h1 className={title()}>Detail Renkas</h1>
      <Card>
        <CardBody>
          <p>akan diisi detail renkas 3 satker</p>
        </CardBody>
      </Card>
    </section>
  );
}
