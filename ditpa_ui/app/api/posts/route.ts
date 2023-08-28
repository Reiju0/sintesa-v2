import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

//read data from prisma
export const GET = async (req: NextRequest) => {
    const alokasi = await prisma.alokasi_dbh.findMany({})
    return NextResponse.json(alokasi)
}

