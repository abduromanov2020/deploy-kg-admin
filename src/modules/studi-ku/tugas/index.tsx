import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const TugasModule = () => {
  const data = [1, 2, 3];

  return (
    <Card>
      <CardHeader className='border-b-2'>
        <CardTitle>
          <div className='flex center justify-between items-center'>
            <h2 className='text-xl font-semibold'>
              Daftar Tugas Mata Kuliah Manajemen Keuangan
            </h2>
            <Button variant='primary'>
              <Image
                src='/svg/circle-plus.svg'
                alt='Tambah Tugas'
                width={20}
                height={20}
                className='mr-2'
              />
              Tambah Tugas
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {data.map((item) => (
            <Card key={item}>
              <CardHeader className='relative min-h-[176px]'>
                <Image fill={true} src='/images/og.jpg' alt='header-image' />
              </CardHeader>
              <CardContent>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2'>
                    <Badge variant='secondary'>30 Responden</Badge>
                    <Badge variant='secondary'>Berlangsung</Badge>
                  </div>
                  <div className='flex flex-col gap-2 '>
                    <h3 className='text-lg font-semibold mt-2'>Tugas {item}</h3>
                    <p className='text-sm text-slate-500'>
                      Pertemuan {item} | Silahkan baca dan kerjakan tugas pada
                      modul berikut ini. Berikan tanggapan bukti nyata kemudian
                      sebutkan dan berikan contoh poin terhadap fenomena
                      tersebut.
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <Link href='/studi-ku/tugas/detail'>
                      <Button variant='primary'>Detail Tugas</Button>
                    </Link>
                    <Link href='/studi-ku/tugas/edit'>
                      <Button variant='primaryOutline'>Edit</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='border-t-2'>
                <p className='text-sm text-slate-500 mt-5'>
                  Deadline: 21/10/2021
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TugasModule;
