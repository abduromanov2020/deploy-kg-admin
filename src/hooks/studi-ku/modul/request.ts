import { api } from '@/lib/api';

import { FACULTY, MAJOR, SUBJECT } from '@/constant/api';

import {
  TAddModulePayload,
  TAddModuleResponse,
  TDocumentResponse,
  TEditModulePayload,
  TEditModuleResponse,
  TFacultyDataResponse,
  TItemMajorDataResponse,
  TItemSubjectDataResponse,
  TModulesResponse,
  TVideoResponse,
} from '@/types/studi-ku/modul';

export const facultyRequest = async (
  page: number,
  search: string,
): Promise<TFacultyDataResponse> => {
  const { data } = await api.get<TFacultyDataResponse>(
    `${FACULTY}?page=${page}&search=${search}&limit=10`,
  );

  return data;
};

export const majorRequest = async (
  page: number,
  search: string,
): Promise<TItemMajorDataResponse> => {
  const { data } = await api.get<TItemMajorDataResponse>(
    `${MAJOR}?page=${page}&search=${search}&limit=10`,
  );

  return data;
};

export const subjectRequest = async (
  page: number,
  search: string,
): Promise<TItemSubjectDataResponse> => {
  const { data } = await api.get<TItemSubjectDataResponse>(
    `${SUBJECT}?page=${page}&search=${search}&limit=10`,
  );

  return data;
};

export const getModulesBySessionId = async (
  subjectId: string,
  sessionId: string,
): Promise<TModulesResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules`,
  );

  return data;
};

export const getVideoByModuleId = async (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): Promise<TVideoResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules/${moduleId}/videos`,
  );

  return data;
};

export const getDocumentByModuleId = async (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): Promise<TDocumentResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules/${moduleId}/documents`,
  );

  return data;
};

export const AddModuleRequest = async (
  payload: TAddModulePayload,
  subjectId: string,
  sessionId: string,
): Promise<TAddModuleResponse> => {
  const { data } = await api.post(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules`,
    payload,
  );

  return data;
};

export const EditModuleRequest = async (
  id: string,
  payload: TEditModulePayload,
  subjectId: string,
  sessionId: string,
): Promise<TEditModuleResponse> => {
  const { data } = await api.put(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules/${id}`,
    payload,
  );

  return data;
};

export const deleteModuleRequest = async (
  subjectId: string,
  sessionId: string,
  moduleId: string,
): Promise<TModulesResponse> => {
  const { data } = await api.delete(`v2/admin/subjects/${subjectId}/sessions/${sessionId}/modules/${moduleId}`)

  return data;
};