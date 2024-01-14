import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

import {
  AddDocumentBulkRequest,
  AddModuleRequest,
  addVideoRequest,
  deleteDocumentRequest,
  deleteModuleRequest,
  deleteVideoRequest,
  editDocumentRequest,
  EditModuleRequest,
  editVideoRequest,
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
  TAddVideoPayload,
  TAddVideoResponse,
  TDocumentResponse,
  TEditDocumentPayload,
  TEditModulePayload,
  TEditModuleResponse,
  TEditVideoPayload,
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

export const useAddDocumentBulk = (
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
      await AddDocumentBulkRequest(payload, subjectId, sessionId, moduleId),
  });
}

export const useEditDocument = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
  documentId: string,
): UseMutationResult<
  TDocumentResponse,
  TMetaErrorResponse,
  TEditDocumentPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['edit-document-module', subjectId, sessionId, moduleId],
    mutationFn: async (payload) =>
      await editDocumentRequest(payload, subjectId, sessionId, moduleId, documentId),
  });
}


export const useDeleteDocument = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
  documentId: string,
): UseMutationResult<
  TDocumentResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-document-module', subjectId, sessionId, moduleId],
    mutationFn: async () =>
      await deleteDocumentRequest(subjectId, sessionId, moduleId, documentId),
  });
}

export const useAddVideo = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseMutationResult<
  TAddVideoResponse,
  TMetaErrorResponse,
  TAddVideoPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-video-module', subjectId, sessionId, moduleId],
    mutationFn: async (payload) =>
      await addVideoRequest(payload, subjectId, sessionId, moduleId),
  });
}

export const useEditVideo = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
  videoId: string,
): UseMutationResult<
  TVideoResponse,
  TMetaErrorResponse,
  TEditVideoPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['edit-video-module', subjectId, sessionId, moduleId],
    mutationFn: async (payload) =>
      await editVideoRequest(payload, subjectId, sessionId, moduleId, videoId),
  });
}

export const useDeleteVideo = (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): UseMutationResult<
  TVideoResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-video-module', subjectId, sessionId, moduleId],
    mutationFn: async (videoId) =>
      await deleteVideoRequest(subjectId, sessionId, moduleId, videoId),
  });
}

