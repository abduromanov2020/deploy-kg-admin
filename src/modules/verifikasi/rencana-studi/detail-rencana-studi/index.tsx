import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileExport } from 'react-icons/fa';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { AccConfirmModal } from '@/modules/verifikasi/rencana-studi/component/AccConfirmModal';
import { TableFilter } from '@/modules/verifikasi/rencana-studi/component/Filter';
import { RejectConfirmModal } from '@/modules/verifikasi/rencana-studi/component/RejectConfirmModal';
import { TableDetailRencanaStudi } from '@/modules/verifikasi/rencana-studi/component/TableDetailRencanaStudi';

import MOCK_Data from '../component/TableDetailRencanaStudi/MOCK_DATA.json';

import { TStudyPlanDetail } from '@/types/verifikasi/rencana-studi/types';

export const DetailRencanaStudiModule: FC<{ id: string }> = ({ id }) => {
  const BreadcrumbItems = [
    {
      name: 'Verifikasi Rencana Studi',
      link: '/verifikasi/rencana-studi',
    },
    {
      name: 'Daftar Artikel',
      link: `/verifikasi/rencana-studi/${id}`,
    },
  ];

  const data: TStudyPlanDetail[] = MOCK_Data;

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4'>
          <span className='font-semibold '>
            Detail Rencana Studi : Nama Mahasiswa {id}
          </span>
        </div>
        <div className='p-8'>
          <div className='flex justify-between'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Search'
                className='pl-10'
                // value={
                //   (table.getColumn('email')?.getFilterValue() as string) ?? ''
                // }
                // onChange={(event) =>
                //   table.getColumn('email')?.setFilterValue(event.target.value)
                // }
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <TableFilter />
              <Button className='bg-primary-500 hover:bg-primary-600 shadow-md'>
                <FaFileExport size={20} className='mr-2' /> Unduh
              </Button>
            </div>
          </div>
          <div className='my-8'>
            <TableDetailRencanaStudi data={data} />

            {/* {isLoading ? (
              <div className='w-full flex justify-center items-center pt-5'>
                <BiLoaderAlt className='animate-spin' size={30} />
              </div>
            ) : data && data.data ? (
              <TableDetailRencanaStudi data={data} />
            ) : (
              <div className='w-full flex justify-center items-center pt-5'>
                Tidak Ada Data
              </div>
            )}{' '} */}
          </div>
          <div className='w-full justify-end gap-6 flex'>
            <RejectConfirmModal />
            <AccConfirmModal />
          </div>
        </div>
      </div>
    </div>
  );
};
