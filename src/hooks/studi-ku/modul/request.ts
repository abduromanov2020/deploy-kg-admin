import { api } from '@/lib/api';

import { FACULTY, MAJOR, SUBJECT } from '@/constant/api';

import {
  TFacultyDataResponse,
  TItemMajorDataResponse,
  TItemSubjectDataResponse,
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
