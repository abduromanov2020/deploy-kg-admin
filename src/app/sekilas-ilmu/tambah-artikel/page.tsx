import { Metadata } from 'next';
import React from 'react';

import TambahArtikelModule from '@/modules/sekilas-ilmu/tambah-artikel/module';

export const metedata: Metadata = {
  title: 'Tambah Artikel',
};

const TambahArtikelPage = () => {
  return <TambahArtikelModule />;
};

export default TambahArtikelPage;
