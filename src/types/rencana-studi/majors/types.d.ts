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

export type TDetailMajorData = {
  id: string;
  name: string;
  description: string;
  slug: string;
  head_of_major: {
    id: string;
    full_name: string;
    avatar: string | null;
  };
  thumbnail: string;
  degree: string;
  created_at: string;
  updated_at: string;
  faculty_id: string;
  faculty_name: string;
  total_subjects: number;
  total_credits: number;
};

export type TMetaResponseMajors<T> = {
  majors: Array<T>;
} & TMetaItem;

export type TAddMajorPayload = {
  name: string;
  degree: string;
  description: string;
  major_head_id: string;
  faculty_id: string;
  thumbnail: string | StaticImageData;
};

export type TAddMajorResponse = {
  id: string;
  name: string;
  description: string;
  slug: string;
  head_of_major: {
    id: string;
    full_name: string;
    avatar?: string | null;
  };
  thumbnail?: string | StaticImageData;
  degree: string;
  faculty_id: string;
};

export type TEditMajorPayload = {
  name: string;
  degree: string;
  description: string;
  major_head_id: string;
  faculty_id: string;
  thumbnail: string | StaticImageData;
};



export type TResponseAllMajors = TMetaResponseMajors<TMajorData>;
export type TDetailMajorResponse = TMetaResponseSingle<TMajorItem>;
export type TDetailMajorResponseById = TMetaResponseMajors<TDetailMajorData>; // Menambahkan respons get by id
