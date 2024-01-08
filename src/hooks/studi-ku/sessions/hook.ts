import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getSessionsBySubjectId } from "@/hooks/studi-ku/sessions/request";

import { TMetaErrorResponse } from "@/types";
import { TResponseAllMajors } from "@/types/rencana-studi/majors/types";

export const useGetSessionsBySubjectId = (
  subjectId: string
): UseQueryResult<TResponseAllMajors, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-sessions-by-subject-id', subjectId],
    queryFn: async () => await getSessionsBySubjectId(subjectId),
    enabled: !!subjectId,
  }
  );
}