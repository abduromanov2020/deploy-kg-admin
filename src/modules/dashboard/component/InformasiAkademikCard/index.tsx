'use client';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { TableInformasiAkademik } from '@/modules/dashboard/component/InformasiAkademikCard/TableInformasiAkademik';

export const InformasiAkademikCard = () => {
  const faculty = ['Fakultas Teknik', 'Fakultas Ekonomi', 'Fakultas Hukum'];
  return (
    <div className='bg-white rounded-md col-span-2'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Informasi Akademik</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='flex px-3 py-2 h-full text-primary-500 border border-primary-500 items-center justify-between gap-1 rounded-md hover:bg-dark-100 w-32'>
              Fakultas <IoIosArrowDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {faculty.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='p-8'>
        <TableInformasiAkademik />
      </div>
    </div>
  );
};
