import React, { FC, ReactNode } from 'react';

export type DashboardCardProps = {
  title: string;
  data: string;
  totalData: string;
  icon: ReactNode;
};

export const DashboardCard: FC<{ data: DashboardCardProps }> = ({ data }) => {
  return (
    <div className='bg-white p-5 rounded-md '>
      <div className='flex items-center gap-3 '>
        <div className='flex justify-center items-center bg-gray-300 p-2 rounded-sm'>
          {data.icon}
        </div>
        <p className='font-bold text-lg'>{data.title}</p>
      </div>
      <div className='flex mt-3 items-end font-bold'>
        <p className=' text-xl'>{data.data}</p>
        <p className='text-sm text-neutral-400'>{data.totalData}</p>
      </div>
    </div>
  );
};
