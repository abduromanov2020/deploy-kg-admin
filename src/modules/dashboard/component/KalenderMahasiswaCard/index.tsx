'use client';
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  formatISO,
  startOfWeek,
} from 'date-fns';
import idLocale from 'date-fns/locale/id';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

import { CalendarEventCard } from '@/modules/dashboard/component/CalendarEventCard';

const event = [
  {
    event: 'Seminar Proposal',
    time: '08.00 - 10.00',
    location: 'Ruang 2.2',
  },
  {
    event: 'Seminar Proposal',
    time: '09.00 - 12.00',
    location: 'Ruang 5',
  },
  {
    event: 'Webinar',
    time: '08.00 - 10.00',
    location: 'Ruang 2.2',
  },
  {
    event: 'Webinar 123',
    time: '08.00 - 10.00',
    location: 'Ruang 2.2',
  },
];

export const KalenderMahasiswaCard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currentDate = new Date();
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 1 });

  const weekDates = eachDayOfInterval({
    start: startOfWeekDate,
    end: endOfWeekDate,
  });

  return (
    <div className='bg-white rounded-md col-span-1'>
      <div className='border-b border-dark-200 p-4 flex justify-between items-center'>
        <span className='font-semibold '>Kalender Mahasiswa</span>
        <Button
          variant='outline'
          className='border-primary-500 text-primary-500'
        >
          Lihat Semua
        </Button>
      </div>
      <div className='p-8'>
        <div className='flex justify-between'>
          {weekDates.map((date) => (
            <div
              key={date.toISOString()}
              className={`flex flex-col justify-center items-center   p-2 text-xs rounded-md  ${
                formatISO(date, { representation: 'date' }).toString() ==
                formatISO(selectedDate, { representation: 'date' }).toString()
                  ? 'bg-primary-500 text-white'
                  : 'bg-primary-100 text-dark-500 hover:bg-primary-200'
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div>{format(date, 'dd')}</div>
              <div>{format(date, 'eee', { locale: idLocale })}</div>
            </div>
          ))}
        </div>
        <div className='mt-5'>
          {event.map((item) => (
            <CalendarEventCard key={item.event} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
