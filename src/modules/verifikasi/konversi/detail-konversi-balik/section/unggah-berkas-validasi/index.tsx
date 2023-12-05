import Image from 'next/image';
import React from 'react';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';

import PlaceholderImg from '~/images/placeholderImageFile.jpg';

const UnggahBerkasValidasiSection = () => {
  return (
    <div className='my-3 w-full'>
      <div className='grid grid-cols-3 gap-5'>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-sm'>Transkrip Nilai Terakhir</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover w-full'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-sm'>Surat Pengunduran Diri Universitas Asal</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover w-full'
            />
          </CardHeader>
        </Card>
        <Card
          key='1'
          className='rounded-lg overflow-hidden'
        >
          <CardTitle className='p-2 text-sm'>Surat Pernyataan Lulus PDDIKTI</CardTitle>
          <CardHeader className='p-0 '>
            <Image
              src={PlaceholderImg}
              alt='Placeholder-Image'
              width={350}
              height={200}
              className='object-cover w-full'
            />
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default UnggahBerkasValidasiSection