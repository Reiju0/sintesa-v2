import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// export const getRefTransaksi = async (req: NextRequest) => {
//     const data = await prisma.transaksi.findFirst({
//         where:{
//             periode:
//         }
//     });
//     return NextResponse.json(data);
