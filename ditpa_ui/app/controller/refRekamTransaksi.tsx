import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRefBrand = async () => {
  const data = await prisma.brand.findMany({});
  return data;
};

export const getProduk = async () => {
  const data = await prisma.produk.findMany({
    select: {
      id: true,
      nmproduk: true,
      harga: true,
      brand: true,
      brandId: true,
    },
  });
  return data;
};
