import React, { FC } from 'react';

export type props = { event: string; time: string; location: string };
import { AiOutlineClockCircle } from 'react-icons/ai';

export const CalendarEventCard: FC<{ data: props }> = ({ data }) => {
  return (
    <div className='flex justify-between border-l-4 border-primary-500 text-sm my-5 pl-2 text-dark-500 py-1'>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <p>{data.event}</p>
          <div className='flex items-center gap-2'>
            <AiOutlineClockCircle size={15} />
            <p>{data.time}</p>
          </div>
        </div>
        <p>{data.location}</p>
      </div>
    </div>
  );
};
