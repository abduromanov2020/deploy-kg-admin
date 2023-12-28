import React from 'react';

import { cn } from '@/lib/utils';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  DATA_PRESENSI_DAN_NILAI,
  HEAD_TABLE_PRESENSI_DAN_NILAI,
} from '@/modules/studi-ku/presensi-dan-nilai/constant';

const EditTablePresensi = () => {
  const dataHeadTable = HEAD_TABLE_PRESENSI_DAN_NILAI;
  const data = DATA_PRESENSI_DAN_NILAI;

  return (
    <Table className='rounded-xl border  shadow-sm text-dark-900'>
      <TableHeader>
        <TableRow>
          <Checkbox className='font-semibold text-center' disabled />
          {dataHeadTable.map((item, index) => (
            <TableHead key={index} className='font-semibold text-center '>
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((item, index) => (
          <TableRow key={index} className='font-medium'>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.id_student}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell
              className={cn(
                item.assignment === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.assignment}
            </TableCell>
            <TableCell
              className={cn(
                item.quiz === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.quiz}
            </TableCell>
            <TableCell
              className={cn(
                item.activity === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.activity}
            </TableCell>
            <TableCell
              className={cn(
                item.average === 100 ? 'text-primary-500' : 'text-red-700',
              )}
            >
              {item.average}
            </TableCell>
            <TableCell className='text-primary-500'>
              {item.reflection}
            </TableCell>
            <TableCell>
              <p
                className={cn(
                  'px-3 py-1 rounded-[4px] w-fit',
                  item.attendance
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                )}
              >
                {item.attendance ? 'Hadir' : 'Tidak'}
              </p>
            </TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EditTablePresensi;
