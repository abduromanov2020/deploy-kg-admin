import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

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

import { PopoverMajor } from '@/modules/rencana-studi/major/components/pop-over';

import { TMajorAllData } from '@/types/rencana-studi/majors/types';

import defaultImage from '~/images/rencana-studi/major/cover-prodi.png';

const MajorGrid = ({ data }: TMajorAllData) => {
  const { id } = useParams();

  return (
    <div className='grid grid-cols-3 gap-4'>
      {data?.map((item) => (
        <Card
          key={item.id}
          className='w-[350px] rounded-lg overflow-hidden mx-auto'
        >
          <CardHeader className='p-0 h-48'>
            <Image
              src={item?.thumbnail || defaultImage}
              alt={item?.name}
              width={350}
              height={200}
              className='object-cover w-full h-full'
            />
          </CardHeader>
          <CardContent className='p-6'>
            <section className=' flex gap-2'>
              <Badge className='rounded-md  bg-dark-100 hover:bg-dark-300 text-dark-900 px-3 py-1'>
                {item.total_subjects} Mata Kuliah
              </Badge>
              <Badge className='rounded-md  bg-dark-100 hover:bg-dark-300 text-dark-900 px-3 py-1'>
                {item.total_credits} SKS
              </Badge>
            </section>
            <section className='flex flex-col gap-3 mt-5'>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>
                {item.description
                  ? item.description
                  : 'Deskripsi Program Studi Ini Belom Di Tampilkan Oleh Backend'}
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter className='flex gap-2 justify-between'>
            <div className='flex gap-2'>
              <Button className='bg-primary-500 hover:bg-primary-600' asChild>
                <Link
                  href={`/rencana-studi/program-studi/${id}/mata-kuliah/${item.id}`}
                >
                  Daftar Mata Kuliah
                </Link>
              </Button>
              <Button
                className='bg-white border-primary-500 border text-primary-500 hover:bg-gray-200 px-9'
                asChild
              >
                <Link
                  href={`/rencana-studi/program-studi/${id}/detail/${item.id}`}
                >
                  Detail
                </Link>
              </Button>
            </div>
            <PopoverMajor majorId={item.id} facultyId={id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MajorGrid;
