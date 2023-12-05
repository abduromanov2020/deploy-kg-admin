import { createArticleRequest } from "@/hooks/sekilas-ilmu/add-article/request";
import { TMetaErrorResponse } from "@/types";
import { TCreateArticlePayload, TDetailArticleResponse } from "@/types/sekilas-ilmu/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

export const useCreateArticle = (): UseMutationResult<
  TCreateArticlePayload,
  TDetailArticleResponse,
    // TMetaErrorResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['create-article'],
    mutationFn: async (payload) => await createArticleRequest(payload),
  });
};