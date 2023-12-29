import { api } from '@/lib/api';

import {
  TAllEventRequestResponse,
  TEventDetailRequestResponse,
  TPayloadAcara,
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

export const CreateEvent = async (
  payload: TPayloadAcara,
): Promise<TEventDetailRequestResponse> => {
  const { data } = await api({
    method: 'post',
    url: `/v1/admin/events`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};

export const EditEvent = async (
  id: string,
  payload: TPayloadAcara,
): Promise<TEventDetailRequestResponse> => {
  const { data } = await api({
    method: 'put',
    url: `/v1/admin/events/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};

export const DeleteEvent = async (
  id: string,
): Promise<TEventDetailRequestResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `/v1/admin/events/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
