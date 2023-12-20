import React, { Fragment } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import {
  DATA_PRESENSI_DAN_NILAI,
  HEAD_TABLE_PRESENSI_DAN_NILAI,
  PRESENSI_DAN_NILAI_BREADCRUMBS,
} from '@/modules/studi-ku/presensi-dan-nilai/constant';

const PresensiDanNilaiModule = () => {
  const dataHeadTable = HEAD_TABLE_PRESENSI_DAN_NILAI;
  const data = DATA_PRESENSI_DAN_NILAI;

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={PRESENSI_DAN_NILAI_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Presensi: Pertemuan 1' />
        </div>
        <div className='px-5 flex flex-col gap-4'>
          <Table className='rounded-xl border  shadow-sm text-dark-900'>
            <TableHeader>
              <TableRow>
                {dataHeadTable.map((item, index) => (
                  <TableHead key={index} className='font-semibold text-center '>
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {data.data.map((item, index) => (
                  <Fragment key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{index + 1}</TableCell>
                  </Fragment>
                ))}
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PresensiDanNilaiModule;
