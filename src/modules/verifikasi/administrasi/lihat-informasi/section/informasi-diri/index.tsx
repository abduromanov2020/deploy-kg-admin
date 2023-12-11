import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

const InformasiDiriSection = () => {
  return (
    <div className='my-3 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nama Lengkap Sesuai KTP
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nomor Induk Kependudukan
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Jenis Kelamin
                  </TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Nomor Handphone</TableCell>
                  <TableCell className='border-2'>3.92</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Pendidikan Terakhir</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Tempat Lahir</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Tanggal Lahir</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Alamat Email</TableCell>
                  <TableCell className='border-2'>Raul</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Alamat Lengkap</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Kabupaten/Kota</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Kode POS</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Universitas Asal</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>NIM/NPM</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Program Studi</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Semester</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
  )
}

export default InformasiDiriSection