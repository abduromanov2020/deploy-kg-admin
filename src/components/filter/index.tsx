import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FilterMenuProps {
  data: { id: string; title: string }[] | undefined;
  className?: string;
  title: string;
  bgColor?: string;
  icon: React.ReactNode;
  filter?: string;
  setFilter?: (value: string) => void;
  setFilterId?: (value: string) => void;
  isLoading?: boolean;
  handleParams?: (key: string, value: string) => void;
  paramsKey?: string;
}

export const Filter: React.FC<FilterMenuProps> = ({
  data,
  icon,
  title,
  filter,
  className,
  setFilter,
  setFilterId,
  isLoading,
  handleParams,
  paramsKey,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={` ${className} flex justify-between items-center gap-2 text-sm font-semibold rounded-md 
          ${!data || isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <div>{filter ? filter : title}</div>
        {icon}
      </DropdownMenuTrigger>
      {(data || !isLoading) && (
        <DropdownMenuContent className='w-[200px] max-h-[350px] overflow-y-scroll'>
          {data?.map((item, index) => {
            return (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  setFilter && setFilter(item.title);
                  setFilterId && setFilterId(item.id);
                  handleParams && handleParams(paramsKey as string, item.id);
                }}
              >
                {item.title}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
