import { api } from "@/lib/api";

import { TDetailMajorResponse, TResponseAllMajors } from "@/types/rencana-studi/majors/types";

export const studyPlanMajorsGetRequest = async (
  page: number,
  limit: number,
): Promise<TResponseAllMajors> => {
  const { data } = await api.get(
    `v2/admin/majors?page=${page}&limit=${limit}`
  );
  console.log(page);
  
  console.log(data);
  
  return data;
};

export const studyPlanMajorGetById = async (
  id: string
): Promise<TDetailMajorResponse> => {
  const { data } = await api.get(
    `v2/admin/majors/${id}`
  );
  
  console.log(data);
  
  return data;
};