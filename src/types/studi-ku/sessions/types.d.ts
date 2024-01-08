import { TMetaResponseSingle } from "@/types";

export type TSessionItem = {
  id: string;
  subject_id: string;
  session_no: number;
  type: string;
  created_at: string;
  updated_at: string;
}

export type TSubjectSession = {
  id: string;
  name: string;
  description: string;
  code: string;
  slug: string;
  credit: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
}

export type TSessionsData = {
  subject: TSubjectSession,
  sessions: TSessionItem[];
}

export type TSessionsResponse = TMetaResponseSingle<TSessionsData>;
