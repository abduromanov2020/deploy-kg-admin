import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import MahasiswaModule from '@/modules/user-management/mahasiswa';

const MahasiswaPage = () => {
  return (
    <>
      <BaseLayout>
        <MahasiswaModule />
      </BaseLayout>
    </>
  );
};

export default MahasiswaPage;
