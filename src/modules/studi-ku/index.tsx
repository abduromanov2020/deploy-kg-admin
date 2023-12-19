import { Monitor } from 'lucide-react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa6';
import { IoChatboxEllipses, IoDocumentText } from 'react-icons/io5';
import { LuClipboardList } from 'react-icons/lu';
import { TbCloudSearch, TbUserStar } from 'react-icons/tb';

import {
  AccordingModul,
  AccourdionModulIntroduction,
} from '@/components/according-modul';
import { Filter } from '@/components/filter';
export const MainStudiKu = () => {
  const data = [
    {
      title: 'Module',
      icon: <IoDocumentText className='text-primary-500 text-xl' />,
      link: '/studi-ku/modul',
    },
    {
      title: 'Quiz',
      icon: <BsQuestionCircle className='text-yellow-500 text-xl' />,
      link: '/studi-ku/quiz',
    },
    {
      title: 'Tugas',
      icon: <LuClipboardList className='text-red-500 text-xl' />,
      link: '/studi-ku/',
    },
    {
      title: 'Diskusi',
      icon: <IoChatboxEllipses className='text-green-500 text-xl' />,
      link: '/studi-ku/',
    },
    {
      title: 'Refleksi Eksplorasi',
      icon: <TbCloudSearch className='text-orange-500 text-xl' />,
      link: '/studi-ku/refleksi-eksplorasi',
    },
    {
      title: 'Live Mentoring',
      icon: <Monitor className='text-blue-500 text-xl' />,
      link: '/studi-ku/',
    },
    {
      title: 'Penilaian Keaktifan',
      icon: <FaAddressCard className='text-teal-500 text-xl' />,
      link: '/studi-ku/',
    },
    {
      title: 'Kualitas Pengajar & Materi Ajar',
      icon: <TbUserStar className='text-purple-500 text-xl' />,
      link: '/studi-ku/',
    },
    {
      title: 'Presensi',
      icon: <FaUserEdit className='text-amber-500 text-xl' />,
      link: '/studi-ku/',
    },
  ];

  const dataPendahuluan = {
    introduction: 'Pendahuluan Blockchain dan Cryptocurrency',
    description:
      'Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien. Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien. Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien. Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien. Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien. Blockchain dan Cryptocurrency adalah suatu teknologi yang memungkinkan terjadinya transaksi digital yang aman, transparan, dan efisien.',
    video_link: 'https://www.youtube.com/watch?v=7YqUZUd6Yd4',
    document_link:
      'https://pdfhost.io/v/2~5~.Q~5~.Pendahuluan_Blockchain_dan_Cryptocurrencypdf.pdf',
  };

  const filter = [{ title: 'Pertemuan 1' }];
  return (
    <div className='bg-white w-full rounded-md shadow-md'>
      <p className='text-dark-900 font-semibold  border-b border-slate-200 p-4'>
        Studi-Ku
      </p>
      <div className=' p-5 flex flex-col gap-2 '>
        <div className='gap-x-10 gap-y-3 flex flex-row w-full p-5 border border-slate-200 rounded-lg mb-5 flex-wrap'>
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[180px] px-4'
            title='Program Studi'
            data={filter}
          />
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[180px] px-4'
            title='Mata Kuliah'
            data={filter}
          />
        </div>
        <AccourdionModulIntroduction
          title='Pendahuluan'
          data={dataPendahuluan}
        />
        <AccordingModul title='Pertemuan 1' data={data} />
        <AccordingModul title='Pertemuan 2' data={data} />
        <AccordingModul title='Pertemuan 3' data={data} />
        <AccordingModul title='Pertemuan 4' data={data} />
        <AccordingModul title='Pertemuan 5' data={data} />
        <AccordingModul title='Pertemuan 6' data={data} />
        <AccordingModul title='Pertemuan 7' data={data} />
        <AccordingModul title='Pertemuan 8' data={data} />
      </div>
    </div>
  );
};
