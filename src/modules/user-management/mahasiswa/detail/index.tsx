import { Tab } from '@headlessui/react';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';
import { CiLock } from 'react-icons/ci';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';

import PopUpPenaltyStudent from '@/modules/user-management/mahasiswa/components/modal';
import FilesStudentDetail from '@/modules/user-management/mahasiswa/detail/berkas-mahasiswa';
import StudentInformationDetail from '@/modules/user-management/mahasiswa/detail/informasi-diri';
import StudentFilesDetail from '@/modules/user-management/mahasiswa/detail/rencana-studi';

const DetailMahasiswaModule = () => {
  const ConstantDetailMahasiswa = [
    {
      name: 'User Management Mahasiswa',
      link: '/user-management/mahasiswa',
    },
    {
      name: 'Detail Mahasiswa',
      link: '',
    },
  ];
  const params = useParams();
  const { id } = params;

  const { data } = useUserById(id);

  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantDetailMahasiswa} className='lg:px-6' />
      </div>

      <div className='bg-white py-10 px-6 rounded-md relative'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          Detail User Management Mahasiswa
        </h1>
        <div className='pt-5 w-full'>
          {data?.data?.status == 'active' ? (
            <div className='space-x-4 absolute right-4  '>
              {/* <button className='px-6 py-2  text-red-600 border-2 border-red-600 rounded-md  hover:text-white hover:bg-red-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <CiWarning /> Berhentikan Mahasiswa
                </div>
              </button> */}
              <PopUpPenaltyStudent />
            </div>
          ) : (
            <div className='space-x-4 absolute right-4  '>
              <button className='px-3 py-2 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <CiLock /> Aktifkan Mahasiswa
                </div>
              </button>
            </div>
          )}
          <div className='pt-6'>
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
                          ? 'border-b-2 outline-none   border-primary-500 text-primary-500'
                          : ''
                      } py-2 px-4 cursor-pointer  font-bold`}
                    >
                      Berkas Mahasiswa
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
                  <StudentInformationDetail />
                </Tab.Panel>
                <Tab.Panel>
                  <FilesStudentDetail />
                </Tab.Panel>
                <Tab.Panel>
                  <StudentFilesDetail />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMahasiswaModule;
