import { TMetaResponseSingle } from '@/types';

export type TSubjectItem = {
  id: string;
  name: string;
  description: string;
  code: string;
  slug: string;
  credits: number;
  total_sessions: number;
  major_id: string;
  major_name: string;
  created_at: string;
  updated_at: string;
};

export type TSubjectData = {
  subjects: TSubjectItem[];
  meta: TSubjectMeta;
};

export type TSubjectAllData = {
  data: TSubjectItem[];
};

export type TSubjectMeta = {
  page: number;
  per_page: number;
  page_size: number;
  total_data: number;
};

export type TMetaResponseSubject<T> = {
  subjects: Array<T>;
} & TMetaItem;

export type TResponseAllSubjects = TMetaResponseSubject<TSubjectData>;
export type TDetailsubjectResponse = TMetaResponseSingle<TSubjectItem>;
