'use client';

import React from 'react';
import { BiSolidFileExport } from 'react-icons/bi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';

import TableCapaian from '@/modules/verifikasi/konversi/components/TableCapaian';
import { TableMatakuliahKonversi } from '@/modules/verifikasi/konversi/components/TableMatakuliah';
import { TablePenilaianKonversi } from '@/modules/verifikasi/konversi/components/TablePenilaian';

interface TProps {
  idKonversi: string;
  idSubject: string;
}

const DetailMatakuliahKonversiModule = ({ idKonversi, idSubject }: TProps) => {
  const DetailMataKuliahKonversiBreadcrumb = [
    {
      name: 'Verifikasi Konversi',
      link: '/verifikasi/konversi',
    },
    {
      name: 'Detail Konversi',
      link: `/verifikasi/konversi/detail-transfer-konversi/${idKonversi}`,
    },
    {
      name: 'Detail Mata Kuliah',
      link: `/verifikasi/konversi/detail-transfer-konversi/${idKonversi}/detail-mata-kuliah/${idSubject}`,
    },
  ];

  const dataMk = Array.from({ length: 10 }, (_, i) => ({
    no: i + 1,
    pertemuan: i + 1,
    jumlah_module: 2,
    waktu_video: 60,
    jumlah_jurnal: 2,
    waktu_jurnal: 60,
    penugasan_individu: 2,
    waktu_penugasan: 60,
    penugasan_kelompok: 2,
  }));

  const dataNilai = Array.from({ length: 10 }, (_, i) => ({
    no: i + 1,
    pertemuan: i + 1,
    nilai_tugas: 80,
    nilai_quiz: 85,
    nilai_diskusi: 90,
    nilai_keaktifan: 90,
    nilai_modul: 90,
    nilai_rata_rata: 87,
  }));

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={DetailMataKuliahKonversiBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='flex justify-between items-center border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>
            Detail Transfer Konversi SKS
          </h3>
          <Button className='hover:bg-primary-600 shadow-md bg-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
            <BiSolidFileExport size={24} />
            <p className='leading-none'>Unduh</p>
          </Button>
        </div>
        <div className='px-5 py-3 flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <h6 className='font-semibold text-lg'>MK-{idSubject}</h6>
            <TableMatakuliahKonversi data={dataMk} />
          </div>
          <div className='flex flex-col gap-3'>
            <h6 className='font-semibold text-lg'>
              Capaian Pembelajaran Lulusan
            </h6>
            <div className='my-3 w-full'>
              <TableCapaian />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h6 className='font-semibold text-lg'>Penilaian</h6>
            <TablePenilaianKonversi data={dataNilai} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailMatakuliahKonversiModule;
