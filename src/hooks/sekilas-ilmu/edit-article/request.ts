import { api } from "@/lib/api";

import { TAllArticleResponse, TEditArticlePayload } from "@/types/sekilas-ilmu/types";


export const EditArticleRequest = async (
  id: string,
  payload: TEditArticlePayload
): Promise<TAllArticleResponse> => {
  const { data } = await api({
    method: 'put',
    url: `v1/article/update/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,

  });
console.log(id)
  return data;
};
