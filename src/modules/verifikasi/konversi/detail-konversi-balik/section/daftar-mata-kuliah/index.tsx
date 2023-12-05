import React from 'react';

import { TableDaftarMatkulKonversiBalik } from '@/modules/verifikasi/konversi/components/TableDaftarMatkul-KonversiBalik';

const DaftarMatakuliahSection = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({
    no: i + 1,
    id_matakuliah: `MK-${i}`,
    matakuliah: `Interaksi Manusia dan Komputer`,
    sks: 2,
    matakuliah_asal: `Interaksi Manusia dan Komputer ${i}`,
    sks_asal: 2,
    nilai_akhir: 'A',
  }));
  return (
    <div className='my-3 w-full'>
      <TableDaftarMatkulKonversiBalik data={data} />
    </div>
  );
};

export default DaftarMatakuliahSection;
