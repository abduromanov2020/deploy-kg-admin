import React, { Dispatch, SetStateAction } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface data {
  id?: string;
  title: string;
}

interface FilterMenuProps {
  data?: data[];
  className?: string;
  title: string;
  icon: React.ReactNode;
  setFilter?: Dispatch<SetStateAction<{ id: string; title: string }>>;
  filter?: {
    id: string;
    title: string;
  };
  isLoading?: boolean;
}

export const Filter: React.FC<FilterMenuProps> = ({
  data,
  icon,
  title,
  className,
  setFilter,
  filter,
  isLoading,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isLoading}
        className={` ${className} flex justify-between items-center gap-2 text-sm font-semibold rounded-md `}
      >
        <div>{filter?.title ? filter.title : title}</div>
        {icon}
      </DropdownMenuTrigger>
      {!isLoading && (
        <DropdownMenuContent className='w-[250px] max-h-[400px] overflow-y-scroll'>
          {data?.map((item, index) => {
            return (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  if (setFilter) {
                    setFilter({
                      id: item?.id as string,
                      title: item.title,
                    });
                  }
                }}
                className='border-b border-slate-100 py-3'
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
