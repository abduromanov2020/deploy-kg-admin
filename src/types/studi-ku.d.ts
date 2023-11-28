export type FormFields = {
  cover_title: string;
  cover_description: string;
  video_title_1: string;
  video_link_1: string;
  video_description_1: string;
  [key: string]: string | undefined; // This allows any string as a key
};
