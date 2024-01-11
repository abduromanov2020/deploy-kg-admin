import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

import {
  AddDocumentRequest,
  AddModuleRequest,
  deleteModuleRequest,
  EditModuleRequest,
  facultyRequest,
  getDocumentByModuleId,
  getModulesBySessionId,
  getVideoByModuleId,
  majorRequest,
  subjectRequest,
} from '@/hooks/studi-ku/modul/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAddDocumentPayload,
  TAddDocumentResponse,
  TAddModulePayload,
  TAddModuleResponse,
  TDocumentResponse,
  TEditModulePayload,
  TEditModuleResponse,
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
};

export const useGetVideoByModuleId = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseQueryResult<TVideoResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-video-by-module-id', subjectId, sessionId, moduleId],
    queryFn: async () =>
      await getVideoByModuleId(subjectId, sessionId, moduleId),
  });
};

export const useGetDocumentByModuleId = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseQueryResult<TDocumentResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-document-by-module-id', subjectId, sessionId, moduleId],
    queryFn: async () =>
      await getDocumentByModuleId(subjectId, sessionId, moduleId),
  });
};

export const useAddModule = (
  subjectId: string,
  sessionId: string,
): UseMutationResult<
  TAddModuleResponse,
  TMetaErrorResponse,
  TAddModulePayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-module', subjectId, sessionId],
    mutationFn: async (payload) =>
      await AddModuleRequest(payload, subjectId, sessionId),
  });
};

export const useEditModule = (
  id: string,
  subjectId: string,
  sessionId: string,
): UseMutationResult<
  TEditModuleResponse,
  TMetaErrorResponse,
  TEditModulePayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['edit-module', subjectId, sessionId, id],
    mutationFn: async (payload) =>
      await EditModuleRequest(id, payload, subjectId, sessionId),
  });
};

export const useDeleteModule = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseMutationResult<
  TModulesDataResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-module', subjectId, sessionId, moduleId],
    mutationFn: async () =>
      await deleteModuleRequest(subjectId, sessionId, moduleId),
  });
}

export const useAddDocumentModule = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseMutationResult<
  TAddDocumentResponse,
  TMetaErrorResponse,
  TAddDocumentPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-document-module', subjectId, sessionId, moduleId],
    mutationFn: async (payload) =>
      await AddDocumentRequest(payload, subjectId, sessionId, moduleId),
  });
}