import { TMetaResponseSingle, TMetaResponseSingleWithPagination } from '@/types';


export type TTambahQuizDescriptionPayload = {
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  duration: number;
  count_question: number;
};

export type TQuizDataPayload = {
  id: string;
  number: number;
  question: string;
  options: TOptionsQuizData[];
};

type TOptionsQuizData = {
  option: string;
  correct: boolean;
};

export type TQuizDataQuestionForm = {
  [key: string]: string;
};

export interface TSubjectQuizItem {
  id: string
  name: string
  description: string
  code: string
  slug: string
  credit: number
  thumbnail: string
  created_at: string
  updated_at: string
}

export interface TSessionQuizItem {
  id: string
  subject_id: string
  title: string
  description: string
  session_no: number
  type: string
  created_at: string
  updated_at: string
}

export interface TQuizItem {
  id: string
  session_id: string
  module_id: string
  title: string
  duration: number
  total_questions: number
}

export interface TQuizData {
  subject: TSubjectQuizItem
  session: TSessionQuizItem
  quizzes: TQuizItem[]
}

export interface Detail {
  duration: number
  total_questions: number
  total_participants: string
}
export interface TDetailQuizSession {
  id: string
  title: string
  description: string
  session_no: number
}

export interface TDetailQuizSubject {
  id: string
  name: string
  description: string
  thumbnail: string
}

export interface TDetailQuizModule {
  id: string
  title: string
  description: string
}

export interface TDetailQuiz {
  duration: number
  total_questions: number
  total_participants: string
}

export interface TDetailQuizData {
  session: TDetailQuizSession
  subject: TDetailQuizSubject
  module: TDetailQuizModule
  detail: TDetailQuiz
}

export interface TQuizParticipantsData {
  participants: TQuizParticipantsItem[]
}

export interface TQuizParticipantsItem {
  id: string
  full_name: string
  avatar?: string
  final_score: string
  total_correct: number
  total_wrong: number
  remaining_attempts: number
  timestamp_taken: any
  timestamp_submitted: any
  timestamp_scored: any
  time_elapsed: number
}

export type TQuizAddPayload = {
  title: string;
  duration: string;
};

export type TQuizEditPayload = {
  title: string;
  duration: string;
};

export interface TQuizAnswerItem {
  id: string
  question_id: string
  answer: string
  is_correct: boolean
}
export interface TQuizQuestionItem {
  id: string
  quiz_id: string
  question: string
  answers: TQuizAnswerItem[]
}

export interface TQuizQuestionData {
  session: TSessionQuizItem
  quiz: TQuizItem
  questions: TQuizQuestionItem[]
}

export interface TQuizAddAnswerItem {
  answer: string
  is_correct: boolean
}

export interface TQuizAddQuestionItem {
  question: string
  answers: TQuizAddAnswerItem[]
}

export interface TQuizAddQuestionPayload {
  questions: TQuizAddQuestionItem[]
}

export interface TQuizEditAnswerItem {
  id: string
  answer: string
  is_correct: boolean
}

export interface TQuizEditQuestionPayload {
  question: string
  answers: TQuizEditAnswerItem[]
}

export interface TQuizQuestionDetailData {
  id: string
  quiz_id: string
  question: string
  answers: TQuizAnswerItem[]
}

export type TQuizResponse = TMetaResponseSingle<TQuizData>
export type TQuizDetailResponse = TMetaResponseSingle<TDetailQuizData>
export type TQuizParticipantsResponse = TMetaResponseSingleWithPagination<TQuizParticipantsData>
export type TQuizQuestionResponse = TMetaResponseSingle<TQuizQuestionData>
export type TQuizQuestionDetailResponse = TMetaResponseSingle<TQuizQuestionDetailData>
