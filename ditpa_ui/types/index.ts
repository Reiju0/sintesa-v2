import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type typePotongan = {
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
  potongan: string;
  KDAKUN: string;
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
  alokasi_periode: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type typeReferensi = {
    kdkabkota: string | null;
    nmkabkota: string | null;
    kdkppn: string | null;
    nmkppn: string | null;
    kdkanwil: string | null;
}

export type typeAkun = {
    kdakun: string;
    nmakun: string;
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