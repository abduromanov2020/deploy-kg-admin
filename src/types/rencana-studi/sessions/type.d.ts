export type TAddSessionItem = {
  title: string;
  description: string;
  sesssion_no: number;
  duration: number;
  is_sync: boolean;
  type: string;
}

export type TAddSessionPayload = {
  sessions: Array<TAddSessionItem>;
}

