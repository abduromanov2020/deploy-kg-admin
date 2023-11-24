export type TTambahQuizDescriptionPayload = {
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  duration: number;
  count_question: number;
};

export type TQuizDataPayload = {
  id: string;
  number: number;
  question: string;
  options: TOptionsQuizData[];
};

type TOptionsQuizData = {
  option: string;
  correct: boolean;
};
