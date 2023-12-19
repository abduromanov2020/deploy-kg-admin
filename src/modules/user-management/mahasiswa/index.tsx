import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';

import { Input } from '@/components/ui/input';

import { FilterData } from '@/modules/user-management/components/filter';
import MahasiswaDataTable from '@/modules/user-management/mahasiswa/datatable';

const MahasiswaModule = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  return (
    <>
      <div className='bg-white py-10 px-6 mx-auto rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Mahasiswa
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between'>
            <div className='w-1/3 relative'>
              <Input
                onChange={(e) => setSearchQuery(e.target.value)}
                type='search'
                placeholder='Search'
                className='pl-10'
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='space-x-8 flex'>
              <div>
                <FilterData />
              </div>
              <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white  hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
            </div>
          </div>
          <MahasiswaDataTable searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
