import axios, { AxiosRequestConfig } from 'axios';

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const api = axios.create(apiConfig);

export { api };
