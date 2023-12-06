import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Avatar from 'react-avatar';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

import { DeleteConfirmModal } from '@/modules/acara-kampus-gratis/component/DeleteConfirmationModal';

import AcaraImage from '~/images/acara-kampus-gratis/acara1.png';

export const DiskusiCard = () => {
  const formatDate = (date: string) => {
    return format(new Date(date), 'dd MMMM yyyy');
  };

  const formatTime = (time: string) => {
    return format(new Date(time), 'HH:mm');
  };
  return (
    <Card className='w-full'>
      <CardHeader className='p-0'>
        <Image
          src={AcaraImage}
          alt='artikel'
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          className='rounded-t-md'
        />
      </CardHeader>
      <CardContent className='pt-4 flex flex-col gap-2'>
        <CardTitle className='text-xl font-semibold'>Diskusi Modul 1</CardTitle>
        <CardDescription className='flex gap-5 mt-2'>
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
              <p className='font-medium text-black'>Syah Wisnu</p>
              <p className='text-[10px]'>Dosen FEB</p>
            </div>
          </div>
          <div className='border-x border-gray-500 px-5'>
            <p className='font-medium text-black'>28</p>
            <p className='text-[10px]'>Balasan</p>
          </div>
          <div>
            <p className='font-medium text-black'>31/33</p>
            <p className='text-[10px]'>Peserta</p>
          </div>
        </CardDescription>
        <div className='flex justify-between items-center mt-4'>
          <Link href='/acara-kampus-gratis/detail-acara/1}'>
            <Button className='bg-primary-500'>Detail Diskusi</Button>
          </Link>

          <Popover>
            <PopoverTrigger className='flex'>
              <div className='w-fit hover:bg-gray-200 rounded-sm'>
                <BsThreeDotsVertical size={20} />
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-fit p-0 ' align='start'>
              <div className='flex flex-col '>
                <Link href='/acara-kampus-gratis/edit-acara/1'>
                  <Button
                    variant='ghost'
                    className='px-3 py-2 flex justify-start items-center gap-2 text-primary-500 min-w-[125px] hover:text-primary-600 text-xs'
                  >
                    <TbEdit size={15} />
                    Edit
                  </Button>
                </Link>
                <Separator />
                <DeleteConfirmModal type='other' />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between text-sm text-neutral-500 border-t items-center py-4'>
        <p>
          {/* {formatDate(data.date_start)} | {formatTime(data.date_start)} WIB */}
          12 Desember 2023 | 12.00 WIB
        </p>
      </CardFooter>
    </Card>
  );
};
