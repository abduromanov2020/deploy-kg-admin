import { TMetaResponseSingle } from '@/types';

export type TSubjectItem = {
  id: string;
  name: string;
  description: string;
  code: string;
  duration_hours: string | number;
  credit: string | number;
  thumbnail: string | StaticImageData;
  teacher: {
    id: string;
    full_name: string;
    avatar: string | null;
  };
  major: {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
  };
  slug: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
  total_sessions: number;
  is_available: boolean;
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
  duration_hours: string | number;
  credit: string | number;
  thumbnail: string | StaticImageData;
  teacher: {
    id: string;
    full_name: string;
    avatar: string | null;
  };
  major_id: string;
  major_name: string;
  faculty_id: string;
  faculty_name: string;
  slug: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
  is_available: boolean;
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
  created_at: string;
  updated_at: string;
}

export type TAddSubjectPayload = {
  name: string;
  description: string;
  code: string;
  duration_hours: string | number;
  credit: string | number;
  thumbnail?: string | StaticImageData;
  teacher_id: string;
  major_id: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
};

export type TEditSubjectPayload = {
  name: string;
  description: string;
  code: string;
  duration_hours: string | number;
  credit: string | number;
  thumbnail?: string | StaticImageData;
  teacher_id: string;
  major_id: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
};

export type TAddSubjectResponse = {
  id: string;
  name: string;
  description: string;
  code: string;
  duration_hours: string | number;
  credit: string | number;
  thumbnail?: string | StaticImageData;
  teacher: {
    id: string;
    full_name: string;
    avatar: string | null;
  };
  major: {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
  };
  slug: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
  is_available: boolean;
  created_at: string;
  updated_at: string;
};

export type TEditSubjectResponse = {
  id: string;
  name: string;
  description: string;
  code: string;
  duration_hours: string | number;
  credit: string | number;
  thumbnail?: string | StaticImageData;
  teacher: {
    id: string;
    full_name: string;
    avatar: string | null;
  };
  major: {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
  };
  slug: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  level: string | number;
  semester: string | number;
  is_available: boolean;
  created_at: string;
  updated_at: string;
};

export type TMetaResponseSubject<T> = {
  subjects: Array<T>;
} & TMetaItem;

export type TResponseAllSubjects = TMetaResponseSubject<TSubjectData>;
export type TResponseAllSubjectsByIdMajor = TMetaResponseSubject<TSubjectData>;
export type TDetailsubjectResponse = TMetaResponseSingle<TSubjectItem>;
export type TDetailSubjectResponseById = TMetaResponseSubject<TSubjectDataById>;
