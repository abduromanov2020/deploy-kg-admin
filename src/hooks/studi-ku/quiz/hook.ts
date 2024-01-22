import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";

import { quizAddRequest, quizDeleteRequest, quizDetailRequest, quizParticipantsRequest, quizRequest } from "@/hooks/studi-ku/quiz/request";

import { TMetaErrorResponse } from "@/types";
import { TQuizAddPayload, TQuizDetailResponse, TQuizParticipantsResponse, TQuizResponse } from "@/types/studi-ku/quiz";

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