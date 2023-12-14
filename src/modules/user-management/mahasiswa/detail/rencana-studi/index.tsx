import { useParams } from 'next/navigation';
import React from 'react';

import { useUserById } from '@/hooks/user-management/getuser/getuserById/hook';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const StudentFilesDetail = () => {
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
                  {data?.data?.full_name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah Mutu</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.total_credits_accumulated}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>IPK/Yudisium</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.total_credits_accumulated}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Kontrak SKS</TableCell>
                <TableCell className='border-2'>122</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jumlah SKS Lulus</TableCell>
                <TableCell className='border-2'>
                  {data?.data?.total_credits_finished}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default StudentFilesDetail;
