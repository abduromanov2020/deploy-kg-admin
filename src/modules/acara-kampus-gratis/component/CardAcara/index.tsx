import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

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

import AcaraImage from '~/images/acara-kampus-gratis/acara1.png';

export const CardAcara = () => {
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
            Berlangsung
          </Badge>
        </div>
        <CardTitle className='text-xl font-semibold'>Blockchain</CardTitle>
        <CardDescription className='line-clamp-2'>
          Prodi Pembiayaan dan Optimalisasi Bisnis adalah Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Omnis a quae nemo explicabo
          recusandae. Fuga nihil labore eum qui commodi aperiam impedit. Fugit
          ratione eius perspiciatis. Sint aperiam non minus?
        </CardDescription>
        <div className='flex justify-between items-center mt-4'>
          <Button className='bg-primary-500'>Detail Acara</Button>
          <Button variant='ghost'>
            <BsThreeDotsVertical size={20} />
          </Button>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between text-sm text-neutral-500 border-t items-center py-4'>
        <p>12 Desember 2023 | 12.00 WIB</p>
      </CardFooter>
    </Card>
  );
};
