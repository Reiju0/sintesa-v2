import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const GET = async (req: NextRequest) => {
    const data = await prisma.potongan.findMany({
        select:{
            id:true,
            thang:true,
            kdpemda:true,
            nmpemda:true, 
            kdkppn:true, 
            nmkppn:true, 
            periode:true, 
            potongan:true,
            nmperiode:true, 
            KDAKUN:true, 
            transaksi:true
        }
    });
    return NextResponse.json(data);
};

