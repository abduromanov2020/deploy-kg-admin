import { api } from "@/lib/api";

import { TAddSessionPayload } from "@/types/rencana-studi/sessions/type";
import { TSessionsResponse } from "@/types/studi-ku/sessions/types";

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