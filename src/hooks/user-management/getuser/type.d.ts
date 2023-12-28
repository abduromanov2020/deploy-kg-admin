export interface TUserDataResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
  meta: Meta;
}

export interface Data {
  users: User[];
}

export interface User {
  id: string;
  full_name: string;
  avatar_id?: number;
  created_at: string;
  updated_at: string;
  status: string;
  role: string;
  major: any;
  faculty: any;
}

export interface Meta {
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}
