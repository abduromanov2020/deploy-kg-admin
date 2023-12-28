'use client';

import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TablePenilaian } from '@/modules/nilai-sertifikat/nilai/components/TablePenilaian';
import TableCapaian from '@/modules/nilai-sertifikat/nilai/components/TableCapaian';
import { TableMatakuliah } from '@/modules/nilai-sertifikat/nilai/components/TableMatakuliah';

const DetailMatakuliahModule = () => {
  const DetailMatakuliahBreadcrumb = [
    {
      name: 'Nilai',
      link: '/nilai-dan-sertifikat/nilai',
    },
    {
      name: 'Detail Mahasiswa',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1`,
    },
    {
      name: 'Detail Semester',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1/detail-semester/2`,
    },
    {
      name: 'Detail Matakuliah',
      link: `/nilai-dan-sertifikat/nilai/detail-mahasiswa/1/detail-semester/2/detail-matakuliah/3`,
    },
  ];

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

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={DetailMatakuliahBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='flex justify-between items-center border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>Detail Mata Kuliah</h3>
        </div>
        <div className='px-5 pb-5'>
          <div className='flex flex-col gap-5'>
            <h6 className='font-semibold'>Informasi Mahasiswa</h6>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nama Mahasiswa
                  </TableCell>
                  <TableCell className='border-2'>Erif</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Jumlah SKS
                  </TableCell>
                  <TableCell className='border-2'>4 SKS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nilai Mutu
                  </TableCell>
                  <TableCell className='border-2'>12</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h6 className='font-semibold'>Penilaian</h6>
            <TablePenilaian data={dataNilai} />
            <h6 className='font-semibold'>Capaian Pembelajaran Tujuan</h6>
            <TableCapaian />
            <h6 className='font-semibold'>UI/UX Design</h6>
            <TableMatakuliah data={dataMk} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailMatakuliahModule;
