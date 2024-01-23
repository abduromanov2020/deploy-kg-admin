import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";

import { quizAddQuestionRequest, quizAddRequest, quizDeleteQuestionRequest, quizDeleteRequest, quizDetailRequest, quizEditQuestionRequest, quizEditRequest, quizParticipantsRequest, quizQuestionDetailRequest, quizQuestionsRequest, quizRequest } from "@/hooks/studi-ku/quiz/request";

import { TMetaErrorResponse } from "@/types";
import { TQuizAddPayload, TQuizAddQuestionPayload, TQuizDetailResponse, TQuizEditPayload, TQuizEditQuestionPayload, TQuizParticipantsResponse, TQuizQuestionDetailResponse, TQuizQuestionResponse, TQuizResponse } from "@/types/studi-ku/quiz";

export const useQuizRequest = (subjectId: string, sessionId: string): UseQueryResult<TQuizResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-quiz', subjectId, sessionId],
    queryFn: async () => await quizRequest(subjectId, sessionId),
  });
}

export const useQuizDetailRequest = (subjectId: string, sessionId: string, quizId: string): UseQueryResult<TQuizDetailResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-quiz-detail', subjectId, sessionId, quizId],
    queryFn: async () => await quizDetailRequest(subjectId, sessionId, quizId),
  });
}

export const useQuizParticipantsRequest = (subjectId: string, sessionId: string, quizId: string, page: number): UseQueryResult<TQuizParticipantsResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-quiz-participants', subjectId, sessionId, quizId, page],
    queryFn: async () => await quizParticipantsRequest(subjectId, sessionId, quizId, page),
  });
}

export const useQuizAddRequest = (subjectId: string, sessionId: string): UseMutationResult<
  TQuizAddPayload,
  TMetaErrorResponse,
  TQuizAddPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-quiz', subjectId, sessionId],
    mutationFn: async (payload) => await quizAddRequest(subjectId, sessionId, payload),
  });
}

export const useQuizEditRequest = (subjectId: string, sessionId: string, quizId: string): UseMutationResult<
  TQuizEditPayload,
  TMetaErrorResponse,
  TQuizEditPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['edit-quiz', subjectId, sessionId, quizId],
    mutationFn: async (payload) => await quizEditRequest(subjectId, sessionId, quizId, payload),
  });
}

export const useQuizDeleteRequest = (subjectId: string, sessionId: string, quizId: string): UseMutationResult<
  TQuizResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-quiz', subjectId, sessionId, quizId],
    mutationFn: async () => await quizDeleteRequest(subjectId, sessionId, quizId),
  });
}

export const useQuizQuestionRequest = (subjectId: string, sessionId: string, quizId: string): UseQueryResult<TQuizQuestionResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-quiz-question', subjectId, sessionId, quizId],
    queryFn: async () => await quizQuestionsRequest(subjectId, sessionId, quizId),
  });
}

export const useQuizQuestionDetailRequest = (subjectId: string, sessionId: string, quizId: string, questionId: string): UseQueryResult<TQuizQuestionDetailResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-quiz-question-detail', subjectId, sessionId, quizId, questionId],
    queryFn: async () => await quizQuestionDetailRequest(subjectId, sessionId, quizId, questionId),
  });
}

export const useQuizQuestionAddRequest = (subjectId: string, sessionId: string, quizId: string): UseMutationResult<TQuizAddQuestionPayload, TMetaErrorResponse, TQuizAddQuestionPayload, unknown> => {
  return useMutation({
    mutationKey: ['add-quiz-question', subjectId, sessionId, quizId],
    mutationFn: async (payload) => await quizAddQuestionRequest(subjectId, sessionId, quizId, payload),
  });
}

export const useQuizQuestionEditRequest = (subjectId: string, sessionId: string, quizId: string, questionId: string): UseMutationResult<TQuizEditQuestionPayload, TMetaErrorResponse, TQuizEditQuestionPayload, unknown> => {
  return useMutation({
    mutationKey: ['edit-quiz-question', subjectId, sessionId, quizId, questionId],
    mutationFn: async (payload) => await quizEditQuestionRequest(subjectId, sessionId, quizId, questionId, payload),
  });
}

export const useQuizQuestionDeleteRequest = (subjectId: string, sessionId: string, quizId: string, questionId: string): UseMutationResult<TQuizQuestionResponse, TMetaErrorResponse, string, unknown> => {
  return useMutation({
    mutationKey: ['delete-quiz', subjectId, sessionId, quizId, questionId],
    mutationFn: async () => await quizDeleteQuestionRequest(subjectId, sessionId, quizId, questionId),
  });
}