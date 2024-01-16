import { api } from '@/lib/api';

import {
  TDetailMajorResponse,
  TResponseAllMajors,
} from '@/types/rencana-studi/majors/types';
import {
  TAddSubjectPayload,
  TAddSubjectResponse,
  TDetailSubjectResponseById,
} from '@/types/rencana-studi/subjects/types';

export const subjectsGetRequest = async (
  page: number,
  limit: number,
): Promise<TResponseAllMajors> => {
  const { data } = await api.get(
    `v2/admin/subjects?page=${page}&limit=${limit}`,
  );

  return data;
};

export const subjectGetById = async (
  id: string,
): Promise<TDetailSubjectResponseById> => {
  const { data } = await api.get(`v2/admin/subjects/${id}`);

  return data;
};

export const subjectGetByMajorId = async (
  id: string,
  page: number,
): Promise<TDetailMajorResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects?major_id=${id}&page=${page}`,
  );

  return data;
};



export const addSubjectRequest = async (
  payload: TAddSubjectPayload | unknown,
): Promise<TAddSubjectResponse> => {
  const { data } = await api({
    method: 'post',
    url: 'v2/admin/subjects',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });

  return data;
};

export const deleteSubjectRequest = async (
  id: string | string[],
): Promise<TDetailSubjectResponseById> => {
  const { data } = await api.delete(`v2/admin/subjects/${id}`);

  return data;
};
