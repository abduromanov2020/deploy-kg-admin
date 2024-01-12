import { api } from '@/lib/api';

import {
  TAddFacultyPayload,
  TAddFacultyResponse,
  TDetailFacultiesResponse,
  TResponseAllFaculties,
} from '@/types/rencana-studi/faculties/types';
import { TFacultyDataByIdResponse } from '@/types/rencana-studi/faculties/types';

export const studyPlanFacultiesGetRequest = async (
  page: number,
  limit: number,
  search: string,
): Promise<TResponseAllFaculties> => {
  const { data } = await api.get(
    `v2/admin/faculties?page=${page}&limit=${limit}&search=${search}`,
  );

  return data;
};

export const facultyByIdGetRequest = async (
  id: string | string[],
): Promise<TFacultyDataByIdResponse> => {
  const { data } = await api.get(`v2/admin/faculties/${id}`);

  return data;
};

export const addFacultyRequest = async (
  payload: TAddFacultyPayload | unknown,
): Promise<TAddFacultyResponse> => {
  const { data } = await api({
    method: 'post',
    url: 'v2/admin/faculties',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });

  return data;
};

export const deleteFacultyRequest = async (
  id: string,
): Promise<TDetailFacultiesResponse> => {
  const { data } = await api.delete(`v2/admin/faculties/${id}`);

  return data;
};
