import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { typePotongan } from "@/types";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const GET = async (req: NextRequest) => {
  const dataPotongan = await prisma.potongan.findMany({
    select: {
      id: true,         
      thang: true,
      periode: true,
      kdkppn: true,
      kdpemda: true,                              
      KDAKUN: true,
      potongan: true,
      transaksi: true,
    },
  });
    return NextResponse.json(dataPotongan);
  };

export const POST = async (req: Request, res: NextResponse) => {
  if(req.method === "POST"){
    try {
      const body : typePotongan = await req.json()
      //validasi 1
      const existingData = await prisma.potongan.findFirst({
          where: {
            periode: body.periode,
            kdkppn: body.kdkppn,
            kdpemda: body.kdpemda,
          },
        });
  
      if (existingData) {
        console.log("data sudah ada");
        return NextResponse.json({ msg: "Data dengan parameter yang sama sudah ada." }, {status : 400});
        
      }
      //validasi 2
      if (!body.thang || !body.periode || !body.kdkppn || !body.kdpemda || !body.potongan || !body.KDAKUN) {
        console.log("semua kolom harus diisi!")
        return NextResponse.json({ message: 'Semua kolom data harus diisi.' }, {status : 404})
      }

      console.log("Data yang diterima:", body);
      const dataPotongan = await prisma.potongan.create({
        data : {
          thang  : body.thang, 
          periode : body.periode,
          kdkppn : body.kdkppn,
          kdpemda : body.kdpemda, 
          potongan : Number(body.potongan), 
          KDAKUN : Number(body.KDAKUN), 
        }
      })
        return NextResponse.json(dataPotongan, {status : 201});
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
            const body : typePotongan = await req.json()
            const updateData = await prisma.potongan.update({
                where : {
                    id : id
                }, 
                data : {
                  thang    : body.thang, 
                  periode  : body.periode,
                  kdkppn : body.kdkppn,
                  kdpemda : body.kdpemda, 
                  potongan : Number(body.potongan), 
                  KDAKUN : Number(body.KDAKUN), 
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

          const deleteData = await prisma.potongan.delete({
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