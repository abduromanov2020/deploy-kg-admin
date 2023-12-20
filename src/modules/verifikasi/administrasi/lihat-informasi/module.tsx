'use client';

import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaFileExport } from 'react-icons/fa6';

import { useGetPengjuanAdmDataDiri } from '@/hooks/verifikasi/administrasi/hook';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';

import InformasiDiriSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/informasi-diri';
import InformasiPekerjaanSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/informasi-pekerjaan';
import PemberkasanSection from '@/modules/verifikasi/administrasi/lihat-informasi/section/pemberkasan';
import { AccRejectModal } from '@/modules/verifikasi/administrasi/components/AccRejectModal';
import { AccConfirmModal } from '@/modules/verifikasi/administrasi/components/AccConfirmModal';

interface TProps {
  id: string;
}

const LihatInformasiModule = ({ id }: TProps) => {
  const { data, isLoading, refetch } = useGetPengjuanAdmDataDiri(id);

  const dataBio = data?.data?.biodata;
  const dataUserAdm = data?.data?.user_administration;
  const dataJob = data?.data?.familial;
  const dataFile = data?.data?.file;

  const dataStatus = data?.data?.status;

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

  const [openModalAcc, setOpenModalAcc] = useState(false);
  const [openModalReject, setOpenModalReject] = useState(false);

  useEffect(() => {
    if (query.get('tab') === 'informasi-diri') {
      setactive('informasi-diri');
    } else if (query.get('tab') === 'informasi-pekerjaan') {
      setactive('informasi-pekerjaan');
    } else if (query.get('tab') === 'pemberkasan') {
      setactive('pemberkasan');
    }
  }, [query, router]);

  const isStatusAcceptedOrRejected =
    dataStatus === 'ACCEPTED' || dataStatus === 'REJECTED';

  return (
    <>
      <main className='flex flex-col gap-6'>
        <div className='bg-white w-full rounded-md'>
          <BreadCrumb
            items={LihatInformasiBreadcrumb}
            className='lg:px-6 lg:py-4'
          />
        </div>
        <div className='bg-white w-full rounded-md flex flex-col gap-5'>
          <div className='border-b border-dark-200 p-5'>
            <h3 className='font-semibold text-lg'>
              Detail Berkas Administrasi
            </h3>
          </div>
          <div className='w-full px-5 '>
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
                {isLoading ? (
                  <div className='w-full flex justify-center items-center h-96'>
                    <BiLoaderAlt className='animate-spin' size={30} />
                  </div>
                ) : (
                  <>
                    <Tab.Panel>
                      <InformasiDiriSection
                        dataBio={dataBio}
                        dataUserAdm={dataUserAdm}
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <InformasiPekerjaanSection dataJob={dataJob} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <PemberkasanSection dataFile={dataFile} />
                    </Tab.Panel>
                    {!isStatusAcceptedOrRejected && (
                      <div className='flex justify-end my-5 gap-1'>
                        <Button
                          onClick={() => setOpenModalReject(!openModalReject)}
                          className='bg-red-800 shadow-md hover:bg-red-900 text-white hover:text-white font-normal'
                        >
                          Tolak
                        </Button>
                        <Button
                          onClick={() => setOpenModalAcc(!openModalAcc)}
                          className='bg-primary-500 shadow-md hover:bg-primary-600 text-white hover:text-white font-normal ml-2'
                        >
                          Setuju
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </main>
      <AccRejectModal
        refetch={refetch}
        isOpen={openModalReject}
        onChangeModal={() => {
          setOpenModalReject(!openModalReject);
        }}
        idAdmin={data?.data?.id}
      />
      <AccConfirmModal
        refetch={refetch}
        isOpen={openModalAcc}
        onChangeModal={() => {
          setOpenModalAcc(!openModalAcc);
        }}
        idAdmin={data?.data?.id}
      />
    </>
  );
};

export default LihatInformasiModule;
