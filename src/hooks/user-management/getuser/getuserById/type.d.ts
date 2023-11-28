export interface TUserDataByIdResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  email: string;
  full_name: string;
  avatar_id: number;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  role: string;
  role_id: string;
  semester: number;
  major: string;
  faculty: string;
  status: string;
  lecturer: string;
  gpa: string;
  total_credits_accumulated: number;
  total_credits_finished: number;
}
