import { api } from '@/lib/api';

import {
  TAllEventRequestResponse,
  TEventDetailRequestResponse,
} from '@/types/acara-kampus-gratis/types';

export const GetAllEventRequest = async () // page: number,
// search: string,
// limit: number,
// sort_by: string,
: Promise<TAllEventRequestResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // params: {
    //   page,
    //   search,
    //   limit,
    //   sort_by,
    // },
    url: 'v1/admin/events',
  });
  return data;
};

export const GetEventDetailRequest = async (
  id: string,
): Promise<TEventDetailRequestResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // params: {
    //   page,
    //   search,
    //   limit,
    //   sort_by,
    // },
    url: `v1/admin/events/${id}`,
  });
  return data;
};
