'use client';

import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { FaFileExport } from 'react-icons/fa6';
import ValidasiUnivSection from '@/modules/verifikasi/konversi/detail-konversi-balik/section/validasi-univ';
import UnggahBerkasValidasiSection from '@/modules/verifikasi/konversi/detail-konversi-balik/section/unggah-berkas-validasi';
import DaftarMatakuliahSection from '@/modules/verifikasi/konversi/detail-konversi-balik/section/daftar-mata-kuliah';
import StatusPengajuanSection from '@/modules/verifikasi/konversi/detail-konversi-balik/section/status-pengajuan';

const DetailKonversiBalikModule = () => {
  const DetailKonversiBalikBreadcrumb = [
    {
      name: 'Verifikasi Konversi',
      link: '/verifikasi/konversi',
    },
    {
      name: 'Detail Konversi',
      link: '/verifikasi/konversi/detail-konversi',
    },
  ];

  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('validasi-univ');

  useEffect(() => {
    if (query.get('tab') === 'validasi-univ') {
      setactive('validasi-univ');
    } else if (query.get('tab') === 'unggah-berkas-validasi') {
      setactive('unggah-berkas-validasi');
    } else if (query.get('tab') === 'daftar-mata-kuliah') {
      setactive('daftar-mata-kuliah');
    } else if (query.get('tab') === 'status-pengajuan') {
      setactive('status-pengajuan');
    }
  }, [query, router]);

  return (
    <main className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md'>
        <BreadCrumb
          items={DetailKonversiBalikBreadcrumb}
          className='lg:px-6 lg:py-4'
        />
      </div>
      <div className='bg-white w-full rounded-md flex flex-col gap-5'>
        <div className='border-b border-dark-200 p-5'>
          <h3 className='font-semibold text-lg'>
          Detail Berkas Konversi Balik SKS
          </h3>
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
                    active === 'validasi-univ'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('validasi-univ');
                    router.push(`${pathName}?tab=validasi-univ`);
                  }}
                >
                  Validasi Perguruan Tinggi
                </Tab>

                <Tab
                  className={`${
                    active === 'unggah-berkas-validasi'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('unggah-berkas-validasi');
                    router.push(`${pathName}?tab=unggah-berkas-validasi`);
                  }}
                >
                  Unggah Berkas Validasi
                </Tab>

                <Tab
                  className={`${
                    active === 'daftar-mata-kuliah'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('daftar-mata-kuliah');
                    router.push(`${pathName}?tab=daftar-mata-kuliah`);
                  }}
                >
                  Daftar Mata Kuliah Konversi
                </Tab>

                <Tab
                  className={`${
                    active === 'status-pengajuan'
                      ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                      : ''
                  } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
                  as='div'
                  onClick={() => {
                    setactive('status-pengajuan');
                    router.push(`${pathName}?tab=status-pengajuan`);
                  }}
                >
                  Status Pengajuan
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
                <ValidasiUnivSection />
              </Tab.Panel>
              <Tab.Panel>
                <UnggahBerkasValidasiSection />
              </Tab.Panel>
              <Tab.Panel>
                <DaftarMatakuliahSection />
              </Tab.Panel>
              <Tab.Panel>
                <StatusPengajuanSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
};

export default DetailKonversiBalikModule;
