"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

export const FilterPeriode = () => {
  return (
    <>
      <div className="w-40">
        <Select
          aria-label="label for the select"
          variant="flat"
          placeholder="Pilih Periode"
          size="sm"
          className="max-w-[20]">
          <SelectItem value="31">Triwulan I</SelectItem>
          <SelectItem value="32">Triwulan II</SelectItem>
          <SelectItem value="33">Triwulan III</SelectItem>
          <SelectItem value="34">Triwulan IV</SelectItem>
        </Select>
      </div>
    </>
  );
};

export const FilterKPPN = () => {
  return (
    <>
      <div className="w-40">
        <Select
          aria-label="label for the select"
          variant="flat"
          placeholder="Pilih KPPN"
          size="sm"
          className="max-w-xs">
          <SelectItem value="001">KPPN Banda Aceh</SelectItem>
          <SelectItem value="002">KPPN Langsa</SelectItem>
          <SelectItem value="003">KPPN Medan I</SelectItem>
        </Select>
      </div>
    </>
  );
};

export const FilterPemda = () => {
  return (
    <>
      <div className="w-40">
        <Select
          aria-label="label for the select"
          variant="flat"
          placeholder="Pilih Pemda"
          size="sm"
          className="max-w-xs">
          <SelectItem key="1" value="0600">
            Kab. Aceh Besar
          </SelectItem>
          <SelectItem key="2" value="0601">
            Kab. Langsa
          </SelectItem>
          <SelectItem key="3" value="0700">
            Kota Meda
          </SelectItem>
        </Select>
      </div>
    </>
  );
};
