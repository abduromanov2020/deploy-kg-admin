import { TMetaResponse, TMetaResponseSingle } from "@/types"

export type TArticleData = {
  data: TArticleItem[]
  page_size: number
  total_data: number
  current_page: number
  max_page: number
}

export interface TArticleItem {
  id: string
  title: string
  content: string
  thumbnail: string
  slug: string
  views: number
  created_at: string
  author: Author
  category: string
  is_favorite: boolean
  tags: string[]
}

export type TGetAllArticle = {
  data: TArticleItem[]
}

export interface Author {
  full_name: string
}

export type TAllArticleResponse = TMetaResponseSingle<TArticleData>

export type TuseArticleData = {
  getArticleData: TAllArticleResponse;
  setArticleData: (val: TAllArticleResponse) => void;
};