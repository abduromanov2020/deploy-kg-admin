import React from 'react'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

import Sertifikat from '~/images/sertif.jpg';

const SertifikatAcaraSection = () => {
  return (
    <div className='my-4 w-full'>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium flex items-start'>
            Webinar 1
          </TableCell>
          <TableCell className='w-[70%]'>
            <div className='flex flex-wrap items-center gap-2'>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium flex items-start'>
            Webinar 2
          </TableCell>
          <TableCell className='w-[70%]'>
            <div className='flex flex-wrap items-center gap-2'>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium flex items-start'>
            Webinar 3
          </TableCell>
          <TableCell className='w-[70%]'>
            <div className='flex flex-wrap items-center gap-2'>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium flex items-start'>
            Webinar 4
          </TableCell>
          <TableCell className='w-[70%]'>
            <div className='flex flex-wrap items-center gap-2'>
              <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                <CardTitle className='p-2 text-md'>Sertifikat</CardTitle>
                <CardHeader className='p-0'>
                  <Image
                    src={Sertifikat}
                    alt='sertifikat'
                    width={350}
                    height={200}
                    className='object-cover'
                  />
                </CardHeader>
              </Card>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  )
}

export default SertifikatAcaraSection