'use client';

import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Avatar from 'react-avatar';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';

import { logoutRequest } from '@/hooks/auth/request';
import { useProfile } from '@/hooks/profile/hook';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/menubar';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const { data } = useProfile();
  const userData = data?.data?.user;

  const { data: session } = useSession();

  return (
    <div className=' px-16 w-full bg-white py-[10px] shadow text-center '>
      <div className='flex gap-3 mr-4 justify-end'>
        <div className='flex gap-2 items-center'>
          <div className='flex flex-col justify-start font-medium'>
            <p>Welcome,</p>
            <p className='text-sm'>{userData?.full_name}</p>
          </div>

          {userData?.avatar !== null ? (
            <Image
              src={userData?.avatar as string}
              width={50}
              height={50}
              alt='avatar'
              className='w-10 h-10 rounded-full object-cover bg-center'
            />
          ) : (
            <Avatar
              name={userData?.full_name || 'a'}
              color='#F26800'
              round
              size='45'
            />
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className='bg-gray-600 w-12 h-12 rounded-full hover:cursor-pointer flex justify-center items-center'>
              <FaBell size={20} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>NOTIFIKASI</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <AiOutlineAppstore className='w-7 h-7' />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem
                className='cursor-pointer flex gap-2 items-center'
                onClick={async () => {
                  await logoutRequest({
                    refresh_token: session?.user?.token
                      ?.refresh_token as string,
                  });
                  signOut();
                }}
              >
                <IoLogOut className='h-6 w-6' /> Keluar
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Navbar;
