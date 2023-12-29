import { useQuery,UseQueryResult } from "@tanstack/react-query";

import { studyPlanFacultiesGetRequest } from "@/hooks/rencana-studi/faculties/request";

import { TMetaErrorResponse } from "@/types";
import { TResponseAllFaculties } from "@/types/rencana-studi/faculties/types";

export const useGetStudyPlanFaculties = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TResponseAllFaculties, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['faculties-get', page, limit, search],
    queryFn: async () => await studyPlanFacultiesGetRequest(page, limit,search),
  });