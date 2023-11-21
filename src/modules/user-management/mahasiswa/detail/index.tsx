import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';
import { FaEdit, FaFileDownload } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

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
  console.log(id);

  const { data, isLoading } = useUserById(id);
  console.log(data);

  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantDetailMahasiswa} className='lg:px-6' />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-white py-10 px-6 rounded-md relative'>
          <h1 className='font-semibold text-xl border-b-2 pb-3'>
            Detail User Management Mahasiswa
          </h1>
          <div className='pt-5 w-full'>
            <div className='space-x-4 absolute right-4  '>
              <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
              <button className='px-6 py-3 shadow-md text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaEdit />{' '}
                  <Link href={`/user-management/mahasiswa/editdata/${id}`}>
                    Edit Data
                  </Link>
                </div>
              </button>
              <button className='px-8 py-3 shadow-md text-red-600 rounded-md  hover:text-white hover:bg-red-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaDeleteLeft /> Keluarkan Mahasiswa
                </div>
              </button>
            </div>
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
                    <div className='w-full'>
                      <Table className='border-2'>
                        <TableBody>
                          <TableRow>
                            <TableCell className='font-medium w-[30%]'>
                              ID Mahasiswa
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.id}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Nama Mahasiswa
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.full_name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>Email</TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.email}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Fakultas
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.faculty}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Program Studi
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.major}{' '}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Dosen Pembimbing
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.lecturer}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Semester
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.semester}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Status
                            </TableCell>
                            <TableCell className='border-2'>
                              <div
                                className={`${
                                  data?.data?.status === 'active'
                                    ? 'bg-green-600'
                                    : 'bg-red-600'
                                } text-white px-4 py-1 rounded flex text-center justify-center w-[10%]`}
                              >
                                {data?.data?.status === 'active'
                                  ? 'Aktif'
                                  : 'Non-Aktif'}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Pas Foto
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.avatar ? (
                                <Image
                                  key={1}
                                  src={data?.data?.avatar}
                                  width={100}
                                  height={100}
                                  alt='avatar'
                                />
                              ) : (
                                'No Picture'
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className='w-full'>
                      <Table className='border-2'>
                        <TableBody>
                          <TableRow>
                            <TableCell className='font-medium w-[30%]'>
                              ID Mahasiswa
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.id}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Nama Mahasiswa
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.full_name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Jumlah Mutu
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.total_credits_accumulated}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              IPK/Yudisium
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.total_credits_accumulated}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Kontrak SKS
                            </TableCell>
                            <TableCell className='border-2'>122</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className='font-medium'>
                              Jumlah SKS Lulus
                            </TableCell>
                            <TableCell className='border-2'>
                              {data?.data?.total_credits_finished}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMahasiswaModule;
