import { AxiosError } from 'axios';

export type TMetaItem = {
  code: number;
  status: string;
  message: string;
};

export type TMetaItemWithPagination = {
  code: number;
  status: string;
  message: string;
  meta: TPaginationMeta;
};

export interface TPaginationMeta {
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}

export type TMetaResponse<T> = {
  data: Array<T>;
} & TMetaItem;

export type TMetaResponseSingle<T> = {
  data: T;
} & TMetaItem;

export type TMetaResponseWithPagination<T> = {
  data: Array<T>;
} & TMetaItemWithPagination;

export type TMetaResponseSingleWithPagination<T> = {
  data: T;
} & TMetaItemWithPagination;

export type TMetaErrorResponse = AxiosError<TMetaItem>;

export interface CustomError extends Error {
  response?: {
    status: number;
  };
}
