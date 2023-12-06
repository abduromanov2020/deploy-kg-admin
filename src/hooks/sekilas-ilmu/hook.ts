import { articleGetBySlugRequest, articleGetRequest} from "@/hooks/sekilas-ilmu/request";
import { articleDataState } from "@/recoils/sekilas-ilmu/atom";
import { TMetaErrorResponse } from "@/types";
import { TAllArticleResponse, TDetailArticleResponse, TuseArticleData } from "@/types/sekilas-ilmu/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

export const useGetArticle = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TAllArticleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['article-get', page, limit],
    queryFn: async () => await articleGetRequest(page, limit, search),
  });

export const useArticleData = (): TuseArticleData => {
  const [get, set] = useRecoilState(articleDataState);
  return {
    getArticleData: get,
    setArticleData: (val) => set(val),
  };
};

export const useGetArticleBySlug = (
  slug: string
): UseQueryResult<TDetailArticleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['article-get-by-slug', slug],
    queryFn: async () => await articleGetBySlugRequest(slug),
  });