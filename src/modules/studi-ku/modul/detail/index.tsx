import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { DETAIL_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';

const ModulDetailModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={DETAIL_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
    </div>
  );
};

export default ModulDetailModule;
