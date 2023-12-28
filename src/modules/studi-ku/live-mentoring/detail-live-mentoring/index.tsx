'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ClassMentoringTabItem } from '@/modules/studi-ku/live-mentoring/detail-live-mentoring/ClassMentoringTabItem';
import { GroupMentoringTabItem } from '@/modules/studi-ku/live-mentoring/detail-live-mentoring/GroupMentoringTabItem';
import { IndividualMentoringTabItem } from '@/modules/studi-ku/live-mentoring/detail-live-mentoring/IndividualMentoringTabItem';

export const DetailLiveMentoringModule = () => {
  const BreadcrumbItems = [
    {
      name: 'Studi-Ku',
      link: '/studi-ku',
    },
    {
      name: 'Daftar Live Mentoring',
      link: `/studi-ku/live-mentoring`,
    },
    {
      name: 'Detail Live Mentoring',
      link: `/studi-ku/live-mentoring`,
    },
  ];
  const data = 'data';
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white rounded-md'>
        <BreadCrumb items={BreadcrumbItems} className='lg:px-6 lg:py-4' />
      </div>
      <div className='bg-white rounded-md'>
        <div className='border-b border-dark-200 p-4 flex items-center justify-between'>
          <span className='font-semibold '>Detail Live Mentoring: Modul 1</span>
          <Link href='/studi-ku/live-mentoring/tambah-live-mentoring'>
            <Button className='bg-primary-500 px-3 py-2 flex justify-center items-center gap-1 hover:bg-primary-400'>
              <CiCirclePlus className='w-[20px] h-[20px]' />
              <p className='leading-none'>Tambah Sesi Mentoring</p>
            </Button>
          </Link>
        </div>
        <div className='p-8'>
          <Tabs defaultValue='class-mentoring' className='w-full'>
            <TabsList className='mb-5 flex justify-between'>
              <div>
                <TabsTrigger value='class-mentoring' className='px-5'>
                  Class Mentoring
                </TabsTrigger>
                <TabsTrigger value='group-mentoring' className='px-5'>
                  Group Mentoring
                </TabsTrigger>
                <TabsTrigger value='individual-mentoring' className='px-5'>
                  Individual Mentoring
                </TabsTrigger>
              </div>
            </TabsList>

            <div>
              <TabsContent value='class-mentoring'>
                {data ? (
                  <ClassMentoringTabItem />
                ) : (
                  <div className='flex justify-center flex-col items-center'>
                    <Image
                      src='/images/studi-ku/classroom.svg'
                      width={0}
                      height={0}
                      style={{ width: '30%', height: 'auto' }}
                      alt='empty'
                    />
                    <p className='mt-3'>
                      Belum ada Class Mentoring yang dibuat
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value='group-mentoring'>
                {data ? (
                  <GroupMentoringTabItem />
                ) : (
                  <div className='flex justify-center flex-col items-center'>
                    <Image
                      src='/images/studi-ku/classroom.svg'
                      width={0}
                      height={0}
                      style={{ width: '30%', height: 'auto' }}
                      alt='empty'
                    />
                    <p className='mt-3'>
                      Belum ada Group Mentoring yang dibuat
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value='individual-mentoring'>
                {data ? (
                  <IndividualMentoringTabItem />
                ) : (
                  <div className='flex justify-center flex-col items-center'>
                    <Image
                      src='/images/studi-ku/classroom.svg'
                      width={0}
                      height={0}
                      style={{ width: '30%', height: 'auto' }}
                      alt='empty'
                    />
                    <p className='mt-3'>
                      Belum ada Individual Mentoring yang dibuat
                    </p>
                  </div>
                )}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
