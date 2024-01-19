import { LucideClipboardList, Monitor } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
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

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const [majorsFilter, setMajorsFilter] = useState('');
  const [majorId, setMajorId] = useState('');

  const { data: subjects, isLoading: isSubjectsLoading } =
    useGetSubjectByMajorId(majorId, 1);

  const [subjectFilter, setSubjectFilter] = useState('');
  const [subjectId, setSubjectId] = useState('');

  const { data: sessions } = useGetSessionsBySubjectId(subjectId);

  const majorsOption: { id: string; title: string }[] =
    majors?.data?.majors?.map((major: TMajorItem) => ({
      id: major.id,
      title: major.name,
    }));

  const subjectOption: { id: string; title: string }[] =
    subjects?.data?.subjects?.map((subject: TSubjectItem) => ({
      id: subject.id,
      title: subject.name,
    }));

  const handleParams = (key: string, value: string) => {
    params.delete('subject');
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setMajorId('');
    setSubjectId('');
    setMajorsFilter('');
    setSubjectFilter('');
    if (params.get('major')) {
      setMajorId(params.get('major') as string);
      const major = majorsOption?.find(
        (major) => major.id === params.get('major'),
      );
      major ? setMajorsFilter(major.title) : setMajorsFilter('');
    }
    if (params.get('subject')) {
      setSubjectId(params.get('subject') as string);
      const subject = subjectOption?.find(
        (subject) => subject.id === params.get('subject'),
      );
      subject ? setSubjectFilter(subject.title) : setSubjectFilter('');
    }
  }, [params, majorsOption, subjectOption]);

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
            className='border-2 py-3 w-[200px] px-4'
            title='Program Studi'
            data={majorsOption}
            setFilter={setMajorsFilter}
            setFilterId={setMajorId}
            filter={majorsFilter}
            isLoading={isMajorsLoading}
            handleParams={handleParams}
            paramsKey='major'
          />
          <Filter
            icon={<BiChevronDown className='text-xl' />}
            className='border-2 py-3 w-[200px] px-4'
            title='Mata Kuliah'
            data={subjectOption}
            setFilter={setSubjectFilter}
            setFilterId={setSubjectId}
            filter={subjectFilter}
            isLoading={isSubjectsLoading}
            handleParams={handleParams}
            paramsKey='subject'
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
