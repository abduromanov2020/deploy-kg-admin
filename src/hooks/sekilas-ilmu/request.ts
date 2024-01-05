import { api } from '@/lib/api';

import {
  TAllArticleResponse,
  TDetailArticleResponse,
} from '@/types/sekilas-ilmu/types';

export const articleGetRequest = async (
  page: number,
  limit: number,
  search: string,
  type: string,
): Promise<TAllArticleResponse> => {
  const { data } = await api.get(
    `v1/article/filter?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE&type=${type}`,
  );
  console.log(page);

  console.log(data);

  return data;
};

export const articleGetBySlugRequest = async (
  slug: string,
): Promise<TDetailArticleResponse> => {
  const { data } = await api.get(`v1/article/${slug}`);
  console.log(slug);

  console.log(data);

  return data;
};
