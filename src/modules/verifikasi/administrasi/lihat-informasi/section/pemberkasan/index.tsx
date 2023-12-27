import Image from 'next/image';
import React from 'react';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';

import PlaceholderImg from '~/images/placeholderImageFile.jpg';

const PemberkasanSection = ({ dataFile }: any) => {
  return (
    <div className='my-3 w-full'>
      {dataFile ? (
        <>
          {' '}
          <div className='grid grid-cols-3 gap-5'>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>KTP</CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.id_card || PlaceholderImg}
                  alt='ktp'
                  width={350}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>KK</CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.family_card || PlaceholderImg}
                  alt='kk'
                  width={350}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>Pas Foto</CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.photo || PlaceholderImg}
                  alt='foto-diri'
                  width={350}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>KTM</CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.student_card || PlaceholderImg}
                  alt='ktm'
                  width={350}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>
                Transkrip Nilai Terakhir
              </CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.transcript || PlaceholderImg}
                  alt='transkrip-nilai'
                  width={350}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
            <Card key='1' className='rounded-lg overflow-hidden'>
              <CardTitle className='p-2 text-sm'>Ijazah Terakhir</CardTitle>
              <CardHeader className='p-0 '>
                <Image
                  src={dataFile?.diploma_certificate || PlaceholderImg}
                  alt='ijazah-terakhir'
                  width={300}
                  height={180}
                  className='object-cover w-full max-h-[180px] max-w-[350px]'
                />
              </CardHeader>
            </Card>
          </div>
        </>
      ) : (
        <div className='grid place-content-center h-96 w-full'>
          <p className='text-center text-neutral-900 text-[18px] font-[500]'>
            Tidak Ada Data
          </p>
        </div>
      )}
    </div>
  );
};

export default PemberkasanSection;
