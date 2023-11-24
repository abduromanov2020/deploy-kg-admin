import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { TAMBAH_MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';

const TambahQuizModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={TAMBAH_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Tambah Quiz Mata Kuliah Manajemen Keuangan' />
        </div>
        <div className='flex-col flex px-5 gap-2'></div>
      </div>
    </div>
  );
};

export default TambahQuizModule;
