import { BreadCrumb } from '@/components/BreadCrumb';
import React from 'react';

import { ITEMSDETAIL } from '../constants';

const DetailArtikelModule = () => {
  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <BreadCrumb items={ITEMSDETAIL} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white'></div>
    </main>
  );
};

export default DetailArtikelModule;
