import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const getPotongan = async () => {
  const data = await prisma.potongan.findMany({
    select: {
      id: true,
      thang: true,
      kdpemda: true,
      nmpemda: true,
      kdkppn: true,
      nmkppn: true,
      kdjenis: true,
      nmjenis: true,
      periode: true,
      nmperiode: true,
      potongan: true,
      createdAt: true,
      updatedAt: true,
      KDAKUN: true,
      transaksi: true,
    },
  });
  return data;
};

export const getTransaksi = async () => {
  const data = await prisma.transaksi.findMany();
  return data;
};
export const getReferensiKPPN = async () => {
  const data = await prisma.t_kppn_lok.findMany({
    select: {
      kdkppn: true,
      kdkabkota: true,
    },
    distinct: ["kdkppn"],
  });
  return data;
};
