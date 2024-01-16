import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";

import { addSessionRequest, sessionsRequest } from "@/hooks/rencana-studi/session/request";

import { TMetaErrorResponse } from "@/types";
import { TAddSessionPayload } from "@/types/rencana-studi/sessions/type";
import { TSessionsResponse } from "@/types/studi-ku/sessions/types";

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