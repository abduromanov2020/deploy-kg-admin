import React from 'react';

import { Button } from '@/components/ui/button';

import { ArticleTable } from '@/modules/dashboard/component/ArticleCard/ArticleTable';

export const ArticleCard = () => {
  return (
    <div className='bg-white rounded-md col-span-5'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Artikel Teratas</span>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500'
        >
          Lihat Semua
        </Button>
      </div>
      <div className='p-8'>
        <ArticleTable />
      </div>
    </div>
  );
};
