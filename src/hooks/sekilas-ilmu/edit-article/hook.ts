import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { EditArticleRequest } from '@/hooks/sekilas-ilmu/edit-article/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAllArticleResponse,
  TEditArticlePayload,
} from '@/types/sekilas-ilmu/types';

export const useEditArticle = (
  id: string,
): UseMutationResult<
  TAllArticleResponse,
  TMetaErrorResponse,
  TEditArticlePayload
> => {
  return useMutation({
    mutationKey: ['update-article', id],
    mutationFn: async (payload) => await EditArticleRequest(id, payload),
  });
};
