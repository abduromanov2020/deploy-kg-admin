import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Checked = DropdownMenuCheckboxItemProps['checked'];

import { FaFileExport } from 'react-icons/fa6';

import { TableRencanaStudi } from '@/modules/verifikasi/rencana-studi/TableRencanaStudi';

export const VerifikasiRencanaStudiModule = () => {
  const [date, setDate] = useState<Date>();
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  const [position, setPosition] = useState('bottom');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(true);
  };

  const handleDropdownSelect = () => {
    setDropdownOpen(false);
  };
  return (
    <div className='bg-white rounded-md'>
      <div className='border-b border-dark-200 p-4'>
        <span className='font-semibold '>Verifikasi Rencana Studi</span>
      </div>
      <div className='p-8'>
        <div className='flex justify-between'>
          <div className='w-1/3 relative'>
            <Input
              type='text'
              placeholder='Search'
              className='pl-10'
              // value={
              //   (table.getColumn('email')?.getFilterValue() as string) ?? ''
              // }
              // onChange={(event) =>
              //   table.getColumn('email')?.setFilterValue(event.target.value)
              // }
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' size={20} />
            </div>
          </div>
          <div className='flex items-center gap-5'>
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
                />
              </PopoverContent>
            </Popover>
            <DropdownMenu
              onOpenChange={handleDropdownToggle}
              open={dropdownOpen}
              // onSelect={handleDropdownSelect}
            >
              <DropdownMenuTrigger className='flex px-3 py-1 h-full text-primary-500 shadow-md items-center gap-1 rounded-md hover:bg-dark-100'>
                <FaFilter />
                Filter
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                  >
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                  >
                    Panel
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuLabel>Batch</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='bottom'>
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='right'>
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuItem
                  onSelect={handleDropdownSelect}
                  className='text-right border-none'
                >
                  <Button className='text-primary-500 bg-transparent hover:bg-transparent'>
                    Terapkan{' '}
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className='bg-primary-500 hover:bg-primary-600 shadow-md'>
              <FaFileExport size={20} className='mr-2' /> Unduh
            </Button>
          </div>
        </div>
        <div className='my-8'>
          <TableRencanaStudi />
        </div>
      </div>
    </div>
  );
};
