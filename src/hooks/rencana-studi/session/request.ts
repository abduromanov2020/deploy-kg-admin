import { api } from "@/lib/api";

import { TAddSessionPayload, TEditSessionPayload } from "@/types/rencana-studi/sessions/type";
import { TSessionDetailResponse, TSessionsResponse } from "@/types/studi-ku/sessions/types";

export const sessionsRequest = async (
  subject_id: string,
): Promise<TSessionsResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subject_id}/sessions`,
  );

  return data;
}

export const addSessionRequest = async (
  subject_id: string,
  payload: TAddSessionPayload | unknown,
): Promise<TAddSessionPayload> => {
  const { data } = await api.post(
    `v2/admin/subjects/${subject_id}/sessions/bulk`,
    payload,
  )

  return data;
};

export const sessionDetailRequest = async (
  subject_id: string,
  session_id: string,
): Promise<TSessionDetailResponse> => {
  const { data } = await api.get(
    `v2/admin/subjects/${subject_id}/sessions/${session_id}`,
  );

  return data;
}

export const updateSessionRequest = async (
  subject_id: string,
  session_id: string,
  payload: TEditSessionPayload | unknown,
): Promise<TEditSessionPayload> => {
  const { data } = await api.put(
    `v2/admin/subjects/${subject_id}/sessions/${session_id}`,
    payload,
  )

  return data;
}

export const deleteSessionRequest = async (
  subject_id: string,
  session_id: string,
): Promise<TAddSessionPayload> => {
  const { data } = await api.delete(
    `v2/admin/subjects/${subject_id}/sessions/${session_id}`,
  )

  return data;
}