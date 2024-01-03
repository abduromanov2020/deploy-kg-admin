// import { api } from '@/lib/api';

// import {
//   TDetailMajorResponse,
//   TResponseAllMajors,
// } from '@/types/rencana-studi/majors/types';

// export const subjectsGetRequest = async (
//   page: number,
//   limit: number,
// ): Promise<TResponseAllMajors> => {
//   const { data } = await api.get(`v2/admin/majors?page=${page}&limit=${limit}`);

//   return data;
// };

// export const subjectMajorGetById = async (
//   id: string,
// ): Promise<TDetailMajorResponse> => {
//   const { data } = await api.get(`v2/admin/majors/${id}`);

//   return data;
// };

// export const subjectGetByMajorId = async (
//   id: string,
// ): Promise<TDetailMajorResponse> => {
//   const { data } = await api.get(`v2/admin/majors?faculty_id=${id}`);

//   return data;
// };
