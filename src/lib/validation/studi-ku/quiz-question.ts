import { z } from 'zod';

export const generateDynamicValidationSchema = (count: number) => {
  const dynamicValidationSchema: Record<string, any> = {};

  for (let i = 0; i < count; i++) {
    dynamicValidationSchema[`quiz_question_${i + 1}`] = z
      .string({
        required_error: `Pertanyaan  ${i + 1} harus diisi.`,
      })
      .refine((value) => value.trim() !== '<p></p>', {
        message: `Pertanyaan ${i + 1} harus diisi`,
      });

    dynamicValidationSchema[`quiz_option_${i + 1}_1`] = z
      .string({
        required_error: `Opsi jawaban ${i + 1} A  harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban ${i + 1} A  harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${i + 1}_2`] = z
      .string({
        required_error: `Opsi jawaban ${i + 1} B  harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban ${i + 1} B  harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${i + 1}_3`] = z
      .string({
        required_error: `Opsi jawaban ${i + 1} C  harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban ${i + 1} C  harus diisi  .` });

    dynamicValidationSchema[`quiz_option_${i + 1}_4`] = z
      .string({
        required_error: `Opsi jawaban ${i + 1} D  harus diisi .`,
      })
      .min(1, { message: `Opsi jawaban ${i + 1} D  harus diisi  .` });

    dynamicValidationSchema[`quiz_correct_${i + 1}`] = z
      .string({
        required_error: `Opsi jawaban ${i + 1} benar harus diisi.`,
      })
      .min(1, { message: `Opsi jawaban ${i + 1} benar harus diisi. ` });
  }

  return dynamicValidationSchema;
};

export const validationSchemaQuizQuestion = (index: number) =>
  z.object({
    ...generateDynamicValidationSchema(index),
  });
