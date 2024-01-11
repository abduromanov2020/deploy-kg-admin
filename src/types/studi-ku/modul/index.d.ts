import { TMetaResponseSingle, TMetaResponseWithPagination } from '@/types';
import { TSubjectSession } from '@/types/studi-ku/sessions/types';

export type FormFields = {
  // cover_title: string;
  // cover_description: string;
  document_title_1: string;
  document_link_1: string;
  document_description_1: string;
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

export type TModuleItem = {
  id: string;
  session_id: string;
  title: string;
  description: string;
  duration: number;
  total_videos: number;
  total_documents: number;
  total_journals: number;
  total_articles: number;
  created_at: string;
  updated_at: string;
};

export type TModulesData = {
  subject: TSubjectSession;
  session: TSessionItem;
  modules: TModuleItem[];
};

export type TModulesResponse = TMetaResponseSingle<TModulesData>;

export type TModulesDataResponse = TMetaResponseSingle<TModulesData>;

export type TVideoModuleItem = {
  id: string;
  module_id: string;
  title: string;
  description: string;
  duration: number;
  video: string;
  created_at: string;
  updated_at: string;
};

export type TVideoData = {
  videos: TVideoModuleItem[];
};

export type TVideoResponse = TMetaResponseSingle<TVideoData>;

export type TDocumentItem = {
  id: string;
  module_id: string;
  title: string;
  duration: string;
  document: string;
  created_at: string;
  updated_at: string;
};

export type TDocumentData = {
  documents: TDocumentItem[];
};

export type TDocumentResponse = TMetaResponseSingle<TDocumentData>;

export interface TAddModuleResponse {
  title: string;
  description: string;
  duration: string;
}

export interface TAddModulePayload {
  title: string;
  description: string;
  duration: string;
}

export interface TEditModuleResponse {
  title: string;
  description: string;
  duration: string;
}

export interface TEditModulePayload {
  title: string;
  description: string;
  duration: string;
}

export interface TAddDocumentPayload {
  title: string;
  duration: string;
  url: string;
}

export interface TAddDocumentResponse {
  title: string;
  duration: string;
  url: string;
}
