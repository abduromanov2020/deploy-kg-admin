import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  facultyRequest,
  getDocumentByModuleId,
  getModulesBySessionId,
  getVideoByModuleId,
  majorRequest,
  subjectRequest,
} from '@/hooks/studi-ku/modul/request';

import { TMetaErrorResponse } from '@/types';
import {
  TDocumentResponse,
  TFacultyDataResponse,
  TItemMajorDataResponse,
  TItemSubjectDataResponse,
  TModulesDataResponse,
  TVideoResponse,
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

export const useGetModulesBySessionId = (
  subjectId: string,
  sessionId: string,
): UseQueryResult<TModulesDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-modules-by-session-id', subjectId, sessionId],
    queryFn: async () => await getModulesBySessionId(subjectId, sessionId),
  });
}

export const useGetVideoByModuleId = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseQueryResult<TVideoResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-video-by-module-id', subjectId, sessionId, moduleId],
    queryFn: async () => await getVideoByModuleId(subjectId, sessionId, moduleId),
  });
}

export const useGetDocumentByModuleId = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseQueryResult<TDocumentResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-document-by-module-id', subjectId, sessionId, moduleId],
    queryFn: async () => await getDocumentByModuleId(subjectId, sessionId, moduleId),
  });
}


