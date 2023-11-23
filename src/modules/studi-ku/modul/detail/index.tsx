'use client';

import { PlayCircleIcon } from 'lucide-react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { FaFileAlt } from 'react-icons/fa';

import { BreadCrumb } from '@/components/BreadCrumb';
import { DeleteDialog } from '@/components/dialog/detele-dialog';
import { Button } from '@/components/ui/button';

import { DETAIL_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';
import { DETAIL_MODULE_DATA } from '@/modules/studi-ku/modul/detail/constant';
import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';

const ModulDetailModule = () => {
  const data = DETAIL_MODULE_DATA;

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={DETAIL_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
        <div className='flex justify-between items-center  '>
          <TitleModule title='Detail Modul 1 Mata Kuliah Management' />
          <div className='flex gap-2 border-b border-slate-200  py-2 px-4'>
            <Button asChild variant='primaryOutline'>
              <Link
                href='/studi-ku/modul/edit'
                className='flex gap-2 items-center'
              >
                Edit
              </Link>
            </Button>
            <DeleteDialog
              description='Cek kembali informasi dengan benar.'
              label='Hapus'
              title='Apakah Anda yakin akan menghapus Modul 1 Mata Kuliah Manajemen Keuangan ?'
            />
          </div>
        </div>
        <div className='px-5 '>
          <div className='rounded-lg border-2'>
            <ItemDetailModul content={data?.cover?.title} label='Judul Modul' />
            <ItemDetailModul2
              content={data?.cover?.description}
              label='Deskripsi Modul'
            />
            {data?.video?.map((item, index) => (
              <Fragment key={index}>
                <ItemDetailModul2
                  variant='dark'
                  content={item.description}
                  label='Deskripsi Video'
                />
                <ItemDetailFile
                  content={item.title}
                  link={item.link}
                  label={`Video ${index + 1}`}
                  type='video'
                />
              </Fragment>
            ))}
            {data?.document?.map((item, index) => (
              <Fragment key={index}>
                <ItemDetailFile
                  content={item.file}
                  link={item.file}
                  label={`Dokumen ${index + 1}`}
                  type='file'
                  variant={index % 2 === 0 ? 'light' : 'dark'}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulDetailModule;

const ItemDetailModul = ({
  label,
  content,
}: {
  label: string;
  content: string;
}) => {
  return (
    <div className=' px-8 py-4 grid grid-cols-6'>
      <div className='col-span-2 font-semibold text-dark-900'>{label}</div>
      <p className='text-[15px] col-span-4 text-dark-900 text-sm'>{content}</p>
    </div>
  );
};
const ItemDetailModul2 = ({
  label,
  content,
  variant = 'light',
}: {
  label: string;
  content: string;
  variant?: string;
}) => {
  return (
    <div
      className={`px-8 py-4 grid grid-cols-6 ${
        variant ? 'bg-white' : 'bg-dark-200'
      }`}
    >
      <p className='text-[15px] col-span-2 font-semibold text-dark-900'>
        {label}
      </p>
      <div
        className='col-span-4 text-dark-900 text-sm'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

const ItemDetailFile = ({
  label,
  content,
  link,
  type = 'video',
  variant = 'dark',
}: {
  label: string;
  content: string;
  link: string;
  type: string;
  variant?: string;
}) => {
  return (
    <div
      className={`px-8 py-4 grid grid-cols-6 ${
        variant === 'dark' ? 'bg-dark-200' : 'bg-white'
      }`}
    >
      <p className='text-[15px] col-span-2 font-semibold text-dark-900'>
        {label}
      </p>
      <div className='flex flex-col w-[350px] overflow-hidden text-ellipsis'>
        <p className='rounded-t-md shadow-md text-sm bg-white px-4 py-2 w-full'>
          {content}
        </p>
        <Link
          href={link}
          target='_blank'
          className='bg-dark-300 w-[350px] h-[180px] group rounded-b-md shadow-md flex items-center justify-center'
        >
          {type === 'video' ? (
            <PlayCircleIcon className='text-dark-600 w-8 h-8 group-hover:scale-110 transition-all duration-300' />
          ) : (
            <FaFileAlt className='text-dark-600 w-8 h-8 group-hover:scale-110 transition-all duration-300' />
          )}
        </Link>
      </div>
    </div>
  );
};
