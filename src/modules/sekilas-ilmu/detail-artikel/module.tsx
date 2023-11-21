import React from 'react';
import { BiEdit, BiSolidFileExport } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { ITEMSDETAIL } from '../constants';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

import ArtikelImage from '~/images/sekilas-ilmu/artikel.png';

const DetailArtikelModule = () => {
  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white'>
        <BreadCrumb items={ITEMSDETAIL} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-sm'>
              Masih sering gugup saat public speaking? Terapin 6 tips Ampuh ini!
            </h3>
            <div className='flex items-center gap-3'>
              <Button className='hover:bg-primary-600 shadow-md bg-primary-500 hover:text-white text-white font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiSolidFileExport size={24} />
                <p className='leading-none'>Unduh</p>
              </Button>
              <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-primary-500 text-primary-500 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <BiEdit size={24} />
                <p className='leading-none'>Edit Artikel</p>
              </Button>
              <Button className='shadow-md bg-white border-2 hover:bg-dark-200 border-red-800 text-red-800 font-normal px-3 py-2 gap-1 flex justify-center items-center text-base'>
                <FaTrash size={20} />
                <p className='leading-none'>Hapus Artikel</p>
              </Button>
            </div>
          </div>
        </div>
        <div className='p-5'>
          <div className='w-full'>
            <Table className='border-2'>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium w-[30%]'>
                    Judul Artikel
                  </TableCell>
                  <TableCell className='border-2'>
                    Masih sering gugup saat public speaking? Terapin 6 tips
                    Ampuh ini!
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Hashtag</TableCell>
                  <TableCell className='border-2'>#softskills</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Penulis</TableCell>
                  <TableCell className='border-2'>Megawanto</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Tanggal Unggah</TableCell>
                  <TableCell className='border-2'>
                    Senin, 23 Oktober 2023
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium flex items-start'>Isi Artikel</TableCell>
                  <TableCell className='border-2'>
                    Public speaking atau berbicara di depan umum merupakan
                    keterampilan yang sangat penting dalam dunia kerja maupun
                    kehidupan sosial. Bagi sebagian orang, berbicara di depan
                    umum dapat menjadi momok yang menakutkan dan menimbulkan
                    rasa cemas yang berlebihan. Namun, dengan beberapa tips dan
                    latihan yang tepat, setiap orang dapat meningkatkan
                    keterampilan public speaking mereka. Berikut ini adalah
                    beberapa tips untuk meningkatkan keterampilan public
                    speaking: Persiapkan Materi dengan Baik Sebelum berbicara di
                    depan umum, pastikan bahwa Anda sudah mempersiapkan materi
                    dengan baik. Rencanakan konten presentasi atau pidato dengan
                    jelas dan pastikan bahwa Anda memahami materi tersebut
                    dengan baik. Hal ini akan membantu Anda merasa lebih percaya
                    diri saat berbicara di depan umum. Kenali Audiens Anda
                    Sebelum berbicara di depan umum, pastikan bahwa Anda
                    mengetahui siapa audiens yang akan mendengarkan presentasi
                    atau pidato Anda. Kenali kebutuhan dan minat mereka sehingga
                    Anda dapat menyesuaikan presentasi atau pidato Anda agar
                    lebih relevan dan menarik bagi mereka. Gunakan Bahasa Tubuh
                    yang Tepat Bahasa tubuh merupakan bagian penting dari public
                    speaking. Pastikan bahwa Anda menggunakan bahasa tubuh yang
                    tepat, seperti kontak mata, gerakan tangan yang tepat, dan
                    postur tubuh yang positif. Hal ini akan membantu Anda
                    terlihat lebih percaya diri dan membuat audiens merasa lebih
                    terhubung dengan Anda. Latihan dengan Sering Latihan
                    merupakan kunci untuk meningkatkan keterampilan public
                    speaking. Cobalah berlatih pidato atau presentasi Anda
                    dengan teman atau keluarga terlebih dahulu. Hal ini akan
                    membantu Anda merasa lebih nyaman saat berbicara di depan
                    umum dan memperbaiki teknik public speaking Anda. Jangan
                    Takut dengan Kesalahan Kesalahan bisa terjadi pada siapa
                    saja, bahkan pada ahli public speaking. Jangan takut dengan
                    kesalahan yang mungkin terjadi. Cobalah untuk menyesuaikan
                    diri dan tetap tenang saat menghadapi situasi yang tidak
                    terduga. Jadilah Dirimu Sendiri Terakhir, jadilah diri
                    sendiri saat berbicara di depan umum. Jangan mencoba untuk
                    menjadi orang lain atau meniru gaya public speaking orang
                    lain. Jadilah autentik dan berbicara dengan cara yang sesuai
                    dengan kepribadian Anda. Jadi, kesimpulannya yaitu public
                    speaking adalah keterampilan yang penting dan dapat
                    ditingkatkan dengan beberapa tips dan latihan yang tepat.
                    Dengan mempersiapkan materi dengan baik, mengenali audiens
                    Anda, menggunakan bahasa tubuh yang tepat, berlatih secara
                    teratur, tidak takut dengan kesalahan, dan jadi diri
                    sendiri, Anda dapat meningkatkan keterampilan public
                    speaking Anda dan menjadi seorang yang lebih percaya diri
                    dalam berbicara di depan umum.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium flex items-start'>Thumbnail</TableCell>
                  <TableCell className='border-2'>
                    <Card
                      className='w-[228px] min-h-[112px] rounded-lg overflow-hidden'
                    >
                      <CardTitle className='p-2 text-md'>
                        <p>Cover</p>
                      </CardTitle>
                      <CardHeader className='p-0 '>
                        <Image
                          src={ArtikelImage}
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailArtikelModule;
