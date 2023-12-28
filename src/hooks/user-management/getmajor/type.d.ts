export interface TGetMajorResponse {
  code: number;
  status: string;
  message: string;
  data: Daum[];
}

export interface Daum {
  id: string;
  faculty_id: string;
  name: string;
  degree: string;
  major_head_id: string;
  description: string;
  thumbnail: string;
  slug: string;
  subject_count: number;
  total_credit: number;
}
