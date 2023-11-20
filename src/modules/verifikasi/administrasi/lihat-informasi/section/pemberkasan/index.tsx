import Image from 'next/image';
import React from 'react';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';

import PlaceholderImg from '~/images/placeholderImageFile.jpg';

const PemberkasanSection = () => {
  return (
    <div className='my-3 w-full'>
      <div className='grid grid-cols-3 gap-3'>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Kartu Tanda Penduduk</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Pas Foto</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Ijazah Terakhir</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Transkrip Nilai Terakhir</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Kartu Keluarga</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-md'>Surat Rekomendasi</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover'
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default PemberkasanSection;
