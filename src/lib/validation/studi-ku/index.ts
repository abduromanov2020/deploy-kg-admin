import { z } from 'zod';

export const ValidationSchemaCoverModul = z.object({
  cover_title: z
    .string({
      required_error: 'A modul title is required.',
    })
    .min(1, { message: 'A modul title is required.' }),
  cover_description: z
    .string({
      required_error: 'A modul description is required.',
    })
    .min(1, { message: 'A modul description is required.' })
    .refine((value) => value.trim() !== '<p></p>', {
      message: 'A modul description is required',
    }),
});
