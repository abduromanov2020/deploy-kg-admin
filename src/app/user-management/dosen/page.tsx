'use client';
import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import DosenModule from '@/modules/user-management/dosen';

const DosenPage = () => {
  return (
    <BaseLayout>
      <DosenModule />
    </BaseLayout>
  );
};

export default DosenPage;
