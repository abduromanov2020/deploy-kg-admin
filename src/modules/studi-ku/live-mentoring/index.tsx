import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { MentoringCard } from '@/modules/studi-ku/live-mentoring/components/MentoringCard';

export const StudikuLiveMentoringModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Live Mentoring',
      link: `/studi-ku/live-mentoring`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
          <span className='font-semibold '>Live Mentoring</span>
        </div>
        <div className='p-8 grid grid-cols-1 md:grid-cols-3 gap-3'>
          <MentoringCard />
          <MentoringCard />
          <MentoringCard />
        </div>
      </div>
    </div>
  );
};
