'use client';

import Link from 'next/link';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import { EDIT_PRESENSI_DAN_NILAI_BREADCRUMBS } from '@/modules/studi-ku/presensi-dan-nilai/constant';

import EditTablePresensi from '../components/edit-table-presensi';

const EditPresensiDanNilaiModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb
          items={EDIT_PRESENSI_DAN_NILAI_BREADCRUMBS}
          className='!p-0 '
        />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5'>
        <div className='flex justify-between items-center'>
          <TitleModule title='Presensi: Pertemuan 1' />
        </div>
        <div className='px-5'>
          <EditTablePresensi />
        </div>
        <div className='flex justify-end items-center px-5 gap-2'>
          <Button
            variant='outline'
            className='border-red-700 text-red-700 hover:text-red-700'
          >
            Batal
          </Button>
          <Button
            className='bg-primary-500 flex gap-2 items-center hover:bg-primary-500/80'
            asChild
          >
            <Link href='/studi-ku/presensi-dan-nilai'>
              <FaRegEdit size={15} />
              Simpan Perubahan
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPresensiDanNilaiModule;
