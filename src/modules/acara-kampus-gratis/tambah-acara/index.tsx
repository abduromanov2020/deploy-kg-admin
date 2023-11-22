'use client';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const TambahAcaraModule = () => {
  const [date, setDate] = React.useState<Date>();

  const BreadcrumbItems = [
    {
      name: 'Acara Kampus Gratis',
      link: '/acara-kampus-gratis',
    },
    {
      name: 'Tambah Acara Kampus',
      link: `/acara-kampus-gratis/tambah-acara`,
    },
  ];
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>Tambah Acara Kampus</span>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='account' className='w-full'>
            <TabsList className='flex gap-5 items-center'>
              <TabsTrigger value='cover' className='flex gap-2'>
                <FaInfoCircle />
                Cover Acara Kampus
              </TabsTrigger>
              <hr className='border-dark-600 w-20 border' />
              <TabsTrigger value='detail'>Detail Acara Kampus</TabsTrigger>
            </TabsList>
            <div className='mt-8'>
              <TabsContent value='cover'>
                <form action=''>
                  <div className='grid grid-cols-2 w-full gap-5'>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='namaAcara'>Nama Acara*</Label>
                      <Input
                        type='text'
                        id='namaAcara'
                        placeholder='UI/UX Design untuk Pemula'
                      />
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='biaya'>Biaya*</Label>
                      <Input type='text' id='biaya' placeholder='50.000' />
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='date'>Tanggal Pelaksana*</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !date && 'text-muted-foreground',
                            )}
                          >
                            <CalendarIcon className='mr-2 h-4 w-4' />
                            {date ? (
                              format(date, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0'>
                          <Calendar
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>{' '}
                    </div>
                    <div className='grid w-full items-center gap-1.5'>
                      <Label htmlFor='biaya'>Waktu Pelaksana*</Label>
                      <Input type='text' id='biaya' placeholder='50.000' />
                    </div>
                  </div>
                  <div className='my-5 grid w-full items-center gap-1.5'>
                    <Label htmlFor='manfaat'>Manfaat Acara*</Label>
                    <Input
                      type='text'
                      id='manfaat'
                      placeholder='Manfaat Acara'
                    />
                  </div>
                  <div className='grid w-full items-center gap-1.5'>
                    <Label htmlFor='thumbnail'>Unggah Thumbnail*</Label>
                    <Input id='thumbnail' type='file' />
                  </div>
                </form>
              </TabsContent>
              <TabsContent value='detail'>
                Change your password here.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
