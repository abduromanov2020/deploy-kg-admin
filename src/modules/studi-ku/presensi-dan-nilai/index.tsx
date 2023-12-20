import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import { PRESENSI_DAN_NILAI_BREADCRUMBS } from '@/modules/studi-ku/presensi-dan-nilai/constant';

const PresensiDanNilaiModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={PRESENSI_DAN_NILAI_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Presensi: Pertemuan 1' />
        </div>
      </div>
    </div>
  );
};

export default PresensiDanNilaiModule;
