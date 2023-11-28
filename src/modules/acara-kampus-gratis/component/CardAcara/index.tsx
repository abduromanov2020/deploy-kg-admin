import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';

import { Badge } from '@/components/ui/badge';
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

import { TAcaraCard } from '@/types/acara-kampus-gratis/types';

import AcaraImage from '~/images/acara-kampus-gratis/acara1.png';

export const CardAcara: FC<{ id: number; data: TAcaraCard }> = ({
  id,
  data,
}) => {
  const formatDate = (date: string) => {
    return format(new Date(date), 'dd MMMM yyyy');
  };

  const formatTime = (time: string) => {
    return format(new Date(time), 'HH:mm');
  };

  const formatStatus = (status: string) => {
    return status
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
        <div>
          <Badge className='rounded-md bg-neutral-100 text-black'>
            {formatStatus(data.status)}
          </Badge>
        </div>
        <CardTitle className='text-xl font-semibold'>
          {data.event_name}
        </CardTitle>
        <CardDescription className='line-clamp-2'>
          {data.description}
        </CardDescription>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex gap-2'>
            <Link href={`/acara-kampus-gratis/detail-acara/${id}`}>
              <Button className='bg-primary-500'>Detail Acara</Button>
            </Link>
            <Link href={`/acara-kampus-gratis/daftar-peserta/${id}`}>
              <Button variant='primaryOutline'>Daftar Peserta</Button>
            </Link>
          </div>

          <Popover>
            <PopoverTrigger>
              <Button variant='ghost' className='w-fit px-0'>
                <BsThreeDotsVertical size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-fit p-0 ' align='start'>
              <div className='flex flex-col '>
                <Link href={`/acara-kampus-gratis/edit-acara/${id}`}>
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
          {formatDate(data.dateTime)} | {formatTime(data.dateTime)} WIB
        </p>
      </CardFooter>
    </Card>
  );
};
