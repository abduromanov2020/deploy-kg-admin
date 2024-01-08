import { api } from "@/lib/api";

import { TSessionsResponse } from "@/types/studi-ku/sessions/types";


export const getSessionsBySubjectId = async (
  subjectId: string
): Promise<TSessionsResponse> => {
  const { data } = await api.get(`v2/admin/subjects/${subjectId}/sessions`);

  return data;
}