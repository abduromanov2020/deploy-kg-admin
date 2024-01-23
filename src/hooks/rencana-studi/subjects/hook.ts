import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  addSubjectRequest,
  deleteSubjectRequest,
  editSubjectRequest,
  subjectGetById,
  subjectGetByMajorId,
} from '@/hooks/rencana-studi/subjects/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAddSubjectPayload,
  TAddSubjectResponse,
  TDetailSubjectResponseById,
  TEditSubjectPayload,
  TEditSubjectResponse,
  TResponseAllSubjectsByIdMajor,
} from '@/types/rencana-studi/subjects/types';

export const useGetSubjectByMajorId = (
  id: string,
  page?: number,
  limit?: number,
): UseQueryResult<TResponseAllSubjectsByIdMajor, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-get-by-major-id', id, page],
    queryFn: async () => await subjectGetByMajorId(id, page, limit),
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

export const useEditSubject = (
  id: string | string[],
): UseMutationResult<
  TEditSubjectResponse,
  TMetaErrorResponse,
  TEditSubjectPayload
> => {
  return useMutation({
    mutationKey: ['edit-subject', id],
    mutationFn: async (payload) => await editSubjectRequest(id, payload),
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
