import { TMetaResponse } from '@/types';

export type TMeta = {
  meta: {
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TStudyPlanRequest = {
  id: string;
  student_id: string;
  student_name: string;
  subject_id: string;
  subject_name: string;
  subject_semester: number;
  status: string;
  national_student_number: string;
  teacher_name: string;
  created_at: string;
  updated_at: string;
};

export type TAllStudyplanRequestResponse = TMetaResponse<TStudyPlanRequest> &
  TMeta;
