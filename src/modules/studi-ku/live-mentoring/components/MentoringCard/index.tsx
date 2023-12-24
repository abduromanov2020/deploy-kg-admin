'use client';
import Link from 'next/link';
import React from 'react';
import Avatar from 'react-avatar';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

export const MentoringCard = () => {
  return (
    <Card className='w-full'>
      <CardContent className='pt-4 flex flex-col gap-2'>
        <CardTitle className='text-xl font-semibold'>Diskusi Modul 1</CardTitle>
        <div className='flex gap-5 mt-2'>
          {/* {data.description} */}
          {/* {row?.original.image !== null ? (
          <Image
            src={row?.original.image as string}
            width={35}
            height={35}
            alt='avatar'
            className='w-10 h-10 rounded-md object-cover bg-center'
          />
        ) : (
          <Avatar
            name={row?.original?.name || 'a'}
            color='#F26800'
            className='rounded-md'
            size='35'
          />
        )} */}
          <div className='flex gap-2'>
            <Avatar
              name='Syah Wisnu'
              color='#F26800'
              className='rounded-full'
              size='35'
            />
            <div className='flex flex-col justify-between'>
              <p className='font-medium text-black text-sm'>Syah Wisnu</p>
              <p className='text-[10px]'>Dosen FEB</p>
            </div>
          </div>
          <div className='border-x border-gray-400 px-5'>
            <p className='font-medium text-black text-sm'>28</p>
            <p className='text-[10px]'>Balasan</p>
          </div>
          <div>
            <p className='font-medium text-black text-sm'>31/33</p>
            <p className='text-[10px]'>Peserta</p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <Link href='/studi-ku/diskusi/detail-diskusi/1}'>
            <Button className='bg-primary-500'>Detail Live Mentoring</Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between text-sm text-neutral-500 border-t items-center py-4'>
        {/* {formatDate(data.date_start)} | {formatTime(data.date_start)} WIB */}
        12 Desember 2023 | 12.00 WIB
      </CardFooter>
    </Card>
  );
};
