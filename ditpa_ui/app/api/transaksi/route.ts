import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { typePotongan } from "@/types";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const POST = async (req: Request) => {
    const body : typePotongan = await req.json()
    const dataPotongan = await prisma.potongan.create({
      data : {
        id : body.id,
        thang  : body.thang, 
        periode : body.periode, 
        nmperiode : body.nmperiode,
        kdkppn : body.kdkppn,
        nmkppn : body.nmkppn, 
        kdpemda : body.kdpemda, 
        nmpemda : body.nmpemda,
        potongan : body.potongan, 
        KDAKUN : body.KDAKUN, 
      }
    });
      return NextResponse.json(dataPotongan);
    };

    export const GET = async (req: NextRequest) => {
        const dataPotongan = await prisma.potongan.findMany({
          
        });
          return NextResponse.json(dataPotongan);
        };
