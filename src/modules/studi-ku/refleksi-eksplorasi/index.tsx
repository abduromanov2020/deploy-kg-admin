import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import { REFLEKSI_EKSPLORASI_MODULE_BREADCRUMBS } from '@/modules/studi-ku/refleksi-eksplorasi/constant';

const RefleksiEksplorasiModule = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb
          items={REFLEKSI_EKSPLORASI_MODULE_BREADCRUMBS}
          className='!p-0 '
        />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Refleksi Eksplorasi' />
        </div>
        <div className='px-5'>
          <Table className='rounded-xl border  shadow-sm text-dark-900'>
            <TableBody>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'>
                  Pertemuan
                </TableCell>
                <TableCell className=' flex flex-col gap-3'>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'>
                  Pertanyaan
                </TableCell>
                <TableCell className=' flex flex-col gap-3'></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RefleksiEksplorasiModule;
