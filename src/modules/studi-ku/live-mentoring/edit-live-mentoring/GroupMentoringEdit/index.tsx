'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

import { EditGroupMentoringForm } from '@/modules/studi-ku/live-mentoring/components/EditMentoringForm/GroupMentoringForm';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const EditGroupMentoringModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Live Mentoring',
      link: `/studi-ku/live-mentoring`,
    },
    {
      name: 'Detail Live Mentoring',
      link: `/studi-ku/live-mentoring/detail-live-mentoring/1`,
    },
    {
      name: 'Edit Group Mentoring',
      link: `/studi-ku/live-mentoring/edit-live-mentoring/group-mentoring/1`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
          <span className='font-semibold '>Edit Group Mentoring</span>
        </div>
        <div className='p-8'>
          <EditGroupMentoringForm />
        </div>
      </div>
    </div>
  );
};
