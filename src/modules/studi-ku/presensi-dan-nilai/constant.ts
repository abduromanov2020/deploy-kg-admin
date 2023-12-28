export const PRESENSI_DAN_NILAI_BREADCRUMBS = [
  {
    name: 'Studi-Ku',
    link: '/studi-ku',
  },
  {
    name: 'Presensi dan Nilai',
    link: '/studi-ku/presensi-dan-nilai',
  },
];
export const EDIT_PRESENSI_DAN_NILAI_BREADCRUMBS = [
  {
    name: 'Studi-Ku',
    link: '/studi-ku',
  },
  {
    name: 'Presensi dan Nilai',
    link: '/studi-ku/presensi-dan-nilai',
  },
  {
    name: 'Edit Presensi dan Nilai',
    link: '/studi-ku/presensi-dan-nilai/edit',
  },
];

export const HEAD_TABLE_PRESENSI_DAN_NILAI = [
  'NO',
  'ID MAHASISWA',
  'MAHASISWA',
  'TUGAS',
  'QUIZ',
  'KEAKTIFAN',
  'RATA-RATA',
  'REFLEKSI',
  'KEHADIRAN',
  'KETERANGAN',
];

export const DATA_PRESENSI_DAN_NILAI = {
  max_page: 2,
  total_data: 16,
  data: [
    ...Array.from({ length: 15 }, (_, i) => ({
      id_student: `${20000 + i}`,
      name: `Rizky Ramadhan ${i + 1}`,
      // create ternary operator to generate value in data between 0 - 100
      assignment: i % 2 === 0 ? 100 : 0,
      quiz: i % 2 === 0 ? 100 : 0,
      activity: i % 2 === 0 ? 100 : 0,
      average: i % 2 === 0 ? 100 : 0,
      reflection: 'Detail',
      // create ternary operator to generate random attendance
      attendance: i % 2 === 0 ? true : false,
      // create ternary operator to generate random description
      description: i % 2 === 0 ? '...' : 'Sakit',
    })),
  ],
};
