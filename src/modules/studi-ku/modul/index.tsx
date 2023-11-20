import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { CardComponent } from '@/components/card';

import {
  MODUL_DATA,
  MODULE_BREADCRUMBS,
} from '@/modules/studi-ku/modul/contant';

export const ListModul = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={MODULE_BREADCRUMBS} className='!p-0' />
      </div>
      <div className='bg-white w-full rounded-md shadow-md'>
        <p className='text-dark-900 font-semibold  border-b border-slate-200 p-4'>
          Daftar Modul Mata Kuliah Manajemen Keuangan
        </p>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-5'>
          {MODUL_DATA.map((item, index) => {
            return (
              <CardComponent
                key={index}
                title={item.title}
                description={item.description}
                img={item.img}
                slug={item.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
