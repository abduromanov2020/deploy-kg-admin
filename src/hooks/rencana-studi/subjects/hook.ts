import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  sessionsRequest,
  subjectGetById,
  subjectGetByMajorId,
} from '@/hooks/rencana-studi/subjects/request';

import { TMetaErrorResponse } from '@/types';
import {
  TDetailSubjectResponseById,
  TResponseAllSubjectsByIdMajor,
} from '@/types/rencana-studi/subjects/types';
import { TSessionsResponse } from '@/types/studi-ku/sessions/types';

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


export const useGetSessions = (
  subject_id: string,
): UseQueryResult<TSessionsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['sessions-get-by-subject-id', subject_id],
    queryFn: async () => await sessionsRequest(subject_id),
  });