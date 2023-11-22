'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { EDIT_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

const EditModulModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={EDIT_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
    </div>
  );
};

export default EditModulModule;
