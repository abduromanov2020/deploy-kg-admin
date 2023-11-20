import { TMetaResponseWithPagination, TMetaResponseSingle } from '@/types';

export interface TPengajuanAdm {
  id: string;
  status: string;
  type: string;
  reason: string;
  action_by: string;
  created_at: string;
  updated_at: string;
  user_administration: UserAdministration;
  biodata: Biodata;
}

export interface UserAdministration {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface Biodata {
  id?: string;
  administration_id?: string;
  full_name?: string;
  gender?: string;
  phone_number?: string;
  birthdate?: string;
  birthplace?: string;
  address?: string;
  last_education?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
}

export type TPengajuanAdmResponse = TMetaResponseWithPagination<TPengajuanAdm>;

export interface TConfirmPengajuanAdm {
  user_id?: string;
  status?: string;
  admin_id?: string;
  role?: string;
  reason?: string;
}

export type TAccPengajuanAdmResponse =
  TMetaResponseSingle<TConfirmPengajuanAdm>;
export type TRejectPengajuanAdmResponse =
  TMetaResponseSingle<TConfirmPengajuanAdm>;

export interface TPengajuanDataDiriAdm {
  id?: string;
  status?: string;
  type?: string;
  reason?: string;
  action_by?: string;
  user_administration?: TUserAdministration;
  biodata?: TBiodata;
  familial?: TFamilial;
  file?: TFile;
}

export interface TFile {
  id?: string;
  administration_id?: string;
  id_card?: string;
  diploma_certificate?: string;
  family_card?: string;
  photo?: string;
  transcript?: string;
  letter_of_recommendation?: string;
}

export interface TUserAdministration {
  id?: string;
  email?: string;
  full_name?: string;
  user_name?: string;
  avatar?: string;
  gender?: string;
  phone_number?: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface TBiodata {
  id?: string;
  administration_id?: string;
  full_name?: string;
  gender?: string;
  phone_number?: string;
  birthdate?: string;
  birthplace?: string;
  address?: string;
  last_education?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
}

export interface TFamilial {
  id: string;
  administration_id: string;
  father_name: string;
  father_occupation: string;
  father_salary: string;
  mother_name: string;
  mother_occupation: string;
  mother_salary: string;
  self_salary: string;
  self_occupation: string;
  live_with: string;
  tuition_payer: string;
}

export type TPengajuanDataDiriAdmResponse =
  TMetaResponseSingle<TPengajuanDataDiriAdm>;
