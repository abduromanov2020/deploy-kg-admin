'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import { useGetModulesBySessionId } from '@/hooks/studi-ku/modul/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { CardComponent } from '@/components/card';

import { MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import { AddModuleModal } from '@/modules/studi-ku/modul/tambah/addModuleModal';

export const ListModul = () => {
  const searchParams = useSearchParams();

  const subject_id = searchParams.get('subject_id') ?? '';
  const session_id = searchParams.get('session_id') ?? '';

  const { data } = useGetModulesBySessionId(subject_id, session_id);

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={MODULE_BREADCRUMBS} className='!p-0' />
      </div>
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
          {/* <Button asChild variant='primary'>
            <Link
              href={`/studi-ku/modul/tambah?subject_id=${subject_id}&session_id=${session_id}`}
              className='flex gap-2 items-center'
            >
              <BiPlusCircle className='text-white text-xl' />
              Tambah Modul
            </Link>
          </Button> */}
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-5'>
          {data?.data.modules.map((item) => {
            return (
              <CardComponent
                key={item.id}
                title={item.title}
                description={item.description}
                img={data.data.subject.thumbnail}
                link={`/studi-ku/modul/${item.id}?subject_id=${subject_id}&session_id=${session_id}`}
                slug={[
                  item.total_videos + ' Video',
                  item.total_documents + ' Dokumen',
                ]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
