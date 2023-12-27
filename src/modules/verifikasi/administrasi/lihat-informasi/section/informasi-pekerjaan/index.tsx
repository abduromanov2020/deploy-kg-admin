import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import {
  optionCollegeFeesPaid,
  optionLiveWith,
  optionOccupation,
  optionSalary,
} from '@/modules/verifikasi/administrasi/constant';

const InformasiPekerjaanSection = ({ dataJob }: any) => {
  //Equates to constant value

  //Occupation
  const matchedOptionFatherOccupation = optionOccupation.find(
    (option) => option.value === dataJob?.father_occupation,
  );
  const matchedOptionMotherOccupation = optionOccupation.find(
    (option) => option.value === dataJob?.mother_occupation,
  );
  const matchedOptionSelfOccupation = optionOccupation.find(
    (option) => option.value === dataJob?.self_occupation,
  );

  //Salary
  const matchedOptionFatherSalary = optionSalary.find(
    (option) => option.value === dataJob?.father_salary,
  );
  const matchedOptionMotherSalary = optionSalary.find(
    (option) => option.value === dataJob?.mother_salary,
  );
  const matchedOptionSelfSalary = optionSalary.find(
    (option) => option.value === dataJob?.self_salary,
  );

  //LiveWith
  const matchedOptionLiveWith = optionLiveWith.find(
    (option) => option.value === dataJob?.live_with,
  );

  //CollegeFeesPaid
  const matchedOptionCollegeFeesPaid = optionCollegeFeesPaid.find(
    (option) => option.value === dataJob?.tuition_payer,
  );
  return (
    <div className='my-3 w-full'>
      {dataJob ? (
        <>
          <Table className='border-2'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>Nama Ayah</TableCell>
                <TableCell className='border-2'>
                  {dataJob?.father_name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pekerjaan Ayah</TableCell>
                <TableCell className='border-2'>
                  {matchedOptionFatherOccupation
                    ? matchedOptionFatherOccupation.label
                    : 'Data Perkerjaan Ayah Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Penghasilan Ayah Perbulan
                </TableCell>
                <TableCell className='border-2'>
                  {matchedOptionFatherSalary
                    ? matchedOptionFatherSalary.label
                    : 'Data Penghasilan Ayah Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Nama Ibu</TableCell>
                <TableCell className='border-2'>
                  {dataJob?.mother_name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pekerjaan Ibu</TableCell>
                <TableCell className='border-2'>
                  {' '}
                  {matchedOptionMotherOccupation
                    ? matchedOptionMotherOccupation.label
                    : 'Data Perkerjaan Ibu Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Penghasilan Ibu Perbulan
                </TableCell>
                <TableCell className='border-2'>
                  {matchedOptionMotherSalary
                    ? matchedOptionMotherSalary.label
                    : 'Data Penghasilan Ibu Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Pekerjaan Pribadi</TableCell>
                <TableCell className='border-2'>
                  {matchedOptionSelfOccupation
                    ? matchedOptionSelfOccupation.label
                    : 'Data Perkerjaan Pribadi Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Penghasilan Pribadi
                </TableCell>
                <TableCell className='border-2'>
                  {matchedOptionSelfSalary
                    ? matchedOptionSelfSalary.label
                    : 'Data Penghasilan Pribadi Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Tinggal Dengan</TableCell>
                <TableCell className='border-2'>
                  {matchedOptionLiveWith
                    ? matchedOptionLiveWith.label
                    : 'Data Tinggal Dengan Tidak Ditemukan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Biaya Kuliah Ditanggung Oleh
                </TableCell>
                <TableCell className='border-2'>
                  {matchedOptionCollegeFeesPaid
                    ? matchedOptionCollegeFeesPaid.label
                    : 'Data Tanggungan Biaya Tidak Ditemukan'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      ) : (
        <div className='grid place-content-center h-96 w-full'>
          <p className='text-center text-neutral-900 text-[18px] font-[500]'>
            Tidak Ada Data
          </p>
        </div>
      )}
    </div>
  );
};

export default InformasiPekerjaanSection;
