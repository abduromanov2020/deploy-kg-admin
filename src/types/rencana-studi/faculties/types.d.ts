import { TMetaResponseSingle } from '@/types';

export interface TFacultyDataByIdResponse {
  code: number;
  status: string;
  message: string;
  data: TFacultiesItem;
}

export interface TFacultiesItem {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  total_majors: number;
  faculty_id: string;
  created_at: string;
  updated_at: string;
}

export interface TFacultiesMeta {
  page: number;
  per_page: number;
  page_size: number;
  total_data: number;
}

export interface TFacultiesAllData {
  data: TFacultiesItem[];
}

export type TMetaResponseFaculties<T> = {
  data: {
    faculties: Array<T>;
  };
};

export type TResponseAllFaculties = TMetaResponseFaculties<
  TFacultiesItem,
  TFacultiesMeta
>;
export type TDetailFacultiesResponse = TMetaResponseSingle<TFacultiesItem>;

export interface TEditFacultyResponse {
  name: string;
  thumbnail: string;
  description: string;
}

export interface TEditFacultyPayload {
  name: string;
  thumbnail: string;
  description: string;
}
