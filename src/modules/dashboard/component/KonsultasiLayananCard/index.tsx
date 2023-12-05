'use client';
import React from 'react';
import Avatar from 'react-avatar';
import { IoIosArrowDown } from 'react-icons/io';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const filter = ['Karir & cita-cita', 'Kesehatan mental', 'Keluarga', 'Lainnya'];

const chat = [];

export const KonsultasiLayananCard = () => {
  return (
    <div className='bg-white rounded-md col-span-1'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Konsultasi Layanan</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='flex px-3 py-2 h-full text-primary-500 border border-primary-500 items-center justify-between gap-1 rounded-md hover:bg-dark-100 w-32'>
              Filter <IoIosArrowDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filter.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='p-8'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2'>
            <div>
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
              <Avatar
                name='Test'
                color='#F26800'
                className='rounded-full'
                size='35'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-sm'>User Name</p>
              <p className='text-xs'>Chat</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
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
              <Avatar
                name='Test'
                color='#F26800'
                className='rounded-full'
                size='35'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-sm'>User Name</p>
              <p className='text-xs'>Chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
