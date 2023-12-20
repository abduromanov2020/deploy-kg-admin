import React, { useEffect, useState } from 'react';
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

interface FilterDataProps {
  onApplyFilter: (selectedItems: CheckedItems) => void;
}

export const FilterData: React.FC<FilterDataProps> = ({ onApplyFilter }) => {
  const { data: major } = useMajor();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const initialCheckedState = major?.data?.reduce((acc, item) => {
    acc[item.id] = true;
    return acc;
  }, {} as CheckedItems);

  const [checkedItems, setCheckedItems] = useState<CheckedItems>(
    initialCheckedState || {},
  );

  useEffect(() => {
    // You can do something with the checkedItems whenever it changes
    console.log('Checked Items:', checkedItems);
  }, [checkedItems]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (itemId: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(checkedItems);
    setDropdownOpen(false);
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
          onSelect={handleApplyFilter}
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
