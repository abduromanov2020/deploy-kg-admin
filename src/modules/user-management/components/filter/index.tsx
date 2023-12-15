import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { FaFilter } from 'react-icons/fa6';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

interface FilterDropDownProps {
  showStatusBar: Checked;
  showActivityBar: Checked;
  showPanel: Checked;
  onShowStatusBarChange: (checked: Checked) => void;
  onShowActivityBarChange: (checked: Checked) => void;
  onShowPanelChange: (checked: Checked) => void;
  Prodi: {
    value: string;
    label: string;
  }[];
}

const FilterDropDown: React.FC<FilterDropDownProps> = ({
  showStatusBar,
  showActivityBar,
  showPanel,
  onShowStatusBarChange,
  onShowActivityBarChange,
  onShowPanelChange,
  Prodi,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:transition'>
            <div className='flex place-items-center gap-2'>
              <FaFilter /> Filter
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Filter</DropdownMenuLabel>
          <DropdownMenuLabel>Prodi</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {Prodi.map((item, i) => (
            <DropdownMenuCheckboxItem
              key={i}
              checked={showStatusBar}
              onCheckedChange={onShowStatusBarChange}
              textValue={item.value}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuLabel>Prodi</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={onShowStatusBarChange}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={onShowActivityBarChange}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={onShowPanelChange}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterDropDown;
