import { z } from 'zod';

export const ValidationsSchemaTambahQuiz = z.object({
  title: z.string().min(1, { message: 'Judul tidak boleh kosong' }),
  duration: z.string().min(1, { message: 'Durasi tidak boleh kosong' }),
});
