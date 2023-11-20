'use client';
import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import EditDataDosenModule from '@/modules/user-management/dosen/editdata';

const EditDataDosen = () => {
  return (
    <BaseLayout>
      <EditDataDosenModule />
    </BaseLayout>
  );
};

export default EditDataDosen;
