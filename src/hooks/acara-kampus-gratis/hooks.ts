import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  GetAllEventRequest,
  GetEventDetailRequest,
} from '@/hooks/acara-kampus-gratis/request';

import {
  TAllEventRequestResponse,
  TEventDetailRequestResponse,
} from '@/types/acara-kampus-gratis/types';

export const useGetAllEventRequest = () // page: number,
// search: string,
// limit: number,
// sort_by: string,
: UseQueryResult<TAllEventRequestResponse> =>
  useQuery({
    queryKey: ['get-all-event'],
    queryFn: async () => await GetAllEventRequest(),
  });

export const useGetDetailEventRequest = (
  id: string,
): UseQueryResult<TEventDetailRequestResponse> =>
  useQuery({
    queryKey: ['get-detail-event'],
    queryFn: async () => await GetEventDetailRequest(id),
  });
