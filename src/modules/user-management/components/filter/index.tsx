import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa6';

import { useMajor } from '@/hooks/user-management/getmajor/hook';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
interface CheckedItems {
  [key: string]: boolean;
}

export const FilterData: React.FC = () => {
  const { data: major } = useMajor();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const initialCheckedState = major?.data?.reduce((acc, item) => {
    acc[item.id] = true;
    return acc;
  }, {} as CheckedItems);

  // Provide an empty object as the default value for useState
  const [checkedItems, setCheckedItems] = useState<CheckedItems>(
    initialCheckedState || {},
  );

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownSelect = () => {
    setDropdownOpen(false);
  };

  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  return (
    <DropdownMenu onOpenChange={handleDropdownToggle} open={dropdownOpen}>
      <DropdownMenuTrigger>
        <Button
          variant='outline'
          className='bg-white flex text-primary-500 shadow-md items-center font-normal gap-1 rounded-md hover:bg-dark-100 hover:text-primary-500'
        >
          <FaFilter />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className='max-h-[150px] overflow-y-scroll'>
          {major?.data?.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.id}
              checked={checkedItems[item.id]}
              onCheckedChange={() => handleCheckboxChange(item.id)}
            >
              {item.name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuItem
          onSelect={handleDropdownSelect}
          className='text-right border-none'
        >
          <Button className='text-primary-500 bg-transparent hover:bg-transparent'>
            Terapkan
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
