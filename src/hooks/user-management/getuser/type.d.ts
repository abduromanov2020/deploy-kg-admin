export interface TUserDataResponse {
  code: number;
  status: string;
  message: string;
  data: {
    users: [
      {
        id: string;
        full_name: string;
        user_name?: string;
        email: string;
        email_verified_at?: string;
        avatar?: string;
        gender: string | null;
        phone_number: string | null;
        role: string;
        created_at: string;
        updated_at: string;
      },
    ];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
}
