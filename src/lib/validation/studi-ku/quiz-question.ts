import { z } from 'zod';

export const generateDynamicValidationSchema = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`quiz_question_${i + 1}`] = z
      .string({
        required_error: `Pertanyaan harus diisi ${i + 1}.`,
      })
      .refine((value) => value.trim() !== '<p></p>', {
        message: 'Pertanyaan harus diisi',
      });

    dynamicValidationSchema[`quiz_option_${i + 1}_1`] = z
      .string({
        required_error: `Opsi jawaban A harus diisi ${i + 1}.`,
      })
      .min(1, { message: `Opsi jawaban A harus diisi  ${i + 1}.` });

    dynamicValidationSchema[`quiz_option_${i + 1}_2`] = z
      .string({
        required_error: `Opsi jawaban B harus diisi ${i + 1}.`,
      })
      .min(1, { message: `Opsi jawaban B harus diisi  ${i + 1}.` });

    dynamicValidationSchema[`quiz_option_${i + 1}_3`] = z
      .string({
        required_error: `Opsi jawaban C harus diisi ${i + 1}.`,
      })
      .min(1, { message: `Opsi jawaban C harus diisi  ${i + 1}.` });

    dynamicValidationSchema[`quiz_option_${i + 1}_4`] = z
      .string({
        required_error: `Opsi jawaban D harus diisi ${i + 1}.`,
      })
      .min(1, { message: `Opsi jawaban D harus diisi  ${i + 1}.` });

    dynamicValidationSchema[`quiz_correct_${i + 1}`] = z.number({
      required_error: `Opsi jawaban benar harus diisi ${i + 1}.`,
    });
  }

  return dynamicValidationSchema;
};

export const validationSchemaQuizQuestion = (index: number) =>
  z.object({
    ...generateDynamicValidationSchema(index),
  });
