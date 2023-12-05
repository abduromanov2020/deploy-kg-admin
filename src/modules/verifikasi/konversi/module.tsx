'use client';

import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import KonversiBalikSection from '@/modules/verifikasi/konversi/section/konversi-balik';
import RiwayatKonversiSection from '@/modules/verifikasi/konversi/section/riwayat-konversi';
import TransferKonversiSection from '@/modules/verifikasi/konversi/section/transfer-konversi';

const VerifikasiKonversiModule = () => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('konversi-balik');

  useEffect(() => {
    if (query.get('tab') === 'konversi-balik') {
      setactive('konversi-balik');
    } else if (query.get('tab') === 'transfer-konversi') {
      setactive('transfer-konversi');
    } else if (query.get('tab') === 'riwayat-konversi') {
      setactive('riwayat-konversi');
    }
  }, [query, router]);
  return (
    <div className='bg-white w-full rounded-md flex flex-col gap-5'>
      <div className='border-b border-dark-200 p-5'>
        <h3 className='font-semibold text-lg'>Verifikasi Konversi</h3>
      </div>
      <Tab.Group>
        <div className='w-max pl-5'>
          <Tab.List
            as='div'
            className='flex items-center gap-2 text-sm font-normal border-b-2 text-neutral-400'
          >
            <Tab
              className={`${
                active === 'konversi-balik'
                  ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
              as='div'
              onClick={() => {
                setactive('konversi-balik');
                router.push(`${pathName}?tab=konversi-balik`);
              }}
            >
              Konversi Balik SKS
            </Tab>

            <Tab
              className={`${
                active === 'transfer-konversi'
                  ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
              as='div'
              onClick={() => {
                setactive('transfer-konversi');
                router.push(`${pathName}?tab=transfer-konversi`);
              }}
            >
              Transfer Konversi SKS
            </Tab>

            <Tab
              className={`${
                active === 'riwayat-konversi'
                  ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer font-normal lg:text-base text-xs`}
              as='div'
              onClick={() => {
                setactive('riwayat-konversi');
                router.push(`${pathName}?tab=riwayat-konversi`);
              }}
            >
              Riwayat Konversi
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <KonversiBalikSection />
          </Tab.Panel>
          <Tab.Panel>
            <TransferKonversiSection />
          </Tab.Panel>
          <Tab.Panel>
            <RiwayatKonversiSection />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default VerifikasiKonversiModule;
