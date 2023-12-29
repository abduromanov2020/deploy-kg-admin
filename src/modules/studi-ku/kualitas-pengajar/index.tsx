'use client';

import Image from 'next/image';
import React from 'react';
import Avatar from 'react-avatar';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { KUALITAS_PENGAJAR_BREADCRUMBS } from '@/modules/studi-ku/kualitas-pengajar/constant';

export default function KualitasPengajarModule() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader>
          <BreadCrumb items={KUALITAS_PENGAJAR_BREADCRUMBS} className='!p-0 ' />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='border-b border-slate-200'>
          <CardTitle className='text-base'>
            Kualitas Pengajar & Materi Ajar : Pertemuan 1
          </CardTitle>
        </CardHeader>
        <CardContent className='py-8'>
          <h3 className='text-base font-semibold pb-4'>Detail Kelas</h3>
          <Table className='w-full border border-gray-200'>
            <TableBody>
              <TableRow>
                <TableCell className='w-[300px]'>Nama Dosen</TableCell>
                <TableCell>Syah Wisnu S.Pd</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bahan Ajar</TableCell>
                <TableCell>
                  <Card className='w-3/4'>
                    <CardHeader className='border-b-2 py-2 px-3'>
                      <CardTitle className='p-0 text-base font-medium'>
                        Bahan Ajar.pdf
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='bg-gray-500 flex justify-center h-[200px]'>
                      <Image
                        src='/svg/file-lines.svg'
                        alt='file-lines'
                        width={50}
                        height={50}
                      />
                    </CardContent>
                  </Card>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jumlah Responden</TableCell>
                <TableCell>45/50 Menilai</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rata Rata Penilaian Dosen</TableCell>
                <TableCell>8.7/10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rata Rata Penilaian Materi</TableCell>
                <TableCell>8.7/10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <h3 className='text-base font-semibold pt-4'>Detail Penilaian</h3>
          <Table className='w-full border border-gray-200 mt-8'>
            <TableHeader>
              <TableRow className='uppercase'>
                <TableHead className='text-center'>No</TableHead>
                <TableHead className='w-[150px]'>ID Mahasiswa</TableHead>
                <TableHead className='w-[200px]'>Mahasiswa</TableHead>
                <TableHead>Kualitas Materi</TableHead>
                <TableHead>Kualitas Dosen</TableHead>
                <TableHead>Penilaian Dosen</TableHead>
                <TableHead className='w-[300px]'>Tanggal Penilaian</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='text-center'>{item}</TableCell>
                  <TableCell>2001726</TableCell>
                  <TableCell>
                    <Avatar
                      name='Zulham Awaliyah'
                      size='30'
                      round={true}
                      className='mr-2'
                    />
                    Zulham Awaliyah
                  </TableCell>
                  <TableCell>8/10</TableCell>
                  <TableCell>8/10</TableCell>
                  <TableCell className='text-primary-500'>100/100</TableCell>
                  <TableCell>Senin, 16 Oktober 2023 - 16:30</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
