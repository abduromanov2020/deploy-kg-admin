'use client';

import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { FaFileExport } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import TablePresensi from '@/modules/studi-ku/presensi-dan-nilai/components/table-presensi';
import { PRESENSI_DAN_NILAI_BREADCRUMBS } from '@/modules/studi-ku/presensi-dan-nilai/constant';

const PresensiDanNilaiModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={PRESENSI_DAN_NILAI_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5'>
        <div className='flex justify-between items-center'>
          <TitleModule title='Presensi: Pertemuan 1' />
        </div>
        <div className='px-5 flex flex-col gap-5'>
          <div className='flex justify-between items-center'>
            <section className='w-full'>
              <div className='w-1/2 relative'>
                <Input type='text' placeholder='Search' className='pl-10' />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <AiOutlineSearch className='text-gray-400' size={20} />
                </div>
              </div>
            </section>
            <section className='flex gap-2 items-center'>
              <Button
                asChild
                variant='outline'
                className='bg-white hover:bg-gray-100 text-primary-500 hover:text-primary-500/80 rounded-md px-5 py-2 border-primary-500 flex gap-2 '
              >
                <Link href='/studi-ku/presensi-dan-nilai/edit'>
                  <FaRegEdit />
                  Edit Data
                </Link>
              </Button>
              <Button className='bg-primary-500 hover:bg-primary-500/80 text-white rounded-md px-5 py-2 flex gap-2'>
                <FaFileExport />
                Unduh
              </Button>
            </section>
          </div>
          <TablePresensi />
        </div>
      </div>
    </div>
  );
};

export default PresensiDanNilaiModule;
