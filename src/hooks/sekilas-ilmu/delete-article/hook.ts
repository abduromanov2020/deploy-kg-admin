import { deleteArticleRequest } from "@/hooks/sekilas-ilmu/delete-article/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteArticle = (): any => {
  return useMutation({
    mutationKey: ['delete-article'],
    mutationFn: async (article_id: string) =>
      await deleteArticleRequest(article_id),
  });
};