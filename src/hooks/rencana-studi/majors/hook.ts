import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  studyPlanMajorGetById,
  studyPlanMajorsGetRequest,
} from '@/hooks/rencana-studi/majors/request';

import { TMetaErrorResponse } from '@/types';
import {
  TDetailMajorResponse,
  TResponseAllMajors,
} from '@/types/rencana-studi/majors/types';

export const useGetStudyPlanMajors = (
  page: number,
  limit: number,
): UseQueryResult<TResponseAllMajors, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['majors-get', page, limit],
    queryFn: async () => await studyPlanMajorsGetRequest(page, limit),
  });

export const useGetStudyPlanMajorById = (
  id: string,
): UseQueryResult<TDetailMajorResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['major-get-by-id', id],
    queryFn: async () => await studyPlanMajorGetById(id),
  });
