import { LucideClipboardList, Monitor } from 'lucide-react';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FaAddressCard, FaUserEdit } from 'react-icons/fa';
import { IoChatboxEllipses, IoDocumentText } from 'react-icons/io5';
import { TbCloudSearch, TbUserStar } from 'react-icons/tb';

import { useGetSubjectByMajorId } from '@/hooks/rencana-studi/subjects/hook';
import { useGetAllMajors } from '@/hooks/studi-ku/majors/hook';
import { useGetSessionsBySubjectId } from '@/hooks/studi-ku/sessions/hook';

import { AccordingModul } from '@/components/according-modul';
import { Filter } from '@/components/filter';

import { TMajorItem } from '@/types/rencana-studi/majors/types';
import { TSubjectItem } from '@/types/rencana-studi/subjects/types';
import { TSessionItem } from '@/types/studi-ku/sessions/types';

export const MainStudiKu: React.FC = () => {
  const { data: majors, isLoading: isMajorsLoading } = useGetAllMajors();

  const [majorsFilter, setMajorsFilter] = useState({
    id: '',
    title: '',
  });

  const { data: subjects, isLoading: isSubjectsLoading } =
    useGetSubjectByMajorId(majorsFilter.id, 1);

  const [subjectFilter, setSubjectFilter] = useState({
    id: '',
    title: '',
  });

  const { data: sessions } = useGetSessionsBySubjectId(subjectFilter.id);

  const majorsOption = majors?.data?.majors?.map((major: TMajorItem) => ({
    id: major.id,
    title: major.name,
  }));

  const subjectOption = subjects?.data?.subjects?.map(
    (subject: TSubjectItem) => ({
      id: subject.id,
      title: subject.name,
    }),
  );

  const data = [
    {
      title: 'Quiz',
      icon: <BsQuestionCircle className='text-yellow-500 text-xl' />,
      link: '/studi-ku/quiz',
    },
    {
      title: 'Tugas',
      icon: <LucideClipboardList className='text-red-500 text-xl' />,
      link: '/studi-ku/tugas',
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
      link: '/studi-ku/penilaian-keaktifan',
    },
    {
      title: 'Kualitas Pengajar & Materi Ajar',
      icon: <TbUserStar className='text-purple-500 text-xl' />,
      link: '/studi-ku/kualitas-pengajar',
    },
    {
      title: 'Presensi',
      icon: <FaUserEdit className='text-amber-500 text-xl' />,
      link: '/studi-ku/presensi-dan-nilai',
    },
  ];

  return (
    <div className='bg-white w-full rounded-md shadow-md'>
      <p className='text-dark-900 font-semibold  border-b border-slate-200 p-4'>
        Studi-Ku
      </p>
      <div className=' p-5 flex flex-col gap-2 '>
        <div className='gap-x-10 gap-y-3 flex flex-row w-full p-5 border border-slate-200 rounded-lg mb-5 flex-wrap'>
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[250px] px-4'
            title='Program Studi'
            data={majorsOption}
            setFilter={setMajorsFilter}
            filter={majorsFilter}
            isLoading={isMajorsLoading}
          />
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[250px] px-4'
            title='Mata Kuliah'
            data={subjectOption}
            setFilter={setSubjectFilter}
            filter={subjectFilter}
            isLoading={isSubjectsLoading}
          />
        </div>
        {sessions ? (
          sessions.data.sessions.map((item: TSessionItem) => (
            <AccordingModul
              key={item.id}
              title={`Pertemuan ${item.session_no}`}
              data={[
                {
                  title: 'Module',
                  icon: <IoDocumentText className='text-primary-500 text-xl' />,
                  link: `/studi-ku/modul/${item.subject_id}/${item.id}`,
                },
                ...data,
              ]}
            />
          ))
        ) : (
          <p>Silahkan Pilih Program Studi dan Mata Kuliah</p>
        )}
      </div>
    </div>
  );
};
