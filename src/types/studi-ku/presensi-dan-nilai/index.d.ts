export type TStudiKuPresensiDanNilai = {
  max_page: number;
  total_data: number;
  data: TStudiKuPresensiDanNilaiData[];
};

type StudiKuPresensiDanNilai = {
  id_student: number;
  name: string;
  assignment: number;
  quiz: number;
  activity: number;
  average: number;
  reflection: string;
  attendance: boolean;
  description: string;
};
