'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFilter, FaCalendarAlt } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const VerifikasiAdministrasiModule = () => {
  return (
    <div className='bg-white w-full rounded-md p-5'>
      <div className='flex flex-col gap-7'>
        <h3 className='font-semibold text-lg'>Verifikasi Administrasi</h3>
        <Separator />
        <div className='flex justify-between items-center'>
          <div className='w-1/3 relative'>
            <Input type='text' placeholder='Search' className='pl-10'/>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button className='bg-white shadow-md hover:bg-primary-500 text-primary-500 hover:text-white font-normal w-[200px] flex justify-start items-center'>
              <FaCalendarAlt className='mr-2' /> Pilih Tanggal
            </Button>
            <Button className='bg-white shadow-md hover:bg-primary-500 text-primary-500 hover:text-white font-normal'>
              <FaFilter className='mr-2' /> Filter
            </Button>
            <Button className='bg-primary-500 shadow-md hover:bg-white text-white hover:text-primary-500 font-normal'>
              <FaFileExport className='mr-2' /> Unduh
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiAdministrasiModule;
