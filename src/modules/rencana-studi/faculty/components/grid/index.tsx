'use client';

import Image from 'next/image';
import React from 'react';
import { IoMdMore } from 'react-icons/io';
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

import ArtikelImage from '~/images/sekilas-ilmu/artikel.png';
import { PopoverFaculty } from '@/modules/rencana-studi/faculty/components/pop-over';
import Link from 'next/link';

const FacultyGridCardComponent = () => {
  const CARDS = [0, 1, 2, 3, 4, 5];

  const ITEMS = [
    {
      label: '#ASD123',
    },
    {
      label: '4 Program Studi',
    },
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {CARDS.map((_, index) => (
        <Card
          key={index}
          className='w-[350px] rounded-lg overflow-hidden mx-auto'
        >
          <CardHeader className='p-0'>
            <Image src={ArtikelImage} alt='artikel' width={350} height={200} />
          </CardHeader>
          <CardContent className='p-6'>
            <section className=' flex gap-2'>
              {ITEMS.map((item, index) => (
                <Badge
                  key={index}
                  className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1'
                >
                  {item.label}
                </Badge>
              ))}
            </section>
            <section className='flex flex-col gap-3 mt-5'>
              <CardTitle>Pembiayaan dan Optimalisasi Bi...</CardTitle>
              <CardDescription>
                Public speaking atau berbicara di depan umum...
              </CardDescription>
            </section>
          </CardContent>
          <CardFooter className='flex gap-2 justify-between'>
            <div className='flex gap-2'>
              <Button className='bg-primary-500 hover:bg-primary-600' asChild>
                <Link href={'/rencana-studi/program-studi/1'}>
                  Daftar Prodi
                </Link>
              </Button>
              <Button
                className='bg-white border-primary-500 border text-primary-500 hover:bg-gray-200 px-9'
                asChild
              >
                <Link href={'/rencana-studi/detail/1'}>Detail</Link>
              </Button>
            </div>

            <PopoverFaculty />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FacultyGridCardComponent;