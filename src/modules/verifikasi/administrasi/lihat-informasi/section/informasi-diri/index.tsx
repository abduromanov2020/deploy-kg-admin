import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

const InformasiDiriSection = () => {
  return (
    <div className='my-3 w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    ID Fakultas
                  </TableCell>
                  <TableCell className='border-2'>129391132</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Nama Fakultas</TableCell>
                  <TableCell className='border-2'>Raul</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Kepala Program Studi
                  </TableCell>
                  <TableCell className='border-2'>440</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jumlah Prodi</TableCell>
                  <TableCell className='border-2'>3.92</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Deskripsi</TableCell>
                  <TableCell className='border-2'>122</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
  )
}

export default InformasiDiriSection