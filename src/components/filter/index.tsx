import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface data {
  title: string;
}

interface FilterMenuProps {
  data: data[];
  className?: string;
  title: string;
  bgColor?: string;
  icon: React.ReactNode;
  setFilter?: (value: string) => void;
}

export const Filter: React.FC<FilterMenuProps> = ({
  data,
  icon,
  title,
  bgColor,
  className,
  setFilter,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={` ${className} flex justify-between items-center gap-2 text-sm font-semibold rounded-md `}
      >
        <div>{title}</div>
        {icon}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[180px]'>
        {data.map((item, index) => {
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                if (setFilter) {
                  setFilter(item.title);
                }
              }}
            >
              {item.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
