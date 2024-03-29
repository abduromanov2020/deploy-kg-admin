'use client';

import Link from 'next/link';
import React, { FC, useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { BsWindow } from 'react-icons/bs';
import { IoChevronDown } from 'react-icons/io5';
import { RiMenu5Fill } from 'react-icons/ri';

import BookBookmark from '~/svg/BookBookmark.svg';
import BookOpen from '~/svg/BookOpen.svg';
import CalendarMonth from '~/svg/CalendarMonth.svg';
import ChartLineUp from '~/svg/ChartLineUp.svg';
import FileCheck from '~/svg/FileCheck.svg';
import Logo from '~/svg/Logo.svg';
import MonitorLock from '~/svg/MonitorLock.svg';
import MonitorPlay from '~/svg/MonitorPlay.svg';
import OfficePlan from '~/svg/office-plan.svg';
import SwatchBook from '~/svg/swatchbook.svg';
import UsersChat from '~/svg/user-globe.svg';
import UserFocus from '~/svg/UserFocus.svg';
import Users from '~/svg/users-group.svg';

const Sidebar: FC = () => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prevMenus) =>
      prevMenus.includes(title)
        ? prevMenus.filter((item) => item !== title)
        : [...prevMenus, title],
    );
  };

  return (
    <div className='w-[300px] min-h-screen py-10 bg-sidebar relative'>
      <div className='fixed top-0 left-0 h-screen bg-sidebar overflow-y-auto pb-10 pt-2 '>
        <div className='pl-[35px] pb-[30px]'>
          <Logo className='w-[96px] h-full' />
        </div>
        <div className='flex gap-6 flex-col'>
          {dataSideBar.map((item, i) => (
            <div className='flex flex-col ' key={i}>
              <p className='text-sm font-medium text-white pl-[35px] py-2 max-w-[190px]'>
                {item.title}
              </p>
              {item.children.map((child, index) => (
                <div className='relative' key={index}>
                  {child.children ? (
                    <div
                      className='flex gap-[10px] pl-[35px] py-2 justify-between pr-[22px] cursor-pointer duration-300 ease-in-out hover:bg-primary-500 hover:bg-opacity-5 hover:text-primary-500 group'
                      onClick={() => toggleMenu(child.title)}
                    >
                      <div className='flex gap-[10px]'>
                        {child.icon}
                        <p className='text-medium font-medium text-white group-hover:text-primary-500 max-w-[170px]'>
                          {child.title}
                        </p>
                      </div>
                      <IoChevronDown
                        className={`w-6 h-6 text-white group-hover:text-primary-500 ${
                          openMenus.includes(child.title)
                            ? 'transform rotate-180'
                            : ''
                        }`}
                      />
                    </div>
                  ) : (
                    <Link
                      href={child.link}
                      className='duration-300 ease-in-out hover:bg-primary-500 hover:bg-opacity-5 hover:text-primary-500 flex gap-[10px]  py-2 pl-[35px] group'
                    >
                      {child.icon}
                      <p className='text-medium font-medium text-white group-hover:text-primary-500 max-w-[190px]'>
                        {child.title}
                      </p>
                    </Link>
                  )}
                  {openMenus.includes(child.title) && child.children && (
                    <div className='flex flex-col  relative w-full overflow-hidden transition-all duration-300'>
                      {child.children.map((child2, index2) => (
                        <Link
                          href={child2.link}
                          key={index2}
                          className='text-medium font-medium text-white py-2 pl-[70px] pr-[30px] duration-300 ease-in-out hover:bg-primary-500 hover:bg-opacity-5 hover:text-primary-500'
                        >
                          {child2.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const dataSideBar = [
  {
    title: 'UTAMA',
    children: [
      {
        title: 'Beranda',
        link: '/beranda',
        icon: (
          <AiFillDashboard className='w-6 h-6 group-hover:text-primary-500 text-white' />
        ),
      },
      {
        title: 'Verifikasi',
        icon: <FileCheck className='w-6 h-6 group-hover:text-primary-500' />,
        children: [
          {
            title: 'Administrasi',
            link: '/verifikasi/administrasi',
          },
          {
            title: 'Rencana Studi',
            link: '/verifikasi/rencana-studi',
          },
          {
            title: 'Konversi',
            link: '/verifikasi/konversi',
          },
        ],
      },
      {
        title: 'User Management',
        icon: <Users className='w-6 h-6 group-hover:text-primary-500' />,
        children: [
          {
            title: 'Mahasiswa',
            link: '/user-management/mahasiswa',
          },
          {
            title: 'Dosen',
            link: '/user-management/dosen',
          },
          {
            title: 'Admin',
            link: '/user-management/admin',
          },
        ],
      },
    ],
  },
  {
    title: 'UMUM',
    children: [
      {
        title: 'Rencana Studi',
        link: '/rencana-studi',
        icon: <BookBookmark className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Studi-ku',
        link: '/studi-ku',
        icon: <BookBookmark className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Analitik Studi',
        link: '/analitik-studi',
        icon: <UserFocus className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Sekilas Ilmu',
        link: '/sekilas-ilmu',
        icon: <BookOpen className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Nilai & Sertifikat',
        icon: <ChartLineUp className='w-6 h-6 group-hover:text-primary-500' />,
        children: [
          {
            title: 'Nilai',
            link: '/nilai-dan-sertifikat/nilai',
          },
          {
            title: 'Sertifikat',
            link: '/nilai-dan-sertifikat/sertifikat',
          },
        ],
      },
      {
        title: 'Acara Kampus Gratis',
        link: '/acara-kampus-gratis',
        icon: <MonitorPlay className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Penyaluran Kerja',
        link: '/penyaluran-kerja',
        icon: <MonitorLock className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Ruang Diskusi',
        link: '/ruang-diskusi',
        icon: <UsersChat className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Coaching & Rencana Karir',
        link: '/coaching-dan-rencana-karir',
        icon: <OfficePlan className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Simulasi & Roleplay',
        link: '/simulasi-dan-roleplay',
        icon: <SwatchBook className='w-6 h-6 group-hover:text-primary-500' />,
      },
      {
        title: 'Post Training Project',
        link: '/post-training-project',
        icon: (
          <BsWindow className='w-6 h-6 text-white group-hover:text-primary-500' />
        ),
      },
      {
        title: 'Assesment & Uji Kompetensi',
        icon: (
          <RiMenu5Fill className='w-6 h-6 text-white group-hover:text-primary-500' />
        ),
        children: [
          {
            title: 'Assesment',
            link: '/assesment',
          },
          {
            title: 'Uji Kompetensi',
            link: '/uji-kompetensi',
          },
        ],
      },
      {
        title: 'Kalender Mahasiswa',
        link: '/kalender-mahasiswa',
        icon: (
          <CalendarMonth className='w-6 h-6 group-hover:text-primary-500' />
        ),
      },
    ],
  },
];
