import { z } from 'zod';

// export type TCoverAcara = {
//   event_name: string;
//   price: number;
//   date: string;
//   time: string;
//   benefit: string;
//   thumbnail: File;
// };

// export type TDetailAcara = {
//   ticket_type: string;
//   reservation_date_end: string;
//   reservation_time_end: string;
//   location: string;
//   date: string;
//   time: string;
//   head_comittee: string;
//   comittee_position: string;
//   phone_number: string;
//   email: string;
//   description: string;
// };
const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_MEDIA_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const ValidationSchemaCoverEvent = () =>
  z.object({
    event_name: z
      .string({
        required_error: 'Nama acara harus diisi.',
      })
      .min(1, { message: 'Nama acara terlalu pendek. ' }),
    // price: z
    //   .number({
    //     required_error: 'Biaya harus diisi.',
    //   })
    //   .min(1, { message: 'Biaya harus diisi.' }),
    price: z.string({ required_error: 'Biaya harus diisi.' }).refine(
      (val) => {
        if (val === '') return false;
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      { message: 'Biaya harus berupa angka yang lebih besar dari 0.' },
    ),
    date: z.string({
      required_error: 'Tanggal acara harus diisi.',
    }),
    time: z.string({
      required_error: 'Waktu acara harus diisi.',
    }),
    benefit: z
      .string({
        required_error: 'Manfaat acara harus diisi.',
      })
      .min(1, { message: 'Manfaat acara harus diisi' }),
    // thumbnail: z
    //   .any()
    //   .refine(
    //     (files: File) => files !== undefined && files?.size <= MAX_FILE_SIZE,
    //     'Ukuran maksimum adalah 3mb.',
    //   )
    //   .refine(
    //     (files: File) => ACCEPTED_MEDIA_TYPES.includes(files?.type),
    //     'hanya menerima .jpg, .jpeg, .png, dan .webp.',
    //   ),
    thumbnail: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.',
      )
      .refine((files: File[]) => {
        console.log(files);
        return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
      }, 'Ukuran maksimun adalah 3mb.')
      .refine(
        (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, .png, dan .webp',
      ),
  });
