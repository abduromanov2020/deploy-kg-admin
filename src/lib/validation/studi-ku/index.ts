import { z } from 'zod';

export const generateDynamicValidationSchema = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`video_title_${i + 1}`] = z
      .string({
        required_error: `A modul title is required for video ${i + 1}.`,
      })
      .min(1, { message: `A modul title is required for video ${i + 1}.` });

    dynamicValidationSchema[`video_link_${i + 1}`] = z
      .string({
        required_error: `A modul link is required for video ${i + 1}.`,
      })
      .min(1, { message: `A modul link is required for video ${i + 1}.` });

    dynamicValidationSchema[`video_description_${i + 1}`] = z
      .string({
        required_error: `A modul description is required for video ${i + 1}.`,
      })
      .min(1, {
        message: `A modul description is required for video ${i + 1}.`,
      });
  }

  return dynamicValidationSchema;
};

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
  video_title_1: z
    .string({
      required_error: 'A modul title is required.',
    })
    .min(1, { message: 'A modul title is required.' }),
  video_link_1: z
    .string({
      required_error: 'A modul title is required.',
    })
    .min(1, { message: 'A modul title is required.' }),
  video_description_1: z
    .string({
      required_error: 'A modul title is required.',
    })
    .min(1, { message: 'A modul title is required.' }),
});
