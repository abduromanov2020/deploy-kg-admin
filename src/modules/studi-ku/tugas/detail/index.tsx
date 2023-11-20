'use client';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import DetailHasil from '@/modules/studi-ku/tugas/detail/detail-hasil';
import DetailTugas from '@/modules/studi-ku/tugas/detail/detail-tugas';

import { ITEMS } from './constant';

const DetailTugasModule = () => {
  return (
    <>
      <Card className='mb-5'>
        <CardHeader>
          <BreadCrumb items={ITEMS} className='!p-0' />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='border-b-2'>
          <CardTitle>
            <div className='flex center justify-between items-center'>
              <h2 className='text-xl font-semibold'>
                Detail Quiz 1 Mata Kuliah Manajemen Keuangan
              </h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='detail-tugas'>
            <TabsList>
              <TabsTrigger value='detail-tugas'>Detail Tugas</TabsTrigger>
              <TabsTrigger value='password'>Detail Hasil</TabsTrigger>
            </TabsList>
            <TabsContent value='detail-tugas'>
              <DetailTugas />
            </TabsContent>
            <TabsContent value='password'>
              <DetailHasil />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailTugasModule;
