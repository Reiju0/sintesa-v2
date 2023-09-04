import {SVGProps} from "react";
import type { potongan } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type typePotongan = {
  id: number;
    thang: string;
    kdpemda: string;
    kdkppn: string;
    periode: string;
    potongan: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    KDAKUN: Number;
    transaksi:{
      id: number;
      thang: string;
      kdpemda: string;
      nmpemda: string;
      kdkppn: string;
      nmkppn: string;
      kdjenis: string | null;
      nmjenis: string | null;
      periode: string;
      nmperiode: string;
      alokasi_periode: Decimal;
      createdAt: Date | null;
    }
  
}

export type typeTransaksi = {
  id: number;
  thang: string;
  kdpemda: string;
    nmpemda: string;
    kdkppn: string;
    nmkppn: string;
    kdjenis: string | null;
    nmjenis: string | null;
    periode: string;
    nmperiode: string;
    alokasi_periode: Decimal;
    createdAt: Date | null;

}

export type typeBrand = {
  id: number;
  nama: string;
}

export type typeProduk = {
  id: number;
  nmproduk: string;
  harga: number;
  brandId: number;
}

export type typeRenkas = {
  id: number;
  kdsatker: string;
  kdkppn: string;
  kdjenis: string;
  periode: string;
  renkas: Number;
  createdAt: Date | null;
  updatedAt: Date | null;
  Alokasi_tkd : {}
}