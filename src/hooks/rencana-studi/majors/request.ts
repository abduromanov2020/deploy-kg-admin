import { api } from '@/lib/api';

import {
  TAddMajorPayload,
  TAddMajorResponse,
  TDetailMajorResponse,
  TEditMajorPayload,
  TResponseAllMajors,
} from '@/types/rencana-studi/majors/types';

export const studyPlanMajorsGetRequest = async (
  page: number,
  limit: number,
): Promise<TResponseAllMajors> => {
  const { data } = await api.get(`v2/admin/majors?page=${page}&limit=${limit}`);

  return data;
};

export const studyPlanMajorGetById = async (
  id: string,
): Promise<TDetailMajorResponse> => {
  const { data } = await api.get(`v2/admin/majors/${id}`);

  return data;
};

export const majorGetByFacultyId = async (
  id: string,
): Promise<TDetailMajorResponse> => {
  const { data } = await api.get(`v2/admin/majors/${id}`);

  return data;
};

export const addMajorRequest = async (
  payload: TAddMajorPayload | unknown,
): Promise<TAddMajorResponse> => {
  const { data } = await api({
    method: 'post',
    url: 'v2/admin/majors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });

  return data;
};

export const EditMajorRequest = async (
  id: string | string[],
  payload: TEditMajorPayload,
): Promise<TAddMajorResponse> => {
  const { data } = await api({
    method: 'put',
    url: `v2/admin/majors/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};

export const deleteMajorRequest = async (
  id: string | string[],
): Promise<TDetailMajorResponse> => {
  const { data } = await api.delete(`v2/admin/majors/${id}`);

  return data;
};
