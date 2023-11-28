'use client';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { TablePapanScore } from '@/modules/dashboard/component/PapanScoreCard/TablePapanScore';

const filter = ['Top Global', 'Top Fakultas', 'Top Prodi'];

export const KonsultasiLayananCard = () => {
  return (
    <div className='bg-white rounded-md col-span-1'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Papan Skor</span>
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
      <div className=''>
        <TablePapanScore />
      </div>
    </div>
  );
};
