import { z } from 'zod';

// export type TCoverAcara = {
//   event_name: string;
//   price: number;
//   date: string;
//   time: string;
//   benefit: string;
//   thumbnail: File;
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
    thumbnail: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.',
      )
      .refine((files: File[]) => {
        // console.log(files);
        return files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE;
      }, 'Ukuran maksimun adalah 3mb.')
      .refine(
        (files: File[]) => ACCEPTED_MEDIA_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, .png, dan .webp',
      ),
    // thumbnail: z.array(
    //   z
    //     .any()
    //     .refine(
    //       (files: File) => files !== undefined && files?.size <= MAX_FILE_SIZE,
    //       'Ukuran maksimum adalah 3mb.',
    //     )
    //     .refine(
    //       (files: File) => ACCEPTED_MEDIA_TYPES.includes(files?.type),
    //       'hanya menerima .jpg, .jpeg, .png, .webp, dan .mp4.',
    //     ),
    //   { required_error: 'Harus ada thumbnail yang di upload.' },
    // ),
  });

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
export const ValidationSchemaDetailEvent = () =>
  z.object({
    ticket_type: z
      .string({
        required_error: 'Tipe pemesanan tiket harus diisi.',
      })
      .min(1, { message: 'Nama acara terlalu pendek. ' }),
    reservation_date_end: z.string({
      required_error: 'Batas tanggal pemesanan tiket harus diisi.',
    }),
    reservation_time_end: z.string({
      required_error: 'Batas waktu pemesanan tiket harus diisi.',
    }),
    location: z.string({
      required_error: 'Lokasi acara harus diisi.',
    }),
    date: z.string({
      required_error: 'Tanggal acara harus diisi.',
    }),
    time: z.string({
      required_error: 'Waktu acara harus diisi.',
    }),
    head_comittee: z
      .string({
        required_error: 'Nama ketua panitia harus diisi.',
      })
      .min(1, { message: 'Nama ketua panitia harus diisi' }),
    comittee_position: z
      .string({
        required_error: 'Jabatan harus diisi.',
      })
      .min(1, { message: 'Jabatan harus diisi' }),
    phone_number: z
      .string({ required_error: 'Nomor telepon harus diisi.' })
      .min(10, {
        message: 'Nomor telepon tidak valid.',
      })
      .refine(
        (val) => {
          if (val === '') return false;
          const num = Number(val);
          return !isNaN(num) && num > 0;
        },
        { message: 'Nomor telepon hanya boleh diisi angka.' },
      ),
    email: z
      .string({ required_error: 'Email harus diisi' })
      .email({ message: 'Email tidak valid.' }),
    description: z
      .string({
        required_error: 'Deskripsi acara harus diisi.',
      })
      .min(1, { message: 'Deskripsi acara harus diisi' }),
  });
