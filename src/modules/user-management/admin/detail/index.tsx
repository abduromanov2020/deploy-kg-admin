import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaEdit, FaFileDownload } from 'react-icons/fa';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const DetailAdminModule = () => {
  const ConstantDetailAdmin = [
    {
      name: 'User Management Dosen',
      link: '/user-management/admin',
    },
    {
      name: 'Detail Dosen',
      link: '',
    },
  ];

  const params = useParams();
  const { id } = params;
  console.log(id);

  const { data } = useUserById(id);
  console.log(data);

  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantDetailAdmin} className='lg:px-6' />
      </div>
      <div className='bg-white py-5 px-6 rounded-md'>
        <div className='flex justify-between  pb-4'>
          <div>
            <h1 className='font-semibold text-lg'>
              Detail User Management Admin : Raul
            </h1>
          </div>
          <div className='space-x-4 right-4  '>
            <button className='px-6 py-3 shadow-md text-blue-600 bg-white rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
              <div className='flex place-items-center gap-2'>
                <FaFileDownload /> Unduh
              </div>
            </button>
            <button className='px-6 py-3 shadow-md text-white rounded-md hover:text-blue-600 hover:bg-white bg-blue-600 hover:transition'>
              <div className='flex place-items-center gap-2'>
                <FaEdit />{' '}
                <Link href={`/user-management/admin/editdata/${id}`}>
                  Edit Informasi
                </Link>
              </div>
            </button>
          </div>
        </div>
        <div className='w-full pt-2'>
          <Table className='border-2'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>ID Admin</TableCell>
                <TableCell className='border-2'>129391132</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Nama Lengkap Admin
                </TableCell>
                <TableCell className='border-2'>Raul</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Email</TableCell>
                <TableCell className='border-2'>raul@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Nama Pengguna</TableCell>
                <TableCell className='border-2'>Tata boga</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Program Studi</TableCell>
                <TableCell className='border-2'>
                  <div
                    className={`${
                      data?.data?.status === 'active'
                        ? 'bg-green-600'
                        : 'bg-red-600'
                    } text-white px-4 py-1 rounded flex text-center justify-center w-[10%]`}
                  >
                    {data?.data?.status === 'active' ? 'Aktif' : 'Non-Aktif'}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default DetailAdminModule;
