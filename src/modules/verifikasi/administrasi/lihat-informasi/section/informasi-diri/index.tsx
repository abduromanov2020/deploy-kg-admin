import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { optionsLastEducation } from '@/modules/verifikasi/administrasi/constant';

const InformasiDiriSection = ({ dataBio, dataUserAdm }: any) => {
  //Equates to constant value

  // Last Education
  const matchedOptionLastEducation = optionsLastEducation.find(
    (option) => option.value === dataBio?.last_education,
  );
  return (
    <div className='my-3 w-full'>
      {dataBio && dataUserAdm ? (
        <>
          <Table className='border-2'>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>
                  Nama Lengkap Sesuai KTP
                </TableCell>
                <TableCell className='border-2'>
                  {dataUserAdm?.full_name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium w-[30%]'>
                  Nomor Induk Kependudukan
                </TableCell>
                <TableCell className='border-2'>
                  {dataBio?.identity_number}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Jenis Kelamin</TableCell>
                <TableCell className='border-2'>
                  {dataUserAdm?.gender === 'MALE' ? 'Laki-laki' : 'Perempuan'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Nomor Handphone</TableCell>
                <TableCell className='border-2'>
                  {dataUserAdm?.phone_number}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>
                  Pendidikan Terakhir
                </TableCell>
                <TableCell className='border-2'>
                  {matchedOptionLastEducation
                    ? matchedOptionLastEducation.label
                    : 'Tidak ada data Pendidikan Terakhir'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Tempat Lahir</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.birthplace}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Tanggal Lahir</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.birthdate.slice(0, 10)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Alamat Email</TableCell>
                <TableCell className='border-2'>{dataUserAdm?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Alamat Lengkap</TableCell>
                <TableCell className='border-2'>{dataBio?.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Kabupaten/Kota</TableCell>
                <TableCell className='border-2 capitalize'>
                  {dataBio?.regency}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Kode POS</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.postal_code}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Universitas Asal</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.university === null || dataBio?.university === ''
                    ? 'Tidak Ada Data Universitas'
                    : dataBio?.university}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>NIM/NPM</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.nim === null || dataBio?.nim === ''
                    ? 'Tidak Ada Data NIM/NPM'
                    : dataBio?.nim}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Program Studi</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.major === null || dataBio?.major === ''
                    ? 'Tidak Ada Data Program Studi'
                    : dataBio?.major}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>Semester</TableCell>
                <TableCell className='border-2'>
                  {dataBio?.semester === null || dataBio?.semester === ''
                    ? 'Tidak Ada Data Semester'
                    : dataBio?.semester}
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

export default InformasiDiriSection;
