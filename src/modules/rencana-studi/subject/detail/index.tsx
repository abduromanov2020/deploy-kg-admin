'use client';

// Import locale for Indonesian
import { useParams } from 'next/navigation';
import React from 'react';

import {
  useGetSessions,
  useGetSubjectById,
} from '@/hooks/rencana-studi/subjects/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import InformasiMataKuliah from '@/modules/rencana-studi/subject/detail/components/informasi-matakuliah';
import InformasiPertemuan from '@/modules/rencana-studi/subject/detail/components/informasi-pertemuan';

const RencanaStudiDetailSubject = () => {
  const ITEMS = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    {
      name: 'Daftar Prodi',
      link: '/rencana-studi/program-studi/1',
    },
    {
      name: 'Daftar Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1',
    },
    {
      name: 'Detail Matkul',
      link: '/rencana-studi/program-studi/1/mata-kuliah/1/detail/1',
    },
  ];

  const params = useParams();
  const { id_subject } = params;

  const { data: subjects } = useGetSubjectById(String(id_subject));
  const { data: sessions } = useGetSessions(String(id_subject));

  const subject = subjects?.data;
  const session = sessions?.data.sessions;

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={ITEMS} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded'>
        <div className='p-4 border-b-2'>
          <p className='text-base font-semibold'>Detail Mata Kuliah</p>
        </div>
        <Tabs defaultValue='mata-kuliah'>
          <TabsList className='grid w-[450px] grid-cols-2 px-8 py-4'>
            <TabsTrigger value='mata-kuliah'>Informasi Mata Kuliah</TabsTrigger>
            <TabsTrigger value='pertemuan'>Informasi Pertemuan</TabsTrigger>
          </TabsList>
          <TabsContent value='mata-kuliah'>
            {subject && <InformasiMataKuliah subject={subject} />}
          </TabsContent>
          <TabsContent value='pertemuan'>
            {session && <InformasiPertemuan session={session} />}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default RencanaStudiDetailSubject;
