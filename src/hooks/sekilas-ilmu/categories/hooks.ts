import { categoriesGetRequest } from '@/hooks/sekilas-ilmu/categories/request';
import { TCategoriesResponse } from '@/types/sekilas-ilmu/types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';


export const useGetCategories = (): UseQueryResult<TCategoriesResponse> => {
  return useQuery({
    queryKey: ['get-categories'],
    queryFn: async () => await categoriesGetRequest(),
    // staleTime: Infinity,
  });
};
