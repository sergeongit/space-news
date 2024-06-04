import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, tap} from "rxjs";
import {SpaceNewsResponseInterface} from "../interfaces/space-news-response.interface";
import {ArticleInterface} from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  private http = inject(HttpClient)
  readonly apiUrl = 'https://api.spaceflightnewsapi.net/v4/'

  getArticlesDataStream = this.http.get<SpaceNewsResponseInterface>(this.apiUrl + 'articles/')
    .pipe(
      delay(1000),
      map((data: SpaceNewsResponseInterface): ArticleInterface[] => data.results)
    )

  getFilteredArticlesByTitle(title?: string): Observable<ArticleInterface[]> {
    return this.http.get<SpaceNewsResponseInterface>(this.apiUrl + `articles/?title_contains=${title}&summary_contains=${title}&limit=20`)
      .pipe(
        delay(800),
        map(data => data.results)
      )
  }
}
