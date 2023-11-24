export const QUIZ_MODULE_BREADCRUMBS = [
  {
    name: 'Studi-Ku',
    link: '/studi-ku',
  },
  {
    name: 'Quiz',
    link: '/studi-ku/quiz',
  },
];

export const TABEL_HEAD_DETAIL_RESPONDEN_QUIZ = [
  'NO',
  'MAHASISWA',
  'TANGGAL PENGERJAAN',
  'WAKTU PENGERJAAN',
  'BENAR',
  'SALAH',
  'NILAI',
];

export const DATA_TABLE_RESPONDENTS_QUIZ = {
  max_page: 3,
  total_data: 25,
  data: [
    {
      no: '1',
      mahasiswa: 'Rizky',
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    },
    {
      no: '2',
      mahasiswa: 'Rizky',
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    },
    {
      no: '3',
      mahasiswa: 'Rizky',
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    },
    {
      no: '4',
      mahasiswa: 'Rizky',
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    },
    {
      no: '5',
      mahasiswa: 'Rizky',
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    },
    // create  20 dummy data
    ...Array.from({ length: 20 }, (_, i) => ({
      no: `${i + 6}`,
      mahasiswa: `Rizky ${i + 6}`,
      tanggal_pengerjaan: '20/02/2021',
      waktu_pengerjaan: '12:00',
      benar: '10',
      salah: '0',
      nilai: '100',
    })),
  ],
};
