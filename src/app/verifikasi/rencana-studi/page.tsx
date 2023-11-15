'use client';

// import { Input } from '@nextui-org/react';
import * as React from 'react';

import BaseLayout from '@/components/layouts/base-layout';
// export const metadata: Metadata = {
//   title: 'Verifikasi Rencana Stud',
// };
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function VerifikasiRencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <BaseLayout>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='outline'>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    defaultValue='Pedro Duarte'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='username' className='text-right'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    defaultValue='@peduarte'
                    className='col-span-3'
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </BaseLayout>
      </div>
    </main>
  );
}
