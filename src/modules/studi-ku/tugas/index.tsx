'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
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

import { DeleteTugasConfirmationModal } from '@/modules/studi-ku/tugas/components/DeleteTugasConfirmationModal';
import { ITEMS } from '@/modules/studi-ku/tugas/constant';

const TugasModule = () => {
  const data = [1, 2, 3];

  return (
    <>
      <Card className='mb-5'>
        <CardHeader>
          <BreadCrumb items={ITEMS} className='!p-0' />
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='border-b-2'>
          <CardTitle>
            <div className='flex center justify-between items-center'>
              <h2 className='text-xl font-semibold'>
                Daftar Tugas Pertemuan 1 : Matkul Manajemen Keuangan{' '}
              </h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {data.map((item) => (
              <Card key={item}>
                <CardHeader className='p-0'>
                  <Image
                    src='/images/studi-ku/modul-default.png'
                    alt='header-image'
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                    className='rounded-t-md'
                    sizes='100vh'
                  />
                </CardHeader>
                <CardContent>
                  <div className='flex flex-col gap-3 mt-5'>
                    <div className='flex gap-2'>
                      <Badge variant='secondary'>3 Tugas</Badge>
                      <Badge variant='secondary'>Berlangsung</Badge>
                    </div>
                    <div className='flex flex-col gap-2 '>
                      <h3 className='text-lg font-semibold mt-2'>
                        Modul {item}
                      </h3>
                      <p className='text-sm text-slate-500'>
                        Pertemuan {item} | Silahkan baca dan kerjakan tugas pada
                        modul berikut ini. Berikan tanggapan bukti nyata
                        kemudian sebutkan dan berikan contoh poin terhadap
                        fenomena tersebut.
                      </p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <Link href='/studi-ku/tugas/detail'>
                        <Button variant='primary'>Detail Tugas</Button>
                      </Link>
                      {/* <Link href='/studi-ku/tugas/edit'>
                        <Button variant='primaryOutline'>Edit</Button>
                      </Link> */}
                      <Popover>
                        <PopoverTrigger className='flex'>
                          <div className='w-fit hover:bg-gray-200 rounded-sm'>
                            <BsThreeDotsVertical size={20} />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className='w-fit p-0 ' align='start'>
                          <div className='flex flex-col '>
                            <Link href='/studi-ku/tugas/edit/'>
                              <Button
                                variant='ghost'
                                className='px-3 py-2 flex justify-start items-center gap-2 text-primary-500 min-w-[125px] hover:text-primary-600 text-xs'
                              >
                                <TbEdit size={15} />
                                Edit
                              </Button>
                            </Link>
                            <Separator />
                            <DeleteTugasConfirmationModal type='other' />{' '}
                          </div>
                        </PopoverContent>
                      </Popover>
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
    </>
  );
};

export default TugasModule;
