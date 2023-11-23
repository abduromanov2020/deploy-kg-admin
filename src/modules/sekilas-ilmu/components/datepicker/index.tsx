import { format } from 'date-fns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const DatePickerSekilasIlmu = () => {
  const [date, setDate] = useState<Date>();
  const router = useRouter();
  const pathName = usePathname();
  const query = useSearchParams();
  const newQuery = new URLSearchParams(query);

  useEffect(() => {
    if (query.get('date')) {
      setDate(new Date(query.get('date') as string));
    }
  }, [query, router]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'text-primary-500 hover:text-primary-600 ',
            'w-[280px] justify-start text-left font-normal shadow-md',
            !date && '',
          )}
        >
          <FaCalendarAlt className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          onDayClick={(day) => {
            newQuery.set('date', format(day, 'yyyy-MM-dd'));
            router.push(`${pathName}?${newQuery.toString()}`);
            setDate(day);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerSekilasIlmu;
