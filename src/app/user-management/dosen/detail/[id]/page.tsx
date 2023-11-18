'use client';
import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import DetailDosenModule from '@/modules/user-management/dosen/detail';

const DetailDosen = () => {
  return (
    <BaseLayout>
      <DetailDosenModule />
    </BaseLayout>
  );
};

export default DetailDosen;
