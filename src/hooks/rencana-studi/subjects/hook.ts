import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  subjectGetById,
  subjectGetByMajorId,
} from '@/hooks/rencana-studi/subjects/request';

import { TMetaErrorResponse } from '@/types';
import {
  TDetailSubjectResponseById,
  TResponseAllSubjectsByIdMajor,
} from '@/types/rencana-studi/subjects/types';

export const useGetSubjectByMajorId = (
  id: string,
  page: number,
): UseQueryResult<TResponseAllSubjectsByIdMajor, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-get-by-faculty-id', id, page],
    queryFn: async () => await subjectGetByMajorId(id, page),
    enabled: !!id,
  });

export const useGetSubjectById = (
  id: string,
): UseQueryResult<TDetailSubjectResponseById, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-get-by-id', id],
    queryFn: async () => await subjectGetById(id),
  });
