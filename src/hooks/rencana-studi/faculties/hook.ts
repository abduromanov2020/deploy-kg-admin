import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  addFacultyRequest,
  deleteFacultyRequest,
  studyPlanFacultiesGetRequest,
} from '@/hooks/rencana-studi/faculties/request';
import { facultyByIdGetRequest } from '@/hooks/rencana-studi/faculties/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAddFacultyPayload,
  TAddFacultyResponse,
  TDetailFacultiesResponse,
  TResponseAllFaculties,
} from '@/types/rencana-studi/faculties/types';
import { TFacultyDataByIdResponse } from '@/types/rencana-studi/faculties/types';

export const useGetStudyPlanFaculties = (
  page?: number,
  limit?: number,
  search?: string,
): UseQueryResult<TResponseAllFaculties, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['faculties-get', page, limit, search],
    queryFn: async () =>
      await studyPlanFacultiesGetRequest(page, limit, search),
  });

export const useGetFacultyById = (
  id: string | string[],
): UseQueryResult<TFacultyDataByIdResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-faculty-detail', id],
    queryFn: async () => await facultyByIdGetRequest(id),
    staleTime: Infinity,
  });
};

export const useAddFaculty = (): UseMutationResult<
  TAddFacultyResponse,
  TMetaErrorResponse,
  TAddFacultyPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-faculty'],
    mutationFn: async (payload) => await addFacultyRequest(payload),
  });
};

export const useDeleteFaculty = (
  id: string,
): UseMutationResult<
  TDetailFacultiesResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-faculties', id],
    mutationFn: async () => await deleteFacultyRequest(id),
  });
};
