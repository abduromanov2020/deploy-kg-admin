import { api } from "@/lib/api";
import { TCreateArticlePayload } from "@/types/sekilas-ilmu/types";

export const createArticleRequest = async (
  payload: TCreateArticlePayload | unknown
): Promise<TCreateArticlePayload> => {
  const { data } = await api({
    method: 'post',
    url: 'v1/article/create',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};
