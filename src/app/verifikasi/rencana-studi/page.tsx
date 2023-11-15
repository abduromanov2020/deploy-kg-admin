'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react';
import * as React from 'react';
import { FaSearch } from 'react-icons/fa';

import BaseLayout from '@/components/layouts/base-layout';

// export const metadata: Metadata = {
//   title: 'Verifikasi Rencana Stud',
// };

export default function VerifikasiRencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <BaseLayout>
          <Input
            type='email'
            label='Email'
            placeholder='you@example.com'
            labelPlacement='outside'
            startContent={
              <FaSearch className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
            }
          />
          <Dropdown>
            <DropdownTrigger>
              <Button variant='bordered'>Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Static Actions'>
              <DropdownItem key='new'>New file</DropdownItem>
              <DropdownItem key='copy'>Copy link</DropdownItem>
              <DropdownItem key='edit'>Edit file</DropdownItem>
              <DropdownItem key='delete' className='text-danger' color='danger'>
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </BaseLayout>
      </div>
    </main>
  );
}
