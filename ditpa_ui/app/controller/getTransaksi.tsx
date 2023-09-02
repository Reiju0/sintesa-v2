import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPotongan = async () => {
  const data = await prisma.potongan.findMany({
    select: {
      id: true,
      thang: true,
      kdpemda: true,
      kdkppn: true,
      periode: true,
      potongan: true,
      KDAKUN: true,
      transaksi: true,
    },
  });
  return data;
};

export const getTransaksi = async () => {
  const data = await prisma.transaksi.findMany({});
  return data;
};

export const getReferensiKPPN = async () => {
  const data = await prisma.t_kppn_lok.findMany({
    select: {
      kdkabkota: true,
      nmkabkota: true,
      kdkppn: true,
      nmkppn: true,
      kdkanwil: true,
    },
  });
  return data;
};

export const getAkun = async () => {
  const data = await prisma.reff_akun.findMany({
    select: {
      kdakun: true,
      nmakun: true,
    },
  });
  return data;
};

// export const getdistinctTransaksi = async () => {
//   const data =
//     await prisma.$queryRaw`SELECT DISTINCT a.kdkppn, (SELECT GROUP_CONCAT(kdpemda SEPARATOR',') as kdpemda2 FROM transaksi b WHERE b.kdkppn = a.kdkppn) FROM transaksi a`;
//   return data;
// };
