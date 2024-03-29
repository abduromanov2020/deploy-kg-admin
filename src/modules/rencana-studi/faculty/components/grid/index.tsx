'use client';

import Image from 'next/image';
import Link from 'next/link';
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

import { PopoverFaculty } from '@/modules/rencana-studi/faculty/components/pop-over';

import { TFacultiesAllData } from '@/types/rencana-studi/faculties/types';

const FacultyGridCardComponent = ({ data }: TFacultiesAllData) => {
  return (
    <div className='flex gap-4 flex-wrap'>
      {data?.map((item) => (
        <Card
          key={item.id}
          className='w-[300px] rounded-lg overflow-hidden mx-auto'
        >
          <CardHeader className='p-0 h-48'>
            <Image
              src={item?.thumbnail}
              alt='artikel'
              width={350}
              height={200}
              className='object-cover w-full h-full'
            />
          </CardHeader>
          <CardContent className='p-6'>
            <section className=' flex gap-2'>
              <Badge className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1'>
                {item.total_majors} Program Studi
              </Badge>
            </section>
            <section className='flex flex-col gap-3 mt-5'>
              <CardTitle className='line-clamp-1 text-xl'>
                {item.name}
              </CardTitle>
              <CardDescription className='line-clamp-2'>
                {item.name}
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter className='flex gap-2 justify-between'>
            <div className='flex gap-2'>
              <Button className='bg-primary-500 hover:bg-primary-600' asChild>
                <Link href={`/rencana-studi/program-studi/${item.id}`}>
                  Daftar Prodi
                </Link>
              </Button>
              <Button
                className='bg-white border-primary-500 border text-primary-500 hover:bg-gray-200 px-9'
                asChild
              >
                <Link href={`/rencana-studi/fakultas/detail/${item.id}`}>
                  Detail
                </Link>
              </Button>
            </div>

            <PopoverFaculty facultyId={item.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FacultyGridCardComponent;
