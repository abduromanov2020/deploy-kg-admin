'use client';

import { PlayCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';

import {
  useGetDocumentByModuleId,
  useGetModulesBySessionId,
  useGetVideoByModuleId,
} from '@/hooks/studi-ku/modul/hook';

import { BreadCrumb, TCrumbItem } from '@/components/BreadCrumb';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { DETAIL_MODULE_BREADCRUMBS } from '@/modules/studi-ku/modul/constant';
import DeleteDocumentModal from '@/modules/studi-ku/modul/detail/document/delete';
import { EditDocumentModal } from '@/modules/studi-ku/modul/detail/document/edit';
import DeleteVideoModal from '@/modules/studi-ku/modul/detail/video/delete';
import { EditVideoModal } from '@/modules/studi-ku/modul/detail/video/edit';
import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
const ModulDetailModule = () => {
  const { subject_id, session_id, module_id } = useParams();

  const { data: modules, isLoading: isLoadingModules } =
    useGetModulesBySessionId(subject_id as string, session_id as string);
  const { data: videos, isLoading: isLoadingVideos } = useGetVideoByModuleId(
    subject_id as string,
    session_id as string,
    module_id as string,
  );
  const { data: documents, isLoading: isLoadingDocuments } =
    useGetDocumentByModuleId(
      subject_id as string,
      session_id as string,
      module_id as string,
    );

  const moduleData = modules?.data?.modules?.find(
    (item) => item.id === module_id,
  );

  const BreadCrumbItems: TCrumbItem[] = [
    ...DETAIL_MODULE_BREADCRUMBS,
    {
      name: 'Daftar Modul',
      link: `/studi-ku/modul/${subject_id}/${session_id}`,
    },
    {
      name: `Detail Modul ${moduleData?.title}`,
      link: `/studi-ku/modul/${subject_id}/${session_id}/${module_id}`,
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={BreadCrumbItems} className='!p-0 ' />
      </div>
      {isLoadingModules || isLoadingVideos || isLoadingDocuments ? (
        <LoadingSpinner />
      ) : (
        <div className='bg-white flex flex-col gap-5 rounded-md pb-5 '>
          <div className='flex justify-between items-center  '>
            <TitleModule
              title={`${moduleData?.title} Mata Kuliah ${modules?.data?.subject?.name}`}
            />
          </div>
          <div className='px-5 '>
            <div className='rounded-lg border-2'>
              <div className=' px-8 py-4 grid grid-cols-6'>
                <div className='col-span-2 font-semibold text-dark-900'>
                  Judul Modul
                </div>
                <p className='text-[15px] col-span-4 text-dark-900 text-sm'>
                  {moduleData?.title}
                </p>
              </div>
              <div className=' px-8 py-4 grid grid-cols-6'>
                <div className='col-span-2 font-semibold text-dark-900'>
                  Deskripsi Modul
                </div>
                <p className='text-[15px] col-span-4 text-dark-900 text-sm'>
                  {moduleData?.description}
                </p>
              </div>
              <div className='flex justify-between items-center px-8 py-4'>
                <h1 className='font-semibold text-dark-900'>Modul Video</h1>
                <div className='flex gap-2 py-2 px-4'>
                  <Button asChild variant='primary'>
                    <Link
                      href={`/studi-ku/modul/${subject_id}/${session_id}/${module_id}/tambah-video`}
                      className='flex gap-2 items-center'
                    >
                      Tambah Video
                    </Link>
                  </Button>
                </div>
              </div>
              {videos?.data.videos.map((item, index) => (
                <Fragment key={index}>
                  <ItemDetailModul
                    variant='dark'
                    content={item.description}
                    label='Deskripsi Video'
                  />
                  <ItemDetailFile
                    id={item.id}
                    content={item.title}
                    link={item.video}
                    label={`Video ${index + 1}`}
                    type='video'
                    title={item?.title}
                    duration={item?.duration}
                    url={item?.video}
                    description={item?.description}
                  />
                </Fragment>
              ))}
              <div className='flex justify-between items-center px-8 py-4'>
                <h1 className='font-semibold text-dark-900'>Modul Dokumen</h1>
                <div className='flex gap-2 py-2 px-4'>
                  <Button asChild variant='primary'>
                    <Link
                      href={`/studi-ku/modul/${subject_id}/${session_id}/${module_id}/tambah-dokumen`}
                      className='flex gap-2 items-center'
                    >
                      Tambah Dokumen
                    </Link>
                  </Button>
                </div>
              </div>
              {documents?.data.documents.map((item, index) => (
                <Fragment key={index}>
                  <ItemDetailFile
                    id={item.id}
                    content={item.title}
                    link={item.document}
                    label={`Dokumen ${index + 1}`}
                    type='file'
                    variant={index % 2 === 0 ? 'light' : 'dark'}
                    title={item?.title}
                    duration={item?.duration}
                    url={item?.document}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModulDetailModule;

export const ItemDetailModul = ({
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
        variant === 'light' ? 'bg-white' : 'bg-dark-200'
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

export const ItemDetailFile = ({
  id,
  label,
  content,
  link,
  type = 'video',
  variant = 'dark',
  title,
  duration,
  url,
  description,
}: {
  id: string;
  label: string;
  content: string;
  link: string;
  type: string;
  variant?: string;
  title?: string;
  duration?: string;
  url?: string;
  description?: string;
}) => {
  return (
    <div
      className={`px-8 py-4 flex justify-between  ${
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
      <div className=''>
        <Popover>
          <PopoverTrigger>
            <FiMoreVertical />
          </PopoverTrigger>
          {type === 'video' ? (
            <PopoverContent className='w-48' align='end'>
              <div className='flex flex-col gap-2'>
                <EditVideoModal
                  id={id}
                  title={title as string}
                  duration={duration as string}
                  url={url as string}
                  description={description as string}
                />
                <hr className='border-slate-200' />
                <DeleteVideoModal id={id} />
              </div>
            </PopoverContent>
          ) : (
            <PopoverContent className='w-48' align='end'>
              <div className='flex flex-col gap-2'>
                <EditDocumentModal
                  id={id}
                  title={title as string}
                  duration={duration as string}
                  url={url as string}
                />
                <hr className='border-slate-200' />
                <DeleteDocumentModal id={id} />
              </div>
            </PopoverContent>
          )}
        </Popover>
      </div>
    </div>
  );
};
