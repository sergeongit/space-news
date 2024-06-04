import {ArticleInterface} from "./article.interface";

export interface SpaceNewsResponseInterface {
  count: number
  next: string
  previous: any
  results: ArticleInterface[]
}
