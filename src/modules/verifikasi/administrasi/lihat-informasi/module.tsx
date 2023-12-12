'use client';

import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaFileExport } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';

import InformasiDiriSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/informasi-diri';
import InformasiPekerjaanSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/informasi-pekerjaan';
import PemberkasanSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/pemberkasan';
import { useGetPengjuanAdmDataDiri } from '@/hooks/verifikasi/administrasi/hook';

interface TProps {
  id: string;
}

const LihatInformasiModule = ({ id }: TProps) => {
  
  const { data } = useGetPengjuanAdmDataDiri(id);

  const LihatInformasiBreadcrumb = [
    {
      name: 'Verifikasi Administrasi',
      link: '/verifikasi/administrasi',
    },
    {
      name: 'Detail Berkas',
      link: '/verifikasi/administrasi/lihat-informasi',
    },
  ];

  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('informasi-diri');

  useEffect(() => {
    if (query.get('tab') === 'informasi-diri') {
      setactive('informasi-diri');
    } else if (query.get('tab') === 'informasi-pekerjaan') {
      setactive('informasi-pekerjaan');
    } else if (query.get('tab') === 'pemberkasan') {
      setactive('pemberkasan');
    }
  }, [query, router]);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={LihatInformasiBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>Detail Berkas Administrasi</h3>
        </div>
        <div className='w-full px-5 pb-4'>
          <Tab.Group>
            <div className='flex justify-between'>
              <Tab.List
                as='div'
                className='flex items-center gap-2 mb-5 text-sm font-normal border-b-2 text-neutral-400'
              >
                <Tab
                  className={`${
                    active === 'informasi-diri'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('informasi-diri');
                    router.push(`${pathName}?tab=informasi-diri`);
                  }}
                >
                  Informasi Diri
                </Tab>

                <Tab
                  className={`${
                    active === 'informasi-pekerjaan'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('informasi-pekerjaan');
                    router.push(`${pathName}?tab=informasi-pekerjaan`);
                  }}
                >
                  Informasi Pekerjaan
                </Tab>

                <Tab
                  className={`${
                    active === 'pemberkasan'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('pemberkasan');
                    router.push(`${pathName}?tab=pemberkasan`);
                  }}
                >
                  Pemberkasan
                </Tab>
              </Tab.List>
              <Button
                variant='outline'
                className='bg-primary-500 shadow-md hover:bg-primary-600 text-white hover:text-white font-normal'
              >
                <FaFileExport className='mr-2' /> Unduh
              </Button>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <InformasiDiriSection />
              </Tab.Panel>
              <Tab.Panel>
                <InformasiPekerjaanSection />
              </Tab.Panel>
              <Tab.Panel>
                <PemberkasanSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
};

export default LihatInformasiModule;
