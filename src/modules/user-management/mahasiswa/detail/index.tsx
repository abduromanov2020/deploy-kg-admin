import { Tab } from '@headlessui/react';
import React, { Fragment } from 'react';
import { FaEdit, FaFileDownload } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';

const DetailMahasiswaModule = () => {
  return (
    <div className='bg-white py-10 px-6 mx-auto rounded-md'>
      <h1 className='font-semibold text-xl border-b-2 pb-3'>
        Detail User Management Mahasiswa
      </h1>
      <div className='pt-5 w-auto grid grid-cols-2'>
        <div className='w-max'>
          <Tab.Group>
            <Tab.List
              as='div'
              className='flex gap-2 mb-5 text-sm font-medium border-b-2 text-neutral-400'
            >
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected
                        ? 'border-b-2 outline-none   border-primary-500 text-primary-500'
                        : ''
                    } py-2 px-4 cursor-pointer  font-bold`}
                  >
                    Informasi Diri
                  </div>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected
                        ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                        : ''
                    } py-2 px-4 cursor-pointer  font-bold`}
                  >
                    Rencana Studi
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <p>tab1</p>
              </Tab.Panel>
              <Tab.Panel>
                <p>tab2</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className='flex justify-end '>
          <div className='space-x-5'>
            <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
              <div className='flex place-items-center gap-2'>
                <FaFileDownload /> Unduh
              </div>
            </button>
            <button className='px-6 py-3 shadow-md text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
              <div className='flex place-items-center gap-2'>
                <FaEdit /> Edit Data
              </div>
            </button>
            <button className='px-8 py-3 shadow-md text-red-600 rounded-md  hover:text-white hover:bg-red-600 hover:transition'>
              <div className='flex place-items-center gap-2'>
                <FaFilter /> Keluarkan Mahasiswa
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMahasiswaModule;
