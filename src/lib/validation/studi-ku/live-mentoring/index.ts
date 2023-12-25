import { z } from 'zod';

export const ValidationSchemaEventData = z.object({
  jenis_mentoring: z.string({
    required_error: 'Jenis Mentoring harus diisi.',
  }),
  title: z.string({ required_error: 'Judul Mentoring harus diisi.' }),
  session: z.string({
    required_error: 'Sesi mentoring harus diisi.',
  }),
  mentor_name: z.string({
    required_error: 'Nama mentor harus diisi.',
  }),
  meeting_platform: z.string({
    required_error: 'Platform meeting harus diisi.',
  }),
  date: z.date({
    required_error: 'Tanggal mentoring harus diisi.',
  }),
  time: z.string({
    required_error: 'Waktu mentoring harus diisi.',
  }),
  link: z.string({
    required_error: 'Link mentoring harus diisi.',
  }),
  record_link: z.string().optional(),
  description: z.string({
    required_error: 'Deskripsi mentoring harus diisi.',
  }),
});
