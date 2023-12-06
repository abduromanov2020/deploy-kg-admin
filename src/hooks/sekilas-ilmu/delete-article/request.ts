import { api } from "@/lib/api";
import { TAllArticleResponse } from "@/types/sekilas-ilmu/types";

export const deleteArticleRequest = async (
  article_id: string
): Promise<TAllArticleResponse> => {
  const { data } = await api({
    method: "delete",
    url: `v1/article/delete/${article_id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return data;
};