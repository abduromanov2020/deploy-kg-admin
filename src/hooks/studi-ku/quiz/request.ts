import { api } from "@/lib/api";

import { TQuizAddPayload, TQuizAddQuestionPayload, TQuizDetailResponse, TQuizEditPayload, TQuizEditQuestionPayload, TQuizParticipantsResponse, TQuizQuestionDetailResponse, TQuizQuestionResponse, TQuizResponse } from "@/types/studi-ku/quiz";

export const quizRequest = async (
  subjectId: string,
  sessionId: string,
): Promise<TQuizResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes`,
  );

  return data;
}

export const quizDetailRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
): Promise<TQuizDetailResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}`,
  );

  return data;
}

export const quizParticipantsRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  page: number,
): Promise<TQuizParticipantsResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/participants?page=${page}`,
  );

  return data;
}

export const quizAddRequest = async (
  subjectId: string,
  sessionId: string,
  payload: TQuizAddPayload,
): Promise<TQuizAddPayload> => {
  const { data } = await api.post(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes`,
    payload,
  );

  return data;
}

export const quizEditRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  payload: TQuizEditPayload,
): Promise<TQuizEditPayload> => {
  const { data } = await api.put(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}`,
    payload,
  );

  return data;
}

export const quizDeleteRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
): Promise<TQuizResponse> => {
  const { data } = await api.delete(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}`,
  );

  return data;
}

export const quizQuestionsRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
): Promise<TQuizQuestionResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/questions`,
  );

  return data;
}

export const quizQuestionDetailRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  questionId: string,
): Promise<TQuizQuestionDetailResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/questions/${questionId}`,
  );

  return data;
}

export const quizAddQuestionRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  payload: TQuizAddQuestionPayload,
): Promise<TQuizAddQuestionPayload> => {
  const { data } = await api.post(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/questions/bulk`,
    payload,
  );

  return data;
}

export const quizEditQuestionRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  questionId: string,
  payload: TQuizEditQuestionPayload,
): Promise<TQuizEditQuestionPayload> => {
  const { data } = await api.put(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/questions/${questionId}`,
    payload,
  );

  return data;
}

export const quizDeleteQuestionRequest = async (
  subjectId: string,
  sessionId: string,
  quizId: string,
  questionId: string,
): Promise<TQuizQuestionResponse> => {
  const { data } = await api.delete(
    `v2/admin/subjects/${subjectId}/sessions/${sessionId}/quizzes/${quizId}/questions/${questionId}`,
  );

  return data;
}

