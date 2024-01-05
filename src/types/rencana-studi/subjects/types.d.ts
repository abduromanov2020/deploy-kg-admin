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

export interface TSubjectDataById {
  id: string;
  name: string;
  description: string;
  code: string;
  slug: string;
  credit: number;
  thumbnail: string;
  teacher: Teacher;
  major: Major;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  created_at: string;
  updated_at: string;
}

export interface Teacher {
  id: string;
  full_name: string;
  avatar: string | null;
}

export interface Major {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  head_of_major: Teacher;
  created_at: string;
  updated_at: string;
}

export type TMetaResponseSubject<T> = {
  subjects: Array<T>;
} & TMetaItem;

export type TResponseAllSubjects = TMetaResponseSubject<TSubjectData>;
export type TResponseAllSubjectsByIdMajor = TMetaResponseSubject<TSubjectData>;
export type TDetailsubjectResponse = TMetaResponseSingle<TSubjectItem>;
export type TDetailSubjectResponseById = TMetaResponseSingle<TSubjectDataById>;
