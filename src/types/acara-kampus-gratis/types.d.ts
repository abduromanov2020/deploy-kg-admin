export type TCoverAcara = {
  event_name: string;
  price: number;
  date: string;
  time: string;
  benefit: string;
  thumbnail: File;
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
