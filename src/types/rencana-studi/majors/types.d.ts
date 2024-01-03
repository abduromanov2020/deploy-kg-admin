import { TMetaResponseSingle } from '@/types';

export type TMajorItem = {
  id: string;
  name: string;
  slug: string;
  faculty_id: string;
  faculty_name: string;
  description: string;
  total_subjects: number;
  total_credits: number;
  created_at: string;
};

export type TMajorData = {
  majors: TMajorItem[];
  meta: TMajorMeta;
};

export type TMajorAllData = {
  data: TMajorItem[];
};

export type TMajorMeta = {
  page: number;
  per_page: number;
  page_size: number;
  total_data: number;
};

export type TMetaResponseMajors<T> = {
  majors: Array<T>;
} & TMetaItem;

export type TResponseAllMajors = TMetaResponseMajors<TMajorData>;
export type TDetailMajorResponse = TMetaResponseSingle<TMajorItem>;
