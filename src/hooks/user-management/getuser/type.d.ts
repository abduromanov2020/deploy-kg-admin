export interface TUserDataResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  users: User[];
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}

export interface User {
  id: string;
  full_name: string;
  avatar_id?: number;
  created_at: string;
  updated_at: string;
  status: string;
  role: string;
  major?: string;
  faculty?: string;
}
