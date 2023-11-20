import React from 'react';
import { FaClipboard } from 'react-icons/fa';

import { AccordingModul } from '@/components/according-modul';
import { Filter } from '@/components/filter';

export const MainStudiKu = () => {
  const data = [
    {
      title: 'Module',
      icon: <FaClipboard />,
    },
  ];

  const filter = [{ title: 'Pertemuan 1' }];
  return (
    <div className='bg-white p-5 flex flex-col gap-2 w-full'>
      <div className='gap-10 flex flex-row w-full'>
        <Filter
          icon={<FaClipboard />}
          className='border-2 py-2 w-[180px] px-4'
          title='Fakultas'
          data={filter}
        />
        <Filter
          icon={<FaClipboard />}
          className='border-2 py-2 w-[180px] px-4'
          title='Program Studi'
          data={filter}
        />
        <Filter
          className='border-2 py-2 w-[180px] px-4'
          icon={<FaClipboard />}
          title='Matakuliah'
          data={filter}
        />
      </div>
      <AccordingModul title='Pertemuan 1' data={data} />
    </div>
  );
};
