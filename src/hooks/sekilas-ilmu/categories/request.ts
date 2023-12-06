import { api } from "@/lib/api";
import { TCategoriesResponse } from "@/types/sekilas-ilmu/types";


export const categoriesGetRequest = async (): Promise<TCategoriesResponse> => {
  const { data } = await api.get(`v1/article/categories`);

  return data;
};
