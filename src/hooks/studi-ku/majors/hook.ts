import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getAllMajors } from "@/hooks/studi-ku/majors/request";

import { TMetaErrorResponse } from "@/types";
import { TResponseAllMajors } from "@/types/rencana-studi/majors/types";

export const useGetAllMajors = (
): UseQueryResult<TResponseAllMajors, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-all-majors'],
    queryFn: async () => await getAllMajors(),
  });