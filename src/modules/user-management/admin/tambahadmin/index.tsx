import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';

const TambahAdminModule = () => {
  const ConstantEditDosen = [
    {
      name: 'User Management Admin',
      link: '/user-management/admin',
    },
    {
      name: 'Tambah Admin',
      link: ``,
    },
  ];
  return (
    <>
      <div className='bg-white mb-3 rounded-md'>
        <BreadCrumb items={ConstantEditDosen} className='lg:px-6' />
      </div>
    </>
  );
};

export default TambahAdminModule;
