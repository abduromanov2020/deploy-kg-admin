import { TMetaResponseSingle } from '@/types';

export type TMeta = {
  meta: {
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TEventItem = {
  id: string;
  name: string;
  registration_start_date: string;
  registration_close_date: string;
  date_start: string;
  date_end: string;
  description: string;
  capacity: number;
  thumbnail: string;
  thumbnail_id: string;
  status: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
  price: string;
  location: string;
  contact_person_position: string;
};

export type TCoverAcara = {
  name: string;
  price: string;
  date_start: string;
  date_end: string;
  thumbnail: File | null | undefined;
};

export type TDetailAcara = {
  ticket_type: string;
  reservation_date_end: string;
  reservation_time_end: string;
  location: string;
  date: string;
  time: string;
  head_comittee: string;
  comittee_position: string;
  phone_number: string;
  email: string;
  description: string;
};

export type TAcaraCard = {
  event_name: string;
  dateTime: string;
  description: string;
  status: string;
  capacity: number;
  registered: number;
};

export type TPayloadAcara = {
  name: string;
  price: string;
  date_start: string;
  date_end: string;
  registration_start_date: string;
  registration_close_date: string;
  description: string;
  capacity: string;
  contact_person_name: string;
  contact_person_position: string;
  contact_person_phone: string;
  contact_person_email: string;
  location: string;
  type_order: string;
  type_event: string;
  thumbnail: File | null;
};

export type TPesertaData = {
  name: string;
  email: string;
  phone_number: string;
  status: string;
};

export type TEventsData = {
  events: TEventItem[];
};

// export type TAllEventRequestResponse = TMetaResponse<TEventItem> & TMeta;
export type TAllEventRequestResponse = TMetaResponseSingle<TEventsData> & TMeta;
export type TEventDetailRequestResponse = TMetaResponseSingle<TEventItem>;
export type TEventRequestResponse = TMetaResponseSingle<TPayloadAcara>;
