'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import { useGetModulesBySessionId } from '@/hooks/studi-ku/modul/hook';

import { BreadCrumb, TCrumbItem } from '@/components/BreadCrumb';
import { CardComponent } from '@/components/card';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import { MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { AddModuleModal } from '@/modules/studi-ku/modul/tambah/addModuleModal';

export const ListModul = () => {
  const { subject_id, session_id } = useParams();

  const { data, isLoading } = useGetModulesBySessionId(
    subject_id as string,
    session_id as string,
  );

  const BreadCrumbItems: TCrumbItem[] = [
    ...MODULE_BREADCRUMBS,
    {
      name: 'Daftar Modul',
      link: `/studi-ku/modul/${subject_id}/${session_id}`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BreadCrumbItems} className='!p-0' />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-white w-full rounded-md shadow-md'>
          <div className='flex justify-between w-full  border-b border-slate-200 p-4 items-center'>
            <p className='text-dark-900 font-semibold '>
              {`Daftar Modul Mata Kuliah ${data?.data?.subject?.name}`}
            </p>
            <AddModuleModal
              modalTrigger={
                <div className='flex gap-2 items-center '>
                  <BiPlusCircle className='text-white text-xl' />
                  Tambah Modul
                </div>
              }
            />
          </div>
          <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-5'>
            {data?.data.modules.map((item) => {
              return (
                <CardComponent
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  duration={item.duration}
                  img={data.data.subject.thumbnail}
                  subject_id={subject_id as string}
                  session_id={session_id as string}
                  module_id={item.id}
                  slug={[
                    item.total_videos + ' Video',
                    item.total_documents + ' Dokumen',
                  ]}
                  link={`/studi-ku/modul/${subject_id}/${session_id}/${item.id}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
