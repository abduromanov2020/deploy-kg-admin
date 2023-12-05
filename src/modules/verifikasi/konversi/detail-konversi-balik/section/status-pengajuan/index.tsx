import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const StatusPengajuanSection = () => {
  const status = 'Aktif';
  return (
    <div className='my-3 w-full'>
      <Table className='border-2'>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium w-[30%]'>
              Tanggal Submit
            </TableCell>
            <TableCell className='border-2'>129391132</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>Status Validasi</TableCell>
            <TableCell>
              <div
                className={`rounded-md py-2 px-3 text-center w-max font-normal ${
                  status === 'Aktif'
                    ? 'bg-green-300 text-green-800'
                    : status === 'Tidak Aktif'
                      ? 'bg-red-300 text-red-800'
                      : 'bg-yellow-300 text-yellow-800'
                }`}
              >
                {status}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>Tanggal Validasi</TableCell>
            <TableCell className='border-2'>440</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default StatusPengajuanSection;
