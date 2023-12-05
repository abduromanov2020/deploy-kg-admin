import { TMetaResponseWithPagination } from '@/types';

export type FormFields = {
  cover_title: string;
  cover_description: string;
  video_title_1: string;
  video_link_1: string;
  video_description_1: string;
  [key: string]: string | undefined; // This allows any string as a key
};

export type TFacultyData = {
  id: string;
  name: string;
  thumbnail: string;
  slug: string;
  major_count: string;
};

export type TFacultyDataResponse = TMetaResponseWithPagination<TFacultyData>;

export type TItemMajorData = {
  id: string;
  faculty_id: string;
  name: string;
  degree: string;
  major_head_id: string;
  description: string;
  thumbnail: string;
  slug: string;
  faculty_name: string;
  head_of_major_name: string;
};

export type TItemMajorDataResponse =
  TMetaResponseWithPagination<TItemMajorData>;

export type TItemSubjectData = {
  id: string;
  name: string;
  subject_code: string;
  credit: number;
  thumbnail: string;
  major_name: string;
};

export type TItemSubjectDataResponse =
  TMetaResponseWithPagination<TItemSubjectData>;
