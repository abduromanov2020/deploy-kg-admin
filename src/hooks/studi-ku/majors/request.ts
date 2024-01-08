import { api } from "@/lib/api";

import { TMajorResponse } from "@/types/studi-ku/majors/types";

export const getAllMajors = async (
): Promise<TMajorResponse> => {
  const { data } = await api.get(`v2/admin/majors`);

  return data;
};