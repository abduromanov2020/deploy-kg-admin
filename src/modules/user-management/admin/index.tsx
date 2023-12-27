import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

import { Input } from '@/components/ui/input';

import DataTableAdmin from '@/modules/user-management/admin/datatable';

const AdminPageModule = () => {
  const router = useRouter();
  return (
    <>
      <div className='bg-white py-10 px-6 mx-auto rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Admin
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between py-4'>
            <div className='w-1/3 relative'>
              <Input type='text' placeholder='Search' className='pl-10' />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='space-x-5'>
              <button
                onClick={() => router.push('/user-management/admin/addadmin')}
                className='px-6 py-2 shadow-md text-white bg-blue-600 rounded-md hover:text-blue-600  hover:bg-white hover:transition'
              >
                <div className='flex place-items-center gap-2'>
                  <FaPlus /> Tambah Admin
                </div>
              </button>
              <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white  hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
            </div>
          </div>
          <DataTableAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminPageModule;
