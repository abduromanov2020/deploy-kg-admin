'use client';
import Link from 'next/link';
import React from 'react';
import { TbEdit } from 'react-icons/tb';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { DeleteConfirmModal } from '@/modules/acara-kampus-gratis/component/DeleteConfirmationModal';
import { DeskripsiAcaraTabContent } from '@/modules/acara-kampus-gratis/component/detailTabContent/DeskripsiAcaraTab';
import { InformasiAcaraTabContent } from '@/modules/acara-kampus-gratis/component/detailTabContent/InformasiAcaraTab';
import { KontakAcaraTabContent } from '@/modules/acara-kampus-gratis/component/detailTabContent/KontakAcaraTab';
import { PreviewAcaraTabContent } from '@/modules/acara-kampus-gratis/component/detailTabContent/PreviewAcaraTab';

export const DetailAcaraModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Detail Acara',
      link: `/acara-kampus-gratis/detail-acara`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Detail Acara</span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='account' className='w-full'>
            <TabsList className='mb-5 flex justify-between'>
              <div>
                <TabsTrigger value='preview' className='px-5'>
                  Preview
                </TabsTrigger>
                <TabsTrigger value='deskripsi' className='px-5'>
                  Deskripsi
                </TabsTrigger>
                <TabsTrigger value='informasi' className='px-5'>
                  Informasi
                </TabsTrigger>
                <TabsTrigger value='kontak' className='px-5'>
                  Kontak
                </TabsTrigger>
              </div>
              <div className='flex gap-3'>
                <Link href='/acara-kampus-gratis/edit-acara/'>
                  <Button variant='primaryOutline' className='flex gap-2'>
                    <TbEdit size={20} />
                    Edit Informasi
                  </Button>
                </Link>
                <DeleteConfirmModal type='buttonIcon' />
              </div>
            </TabsList>
            <TabsContent value='preview'>
              <PreviewAcaraTabContent />
            </TabsContent>
            <TabsContent value='deskripsi'>
              <DeskripsiAcaraTabContent />
            </TabsContent>
            <TabsContent value='informasi'>
              <InformasiAcaraTabContent />
            </TabsContent>
            <TabsContent value='kontak'>
              <KontakAcaraTabContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
