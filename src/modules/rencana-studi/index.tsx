'use client';

import { Button } from '@/components/ui/button';
import { CiCirclePlus } from 'react-icons/ci';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';

import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
type Checked = DropdownMenuCheckboxItemProps['checked'];

import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { FacultyTable } from '@/modules/rencana-studi/faculty/components/table';
import FacultyGridCardComponent from '@/modules/rencana-studi/faculty/components/grid';
import Link from 'next/link';

export const RencanaStudiModule = () => {
  const [showGrid, setShowGrid] = React.useState(false);
  const [showList, setShowList] = React.useState(true);

  return (
    <div className='bg-white rounded'>
      <div className='p-4 border-b-2'>
        <p className='text-base font-semibold'>Rencana Studi</p>
      </div>
      <div className='p-8'>
        <section className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10' />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button
              asChild
              className='hover:bg-white shadow-md bg-primary-500 hover:text-primary-500 text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'
            >
              <Link href={'/rencana-studi/tambah-fakultas'}>
                <CiCirclePlus size={20} />
                <p className='leading-none'>Fakultas</p>
              </Link>
            </Button>
            <Button
              className={`${
                showGrid
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
              }   p-3`}
              onClick={() => {
                setShowGrid(!showGrid); // Fix: Use the new state value directly
                setShowList(!showList);
              }}
            >
              <IoGridOutline size={24} />
            </Button>
            <Button
              className={`${
                showList
                  ? 'bg-primary-500 hover:bg-white  hover:text-primary-500 shadow-md'
                  : 'bg-white hover:bg-primary-500 hover:text-white text-primary-500 shadow-md'
              }   p-3`}
              onClick={() => {
                setShowGrid(!showGrid);
                setShowList(!showList); // Fix: Use the new state value directly
              }}
            >
              <IoListOutline size={24} />
            </Button>
          </div>
        </section>
        <div className='my-8'>
          <div className='w-full'>
            {showGrid ? (
              <section>
                <FacultyGridCardComponent />
              </section>
            ) : (
              <section>
                <FacultyTable />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
