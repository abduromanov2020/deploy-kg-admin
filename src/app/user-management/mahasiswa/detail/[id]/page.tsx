'use client';
import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import DetailMahasiswaModule from '@/modules/user-management/mahasiswa/detail';

const DetailMahasiswa = () => {
  return (
    <>
      <BaseLayout>
        <DetailMahasiswaModule />
      </BaseLayout>
    </>
  );
};

export default DetailMahasiswa;
