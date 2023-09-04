import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//read join tabel transaksi dan potongan
export const GET = async (req: NextRequest) => {

    return NextResponse.json({ msg : "Hello from API Routes"});
};

