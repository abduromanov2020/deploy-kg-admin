import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
const StudentInformationDetail = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useUserById(id);
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='w-full'>
          <Table className='border-2'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>
                  ID Mahasiswa
                </TableCell>
                <TableCell className='border-2'>{data?.data?.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Nama Mahasiswa</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.full_name ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Email</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.email ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Fakultas</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.faculty ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Program Studi</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.major ?? '-'}{' '}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Dosen Pembimbing</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.lecturer ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Semester</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.semester ?? '-'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Status</TableCell>
                <TableCell className='border-2'>
                  <Badge
                    className={`${
                      data?.data?.status == 'active'
                        ? 'bg-green-100 text-green-800 py-2'
                        : 'bg-red-400 text-red-600'
                    } flex justify-center rounded-md w-[10%] text-center`}
                  >
                    <h1>
                      {data?.data?.status == 'active' ? 'Aktif' : 'Tidak Aktif'}
                    </h1>
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pas Foto</TableCell>
                <TableCell className='border-2'>
                  <div className='rouned-md '>
                    <h1 className='border-2  px-2 py-1 w-[194px] pl-2'>
                      4 x 6
                    </h1>
                    {data?.data?.avatar ? (
                      <Image
                        key={1}
                        src={data?.data?.avatar}
                        width={194}
                        height={200}
                        alt='avatar'
                        className='object-cover max-h-[170px]'
                      />
                    ) : (
                      'No Picture'
                    )}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default StudentInformationDetail;
