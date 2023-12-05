import { api } from "@/lib/api";
import { TAllArticleResponse } from "@/types/sekilas-ilmu/types";

export const articleGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TAllArticleResponse> => {
  const { data } = await api.get(
    `v1/article/filter?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE`
  );
  console.log(page);
  
  console.log(data);
  
  return data;
};