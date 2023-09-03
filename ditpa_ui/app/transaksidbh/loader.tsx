import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const Loader = () => {
  return (
    <>
      <Card className="w-[800px] p-4 space-y-5">
        <CardHeader className="">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-50"></div>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="h-[35  0px]"></CardBody>
      </Card>
    </>
  );
};

export default Loader;
