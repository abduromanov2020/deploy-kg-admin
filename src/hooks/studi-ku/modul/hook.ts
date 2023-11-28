import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  facultyRequest,
  majorRequest,
  subjectRequest,
} from '@/hooks/studi-ku/modul/request';

import { TMetaErrorResponse } from '@/types';
import {
  TFacultyDataResponse,
  TItemMajorDataResponse,
  TItemSubjectDataResponse,
} from '@/types/studi-ku/modul';

export const useGetFaculties = (
  page: number,
  search: string,
): UseQueryResult<TFacultyDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-faculties', page, search],
    queryFn: async () => await facultyRequest(page, search),
  });
};

export const useGetMajors = (
  page: number,
  search: string,
): UseQueryResult<TItemMajorDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-majors', page, search],
    queryFn: async () => await majorRequest(page, search),
  });
};

export const useGetSubjects = (
  page: number,
  search: string,
): UseQueryResult<TItemSubjectDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-subjects', page, search],
    queryFn: async () => await subjectRequest(page, search),
  });
};
