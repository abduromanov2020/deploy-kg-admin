import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  CreateEvent,
  DeleteEvent,
  EditEvent,
  GetAllEventRequest,
  GetEventDetailRequest,
} from '@/hooks/acara-kampus-gratis/request';

import { TMetaErrorResponse } from '@/types';
import {
  TAllEventRequestResponse,
  TEventDetailRequestResponse,
  TPayloadAcara,
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

export const useCreateEvent = (): UseMutationResult<
  TEventDetailRequestResponse,
  TMetaErrorResponse,
  TPayloadAcara,
  unknown
> => {
  return useMutation({
    mutationKey: ['create-discussion'],
    mutationFn: async (payload) => await CreateEvent(payload),
  });
};

export const useEditEvent = (
  id: string,
): UseMutationResult<
  TEventDetailRequestResponse,
  TMetaErrorResponse,
  TPayloadAcara,
  unknown
> => {
  return useMutation({
    mutationKey: ['edit-event'],
    mutationFn: async (payload) => await EditEvent(id, payload),
  });
};

export const useDeleteEvent = (): UseMutationResult<
  TEventDetailRequestResponse,
  TMetaErrorResponse,
  string
> => {
  return useMutation({
    mutationKey: ['delete-event'],
    mutationFn: async (id: string) => await DeleteEvent(id),
  });
};
