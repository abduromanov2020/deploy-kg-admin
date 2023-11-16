import React from 'react';

import DownloadIcon from '@/modules/user-management/assets/ic-download';
import FilterIcon from '@/modules/user-management/assets/ic-filter';

const MahasiswaModule = () => {
  return (
    <>
      <div className='bg-white py-10 px-6 rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Mahasiswa
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between'>
            <input
              type='search'
              className='w-[35%] rounded px-4 py-4 text-2xl border-2'
              placeholder='Search'
            />
            <div className='space-x-8'>
              <button className='px-6 py-4 shadow-xl text-blue-500 text-2xl rounded-md hover:bg-slate-300 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FilterIcon /> Filter
                </div>
              </button>
              <button className='px-6 py-4 shadow-xl text-blue-500 text-2xl rounded-md  hover:bg-slate-300 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <DownloadIcon /> Unduh
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
