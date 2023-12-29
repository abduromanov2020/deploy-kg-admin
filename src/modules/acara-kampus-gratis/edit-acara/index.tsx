'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { useRecoilState } from 'recoil';

import { useGetDetailEventRequest } from '@/hooks/acara-kampus-gratis/hooks';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CoverAcaraForm } from '@/modules/acara-kampus-gratis/component/form/CoverAcaraForm';
import { DetailAcaraForm } from '@/modules/acara-kampus-gratis/component/form/DetailAcaraForm';
import {
  activeTabAtom,
  coverFilledAtom,
} from '@/recoils/acara-kampus-gratis/atom';

export const EditAcaraModule = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  const [isCoverFilled, setCoverFilled] = useRecoilState(coverFilledAtom);
  const params = useParams();
  const eventId = params.id;
  const { data } = useGetDetailEventRequest(eventId.toString());

  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Edit Acara Kampus',
      link: `/acara-kampus-gratis/edit-acara`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Tambah Acara Kampus</span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='cover' value={activeTab} className='w-full'>
            <TabsList className='flex gap-5 items-center'>
              <TabsTrigger
                value='cover'
                className={`flex gap-2 border-none ${
                  isCoverFilled && 'text-primary-500'
                }`}
                onClick={() => setActiveTab('cover')}
              >
                <FaInfoCircle />
                Cover Acara Kampus
              </TabsTrigger>
              <hr className='border-dark-600 w-20 border' />
              <TabsTrigger
                value='detail'
                disabled={!isCoverFilled}
                onClick={() => setActiveTab('detail')}
                className='border-none'
              >
                Detail Acara Kampus
              </TabsTrigger>
            </TabsList>
            <div className='mt-8'>
              <TabsContent value='cover'>
                <CoverAcaraForm type='edit' data={data?.data} />
              </TabsContent>
              <TabsContent value='detail'>
                <DetailAcaraForm type='edit' data={data?.data} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
