import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { FaFilter } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const DropdownFilter = () => {
  const [position, setPosition] = React.useState('bottom');
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='bg-white px-3 hover:bg-dark-100 py-1 shadow-md rounded-md text-primary-500 flex gap-2 justify-center items-center'>
        <FaFilter size={20} />
        <p className='font-normal'>Filter</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Batch</DropdownMenuLabel>
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
        <DropdownMenuItem className='text-right border-none'>
          <Button className='bg-transparent hover:bg-transparent text-primary-500'>
            Terapkan
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;
