import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
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
type Checked = DropdownMenuCheckboxItemProps['checked'];

export const TableFilter = () => {
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
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
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
  );
};
