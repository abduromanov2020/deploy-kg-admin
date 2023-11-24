'use client';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa6';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
type Checked = DropdownMenuCheckboxItemProps['checked'];

export const PesertaFilter = () => {
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
    // onOpenChange={handleDropdownToggle}
    // open={dropdownOpen}
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
            Semua
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Lunas
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Belum Lunas
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
