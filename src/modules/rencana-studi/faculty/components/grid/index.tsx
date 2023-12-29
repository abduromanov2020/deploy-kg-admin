'use client';

import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';

import { PopoverFaculty } from '@/modules/rencana-studi/faculty/components/pop-over';

import { TFacultiesAllData } from '@/types/rencana-studi/faculties/types';

const FacultyGridCardComponent = ({ data }: TFacultiesAllData) => {
  console.log('data', data);

  return (
    <div className='grid grid-cols-3 gap-4'>
      {data?.map((item) => (
        <Card
          key={item.id}
          className='w-[350px] rounded-lg overflow-hidden mx-auto'
        >
          {/* <CardHeader className='p-0'>
            <Image src={ArtikelImage} alt='artikel' width={350} height={200} />
          </CardHeader> */}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                alias, quod est accusantium adipisci in cumque fuga tenetur et
                veniam!
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter className='flex gap-2 justify-between'>
            <div className='flex gap-2'>
              <Button className='bg-primary-500 hover:bg-primary-600' asChild>
                <Link href='/rencana-studi/program-studi/1'>Daftar Prodi</Link>
              </Button>
              <Button
                className='bg-white border-primary-500 border text-primary-500 hover:bg-gray-200 px-9'
                asChild
              >
                <Link href='/rencana-studi/detail/1'>Detail</Link>
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
