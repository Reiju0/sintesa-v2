import { typeProduk } from "@/types";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

//read data from prisma
export const GET = async (req: NextRequest) => {
    const alokasi = await prisma.produk.findMany({})
    return NextResponse.json(alokasi)
}
export const POST = async (req: NextRequest, res : NextResponse) => {
            const body : typeProduk = await req.json()
            const postData = await prisma.produk.create({
                data : {
                    nmproduk : body.nmproduk,
                    harga : Number(body.harga),
                    brandId : Number(body.brandId)
                }
            });
            return NextResponse.json(postData)
            
}

