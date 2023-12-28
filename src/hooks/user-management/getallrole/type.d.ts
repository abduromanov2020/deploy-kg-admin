export interface TGetAllRoleResponse {
  code: number;
  status: string;
  message: string;
  data: Daum[];
}

export interface Daum {
  id: string;
  name: string;
}
