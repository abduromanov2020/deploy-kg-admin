// import { format } from 'date-fns';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileExport } from 'react-icons/fa6';

import { useGetStudyPlanRequest } from '@/hooks/verifikasi/rencana-studi/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { DateRangePicker } from '@/modules/verifikasi/rencana-studi/DateRangePicker';
import { TableFilter } from '@/modules/verifikasi/rencana-studi/filter';
import { TableRencanaStudi } from '@/modules/verifikasi/rencana-studi/TableRencanaStudi';

export const VerifikasiRencanaStudiModule = () => {
  const [date, setDate] = useState<Date>();

  const [option, setOption] = useState({
    page: 1,
    search: '',
    limit: 10,
    sort_by: '',
  });

  const { data, isLoading } = useGetStudyPlanRequest(
    option.page,
    option.search,
    option.limit,
    option.sort_by,
  );

  const dataTable = data ? data?.data : [];

  console.log(dataTable);

  return (
    <div className='bg-white rounded-md'>
      <div className='border-b border-dark-200 p-4'>
        <span className='font-semibold '>Verifikasi Rencana Studi</span>
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
            <DateRangePicker />

            <TableFilter />
            <Button className='bg-primary-500 hover:bg-primary-600 shadow-md'>
              <FaFileExport size={20} className='mr-2' /> Unduh
            </Button>
          </div>
        </div>
        <div className='my-8'>
          {data && data.data ? (
            <TableRencanaStudi data={data.data} />
          ) : (
            'Tidak Ada Data'
          )}{' '}
        </div>
      </div>
    </div>
  );
};
