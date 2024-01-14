import { TMetaResponse, TMetaResponseSingle } from '@/types';

export type TArticleData = {
  data: TArticleItem[];
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
};

export interface TArticleItem {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  created_at: string;
  author: Author;
  category: string;
  is_favorite: boolean;
  tags: string[];
}

export type TGetAllArticle = {
  data: TArticleItem[];
};

export interface Author {
  full_name: string;
}

export type TCategoriesItem = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type TCreateArticlePayload = {
  title?: string;
  content?: string;
  category_id?: string;
  thumbnail?: string | StaticImageData;
  tags?: string;
  thumbnail?: string;
};

export type TDeleteArticlePayload = {
  article_id: string;
};

export type TEditArticlePayload = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  category_id?: string;
};

export type TAllArticleResponse = TMetaResponseSingle<TArticleData>;
export type TDetailArticleResponse = TMetaResponseSingle<TArticleItem>;
export type TCategoriesResponse = TMetaResponse<TCategoriesItem>;

export type TuseArticleData = {
  getArticleData: TAllArticleResponse;
  setArticleData: (val: TAllArticleResponse) => void;
};
