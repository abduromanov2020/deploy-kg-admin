export const REFLEKSI_EKSPLORASI_MODULE_BREADCRUMBS = [
  {
    name: 'Studi-Ku',
    link: '/studi-ku',
  },
  {
    name: 'Refleksi Eksplorasi',
    link: '/studi-ku/refleksi-eksplorasi',
  },
];

export const DATA_REFLEKSI_EKSPLORASI = {
  overview: {
    session: '1',
    questions: `<ol>
    <li>Apa pembelajaran dan kesimpulan kamu dari pertemuan ini</li>
    <li>Apa pembelajaran dan kesimpulan kamu dari pertemuan ini</li>
    <li>Apa pembelajaran dan kesimpulan kamu dari pertemuan ini</li>
  </ol>`,
    total_response: 33,
  },
  summary_answers: [
    // create another 15 dummy data
    ...Array.from({ length: 15 }, (_, i) => ({
      user: {
        name: `Rizky Ramadhan ${i + 1}`,
        avatar: 'https://i.pravatar.cc/300?img=1',
      },
      response: `<ol>
      <li>Dengan pertanyaan ini, Anda dapat merenung tentang aspek-aspek tertentu dari pembelajaran yang benar-benar menarik perhatian Anda dan mungkin bahkan memotivasi Anda untuk lebih lanjut. Diskusi kelompok dan kolaborasi dengan rekan-rekan belajar juga memberikan perspektif yang berbeda, membuka peluang untuk melihat topik dari sudut pandang yang beragam.Identifikasi area atau topik khusus yang ingin Anda eksplorasi lebih lanjut. Mungkin ada subyek tertentu yang memicu minat Anda dan bisa menjadi titik awal untuk pembelajaran berkelanjutan.</li>
      <li>Dengan pertanyaan ini, Anda dapat merenung tentang aspek-aspek tertentu dari pembelajaran yang benar-benar menarik perhatian Anda dan mungkin bahkan memotivasi Anda untuk lebih lanjut. Diskusi kelompok dan kolaborasi dengan rekan-rekan belajar juga memberikan perspektif yang berbeda, membuka peluang untuk melihat topik dari sudut pandang yang beragam.Identifikasi area atau topik khusus yang ingin Anda eksplorasi lebih lanjut. Mungkin ada subyek tertentu yang memicu minat Anda dan bisa menjadi titik awal untuk pembelajaran berkelanjutan.</li>
      <li>Dengan pertanyaan ini, Anda dapat merenung tentang aspek-aspek tertentu dari pembelajaran yang benar-benar menarik perhatian Anda dan mungkin bahkan memotivasi Anda untuk lebih lanjut. Diskusi kelompok dan kolaborasi dengan rekan-rekan belajar juga memberikan perspektif yang berbeda, membuka peluang untuk melihat topik dari sudut pandang yang beragam.Identifikasi area atau topik khusus yang ingin Anda eksplorasi lebih lanjut.Mungkin ada subyek tertentu yang memicu minat Anda dan bisa menjadi titik awal untuk pembelajaran berkelanjutan.</li>
    </ol>`,
    })),
  ],
  list_responses: [
    {
      user: {
        name: 'Rizky Ramadhan',
        avatar: 'https://i.pravatar.cc/300?img=1',
      },
      date_uploaded: '20/02/2021',
    },
    // create another 15 dummy data
    ...Array.from({ length: 15 }, (_, i) => ({
      user: {
        name: `Rizky Ramadhan ${i + 1}`,
        avatar: 'https://i.pravatar.cc/300?img=1',
      },
      date_uploaded: '20/02/2021',
    })),
  ],
};
