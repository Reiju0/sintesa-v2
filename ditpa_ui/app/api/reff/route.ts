import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const GET = async (req: NextRequest) => {
    const data = await prisma.t_kppn_lok.findMany({
      select: {
        kdkppn: true,
        nmkppn:true,

      },
      distinct: ["kdkppn"],
    });
      return NextResponse.json(data);
    };


