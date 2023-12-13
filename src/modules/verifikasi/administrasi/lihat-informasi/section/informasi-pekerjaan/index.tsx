import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

const InformasiPekerjaanSection = () => {
  return (
    <div className='my-3 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Nama Ayah
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Pekerjaan Ayah</TableCell>
                  <TableCell className='border-2'>Raul</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                  Penghasilan Ayah
                  </TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                  Nama Ibu
                  </TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Pekerjaan Ibu</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Penghasilan Ibu</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Pekerjaan Pribadi</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Penghasilan Pribadi</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Tinggal Dengan</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Biaya Kuliah Ditanggung Oleh</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
  )
}

export default InformasiPekerjaanSection