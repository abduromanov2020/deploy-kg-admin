'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { TambahClassMentoringForm } from '@/modules/studi-ku/live-mentoring/components/TambahMentoringForm/ClassMentoringForm';
import { TambahGroupMentoringForm } from '@/modules/studi-ku/live-mentoring/components/TambahMentoringForm/GroupMentoringForm';
import { TambahIndividualMentoringForm } from '@/modules/studi-ku/live-mentoring/components/TambahMentoringForm/IndividualMentoringForm';

const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});

export const TambahLiveMentoringModule = () => {
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
      name: 'Tambah Live Mentoring',
      link: `/studi-ku/live-mentoring/tambah-live-mentoring`,
    },
  ];

  const [jenis_mentoring, setJenisMentoring] = useState('');

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
          <span className='font-semibold '>Tambah Live Mentoring</span>
        </div>
        <div className='p-8'>
          <div className='pb-5'>
            <p className='text-sm font-semibold mb-3'>Jenis Mentoring</p>
            <Select onValueChange={(event) => setJenisMentoring(event)}>
              <SelectTrigger>
                <SelectValue placeholder='Jenis Mentoring' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='class_mentoring'>Class Mentoring</SelectItem>
                <SelectItem value='group_mentoring'>Group Mentoring</SelectItem>
                <SelectItem value='individual_mentoring'>
                  Individual Mentoring
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {jenis_mentoring === 'class_mentoring' ? (
            <TambahClassMentoringForm />
          ) : jenis_mentoring === 'group_mentoring' ? (
            <TambahGroupMentoringForm />
          ) : jenis_mentoring === 'individual_mentoring' ? (
            <TambahIndividualMentoringForm />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
