import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { typeRenkas } from "@/types";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const GET = async (req: NextRequest) => {
  const dataRenkas = await prisma.renkas.findMany({
    select: {
      id: true,         
      kdsatker: true,
      kdkppn: true,
      kdjenis: true,                              
      periode: true,
      renkas: true,
      createdAt: true,
      updatedAt: true,
      Alokasi_tkd: true,
    },
  });
    return NextResponse.json(dataRenkas);
  };

export const POST = async (req: Request, res: NextResponse) => {
  if(req.method === "POST"){
    try {
      const body : typeRenkas = await req.json()
      //validasi 1
      const existingData = await prisma.renkas.findFirst({
          where: {
              kdsatker: body.kdsatker,
              kdkppn: body.kdkppn,
              kdjenis: body.kdjenis,
              periode: body.periode,
          },    
        });
  
      if (existingData) {
        console.log("data sudah ada");
        return NextResponse.json({ msg: "Data dengan parameter yang sama sudah ada." }, {status : 400});
        
      }
      //validasi 2
      if (!body.kdsatker || !body.kdkppn || !body.kdjenis || !body.periode ) {
        console.log("semua kolom harus diisi!")
        return NextResponse.json({ message: 'Semua kolom data harus diisi.' }, {status : 404})
      }

      console.log("Data diterima:", body);
      const dataRenkas = await prisma.renkas.create({
        data : {
            kdsatker: body.kdsatker,
            kdkppn: body.kdkppn,
            kdjenis: body.kdjenis,
            periode: body.periode, 
          renkas : Number(body.renkas)
        }
      })
        return NextResponse.json(dataRenkas, {status : 201});
      } catch (err) {
      console.error(err);
      return NextResponse.json({msg : "terjadi kesalahan menambahkan data!"})
      }
    } else {
      return NextResponse.json({msg : "Method HTTP Request tidak sesuai!"})
    }
  }

export const PUT = async (req : NextRequest, res : NextResponse) => {
    if (req.method === "PUT"){
        try {
            const url = new URL(req.url).searchParams;
            const id = Number(url.get("id")) || 0;
            const body : typeRenkas = await req.json()
            const updateData = await prisma.renkas.update({
                where : {
                    id : id
                }, 
                data : {
                    kdsatker: body.kdsatker,
                    kdkppn: body.kdkppn,
                    kdjenis: body.kdjenis,
                    periode: body.periode, 
                  renkas : Number(body.renkas)
                }
            })
            console.log("data berhasil di update");
            return NextResponse.json(updateData, {status : 200})
        } catch (err) {
            console.log("Data gagal di update!", err);
            
        }
} else {
    return NextResponse.json({msg : "Method HTTP tidak d!iizinkan"})
}};

export const DELETE = async (req : NextRequest, res : NextResponse) => {
  if (req.method === "DELETE") {
      try {
          const url = new URL(req.url).searchParams;
          const id = Number(url.get("id")) || 0;

          const deleteData = await prisma.renkas.delete({
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