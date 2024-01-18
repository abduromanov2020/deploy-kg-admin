import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  addMajorRequest,
  deleteMajorRequest,
  EditMajorRequest,
  majorGetByFacultyId,
  studyPlanMajorGetById,
  studyPlanMajorsGetRequest,
} from '@/hooks/rencana-studi/majors/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAddMajorPayload,
  TAddMajorResponse,
  TDetailMajorResponse,
  TDetailMajorResponseById,
  TEditMajorPayload,
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
  page?: number,
  limit?: number,
): UseQueryResult<TResponseAllMajors, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['major-get-by-faculty-id', id, page, limit],
    queryFn: async () => await majorGetByFacultyId(id),
  });

export const useAddMajor = (): UseMutationResult<
  TAddMajorResponse,
  TMetaErrorResponse,
  TAddMajorPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-major'],
    mutationFn: async (payload) => await addMajorRequest(payload),
  });
};

export const useDeleteMajor = (
  id: string | string[],
): UseMutationResult<
  TDetailMajorResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-major', id],
    mutationFn: async () => await deleteMajorRequest(id),
  });
};

export const useEditMajor = (
  id: string | string[],
): UseMutationResult<
  TAddMajorResponse,
  TMetaErrorResponse,
  TEditMajorPayload
> => {
  return useMutation({
    mutationKey: ['edit-major', id],
    mutationFn: async (payload) => await EditMajorRequest(id, payload),
  });
};
