import { api } from "@/lib/api";

import { TResponseAllFaculties } from "@/types/rencana-studi/faculties/types";

export const studyPlanFacultiesGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TResponseAllFaculties> => {
  const { data } = await api.get(
    `v2/admin/faculties?page=${page}&limit=${limit}&search=${search}`
  );
  // console.log(page);
  
  // console.log(data);
  
  return data;
};