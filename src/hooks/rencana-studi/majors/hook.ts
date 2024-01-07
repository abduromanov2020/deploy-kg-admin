import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  majorGetByFacultyId,
  studyPlanMajorGetById,
  studyPlanMajorsGetRequest,
} from '@/hooks/rencana-studi/majors/request';

import { TMetaErrorResponse } from '@/types';
import {
  TDetailMajorResponseById,
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
): UseQueryResult<TDetailMajorResponseById, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['major-get-by-id', id],
    queryFn: async () => await studyPlanMajorGetById(id),
  });

export const useGetMajorByFacultyId = (
  id: string,
  page: number,
  limit: number,
): UseQueryResult<TResponseAllMajors, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['major-get-by-faculty-id', id, page, limit],
    queryFn: async () => await majorGetByFacultyId(id),
  });
