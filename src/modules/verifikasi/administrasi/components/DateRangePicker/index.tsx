'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/recoils/verifikasi/administrasi/atom';

type Props = {
  className?: string;
};

export const DateRangePicker: React.FC<Props> = ({ className}) => {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const router = useRouter()

  const [selectDate, setSelectDate] = useRecoilState(selectedDateState);

  const formatDateForURL = (date: Date | undefined): string | undefined => {
    return date ? format(date, 'yyyy-MM-dd') : undefined;
  };

  const handleDateSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    setSelectDate(selectedDate)
    // Format dates for URL and use them as needed
    const startDateFormatted = formatDateForURL(selectedDate?.from);
    const endDateFormatted = formatDateForURL(selectedDate?.to);

    if (startDateFormatted && endDateFormatted) {
      const queryString = `start_date=${startDateFormatted}&end_date=${endDateFormatted}`;
      // setQueryString(queryString);
      router.push(`/verifikasi/administrasi?${queryString}`)
    
    // Now you can use `queryString` as needed, for example, in an API request or URL redirect.
    } else {
      // If no date is selected, clear the query parameters
      router.push(`/verifikasi/administrasi`);
    }
  };

  
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant='outline'
            className={cn(
              'w-[300px] justify-start text-left font-normal bg-white shadow-md',
              !date && 'text-muted-foreground',
              'text-primary-500 hover:text-primary-600',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
