import { z } from 'zod';

export const ValidationsSchemaTambahQuiz = z.object({
  title: z.string().min(1, { message: 'Judul tidak boleh kosong' }),
  duration: z.string().min(1, { message: 'Durasi tidak boleh kosong' }),
});

export const ValidationsSchemaEditQuiz = z.object({
  title: z.string().min(1, { message: 'Judul tidak boleh kosong' }),
  duration: z.string().min(1, { message: 'Durasi tidak boleh kosong' }),
});

export const ValidationsSchemaEditSoal = z.object({
  question: z.string().min(1, { message: 'Pertanyaan tidak boleh kosong' }),
  option_a: z.string().min(1, { message: 'Pilihan A tidak boleh kosong' }),
  option_b: z.string().min(1, { message: 'Pilihan B tidak boleh kosong' }),
  option_c: z.string().min(1, { message: 'Pilihan C tidak boleh kosong' }),
  option_d: z.string().min(1, { message: 'Pilihan D tidak boleh kosong' }),
  option_e: z.string().min(1, { message: 'Pilihan E tidak boleh kosong' }),
  answer: z.string().min(1, { message: 'Jawaban tidak boleh kosong' }),
});