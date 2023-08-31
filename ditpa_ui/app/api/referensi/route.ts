import { typeProduk } from "@/types";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

//read data from prisma
export const GET = async (req: NextRequest) => {
    const alokasi = await prisma.produk.findMany({})
    return NextResponse.json(alokasi)
}

//method POST
export const POST = async (req: NextRequest, res : NextResponse) => {
    if (req.method === "POST"){
    try {
            const body : typeProduk = await req.json()
            const postData = await prisma.produk.create({
                data : {
                    nmproduk : body.nmproduk,
                    harga : Number(body.harga),
                    brandId : Number(body.brandId)
                }
            });
            return NextResponse.json(postData)
        } catch (err) {
            console.log("terjadi kesalahan saat melakukan post", err);
           return NextResponse.json({msg : "terjadi kesalahan saat menambahkan Data"})
        } 
        } else {
            return NextResponse.json({msg : "Method HTTP tidak d!iizinkan"})
}}

// opsi method DELETE
export const DELETE = async (req : NextRequest, res : NextResponse) => {
    if (req.method === "DELETE") {
        try {
            const url = new URL(req.url).searchParams;
            const id = Number(url.get("id")) || 0;

            const deleteData = await prisma.produk.delete({
                where : {
                    id : id
                }
            })
            return NextResponse.json(deleteData, {status : 200})
        } catch (err) {
            console.log("Data gagal di hapus!");
            
        }
    } else {
          return NextResponse.json({msg : "Method HTTP tidak d!iizinkan"})
    }
};

export const PUT = async (req : NextRequest, res : NextResponse) => {
    if (req.method === "PUT"){
        try {
            const url = new URL(req.url).searchParams;
            const id = Number(url.get("id")) || 0;
            const body : typeProduk = await req.json()
            const updateData = await prisma.produk.update({
                where : {
                    id : id
                }, 
                data : {
                    nmproduk : body.nmproduk,
                    harga : Number(body.harga),
                    brandId : Number(body.brandId)
                }
            })
            return NextResponse.json(updateData, {status : 200})
        } catch (err) {
            console.log("Data gagal di hapus!");
            
        }
} else {
    return NextResponse.json({msg : "Method HTTP tidak d!iizinkan"})
}};