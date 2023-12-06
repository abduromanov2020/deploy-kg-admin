import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFileDownload, FaFilter } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import MahasiswaDataTable from '@/modules/user-management/mahasiswa/datatable';

type Checked = DropdownMenuCheckboxItemProps['checked'];
const MahasiswaModule = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const prodi = [
    {
      label: 'Informatika',
      value: 'informatika',
    },
    {
      label: 'Sistem Informasi',
      value: 'sistem informasi',
    },
  ];

  return (
    <>
      <div className='bg-white py-10 px-6 mx-auto rounded-md'>
        <h1 className='font-semibold text-xl border-b-2 pb-3'>
          User Management Mahasiswa
        </h1>
        <div className='pt-6 px-4'>
          <div className='flex place-items-center justify-between'>
            <div className='w-1/3 relative'>
              <Input
                onChange={(e) => setSearchQuery(e.target.value)}
                type='search'
                placeholder='Search'
                className='pl-10'
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <div className='space-x-8'>
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

                  {prodi.map((item, i) => (
                    <DropdownMenuCheckboxItem
                      key={i}
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                      textValue={item.value}
                    >
                      {item.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                  {/* <DropdownMenuCheckboxItem
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
                  </DropdownMenuCheckboxItem> */}
                  <DropdownMenuLabel>Prodi</DropdownMenuLabel>
                  <DropdownMenuSeparator />

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
                </DropdownMenuContent>
              </DropdownMenu>
              <button className='px-6 py-2 shadow-md text-blue-600 rounded-md hover:text-white  hover:bg-blue-600 hover:transition'>
                <div className='flex place-items-center gap-2'>
                  <FaFileDownload /> Unduh
                </div>
              </button>
            </div>
          </div>
          <MahasiswaDataTable searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default MahasiswaModule;
