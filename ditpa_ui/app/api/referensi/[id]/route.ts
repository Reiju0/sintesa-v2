import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { typeProduk } from "@/types";

const prisma = new PrismaClient()


export const PATCH = async (req : NextRequest, {params} : {params : {id : string}}) => {
    const body : typeProduk = await req.json()
    const updateData = await prisma.produk.update({
                where : {
                    id : Number(params.id)
                },
                data : {
                    nmproduk : body.nmproduk,
                    harga : Number(body.harga),
                    brandId : Number(body.brandId)
                }
            });

    return NextResponse.json({updateData})
}

// export const DELETE = async ({params} : {params : {id : string}}) => {
//     const deleteData = await prisma.produk.delete({
//                 where : {
//                     id : Number(params.id)
//                 },
//             });

//     return NextResponse.json({deleteData})
// }