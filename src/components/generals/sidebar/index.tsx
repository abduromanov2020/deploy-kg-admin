'use client';

import React, { FC, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import Dashboard from '~/svg/dashboard.svg';
import FileCheck from '~/svg/FileCheck.svg';
// import Users from '~/svg/users-group.svg'
// import BookBookmark from '~/svg/BookBookmark.svg'
// import UserFocus from '~/svg/UserFocus.svg'
import Logo from '~/svg/Logo.svg';

const Sidebar: FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className='w-[280px] min-h-screen py-10 bg-sidebar'>
      <div className='pl-[35px] pb-[30px]'>
        <Logo className='w-[96px] h-full' />
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-sm font-medium text-white pl-[35px] '>UTAMA</p>
          <div className='flex gap-[10px]  py-1 pl-[35px]'>
            <Dashboard className='w-6 h-6' />
            <p className='text-medium font-medium text-white'>Dashboard</p>
          </div>
          <div
            className='flex gap-[10px] pl-[35px] py-1 justify-between pr-[22px] relative'
            onClick={toggleDropdown}
          >
            <div className='flex gap-[10px]'>
              <FileCheck className='w-6 h-6' />
              <p className='text-medium font-medium text-white'>Verifikasi</p>
            </div>
            <IoChevronDown
              className={`w-6 h-6 text-white ${
                showDropdown ? 'transform rotate-180' : ''
              }`}
            />
            <div
              className={`flex flex-col gap-[10px] absolute top-10 w-full pl-[35px] pr-[30px] overflow-hidden transition-all duration-300 ${
                showDropdown ? 'h-full' : 'h-0'
              }`}
            >
              <p className='text-medium font-medium text-white py-1'>
                Administrasi
              </p>
              <p className='text-medium font-medium text-white py-1'>
                Rencana Studi
              </p>
            </div>
          </div>
          <div className='flex gap-[10px]  py-1 pl-[35px]'>
            <Dashboard className='w-6 h-6' />
            <p className='text-medium font-medium text-white'>Dashboard</p>
          </div>
          <div
            className='flex gap-[10px] pl-[35px] py-1 justify-between pr-[22px] relative'
            onClick={toggleDropdown}
          >
            <div className='flex gap-[10px]'>
              <FileCheck className='w-6 h-6' />
              <p className='text-medium font-medium text-white'>Verifikasi</p>
            </div>
            <IoChevronDown
              className={`w-6 h-6 text-white ${
                showDropdown ? 'transform rotate-180' : ''
              }`}
            />
            <div
              className={`flex flex-col gap-[10px] absolute top-10 w-full pl-[35px] pr-[30px] overflow-hidden transition-all duration-300 ${
                showDropdown ? 'h-full' : 'h-0'
              }`}
            >
              <p className='text-medium font-medium text-white py-1'>
                Administrasi
              </p>
              <p className='text-medium font-medium text-white py-1'>
                Rencana Studi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
