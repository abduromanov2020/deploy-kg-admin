import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";

import { addSessionRequest, deleteSessionRequest, sessionDetailRequest, sessionsRequest, updateSessionRequest } from "@/hooks/rencana-studi/session/request";

import { TMetaErrorResponse } from "@/types";
import { TAddSessionPayload, TEditSessionPayload } from "@/types/rencana-studi/sessions/type";
import { TSessionDetailResponse, TSessionsResponse } from "@/types/studi-ku/sessions/types";

export const useGetSessions = (
  subject_id: string,
): UseQueryResult<TSessionsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['sessions-get-by-subject-id', subject_id],
    queryFn: async () => await sessionsRequest(subject_id),
  });

export const useAddSession = (
  subject_id: string,
): UseMutationResult<TAddSessionPayload, TMetaErrorResponse, TAddSessionPayload, unknown> => {
  return useMutation({
    mutationKey: ['sessions-add', subject_id],
    mutationFn: async (payload: TAddSessionPayload) => await addSessionRequest(subject_id, payload),
  });
}

export const useGetSessionDetail = (
  subject_id: string,
  session_id: string,
): UseQueryResult<TSessionDetailResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['sessions-get-detail', subject_id, session_id],
    queryFn: async () => await sessionDetailRequest(subject_id, session_id),
  });

export const useUpdateSession = (
  subject_id: string,
  session_id: string,
): UseMutationResult<TEditSessionPayload, TMetaErrorResponse, TEditSessionPayload, unknown> => {
  return useMutation({
    mutationKey: ['sessions-update', subject_id, session_id],
    mutationFn: async (payload: TEditSessionPayload) => await updateSessionRequest(subject_id, session_id, payload),
  });
}

export const useDeleteSession = (
  subject_id: string,
  session_id: string,
): UseMutationResult<TAddSessionPayload, TMetaErrorResponse, string, unknown> => {
  return useMutation({
    mutationKey: ['sessions-delete', subject_id, session_id],
    mutationFn: async () => await deleteSessionRequest(subject_id, session_id),
  });
}