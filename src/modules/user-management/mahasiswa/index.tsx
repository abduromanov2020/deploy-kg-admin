import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload, FaFilter } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import MahasiswaDataTable from '@/modules/user-management/mahasiswa/datatable';
type Checked = DropdownMenuCheckboxItemProps['checked'];
const MahasiswaModule = () => {
  const [faculty, setFaculty] = useState('1');

  const filterFaculty = [
    {
      name: 'Pembiayaan dan Optimalisasi Bisnis',
      value: '1',
    },
    {
      name: 'Desain Digital',
      value: '2',
    },
    {
      name: 'Teknologi Ekonomi dan Bisnis',
      value: '3',
    },
  ];
  const filterMajor = [
    {
      name: 'Semua',
      value: 'all',
    },
    {
      name: 'Prodi 1',
      value: '2',
    },
    {
      name: 'Prodi 2',
      value: '3',
    },
    {
      name: 'Prodi 3',
      value: '4',
    },
  ];
  const filterStatus = [
    {
      name: 'Semua',
      value: 'all',
    },
    {
      name: 'Aktif',
      value: '1',
    },
    {
      name: 'Non-Aktif',
      value: '2',
    },
    {
      name: 'Berhenti',
      value: '3',
    },
  ];

  return (
    <>
      <div className='bg-white py-10 px-6 mx-auto rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Mahasiswa
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between'>
            <div className='w-1/3 relative'>
              <Input type='search' placeholder='Search' className='pl-10' />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='space-x-8'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
                    <div className='flex place-items-center gap-2'>
                      <FaFilter /> Filter
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuLabel>Filter</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={faculty}
                    onValueChange={setFaculty}
                  >
                    {filterFaculty.map((item, i) => (
                      <DropdownMenuRadioItem key={i} value={item.value}>
                        {item.name}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Prodi</DropdownMenuLabel>
                  {filterMajor.map((item, i) => (
                    <DropdownMenuCheckboxItem key={i}>
                      {item.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Status</DropdownMenuLabel>
                  {filterStatus.map((item, i) => (
                    <DropdownMenuCheckboxItem key={i}>
                      {item.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white  hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
            </div>
          </div>
          <MahasiswaDataTable />
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
