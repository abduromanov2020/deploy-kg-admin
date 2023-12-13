'use client';

import Image from 'next/image';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import DetailHasil from '@/modules/studi-ku/tugas/detail/detail-hasil';
import DetailTugas from '@/modules/studi-ku/tugas/detail/detail-tugas';

import { ITEMS } from './constant';

const DetailTugasModule = () => {
  const data = [1, 2, 3];

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
              <h2 className='text-xl font-semibold'>Detail Tugas : Modul 1 </h2>
              <Button variant='primary'>
                <Image
                  src='/svg/circle-plus.svg'
                  alt='Tambah Tugas'
                  width={20}
                  height={20}
                  className='mr-2'
                />
                Tambah Tugas
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className='mt-5'>
          <Tabs defaultValue='tugas-0'>
            <TabsList>
              {data.map((item, index) => (
                <TabsTrigger key={item} value={`tugas-${index}`}>
                  Tugas {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {data.map((item, index) => (
              <TabsContent key={item} value={`tugas-${index}`}>
                <div className='flex flex-col gap-3 mt-5'>
                  <h4 className='font-bold'>Detail Tugas</h4>
                  <DetailTugas />
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                  <h4 className='font-bold'>Detail Nilai</h4>
                  <DetailHasil />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailTugasModule;
