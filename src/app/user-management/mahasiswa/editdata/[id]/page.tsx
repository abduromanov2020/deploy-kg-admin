import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import EditDataMahasiwaModule from '@/modules/user-management/mahasiswa/editdata';

const EditDataMahasiswa = () => {
  return (
    <BaseLayout>
      <EditDataMahasiwaModule />
    </BaseLayout>
  );
};

export default EditDataMahasiswa;
