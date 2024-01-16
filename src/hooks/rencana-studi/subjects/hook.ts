import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  addSubjectRequest,
  deleteSubjectRequest,
  subjectGetById,
  subjectGetByMajorId,
} from '@/hooks/rencana-studi/subjects/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAddSubjectPayload,
  TAddSubjectResponse,
  TDetailSubjectResponseById,
  TResponseAllSubjectsByIdMajor,
} from '@/types/rencana-studi/subjects/types';

export const useGetSubjectByMajorId = (
  id: string,
  page: number,
): UseQueryResult<TResponseAllSubjectsByIdMajor, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-get-by-major-id', id, page],
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


export const useAddSubject = (): UseMutationResult<
  TAddSubjectResponse,
  TMetaErrorResponse,
  TAddSubjectPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-major'],
    mutationFn: async (payload) => await addSubjectRequest(payload),
  });
};

export const useDeleteSubject = (
  id: string | string[],
): UseMutationResult<
  TDetailSubjectResponseById,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-subject', id],
    mutationFn: async () => await deleteSubjectRequest(id),
  });
};
