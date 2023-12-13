import { z } from 'zod';

export const ValidationsSchemaTambahQuizDescription = z.object({
  start_date: z.string({
    required_error: 'Tanggal mulai harus diisi.',
  }),
  end_date: z.string({
    required_error: 'Tanggal berakhir harus diisi.',
  }),
  start_time: z.string({
    required_error: 'Waktu mulai harus diisi.',
  }),
  end_time: z.string({
    required_error: 'Waktu berakhir harus diisi.',
  }),
  duration: z.string({
    required_error: 'Durasi harus diisi.',
  }),
  count_question: z.string({
    required_error: 'Jumlah soal harus diisi.',
  }),
});
