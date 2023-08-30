import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRefBrand = async () => {
  const data = await prisma.brand.findMany({});
  return data;
};
