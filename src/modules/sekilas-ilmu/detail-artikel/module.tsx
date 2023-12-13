'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEdit, BiLoaderAlt, BiSolidFileExport } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { ITEMSDETAIL } from '../constants';

import ArtikelImage from '~/images/sekilas-ilmu/artikel.png';

import { useParams, useRouter } from 'next/navigation';
import { useGetArticleBySlug } from '@/hooks/sekilas-ilmu/hook';
import { Badge } from '@/components/ui/badge';

const DetailArtikelModule = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  const { data, isLoading, refetch } = useGetArticleBySlug(String(slug));

  console.log(data);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <BreadCrumb items={ITEMSDETAIL} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-sm'>Detail Artikel</h3>
            <div className='flex items-center gap-3'>
              <Button className='hover:bg-primary-600 shadow-md bg-primary-500 hover:text-white text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
              <Link href='/sekilas-ilmu/edit-artikel'>
                <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                  <BiEdit size={24} />
                  <p className='leading-none'>Edit Artikel</p>
                </Button>
              </Link>
              <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <FaTrash size={20} />
                <p className='leading-none'>Hapus Artikel</p>
              </Button>
            </div>
          </div>
        </div>
        <div className='p-5'>
          <div className='w-full'>
            {isLoading ? (
              <div className='w-full flex justify-center items-center pt-5'>
                <BiLoaderAlt className='animate-spin' size={30} />
              </div>
            ) : (
              <Table className='border-2'>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium w-[30%]'>
                      Judul Artikel
                    </TableCell>
                    <TableCell className='border-2'>
                      {data?.data?.title}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Hashtag</TableCell>
                    <TableCell className='border-2'>
                      {' '}
                      {data?.data?.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className='rounded-md bg-dark-900 bg-opacity-[0.08] hover:bg-dark-300 text-dark-900 px-3 py-1 me-1'
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Penulis</TableCell>
                    <TableCell className='border-2'>
                      {data?.data?.author?.full_name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>
                      Tanggal Unggah
                    </TableCell>
                    <TableCell className='border-2'>
                      {data?.data?.created_at}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium flex items-start'>
                      Isi Artikel
                    </TableCell>
                    <TableCell
                      className='border-2'
                      dangerouslySetInnerHTML={{
                        __html: data?.data?.content as string,
                      }}
                    ></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium flex items-start'>
                      Thumbnail
                    </TableCell>
                    <TableCell className='border-2'>
                      <Card className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'>
                        <CardTitle className='p-2 text-md'>
                          <p>Cover</p>
                        </CardTitle>
                        <CardHeader className='p-0 '>
                          <Image
                            src={data?.data?.thumbnail as string}
                            alt='artikel'
                            width={350}
                            height={200}
                            className='object-cover'
                          />
                        </CardHeader>
                      </Card>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailArtikelModule;
