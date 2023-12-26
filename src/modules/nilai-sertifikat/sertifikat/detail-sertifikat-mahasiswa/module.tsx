'use client';

import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import SertifikatAkademiSection from '@/modules/nilai-sertifikat/sertifikat/detail-sertifikat-mahasiswa/section/sertifikat-akademi';
import SertifikatAcaraSection from '@/modules/nilai-sertifikat/sertifikat/detail-sertifikat-mahasiswa/section/sertifikat-acara';

const DetailSertifikatModule = () => {
  const DetailSertifikatBreadcrumb = [
    {
      name: 'Sertifikat',
      link: '/nilai-dan-sertifikat/sertifikat',
    },
    {
      name: 'Detail Sertifikat Mahasiswa',
      link: `/nilai-dan-sertifikat/sertifikat/detail-sertifikat-mahasiswa/1`,
    },
  ];

  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('sertifikat-akademis');

  useEffect(() => {
    if (query.get('tab') === 'sertifikat-akademis') {
      setactive('sertifikat-akademis');
    } else if (query.get('tab') === 'sertifikat-acara') {
      setactive('sertifikat-acara');
    }
  }, [query, router]);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={DetailSertifikatBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='flex justify-between items-center border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>Detail Mahasiswa</h3>
        </div>
        <div className='w-full px-5 pb-4'>
          <Tab.Group>
            <Tab.List
              as='div'
              className='flex w-max items-center gap-2 mb-5 text-sm font-normal border-b-2 text-neutral-400'
            >
              <Tab
                className={`${
                  active === 'sertifikat-akademis'
                    ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                as='div'
                onClick={() => {
                  setactive('sertifikat-akademis');
                  router.push(`${pathName}?tab=sertifikat-akademis`);
                }}
              >
                Sertifikat Akademi
              </Tab>

              <Tab
                className={`${
                  active === 'sertifikat-acara'
                    ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                as='div'
                onClick={() => {
                  setactive('sertifikat-acara');
                  router.push(`${pathName}?tab=sertifikat-acara`);
                }}
              >
                Sertifikat Acara
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SertifikatAkademiSection />
              </Tab.Panel>
              <Tab.Panel>
                <SertifikatAcaraSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
};

export default DetailSertifikatModule;
